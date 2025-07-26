import { sendNewsLetterIfNewBlog } from "@/lib/newsletter";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.NEWSLETTER_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  await sendNewsLetterIfNewBlog();
  return NextResponse.json({ message: "Newsletter sent successfully" });
}
