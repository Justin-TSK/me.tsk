import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SiteHeader from "@/components/SiteHeader";
import SiteBackground from "@/components/SiteBackground";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <SiteBackground />
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
          ~/blog
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Articles
        </h1>
        <p className="mt-4 text-zinc-400">
          Notes et réflexions sur le développement web et l&apos;intelligence artificielle.
        </p>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            >
              <p className="font-mono text-xs text-zinc-500">{post.date}</p>
              <h2 className="mt-2 text-xl font-medium text-white transition duration-300 group-hover:text-cyan-300">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {post.summary}
              </p>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}