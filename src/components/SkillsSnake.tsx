import { skillsData } from "@/data/skills";

const WAVE_PERIOD = 3.5; // secondes, doit rester égal à la durée dans le CSS

export default function SkillsSnake() {
  const total = skillsData.length;

  return (
    // Mobile (< 768px) : s'adapte en grille/flex-wrap dans le conteneur standard
    // Desktop (>= 768px) : sort du conteneur (w-screen) pour l'effet serpent défilant infini
    <div className="skills-viewport w-full py-4 md:relative md:left-1/2 md:-ml-[50vw] md:w-screen md:overflow-hidden md:py-14 lg:py-20">
      <div className="skills-track w-full md:flex md:w-max">
        {/*
          Sur mobile : seule la copie 0 est affichée (avec flex-wrap pour éviter les doublons).
          Sur desktop : les deux copies sont affichées (boucle sans coupure translateX -50%).
        */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className={
              copy === 0
                ? "flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:flex-nowrap md:shrink-0 md:gap-4 md:pr-4 lg:gap-6 lg:pr-6"
                : "hidden md:flex shrink-0 gap-4 pr-4 lg:gap-6 lg:pr-6"
            }
          >
            {skillsData.map((skill, i) => {
              const Icon = skill.icon;
              // Éclaircit les couleurs trop sombres (Pandas, SQLite...)
              const light = `color-mix(in srgb, ${skill.color} 55%, white)`;
              return (
                <li
                  key={skill.name}
                  className="skills-item flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3.5 py-2 font-mono text-xs text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-800/90 sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-sm md:shrink-0 md:gap-3 md:px-5 md:py-3 lg:px-7 lg:py-4 lg:text-base"
                  style={{
                    // Décalage de phase : actif sur desktop via l'animation CSS
                    animationDelay: `-${(i / total) * WAVE_PERIOD}s`,
                    boxShadow: `0 0 16px ${skill.color}33`,
                  }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                    style={{ color: light }}
                  />
                  {skill.name}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}