import React from "react";
import Reveal from "./Reveal";

const STATS = [
  { n: "68", label: "tests A/B dans le pipeline" },
  { n: "38", label: "tests A/B déployés" },
  { n: "26", label: "idées en backlog" },
  { n: "4", label: "marques du groupe automatisées" },
];

export default function Impact() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="impact" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Impact
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 max-w-xl text-center text-muted">
            Ce que ça donne concrètement, chez Chantelle Group et sur MANIA. Des
            chiffres vérifiables, pas des projections.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_44px_-32px_rgba(28,46,74,0.5)]">
                <span className="font-display text-4xl font-extrabold tabular-nums tracking-tight md:text-5xl">
                  {s.n}
                </span>
                <span className="mt-2 text-sm leading-snug text-muted">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted">
          Tests livrés en production sur chantelle.com, darjeeling.fr et
          livera.nl. Reportings Google Ads automatisés sur quatre marques du
          groupe.
        </p>
      </section>
    </div>
  );
}
