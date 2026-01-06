import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

// config/mailer.js

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  connectionTimeout: 10000, // ⏱️ 10 sec
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

export { transporter };
