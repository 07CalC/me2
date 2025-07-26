import { getAllPost } from "./blog";
import { redis } from "./redis";
import { resend } from "./resend"
const LAST_SENT_BLOG_KEY = "newsletter:lastSent";
const SUBSCRIBERS_SET = "newsletter:emails";

export async function sendNewsLetterIfNewBlog() {
  const lastSend = await redis.get(LAST_SENT_BLOG_KEY);
  const subscribers = await redis.sMembers(SUBSCRIBERS_SET);
  const posts = getAllPost();
  if (posts.length === 0) {
    return;
  }
  const latestPost = posts[0];
  console.log(latestPost)
  if (latestPost.slug === lastSend) {
    return;
  }
  if (subscribers.length === 0) {
    return;
  }

  await Promise.all(subscribers.map((email) => {
    const response = resend.emails.send({
      from: "Vinayak <newsletter@vinm.me>",
      to: email,
      subject: `New Blog Post: ${latestPost.meta.title} - Vinayak`,
      html: `
          <img src=${latestPost.meta.image} alt="${latestPost.meta.title}" style="width: 100%; height: auto; border-radius: 8px;" />
          <h1>${latestPost.meta.title}</h1>
          <p>${latestPost.meta.description}</p>
          <p>Read more at: <a href="https://vinm.me/blog/${latestPost.slug}">https://vinm.me/blog/${latestPost.slug}</a></p>
          <p><a href="https://vinm.me/unsubscribe?email=${encodeURIComponent(email)}">Unsubscribe</a> if you no longer wish to receive these emails.</p>
        `,
      text: `
          New Blog Post: ${latestPost.meta.title} - Vinayak
          ${latestPost.meta.description}
          Read more at: https://vinm.me/blog/${latestPost.slug}
          Unsubscribe if you no longer wish to receive these emails: https://vinm.me/unsubscribe?email=${encodeURIComponent(email)}
  `,
      replyTo: "Vinayak <newsletter@vinm.me>",
    })
    console.log(response.then(res => console.log(res.data!.id)).catch(err => console.error("Error sending email:", err)));
  }))
  console.log(`Sent newsletter for new blog post: ${latestPost.slug}`);
  await redis.set(LAST_SENT_BLOG_KEY, latestPost.slug);
}
