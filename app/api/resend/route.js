import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API route working",
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "Form received",
      data: body,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}