import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const sendresetPasswordemail = async ({ to, otp, name }) => {
  const verifycode = `${otp}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <p>Hi ${name || "there"},</p>
      <p>Reset Your Password....</p>
      <p style="text-align:center;">
       <h1>${verifycode}</h1>
      </p>
      <p> Use this OTP to reset your password...</p>
      <hr>
      <p style="font-size:12px;color:#999">If you’ve already reset your password, kindly disregard this email..</p>
    </div>
  `;

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to,
    subject: "Reset Your Password..",
    html,
  });
};

export { sendresetPasswordemail };
