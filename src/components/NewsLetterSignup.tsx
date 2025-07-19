
'use client';
import { useEffect, useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    localStorage.getItem("isSubscribed") === "true" && setIsSubscribed(true);
  }, [])

  if (isSubscribed) {
    return (
      <div className="w-full mt-8">
        <p className="text-white text-lg font-semibold">You are already subscribed to the newsletter!</p>
      </div>
    )
  }
  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
      localStorage.setItem("isSubscribed", "true");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={subscribe} className="w-full my-4">
      <label className="text-white text-lg font-semibold">Subscribe to my newsletter</label>
      <div className="flex gap-2 mt-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-white/20 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && <p className="text-green-500 mt-2">Thanks for subscribing!</p>}
      {status === "error" && <p className="text-red-500 mt-2">Something went wrong. Try again.</p>}
    </form>
  );
}
