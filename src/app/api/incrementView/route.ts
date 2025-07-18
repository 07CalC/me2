import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";




export async function GET(req: Request) {
  const userAgent = req.headers.get("user-agent");
  const fetchMode = req.headers.get('sec-fetch-mode');
  const fetchSite = req.headers.get('sec-fetch-site');
  const acceptLang = req.headers.get('accept-language');
  const browserRegex = /(Mozilla|Chrome|Gecko|Firefox|AppleWebKit|Opera|Safari)/i;
  if (!browserRegex.test(userAgent || "") || !fetchMode || !fetchSite || !acceptLang) {
    return new NextResponse(JSON.stringify({ message: "Invalid request and fuck you" }), { status: 400 });
  }

  await redis.incr("views")
  return new NextResponse(JSON.stringify({ message: "done" }), { status: 200 })
}
