import React from "react";
import Reveal from "./Reveal";

const FORMATIONS = [
  {
    icon: "/icons/bachelor.svg",
    alt: "Développement",
    period: "2023-2026",
    title: "Bachelor Développement Web",
    detail: "Formation en alternance à Digital Campus Paris",
  },
  {
    icon: "/icons/licence.svg",
    alt: "Université",
    period: "2021-2023",
    title: "Licence MIASHS",
    detail:
      "Double licence maths-informatique et économie-gestion, Université Paris Nanterre",
  },
  {
    icon: "/icons/diplome.svg",
    alt: "Diplôme",
    period: "2020-2021",
    title: "Bac Général",
    detail: "Spécialités maths, SVT et physique-chimie, lycée Henri Bergson",
  },
];

function Node({ icon, alt }) {
  return (
    <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-full border border-line bg-surface shadow-[0_10px_24px_-12px_rgba(28,46,74,0.4)] md:h-24 md:w-24">
      <img src={icon} alt={alt} className="h-7 w-7 md:h-11 md:w-11" />
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-ink">
      <section id="presentation" className="w-full pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Présentation
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <Reveal
          delay={100}
          className="mx-auto mt-12 max-w-xl rounded-3xl border border-line bg-surface p-7 text-center shadow-[0_24px_50px_-30px_rgba(28,46,74,0.45)] md:p-8"
        >
          <p className="leading-relaxed text-muted">
            Développeuse IA, spécialisée dans les produits construits autour des
            LLM : <span className="font-semibold text-ink">API LLM (Claude, GPT, Gemini)</span>,
            LangChain, vector stores, automatisation n8n.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            En alternance chez Chantelle Group, je conçois des tests A/B et
            automatise des processus métier avec n8n, de la détection d'un ticket
            jusqu'à la QA. C'est là que j'ai appris à faire de l'IA un outil de{" "}
            <span className="font-semibold text-ink">résultats mesurables</span>.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Je recherche une alternance Master IA &amp; Data à partir de novembre
            2026, pour approfondir la data et le machine learning au sein d'une
            équipe ambitieuse.
          </p>
        </Reveal>

        {/* Formations */}
        <div className="flex flex-col items-center py-16">
          <h3 className="mb-12 font-display text-2xl font-bold tracking-tight">
            Mon parcours
          </h3>

          {/* Mobile */}
          <div className="relative flex w-full max-w-md flex-col items-start gap-9 md:hidden">
            <div className="absolute left-8 top-2 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-line" />
            {FORMATIONS.map((f) => (
              <div key={f.title} className="z-10 flex items-center gap-4">
                <Node icon={f.icon} alt={f.alt} />
                <div>
                  <p className="text-sm font-semibold text-muted">{f.period}</p>
                  <p className="text-lg font-bold">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="relative hidden w-full max-w-4xl flex-col items-center md:flex">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-line" />
            {FORMATIONS.map((f, i) => {
              const left = i % 2 === 0;
              const meta = (
                <div className={left ? "w-1/2 pr-10 text-right" : "w-1/2 pl-10 text-left"}>
                  <p className="text-lg font-semibold text-muted">{f.period}</p>
                  <p className="text-xl font-bold">{f.title}</p>
                </div>
              );
              const detail = (
                <div className={left ? "w-1/2 pl-10 text-left" : "w-1/2 pr-10 text-right"}>
                  <p className="inline-block rounded-2xl border border-line bg-surface px-4 py-2 text-left shadow-[0_10px_24px_-16px_rgba(28,46,74,0.4)]">
                    {f.detail}
                  </p>
                </div>
              );
              return (
                <div key={f.title} className="mb-12 flex w-full items-center last:mb-0">
                  {left ? meta : detail}
                  <Node icon={f.icon} alt={f.alt} />
                  {left ? detail : meta}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
