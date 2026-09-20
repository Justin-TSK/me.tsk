import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/app/data/skills";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import TypewriterText from "@/components/TypewriterText";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="font-mono text-sm tracking-wide text-cyan-300/90">
        : JT // AI & Code
        </p>
        <nav className="flex gap-6 text-sm text-zinc-400">
  <a href="#about" className="transition-colors hover:text-zinc-100">
    À propos
  </a>
  <a href="#projects" className="transition-colors hover:text-zinc-100">
    Projets
  </a>
  <Link href="/blog" className="transition-colors hover:text-zinc-100">
    Articles
  </Link>
  <a href="#contact" className="transition-colors hover:text-zinc-100">
    Contact
  </a>
</nav>
      </header>

      <main className="relative z-10">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
  <TypewriterText text="~/justin" />
</p>
            <h1 className="font-mono text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
  <span className="text-violet-400">print</span>
  <span className="text-zinc-500">(</span>
    <span className="text-white">
  "De la conception de la logique au déploiement de solutions d'intelligence artificielle."
</span>
  <span className="text-zinc-500">)</span>
  <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-400 align-middle sm:h-7 lg:h-8" />
</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
            Je conçois des architectures logicielles et des modèles d'intelligence artificielle pour résoudre des problèmes complexes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-400 px-7 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300">
                Voir mes projets
              </a>
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-400/40 bg-transparent px-7 text-sm font-semibold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition hover:border-cyan-300 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                Me contacter
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-2xl shrink-0">
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/90 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-1.5 border-b border-zinc-700 bg-zinc-800/80 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-zinc-500">
                  logistic_regression.py
                </span>
              </div>
              <div className="flex items-center">
                <pre className="flex-1 overflow-x-auto p-4 font-mono text-[13px] leading-6">
                  <code>
                    <span className="text-violet-400">import</span>{" "}
                    <span className="text-zinc-200">numpy</span>{" "}
                    <span className="text-violet-400">as</span>{" "}
                    <span className="text-zinc-200">np</span>
                    {"\n"}
                    <span className="text-violet-400">from</span>{" "}
                    <span className="text-zinc-200">sklearn.linear_model</span>{" "}
                    <span className="text-violet-400">import</span>{" "}
                    <span className="text-cyan-300">LogisticRegression</span>
                    {"\n\n"}
                    <span className="text-zinc-500"># entraînement du modèle</span>
                    {"\n"}
                    <span className="text-zinc-200">model</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-cyan-300">LogisticRegression</span>
                    <span className="text-zinc-200">()</span>
                    {"\n"}
                    <span className="text-zinc-200">model.fit</span>
                    <span className="text-zinc-200">(X_train, y_train)</span>
                    {"\n\n"}
                    <span className="text-zinc-500"># prédiction</span>
                    {"\n"}
                    <span className="text-zinc-200">preds</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-zinc-200">model.predict</span>
                    <span className="text-zinc-200">(X_test)</span>
                    {"\n"}
                    <span className="text-zinc-200">print</span>
                    <span className="text-zinc-200">(</span>
                    <span className="text-emerald-400">f"Accuracy: {"{"}model.score(X_test, y_test){"}"}"</span>
                    <span className="text-zinc-200">)</span>
                  </code>
                </pre>
                <div className="hidden shrink-0 items-center justify-center pr-4 sm:flex">
                  <img
                    src="/photo.jpg"
                    alt="Justin Tseke-Tseke"
                    className="h-59 w-47 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <img
                src="/photo.jpg"
                alt="Justin Tseke-Tseke"
                className="h-44 w-36 rounded-lg border border-zinc-700 object-cover shadow-xl shadow-cyan-500/10"
              />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 pt-20 pb-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
  <TypewriterText text="~/parcours" />
</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            De footballeur à développeur
          </h2>
          <p className="mt-2 text-zinc-400">
            apres une carriere foireuse en football, j'ai decouvert le developpement web et c'est devenu une passion.<br />
            plus tard, j'ai decouvert l'intelligence artificielle et c'est devenu une autre passion.<br />
            J'ai commencé par aprendre le developpement web en autodidacte, puis j'ai suivi une formation en intelligence artificielle.<br />
            Je suis maintenant maître en intelligence artificielle et développeur full stack passionné par l'intelligence artificielle et le développement web.
            </p>
            <div className="mt-10 space-y-6 border-l border-zinc-700 pl-6">
  <div className="relative">
    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-cyan-400" />
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
      2024
    </p>
    <h3 className="mt-1 text-base font-medium text-white">
      Baccalauréat série D
    </h3>
    <p className="text-sm text-zinc-400">GS Atlas · Brazzaville</p>
  </div>

  <div className="relative">
    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-cyan-400" />
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
      2025
    </p>
    <h3 className="mt-1 text-base font-medium text-white">
      Diplôme de langue russe
      <p className="text-sm text-zinc-400">Gubkin Russian State University of Oil and Gaz · Moscou</p>
    </h3>
  </div>

  <div className="relative">
    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-violet-400" />
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">
      2025 — 2029
    </p>
    <h3 className="mt-1 text-base font-medium text-white">
      Business Informatics
    </h3>
    <p className="text-sm text-zinc-400">
    National University of Science and Technology MISIS · Moscou
      <span className="text-violet-300">— en cours</span>
    </p>
  </div>
</div>

          <div className="mt-30">
            <article className="rounded-2xl border border-cyan-500/20 bg-zinc-900/60 p-6 lg:p-10 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
            <div className="flex flex-wrap gap-2 lg:gap-3">
  {skillsData.map((skill, idx) => {
    const Icon = skill.icon;
    return (
      <span key={idx} className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1 font-mono text-xs text-zinc-300 lg:gap-2 lg:px-4 lg:py-2 lg:text-sm">
        <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" style={{ color: skill.color }} />
        {skill.name}
      </span>
    );
  })}
</div>
            </article>
          </div>
        </section>

        <section id="projects" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 pt-8 pb-20">
        <section id="articles" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Articles
          </h2>
          <p className="mt-2 text-zinc-400">
            Notes et réflexions sur le développement web et l&apos;intelligence artificielle.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
              >
                <p className="font-mono text-xs text-zinc-500">{post.date}</p>
                <h3 className="mt-2 text-base font-medium text-white transition duration-300 group-hover:text-cyan-300">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400 line-clamp-3">
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Voir tous les articles
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Projets
          </h2>
          <p className="mt-2 text-zinc-400">
          Ce que je construis
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 py-20 pb-28">
          <div className="flex flex-col justify-between gap-10 sm:flex-row">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Justin Tseke-Tseke
              </h2>
              <a href="mailto:precieuxtjp95@icloud.com" className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-violet-400/40 px-7 text-sm font-semibold text-violet-200 shadow-[0_0_18px_rgba(167,139,250,0.12)] transition hover:border-violet-300 hover:text-white hover:shadow-[0_0_24px_rgba(167,139,250,0.22)]">
                precieuxtjp95@icloud.com
              </a>
              
            </div>

            <div className="flex items-end gap-4 sm:justify-end">
              <a href="https://github.com/Justin-TSK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/justin-tsk-5bb431409" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white">
                <FaLinkedin className="h-4 w-4" style={{ color: "#0A66C2" }} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}