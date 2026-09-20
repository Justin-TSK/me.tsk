import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    
      <a href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_28px_rgba(99,102,241,0.16)]"
    >
      <h3 className="text-lg font-medium tracking-tight text-white transition duration-300 group-hover:text-indigo-300">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <li
            key={tag}
            className={
              index % 2 === 0
                ? "rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-xs text-indigo-300"
                : "rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300"
            }
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm text-slate-500 transition duration-300 group-hover:text-cyan-300">
        <ExternalIcon />
        Voir le projet
      </div>
    </a>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}