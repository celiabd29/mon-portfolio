import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    context: "Alternance chez Chantelle Group",
    title: "Automatisation des tests A/B",
    text: "J'ai automatisé la préparation des tests et le reporting CRO de l'équipe, d'abord avec un pipeline n8n, puis avec des skills Claude Code qui pilotent l'outil d'A/B testing via MCP.",
    tags: ["n8n", "Claude Code", "MCP", "JavaScript"],
    to: "/projets",
  },
  {
    context: "Projet perso",
    title: "MANIA, outil de prospection B2B",
    text: "Une application qui analyse une entreprise cible, rédige des messages de prospection personnalisés pour plusieurs canaux et exporte le tout en PDF ou PPTX.",
    tags: ["Next.js", "API Claude"],
    to: "/projets/mania",
  },
  {
    context: "Certification RNCP",
    title: "UrbanFlow Mobility",
    text: "Une application de transport multimodal que j'ai conçue et déployée seule, avec géolocalisation en temps réel et données de plusieurs réseaux de transport.",
    tags: ["React", "Django REST", "PostgreSQL", "Leaflet"],
    to: "/projets",
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
                <span className="text-[13px] font-semibold text-muted">
                  {it.context}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{it.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-ground px-2.5 py-1 text-[11.5px] font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-5 text-sm font-semibold text-accent-ink transition group-hover:underline">
                  Voir le projet
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
