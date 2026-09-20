import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import SiteHeader from "@/components/SiteHeader";
import SiteBackground from "@/components/SiteBackground";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllPosts();
  const exists = posts.some((p) => p.slug === slug);

  if (!exists) notFound();

  const post = await getPostBySlug(slug);

  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <SiteBackground />
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80 transition hover:text-cyan-300"
        >
          ← ~/blog
        </Link>

        <p className="mt-6 font-mono text-xs text-zinc-500">{post.date}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <article
          className="prose prose-invert prose-zinc mt-10 max-w-none prose-headings:tracking-tight prose-a:text-cyan-400 prose-code:font-mono"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
}