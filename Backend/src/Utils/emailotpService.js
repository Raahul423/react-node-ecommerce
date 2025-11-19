import dotenv from 'dotenv'
dotenv.config();
import { transporter } from "../Config/mailer.js";

const sendresetPasswordemail = async({ to, otp, name})=>{
  const verifycode = `${otp}`

  const html = `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <p>Hi ${name || 'there'},</p>
      <p>Reset Your Password....</p>
      <p style="text-align:center;">
       <h1>${verifycode}</h1>
      </p>
      <p> Use this code to reset your password...</p>
      <hr>
      <p style="font-size:12px;color:#999">If you’ve already reset your password, kindly disregard this email..</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to,
    subject: 'Reset Your Password..',
    html,
  };

  return transporter.sendMail(mailOptions); 
}

export {sendresetPasswordemail}
