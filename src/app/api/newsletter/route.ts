import { sendNewsLetterIfNewBlog } from "@/lib/newsletter";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
  console.log(req.headers)

  if (req.headers.get("authorization") !== `Bearer ${process.env.NEWSLETTER_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  await sendNewsLetterIfNewBlog();
  return NextResponse.json({ message: "Newsletter sent successfully" });
}
