"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to ADMIN
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      replyTo: data.email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact: ${data.firstName} ${data.lastName}`,
      text: `Email: ${data.email}\nDate: ${new Date().toLocaleString()}`,
      html: `<p><strong>Email:</strong> ${data.email}</p><p><strong>Date:</strong> ${new Date().toLocaleString()}</p>`,
    };

    // Email to CONTACT (Confirmation)
    const contactMailOptions = {
      from: process.env.SMTP_USER,
      replyTo: process.env.ADMIN_EMAIL,
      to: data.email,
      subject: "We received your message!",
      text: `Hi ${data.firstName},\n\nThank you for reaching out to VICO. We'll get back to you shortly.\n\nVICO Team`,
      html: `<p>Hi ${data.firstName},</p><p>Thank you for reaching out to VICO. We'll get back to you shortly.</p><p>VICO Team</p>`,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(contactMailOptions),
    ]);

    return { success: true, message: "Message sent successfully!" };
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      error: error.message || "Email failed to send. Please try again.",
    };
  }
}
