import dotenv from "dotenv";
dotenv.config();

import {transporter} from "../Config/mailer"

const sendVerificationEmail = async ({ to, token, name, userId }) => {
  const appUrl = process.env.APP_URL.replace(/\/$/, "");

  const verifyUrl = `${appUrl}/verify-email?token=${encodeURIComponent(
    token
  )}&id=${userId}`;

  const html = `
    <div style="font-family: Arial, sans-serif;">
      <p>Hi ${name || "there"},</p>
      <p>Please verify your email:</p>
      <a href="${verifyUrl}">Verify Email</a>
    </div>
  `;

  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: "Verify your email",
    html,
  });

  console.log("✅ Email sent:", info.messageId);
};

export { sendVerificationEmail };

