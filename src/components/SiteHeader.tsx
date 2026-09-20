import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link
        href="/"
        className="font-mono text-sm tracking-wide text-cyan-300/90 transition hover:text-cyan-200"
      >
        : JT // AI & Code
      </Link>
      <nav className="flex gap-6 text-sm text-zinc-400">
        <Link href="/#about" className="transition-colors hover:text-zinc-100">
          À propos
        </Link>
        <Link href="/#projects" className="transition-colors hover:text-zinc-100">
          Projets
        </Link>
        <Link href="/blog" className="transition-colors hover:text-zinc-100">
          Articles
        </Link>
        <Link href="/#contact" className="transition-colors hover:text-zinc-100">
          Contact
        </Link>
      </nav>
    </header>
  );
}