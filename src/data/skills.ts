import { IconType } from "react-icons";
import {
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiOpencv,
  SiHuggingface,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiSqlite,
  SiPostgresql,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Computer Vision", icon: SiOpencv, color: "#5C3EE8" },
  { name: "LLMs / RAG", icon: SiHuggingface, color: "#FFD21E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Git / GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
];