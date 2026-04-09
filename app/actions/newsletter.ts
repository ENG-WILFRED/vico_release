"use server";

import nodemailer from "nodemailer";

export async function subscribeNewsletter(email: string) {
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
      to: process.env.ADMIN_EMAIL,
      subject: `New Newsletter Subscriber`,
      text: `Email: ${email}\nDate: ${new Date().toLocaleString()}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Date:</strong> ${new Date().toLocaleString()}</p>`,
    };

    // Email to SUBSCRIBER
    const subscriberMailOptions = {
      from: process.env.SMTP_USER,
      replyTo: process.env.ADMIN_EMAIL,
      to: email,
      subject: "You're subscribed to VICO!",
      text: `Thank you for subscribing to VICO newsletter.\n\nVICO launches on April 17, 2026.\n\nSee you on the court!\n\nVICO Team`,
      html: `<p>Thank you for subscribing to VICO newsletter.</p><p>VICO launches on <strong>April 17, 2026</strong>.</p><p>See you on the court!</p><p>VICO Team</p>`,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(subscriberMailOptions),
    ]);

    return { success: true, message: "Subscribe successful! Check your email." };
  } catch (error: any) {
    console.error("Error subscribing to newsletter:", error);
    return {
      success: false,
      error: error.message || "Subscription failed. Please try again.",
    };
  }
}
