"use server";

import nodemailer from "nodemailer";

type ContactData = {
  email: string;
  message: string;
};

export async function sendContactEmail(formData: ContactData) {
  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error("Email credentials not configured");
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465", 10),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact from ${formData.email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><em>Reply directly to this email to respond to ${formData.email}</em></p>
      `,
      replyTo: formData.email, // Allow direct reply
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: "Message sent successfully!",
    };

  } catch (error) {
    console.error("Contact email error:", error);
    
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}