import React from "react";
import Reveal from "./Reveal";

// Données des certifications — modifie librement ce tableau.
// url : lien optionnel vers le justificatif (laisser "" si pas encore dispo).
const GROUPS = [
  {
    subtitle: "Obtenues",
    inProgress: false,
    items: [
      {
        name: "Bachelor Concepteur Développeur de Solutions Digitales (titre RNCP niveau 6)",
        org: "Digital Campus Paris",
        date: "2026",
        url: "",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        org: "freeCodeCamp",
        date: "2023",
        url: "",
      },
      {
        name: "Scientific Computing with Python",
        org: "freeCodeCamp",
        date: "2023",
        url: "",
      },
      {
        name: "Front End Development Libraries (React)",
        org: "freeCodeCamp",
        date: "2023",
        url: "",
      },
    ],
  },
  {
    subtitle: "En cours",
    inProgress: true,
    items: [
      {
        name: "Mastère Tech Lead IA & Cybersécurité (titre RNCP niveau 7)",
        org: "Digital Campus Paris",
        date: "2026 – 2028",
        url: "",
      },
      {
        name: "Microsoft Certified : Azure AI Apps and Agents Developer (AI-103)",
        org: "Microsoft",
        date: "objectif novembre 2026",
        url: "",
      },
      {
        name: "TOEFL",
        org: "ETS",
        date: "objectif fin 2026",
        url: "",
      },
    ],
  },
];

function CertCard({ cert, inProgress }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_44px_-32px_rgba(28,46,74,0.5)]">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-[15px] font-bold leading-snug tracking-tight">
          {cert.url ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-accent-ink hover:underline"
            >
              {cert.name}
            </a>
          ) : (
            cert.name
          )}
        </h4>
        {inProgress && (
          <span className="shrink-0 rounded-full border border-line bg-ground px-2.5 py-0.5 text-[11.5px] font-medium text-muted">
            En cours
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">
        {cert.org} · {cert.date}
      </p>
    </div>
  );
}

export default function Certifications() {
  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="certifications" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Certifications
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {GROUPS.map((group) => (
            <div key={group.subtitle}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-ink">
                {group.subtitle}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {group.items.map((cert) => (
                  <Reveal key={cert.name}>
                    <CertCard cert={cert} inProgress={group.inProgress} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
