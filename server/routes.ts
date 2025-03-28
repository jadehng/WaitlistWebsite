import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { generateToken } from "./util";
import { sendConfirmationEmail } from "./email";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for submitting waitlist entries
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body using the schema
      const validatedEntry = insertWaitlistEntrySchema.safeParse(req.body);

      if (!validatedEntry.success) {
        const validationError = fromZodError(validatedEntry.error);
        return res.status(400).json({
          message: validationError.message,
        });
      }

      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedEntry.data.email);
      if (existingEntry) {
        if (!existingEntry.isConfirmed) {
          // If email exists but not confirmed, resend confirmation email
          const confirmationToken = generateToken();
          const emailResult = await sendConfirmationEmail(
            existingEntry.email,
            existingEntry.name,
            confirmationToken
          );

          if (emailResult.success) {
            // Update the confirmation token for the existing entry
            const updatedEntry = await storage.updateConfirmationToken(existingEntry.id, confirmationToken);
            return res.status(202).json({
              message: "Confirmation email resent. Please check your inbox.",
              previewUrl: emailResult.previewUrl
            });
          } else {
            return res.status(500).json({
              message: "Failed to send confirmation email. Please try again later.",
            });
          }
        } else {
          // Already confirmed
          return res.status(409).json({
            message: "This email is already confirmed on the waitlist",
          });
        }
      }

      // Generate a confirmation token
      const confirmationToken = generateToken();
      
      // Store the waitlist entry with confirmation token
      const newEntry = await storage.createWaitlistEntry(validatedEntry.data, confirmationToken);
      
      // Send confirmation email
      const emailResult = await sendConfirmationEmail(
        newEntry.email,
        newEntry.name,
        confirmationToken
      );

      if (!emailResult.success) {
        return res.status(500).json({
          message: "Failed to send confirmation email. Please try again later.",
        });
      }
      
      return res.status(201).json({
        message: "Successfully added to the waitlist. Please check your email to confirm your registration.",
        entry: newEntry,
        previewUrl: emailResult.previewUrl
      });
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({
        message: "An unexpected error occurred while processing your request",
      });
    }
  });

  // Confirmation endpoint
  app.get("/api/confirm-email", async (req: Request, res: Response) => {
    try {
      const { token } = req.query;
      
      if (!token || typeof token !== "string") {
        return res.status(400).json({
          message: "Invalid confirmation token",
        });
      }
      
      const entry = await storage.confirmWaitlistEntry(token);
      
      if (!entry) {
        return res.status(404).json({
          message: "Invalid or expired confirmation token",
        });
      }
      
      return res.status(200).json({
        message: "Email confirmed successfully. Thank you for joining our waitlist!",
        entry,
      });
    } catch (error) {
      console.error("Error confirming email:", error);
      return res.status(500).json({
        message: "An unexpected error occurred while confirming your email",
      });
    }
  });
  
  // Serve confirmation page
  app.get("/confirm-email", (req, res) => {
    const indexPath = path.resolve('./client/dist/index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.redirect('/');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
