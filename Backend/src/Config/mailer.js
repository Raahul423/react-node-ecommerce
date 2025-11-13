import dotenv from 'dotenv'
dotenv.config();
import nodemailer from 'nodemailer'

// config/mailer.js

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,        
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  }
});






export {transporter}
