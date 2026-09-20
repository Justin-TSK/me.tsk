
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl: string;
  demoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Tech242",
    description:
      "Boussole numérique pour naviguer dans le monde de l'informatique : 16 domaines couverts, ressources sur l'IA, documentation, roadmaps d'apprentissage et glossaire technique.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Justin-TSK/Tech242",
    demoUrl: "https://tech242.vercel.app",
  },
  {
    id: 2,
    title: "StudyOrganizer",
    description:
      "Application de bureau (Mac & Windows) pour organiser et ranger ses documents d'étude automatiquement, avec une interface simple pensée pour un usage quotidien.",
    tags: ["Python", "CustomTkinter", "SQLite", "Pillow", "PyInstaller"],
    githubUrl: "https://github.com/Justin-TSK/StudyOrganizer",
    demoUrl: "https://github.com/Justin-TSK/StudyOrganizer-Releases",
  },
];