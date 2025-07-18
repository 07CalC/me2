import { createClient } from "redis";


export const redis = await createClient({
  url: process.env.REDIS_URL
}).connect();


export const increamentView = async () => {
  try {
    const currentViews = await redis.get("views");
    const newViews = currentViews ? parseInt(currentViews) + 1 : 1;
    await redis.set("views", newViews.toString());
  }
  catch (error) {
    console.error("Error incrementing views:", error);
  }
}


