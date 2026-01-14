import nodemailer from "nodemailer";
import { Express } from "express";

// Configure your email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "vedantghubade04@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "", // Use app password, not actual password
  },
});

export function setupEmailRoutes(app: Express) {
  app.post("/api/send-email", async (req, res) => {
    try {
      const { to, name, email, company, phone, subject, message } = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      // Email template
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <h3 style="color: #333;">Subject: ${subject}</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">This email was sent from SumTech Engineering website contact form.</p>
        </div>
      `;

      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "vedantghubade04@gmail.com",
        to: to || "vedantghubade04@gmail.com",
        replyTo: email,
        subject: `[SumTech Contact] ${subject}`,
        html: htmlContent,
      });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });
}
