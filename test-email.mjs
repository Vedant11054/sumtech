import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "vedantghubade04@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

console.log("🔍 Testing Gmail connection...");
console.log(`📧 Email User: ${process.env.EMAIL_USER}`);
console.log(`🔑 Email Password: ${process.env.EMAIL_PASSWORD ? "***" : "NOT SET"}`);

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Gmail connection failed:", error);
    process.exit(1);
  } else {
    console.log("✅ Gmail connection successful!");
    console.log("✅ Ready to send emails!");
  }
});
