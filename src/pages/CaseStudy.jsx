import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Une entree par slug. Structure prete pour ajouter "urbanflow" plus tard.
const CASES = {
  mania: {
    title: "MANIA · le Prospecteur",
    tagline: "Prospection B2B assistée par IA",
    tags: ["Projet perso · en solo", "Next.js", "API Claude", "Supabase"],
    sections: [
      {
        h: "Contexte",
        p: "Projet personnel, que j'ai conçu et développé seule, et qu'on utilise en équipe. Une application Next.js de prospection B2B assistée par IA : elle analyse une entreprise cible et génère des messages de prospection multicanaux personnalisés, avec export PDF et PPTX.",
      },
      {
        h: "Le problème",
        p: "Personnaliser la prospection B2B à l'échelle est lent et générique. Chaque message pertinent demande de comprendre l'entreprise cible et son secteur, un travail difficile à répéter à la main sur beaucoup de prospects.",
      },
      {
        h: "Mon rôle",
        p: "Seule sur tout : la conception, l'application Next.js, l'intégration des données Google Places, la génération par Claude, le stockage Supabase et les exports PDF et PPTX. Le reste de l'équipe se sert de l'outil.",
      },
      {
        h: "L'architecture",
        p: "L'application tourne sur Next.js. Les données de l'entreprise cible viennent de Google Places. L'API Claude fait l'analyse et rédige les messages personnalisés. Supabase stocke les prospects et l'état. Les livrables s'exportent en PDF et PPTX. Pas de vector store ni d'embeddings : les informations utiles (secteur, taille, activité) sont déjà structurées, donc je les récupère directement plutôt que de faire de la recherche sémantique.",
      },
    ],
    pending: ["Les arbitrages techniques", "Ce que j'en retire"],
  },
};

export default function CaseStudy() {
  const { slug } = useParams();
  const data = CASES[slug];

  if (!data) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 text-center text-ink">
        <p className="text-muted">Cette étude de cas n'existe pas encore.</p>
        <Link to="/" className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-ink">
      <div className="mx-auto max-w-3xl px-5 py-14">
        <Link to="/#projets" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>

        <span className="mt-8 block text-xs font-bold uppercase tracking-widest text-accent-ink">
          Étude de cas
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {data.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{data.tagline}</p>
        <div className="mt-5 h-1 w-16 rounded-full bg-accent" />

        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span key={t} className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-ink">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {data.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl font-bold tracking-tight">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </section>
          ))}
        </div>

        {data.pending?.length > 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-line bg-surface/60 p-6">
            <p className="text-sm font-semibold text-ink">La suite arrive :</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {data.pending.map((p) => (
                <li key={p} className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-medium text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to="/#contact"
          className="mt-12 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105"
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
