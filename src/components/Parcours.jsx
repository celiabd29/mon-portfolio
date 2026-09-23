import React from "react";
import Reveal from "./Reveal";

const NOW = [
  {
    title: "Alternance CRO & automatisation IA",
    org: "Chantelle Group",
    when: "depuis sept. 2025",
  },
  {
    title: "Mastère 1 Tech Lead, IA & Cybersécurité",
    org: "Digital Campus Paris",
    when: "en cours",
  },
];

const BEFORE = [
  { when: "2023 – 2026", what: "Bachelor Développement Web, Digital Campus Paris" },
  { when: "depuis 2022", what: "Freelance : sites TPE / PME, de la spec au déploiement" },
  { when: "2024", what: "Stage 10MentionWeb : WordPress, Divi, Gutenberg" },
  { when: "2024", what: "Stage Spacefoot : machine learning pour le tri d'images (Python)" },
  { when: "2021 – 2023", what: "Licence MIASHS, Université Paris Nanterre" },
];

export default function Parcours() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="parcours" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Parcours
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {NOW.map((n) => (
              <Reveal key={n.title}>
                <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_44px_-32px_rgba(28,46,74,0.5)]">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-ink">
                    {n.when}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{n.title}</h3>
                  <p className="text-sm text-muted">{n.org}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {BEFORE.map((b, i) => (
              <li key={i} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-28 shrink-0 text-sm font-semibold text-muted tabular-nums">{b.when}</span>
                <span className="text-[15px]">{b.what}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
