import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Une entree par slug. Structure prete pour ajouter "urbanflow" plus tard.
const CASES = {
  mania: {
    title: "MANIA · le Prospecteur",
    tagline: "Prospection B2B assistée par IA",
    tags: ["Projet perso · en solo", "Next.js", "Google Places", "API Claude", "Supabase"],
    sections: [
      {
        h: "Contexte",
        paras: [
          "Projet personnel, que j'ai conçu et développé seule, et qu'on utilise en équipe. MANIA est une application Next.js de prospection B2B assistée par IA : elle analyse une entreprise cible et génère des messages de prospection multicanaux personnalisés, avec export PDF et PPTX.",
        ],
      },
      {
        h: "Mon rôle",
        paras: [
          "Seule sur tout : la conception, l'application Next.js, l'intégration des données Google Places, la génération par Claude, le stockage Supabase et les exports PDF et PPTX. Le reste de l'équipe se sert de l'outil.",
        ],
      },
      {
        h: "Le problème",
        paras: [
          "Personnaliser la prospection B2B à l'échelle est lent et générique. Chaque message pertinent demande de comprendre l'entreprise cible et son secteur, un travail difficile à répéter à la main sur beaucoup de prospects.",
        ],
      },
      {
        h: "L'architecture",
        paras: [
          "L'application tourne sur Next.js. Les données de l'entreprise cible viennent de Google Places (nom, secteur, ville, site, note). L'API Claude fait l'analyse et rédige les messages personnalisés. Supabase stocke les prospects et l'état. Les livrables s'exportent en PDF (jsPDF) et PPTX (pptxgenjs).",
          "L'app n'envoie pas les emails elle-même : elle génère le texte du message et ouvre un lien mailto dans mon propre client mail. Les adresses proposées viennent du site de l'entreprise, pas d'un envoi automatisé.",
        ],
      },
      {
        h: "Les arbitrages techniques",
        paras: [
          "Le réflexe facile aurait été d'ajouter un vector store et des embeddings pour faire « IA avancée ». Je ne l'ai pas fait, pour trois raisons qui pointent toutes vers la récupération directe :",
        ],
        bullets: [
          "Donnée structurée, pas texte libre. Google Places expose déjà des champs nets et filtre pour moi. J'interroge par critères explicites (secteur + ville), pas par ressemblance sémantique. La recherche floue n'apporterait rien, elle serait même moins précise.",
          "Source vivante, pas copie qui périme. Un vector store est un index figé à un instant T qu'il faut construire et re-synchroniser. Places est la source de vérité en temps réel : le recopier ajouterait un problème de fraîcheur pour rien.",
          "Le volume tient dans le contexte. Je ne remonte qu'une quinzaine de résultats à la fois, ils passent sans souci dans le prompt. Le RAG ne se justifie que quand le corpus est trop gros pour être injecté en entier.",
        ],
        after: [
          "La règle que j'en tire : le bon outil pour la bonne donnée. Structurée, fraîche et filtrable → API en direct. Non structurée et volumineuse → embeddings et vector store. Et le LLM sert là où il est bon, analyser et rédiger, pas à aller chercher l'info. Un vector store aurait eu du sens seulement si j'accumulais du texte libre (avis, comptes-rendus) à retrouver par le sens.",
          "Deuxième arbitrage : coder défensivement autour du LLM. Sa sortie JSON n'est pas fiable (objets au lieu de chaînes, JSON entouré de markdown, réponses tronquées). J'ai écrit une couche de normalisation (extractJSON, asText, asArr) pour que l'app dégrade proprement au lieu de planter. Concrètement, ça a réglé des bugs réels : une URL en markdown qui cassait le tableau JSON, du JSON brut affiché à l'écran, jsPDF qui plantait sur un objet, l'export PPT en 500, une analyse vide sur réponse tronquée. Et une garde : si l'API renvoie une erreur au lieu d'un tableau, l'écran ne devient plus blanc.",
        ],
      },
      {
        h: "Ce que j'en retire",
        bullets: [
          "Un LLM n'est pas une source de vérité. Au départ, la recherche laissait Claude inventer des entreprises : des noms, des sites et des emails plausibles mais fictifs. Pour du vrai démarchage, inutilisable. J'ai basculé la recherche sur Google Places (données réelles) et gardé le LLM là où il est bon.",
          "Il faut coder défensivement autour d'un LLM. Sa sortie structurée est imprévisible : je ne fais jamais confiance à la forme reçue. Normalisation, valeurs de repli, et une app qui ne casse pas quand la réponse est mal formée.",
        ],
      },
    ],
  },
};

function Section({ s }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight">{s.h}</h2>
      {(s.paras || []).map((p, i) => (
        <p key={i} className="mt-3 leading-relaxed text-muted">{p}</p>
      ))}
      {s.bullets && (
        <ul className="mt-4 space-y-3">
          {s.bullets.map((b, i) => (
            <li key={i} className="relative pl-5 leading-relaxed text-muted">
              <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {(s.after || []).map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-muted">{p}</p>
      ))}
    </section>
  );
}

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
        <Link to="/projets" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink">
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
            <Section key={s.h} s={s} />
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-12 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105"
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
