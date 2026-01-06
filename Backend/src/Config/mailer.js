
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: "false",
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
  connectionTimeout: 10000, // ⏱️ 10 sec
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

export { transporter }
