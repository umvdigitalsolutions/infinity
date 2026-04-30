import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY missing in .env.local" },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        { success: false, error: "RESEND_FROM_EMAIL missing in .env.local" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message, phone } = await req.json();

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: ["ansh@anayinfinity.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || ""}
Message: ${message}
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}