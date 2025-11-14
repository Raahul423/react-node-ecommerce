import dotenv from 'dotenv'
dotenv.config();
import { transporter } from "../Config/mailer.js";

const sendVerificationEmail = async({ to, token, name, userId })=>{
  const appUrl = process.env.APP_URL.replace(/\/$/, '');
  const verifyUrl = `${appUrl}/auth/verify-email?token=${encodeURIComponent(token)}&id=${userId}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <h2>Verify your email</h2>
      <p>Hi ${name || 'there'},</p>
      <p>Thanks for signing up. Click the button below to verify your email address.</p>
      <p style="text-align:center;">
        <a href="${verifyUrl}" style="display:inline-block;padding:10px 18px;border-radius:6px;text-decoration:none;border:1px solid #2b6cb0;">
          Verify Email
        </a>
      </p>
      <p>If the button doesn't work, copy & paste this link in your browser:</p>
      <p style="font-size:13px;color:#555">${verifyUrl}</p>
      <hr>
      <p style="font-size:12px;color:#999">If you didn't create an account, ignore this email.</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to,
    subject: 'Verify your email',
    html,
  };

  return transporter.sendMail(mailOptions); 
}

export {sendVerificationEmail}
