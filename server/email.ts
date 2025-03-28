import nodemailer, { SentMessageInfo } from 'nodemailer';

// For development and testing purposes, we're using Ethereal Mail
// In production, this would be replaced with a real SMTP service
let transporter: nodemailer.Transporter;

export const initEmailTransport = async () => {
  if (transporter) return transporter;
  
  if (process.env.NODE_ENV === 'production' && process.env.SMTP_HOST) {
    // Real email configuration for production
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Create a test account with Ethereal for development
    const testAccount = await nodemailer.createTestAccount();
    
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    console.log('Test email account credentials:');
    console.log('User:', testAccount.user);
    console.log('Password:', testAccount.pass);
    console.log('Preview URL: https://ethereal.email/login');
  }
  
  return transporter;
};

export const sendConfirmationEmail = async (
  email: string,
  name: string,
  confirmationToken: string
): Promise<{ success: boolean; previewUrl?: string }> => {
  try {
    const mailTransporter = await initEmailTransport();
    
    const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
    const confirmUrl = `${baseUrl}/confirm-email?token=${confirmationToken}`;
    
    const mailOptions = {
      from: '"Bubble Invest" <noreply@bubbleinvest.com>',
      to: email,
      subject: 'Please Confirm Your Email for Bubble Invest Waitlist',
      text: `Hello ${name},\n\nThank you for joining the Bubble Invest waitlist. We're excited to have you as part of our community focused on long-term oriented finance.\n\nPlease confirm your email by clicking the following link:\n${confirmUrl}\n\nThis link will expire in 24 hours.\n\nBest regards,\nThe Bubble Invest Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333333;">
          <h2 style="color: #6F5CE0;">Welcome to Bubble Invest</h2>
          <p>Hello ${name},</p>
          <p>Thank you for joining the Bubble Invest waitlist. We're excited to have you as part of our community focused on long-term oriented finance.</p>
          <p>Please confirm your email by clicking the button below:</p>
          <p style="text-align: center; margin: 30px 0;">
            <a href="${confirmUrl}" style="background-color: #6F5CE0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Confirm Email</a>
          </p>
          <p style="color: #666; font-size: 0.9em;">This link will expire in 24 hours.</p>
          <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
          <p style="word-break: break-all; font-size: 0.8em;">${confirmUrl}</p>
          <p>Best regards,<br>The Bubble Invest Team</p>
        </div>
      `,
    };
    
    const info = await mailTransporter.sendMail(mailOptions);
    
    // For development environments, return the Ethereal preview URL
    let previewUrl: string | undefined = undefined;
    if (process.env.NODE_ENV !== 'production') {
      // Handle the preview URL manually with the message ID
      previewUrl = `https://ethereal.email/message/${info.messageId}`;
      console.log('Preview URL:', previewUrl);
    }
    
    return { 
      success: true,
      previewUrl 
    };
    
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false };
  }
};