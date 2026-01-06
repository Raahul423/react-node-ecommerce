import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async ({ to, token, name, userId }) => {
  const appUrl = process.env.APP_URL.replace(/\/$/, "");

  const verifyUrl = `${appUrl}/verify-email?token=${encodeURIComponent(
    token
  )}&id=${userId}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height:1.6;">
      <p>Hi ${name || "there"},</p>
      <p>Please verify your email address:</p>
      <p>
        <a href="${verifyUrl}" style="padding:10px 18px;border:1px solid #333;">
          Verify Email
        </a>
      </p>
      <p style="font-size:13px;color:#555">${verifyUrl}</p>
    </div>
  `;

  return resend.emails.send({
    from: process.env.FROM_EMAIL,
    to,
    subject: "Verify your email",
    html,
  });
};

export { sendVerificationEmail };
