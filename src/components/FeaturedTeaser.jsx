import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    tag: "Projet perso · en solo",
    title: "MANIA · le Prospecteur",
    blurb: "Prospection B2B assistée par IA : analyse d'une cible et messages personnalisés.",
    to: "/projets/mania",
    cta: "Étude de cas",
  },
  {
    tag: "Alternance · Chantelle Group",
    title: "Automatisation du A/B testing",
    blurb: "Pipeline n8n + plateforme interne (Cloud Run), en production sur 3 sites du groupe.",
    to: "/projets",
    cta: "En savoir plus",
  },
  {
    tag: "Certification RNCP · en solo",
    title: "UrbanFlow Mobility",
    blurb: "App de transport multimodal, conçue et déployée de bout en bout. PWA.",
    to: "/projets",
    cta: "En savoir plus",
  },
];

export default function FeaturedTeaser() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Projets
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 max-w-xl text-center text-muted">
            De l'IA en production, de l'automatisation métier et du full-stack
            livré de bout en bout.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((it) => (
            <Reveal key={it.title}>
              <Link
                to={it.to}
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)] transition duration-300 hover:-translate-y-1 hover:border-clay-2"
              >
                <span className="inline-block w-fit rounded-full border border-line bg-ground px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted">
                  {it.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{it.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{it.blurb}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-accent-ink transition group-hover:gap-1.5">
                  {it.cta} <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 active:scale-[0.98]"
          >
            Voir tous les projets <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
