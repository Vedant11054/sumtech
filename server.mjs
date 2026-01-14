import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:8080", "http://localhost:3000"],
}));
app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "vedantghubade04@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

// Email API Route
app.post("/api/send-email", async (req, res) => {
  try {
    const { to, name, email, company, phone, subject, message } = req.body;

    console.log("📬 New email request:", { name, email, subject });

    // Validate input
    if (!name || !email || !subject || !message) {
      console.error("❌ Missing required fields:", { name, email, subject, message });
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
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || "vedantghubade04@gmail.com",
      to: to || "vedantghubade04@gmail.com",
      replyTo: email,
      subject: `[SumTech Contact] ${subject}`,
      html: htmlContent,
    });

    console.log("✅ Email sent successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER || 'vedantghubade04@gmail.com'}`);
});
