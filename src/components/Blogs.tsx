import { getAllPost, Post } from "@/lib/blog";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NewsletterSignup } from "./NewsLetterSignup";




export default function Blogs() {
  const posts = getAllPost();
  const topPosts = posts.slice(0, 3);
  return (
    <>
      <h2 className="text-4xl font-bold text-accent mb-6">(some) Blogs</h2>
      {
        topPosts.map((post: Post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="relative bg-surface pb-8 flex flex-col sm:flex-row gap-y-3"
          >
            {post.meta.image && (
              <img
                src={post.meta.image}
                alt={post.meta.title}
                className="sm:w-1/3 rounded-lg"
              />
            )}

            <div className='flex flex-col sm:w-2/3 gap-y-3'>
              <h3 className="text-3xl px-2 font-semibold text-accent hover:underline">
                {post.meta.title}
              </h3>

              <p className="text-xl px-2">
                {post.meta.description}
              </p>
            </div>

            <span className="sm:absolute bottom-2 right-2 text-2xl bg-accent/30 text-text px-2 py-0.5 rounded">
              {new Date(post.meta.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </Link>
        ))

      }
      <Link href={"/blog"} className="text-2xl font-semibold px-5 flex items-center justify-start hover:underline mt-8">
        view all
        <FaExternalLinkAlt className="inline-block text-2xl ml-4" />
      </Link>
      <NewsletterSignup />

      <div className="border-b border-black dark:border-white w-full my-4" />

    </>
  )
}
