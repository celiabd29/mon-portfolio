import React from "react";
import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "IA & automatisation",
    context:
      "Mon cœur de métier. Je les assemble en automatisations qui tournent en production, chez Chantelle et sur MANIA.",
    items: [
      "API Claude",
      "Agents",
      "MCP",
      "Claude Code",
      "Vector stores",
      "Prompt engineering",
      "n8n",
      "LangChain",
    ],
  },
  {
    title: "Développement",
    context:
      "Full-stack, des sites clients aux applications déployées de bout en bout.",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node",
      "Django",
      "Symfony",
      "Vue",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    title: "Data & outils",
    context:
      "Bases, conteneurs et déploiement, dont une plateforme interne sur Cloud Run.",
    items: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Docker",
      "Git",
      "GCP / Cloud Run",
      "API REST",
      "Figma",
      "WordPress",
    ],
  },
  {
    title: "Méthodes",
    context:
      "Le CRO au quotidien, avec les bonnes pratiques sécurité et RGPD.",
    items: [
      "A/B testing & CRO",
      "ABlyft",
      "Scrum / agile",
      "OWASP",
      "RGPD",
      "Éco-conception",
    ],
  },
];

export default function Competences() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="competences" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Compétences
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GROUPS.map((g) => (
            <Reveal key={g.title}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
                <h3 className="font-display text-xl font-bold tracking-tight">{g.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{g.context}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-semibold text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-muted">
          Langues : français natif, anglais B2.
        </p>
      </section>
    </div>
  );
}
