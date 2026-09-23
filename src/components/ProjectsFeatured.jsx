import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

function Tag({ children }) {
  return (
    <span className="inline-block rounded-full border border-line bg-ground px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted">
      {children}
    </span>
  );
}

function Stack({ items }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-semibold text-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsFeatured() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="projets" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Projets
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 max-w-xl text-center text-muted">
            Trois projets qui montrent ce que je fais vraiment : de l'IA en
            production, de l'automatisation métier et du full-stack livré de bout
            en bout.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* MANIA (mise en avant) */}
          <Reveal className="md:col-span-2">
            <article className="rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)] md:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <Tag>Projet perso · en solo</Tag>
                <span className="text-xs font-semibold text-accent-ink">Étude de cas disponible</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
                MANIA · le Prospecteur
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                Application Next.js de prospection B2B assistée par IA. Elle
                analyse une entreprise cible à partir des données Google Places et
                génère avec Claude des messages de prospection multicanaux
                personnalisés, avec export PDF et PPTX.
              </p>
              <Stack items={["Next.js", "Google Places", "API Claude", "Supabase"]} />
              <Link
                to="/projets/mania"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 active:scale-[0.98]"
              >
                Lire l'étude de cas <ArrowUpRight size={16} />
              </Link>
            </article>
          </Reveal>

          {/* A/B testing Chantelle */}
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
              <Tag>Alternance · Chantelle Group</Tag>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                Automatisation du A/B testing
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Un pipeline n8n déclenché par ClickUp qui génère le brief de
                design, le code de la variante pour ABlyft et la checklist de QA,
                plus une plateforme interne (Cloud Run) qui centralise idées,
                tests en cours, tests terminés et apprentissages.
              </p>
              <Stack items={["n8n", "Claude (skill QA)", "ABlyft / MCP", "Cloud Run"]} />
              <p className="mt-auto pt-5 text-sm font-medium text-muted">
                En production sur chantelle.com, darjeeling.fr et livera.nl.
              </p>
            </article>
          </Reveal>

          {/* UrbanFlow */}
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
              <Tag>Certification RNCP · en solo</Tag>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                UrbanFlow Mobility
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Application de transport multimodal conçue et déployée de bout en
                bout : cartographie temps réel, géolocalisation, agrégation d'API
                transport. PWA installable.
              </p>
              <Stack items={["React", "Django REST", "PostgreSQL", "Leaflet"]} />
              <a
                href="https://urbanflow-mobility.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-ink underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
              >
                Voir la démo en ligne <ArrowUpRight size={15} />
              </a>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
