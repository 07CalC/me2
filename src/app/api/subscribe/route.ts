import { redis } from '@/lib/redis';
import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const emailSchema = z.string().email();

export async function POST(req: Request) {
  const userAgent = req.headers.get("user-agent");
  const fetchMode = req.headers.get('sec-fetch-mode');
  const fetchSite = req.headers.get('sec-fetch-site');
  const acceptLang = req.headers.get('accept-language');
  const browserRegex = /(Mozilla|Chrome|Gecko|Firefox|AppleWebKit|Opera|Safari)/i;
  if (!browserRegex.test(userAgent || "") || !fetchMode || !fetchSite || !acceptLang) {
    return new NextResponse(JSON.stringify({ message: "Invalid request and fuck you" }), { status: 400 });
  }

  const body = await req.json();
  const email = body.email;
  if (typeof email !== 'string') {
    return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
  }

  const parsed = emailSchema.safeParse(email);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
  }

  try {
    await redis.sAdd('newsletter:emails', parsed.data);
    await resend.emails.send({
      from: 'Vinayak <newsletter@vinm.me>',
      to: parsed.data,
      subject: 'Subscription Confirmation',
      html: `
        <h3>Thank you for subscribing!</h1>
        <p>You will receive updates about new blog posts and other news.</p>
        <p>If this wasn't you, or you want to unsubscribe, click the link below:</p>
        <a href="https://vinm.me/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a>
      `,
      text: `
Thanks for subscribing!
      
      You’ll receive updates whenever I post something new.
      
      To unsubscribe, visit: https://vinm.me/unsubscribe?email=${encodeURIComponent(email)}
`
    })
    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (err) {
    console.error('Error subscribing email:', err);
    return NextResponse.json({ success: false, error: 'Failed to subscribe' }, { status: 500 });
  }
}
