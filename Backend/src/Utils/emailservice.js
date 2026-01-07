import dotenv from "dotenv";
dotenv.config();

import * as brevo from "@getbrevo/brevo";

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

  const apiInstance = new brevo.TransactionalEmailsApi();

  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_PASS
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
