import { Metadata } from 'next';
import { getAllPost, Post } from '../../lib/blog';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/NewsLetterSignup';


export const metadata: Metadata = {
  title: 'Blog | Vinayak',
  description: 'Blog posts about my experiences, insights, and thoughts on various topics.',
}

export default async function BlogPage() {
  const posts = getAllPost();
  return (
    <section className="mx-auto py-8 px-3 sm:px-80 justify-center items-center gap-y-10 flex flex-col">
      <NewsletterSignup />
      <div className="flex flex-col gap-6 mt-8">
        {posts.map((post: Post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="relative bg-surface pb-8 flex flex-col sm:flex-row gap-y-3 border-b border-dashed border-black dark:border-white "
          >
            {post.meta.image && (
              <img
                src={post.meta.image}
                alt={post.meta.title}
                className="sm:w-1/3 rounded-lg"
              />
            )}

            <div className='flex sm:w-2/3 flex-col gap-y-3'>
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
        ))}
      </div>
    </section >
  );
}
