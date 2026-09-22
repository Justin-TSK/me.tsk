import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import TypewriterText from "@/components/TypewriterText";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import SkillsSnake from "@/components/SkillsSnake";
import SiteHeader from "@/components/SiteHeader";
import SiteBackground from "@/components/SiteBackground";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <div className="min-h-full overflow-x-clip bg-zinc-950 text-zinc-100">
      <SiteBackground />
      <SiteHeader />

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
                &quot;De la conception de la logique au d&eacute;ploiement de solutions d&apos;intelligence artificielle.&quot;
              </span>
              <span className="text-zinc-500">)</span>
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-400 align-middle sm:h-7 lg:h-8" />
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Je con&ccedil;ois des architectures logicielles et des mod&egrave;les d&apos;intelligence artificielle pour r&eacute;soudre des probl&egrave;mes complexes.
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
                    <span className="text-emerald-400">f&quot;Accuracy: &#123;model.score(X_test, y_test)&#125;&quot;</span>
                    <span className="text-zinc-200">)</span>
                  </code>
                </pre>
                <div className="hidden shrink-0 items-center justify-center pr-4 sm:flex">
                  <Image
                    src="/photo.jpg"
                    alt="Justin Tseke-Tseke"
                    width={188}
                    height={236}
                    priority
                    className="h-60 w-48 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <Image
                src="/photo.jpg"
                alt="Justin Tseke-Tseke"
                width={144}
                height={176}
                priority
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            Apr&egrave;s un parcours initial dans le football de comp&eacute;tition, j&apos;ai d&eacute;couvert le d&eacute;veloppement web, qui s&apos;est r&eacute;v&eacute;l&eacute; &ecirc;tre une v&eacute;ritable vocation.<br className="hidden sm:inline" />
            Anim&eacute; par la curiosit&eacute; et la passion de b&acirc;tir, je me suis form&eacute; en autodidacte avant d&apos;approfondir l&apos;intelligence artificielle et le Machine Learning.<br className="hidden sm:inline" />
            Aujourd&apos;hui, je combine architecture logicielle full stack et solutions IA pour concevoir des applications concr&egrave;tes, intelligentes et performantes.
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
              </h3>
              <p className="text-sm text-zinc-400">Gubkin Russian State University of Oil and Gas · Moscou</p>
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

          <div className="mt-16">
            <SkillsSnake />
          </div>
        </section>

        <section id="projects" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 py-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            <TypewriterText text="~/projets" />
          </p>
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

        <section id="articles" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 py-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            <TypewriterText text="~/articles" />
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Articles
          </h2>
          <p className="mt-2 text-zinc-400">
            Notes et r&eacute;flexions sur le d&eacute;veloppement web et l&apos;intelligence artificielle.
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
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 mx-auto w-full max-w-6xl px-6 py-20 pb-28">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            <TypewriterText text="~/contact" />
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Travaillons ensemble
          </h2>
          <p className="mt-2 text-zinc-400">
            Une idée, un projet, une opportunité ? Envoyez-moi un message directement.
          </p>

          <ContactForm />

          <div className="mt-12 flex flex-col gap-6 border-t border-zinc-800 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <a href="mailto:precieuxtjp95@icloud.com" className="inline-flex h-10 items-center justify-center rounded-full border border-violet-400/40 px-6 text-sm font-semibold text-violet-200 shadow-[0_0_18px_rgba(167,139,250,0.12)] transition hover:border-violet-300 hover:text-white hover:shadow-[0_0_24px_rgba(167,139,250,0.22)] self-start">
              precieuxtjp95@icloud.com
            </a>
            <div className="flex items-center gap-4">
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