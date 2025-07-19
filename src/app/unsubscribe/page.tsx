import { redis } from "@/lib/redis";




type SearchParams = {
  email: string
}

type props = {
  searchParams: Promise<SearchParams>
}

export default async function UnsubscribePage({ searchParams }: props) {
  const email = (await searchParams).email;

  if (!email) {
    return <div className="text-red-500">Email is required to unsubscribe.</div>;
  }

  try {
    await redis.srem("newsletter:emails", email);
    return <div className="text-green-500">You have been successfully unsubscribed.</div>;
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return <div className="text-red-500">An error occurred while unsubscribing. Please try again later.</div>;
  }
}
