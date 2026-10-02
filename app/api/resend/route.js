import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return NextResponse.json({ success: true, message: "API route working" });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY missing in environment" },
        { status: 500 }
      );
    }

    const resendClient = new Resend(process.env.RESEND_API_KEY);
    const textBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany/Country: ${company || "Not provided"}\n\nMessage:\n${message}`;

    const { data, error: sendError } = await resendClient.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Anay Infinity <noreply@anayinfinity.com>",
      to: ["ansh@anayinfinity.com"],
      subject: `New Contact Enquiry from ${name}`,
      replyTo: email,
      text: textBody,
      html: `<pre style="white-space:pre-wrap;">${escapeHtml(textBody)}</pre>`,
    });

    if (sendError) {
      return NextResponse.json(
        { success: false, error: sendError.message || "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!", data });
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    return NextResponse.json(
      { success: false, error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
