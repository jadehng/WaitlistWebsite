import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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
        return res.status(409).json({
          message: "This email is already on the waitlist",
        });
      }

      // Store the waitlist entry
      const newEntry = await storage.createWaitlistEntry(validatedEntry.data);
      
      return res.status(201).json({
        message: "Successfully added to the waitlist",
        entry: newEntry,
      });
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({
        message: "An unexpected error occurred while processing your request",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
