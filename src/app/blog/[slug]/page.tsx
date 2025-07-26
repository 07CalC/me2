import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug, getAllPost } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/MDXComponents'
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>,
}

export async function generateStaticParams() {
  const posts = getAllPost();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(params: Props): Promise<Metadata> {
  const slug = (await params.params).slug
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.image ? [post.meta.image] : [],
      type: 'article',
      publishedTime: new Date(post.meta.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.image ? [post.meta.image] : [],
    },
  };
}

export default async function BlogPostPage(params: Props) {
  const slug = (await params.params).slug
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen flex items-start justify-center font-mono text-base leading-relaxed">
      <article className="mx-auto gap-y-3 rounded-lg py-4 px-4 max-w-5xl text-start ">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{post.meta.title}</h1>

        <p className="text-2xl mb-4 text-pink">{post.meta.description}</p>
        <div className="text-lg text-text mb-8 flex flex-col items-start gap-2">

          <div className="flex flex-wrap gap-2">
            {post.meta.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xl bg-accent2/10 text-accent2 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span className="bg-bg p-2 text-2xl rounded-lg">
            {new Date(post.meta.date).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        {post.meta.image && (
          <div className="mb-8">
            <img
              src={post.meta.image}
              alt={post.meta.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className='h-1 bg-white w-full mb-8' />

        <MDXRemote
          source={post.content}
          components={MDXComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight]
            }
          }}
        />
      </article>
    </main>
  );
}
