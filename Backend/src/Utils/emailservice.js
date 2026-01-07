import dotenv from "dotenv";
dotenv.config();

import * as brevo from "@getbrevo/brevo";

const sendVerificationEmail = async ({ to, token, name, userId }) => {
  const appUrl = process.env.APP_URL.replace(/\/$/, "");

  const verifyUrl = `${appUrl}/verify-email?token=${encodeURIComponent(
    token
  )}&id=${userId}`;

  const html = `
   <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:30px;">
  <div style="max-width:520px; margin:auto; background:#ffffff; padding:30px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08);">

    <h2 style="color:#333; margin-top:0;">Verify your email</h2>

    <p style="color:#555; font-size:15px;">
      Hi <strong>${name || "there"}</strong>,
    </p>

    <p style="color:#555; font-size:15px;">
      Thanks for signing up! Please confirm your email address by clicking the button below.
    </p>

    <div style="text-align:center; margin:30px 0;">
      <a 
        href="${verifyUrl}"
        style="
          background-color:#2563eb;
          color:#ffffff;
          padding:12px 24px;
          text-decoration:none;
          font-size:15px;
          border-radius:6px;
          display:inline-block;
        "
      >
        Verify Email
      </a>
    </div>

    <p style="color:#777; font-size:13px;">
      If the button doesn’t work, copy and paste this link into your browser:
    </p>

    <p style="font-size:13px; word-break:break-all; color:#2563eb;">
      ${verifyUrl}
    </p>

    <hr style="border:none; border-top:1px solid #eee; margin:25px 0;" />

    <p style="font-size:12px; color:#999;">
      If you did not create this account, you can safely ignore this email.
    </p>

  </div>
</div>

  `;

  const apiInstance = new brevo.TransactionalEmailsApi();

  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
  );

  const response = await apiInstance.sendTransacEmail({
    subject: "Verify your email",
    sender: {
      email: process.env.FROM_EMAIL,
      name: "Demo App e-commerce",
    },
    to: [{ email: to }],
    htmlContent: html,
  });

  console.log("✅ Demo email sent:", response?.messageId || "OK");
};

export { sendVerificationEmail };
