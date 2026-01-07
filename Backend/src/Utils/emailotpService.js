import dotenv from "dotenv";
dotenv.config();

import * as brevo from "@getbrevo/brevo";

const sendresetPasswordemail = async ({ to, otp, name }) => {
  const html = `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <p>Hi ${name || "there"},</p>
      <p>You requested to reset your password.</p>

      <p style="text-align:center; margin:20px 0;">
        <span style="
          display:inline-block;
          font-size:32px;
          letter-spacing:6px;
          font-weight:bold;
          padding:10px 20px;
          border:1px dashed #333;
        ">
          ${otp}
        </span>
      </p>

      <p>Use this OTP to reset your password.</p>
      <p><b>This OTP will expire in 5 minutes.</b></p>

      <hr>
      <p style="font-size:12px;color:#999">
        If you didn’t request a password reset, please ignore this email.
      </p>
    </div>
  `;

  const apiInstance = new brevo.TransactionalEmailsApi();

  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_PASS
  );

  await apiInstance.sendTransacEmail({
    subject: "Reset your password (OTP)",
    sender: {
      email: process.env.FROM_EMAIL,
      name: "Demo App",
    },
    to: [{ email: to }],
    htmlContent: html,
  });

  console.log("✅ OTP email sent to:", to);
};

export { sendresetPasswordemail };
