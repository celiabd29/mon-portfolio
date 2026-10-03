import React from "react";
import { Link } from "react-router-dom";
import Bip from "./Bip";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section
        id="top"
        className="mt-8 grid items-center gap-6 md:mt-12 md:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-semibold text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
            Disponible pour une alternance dès octobre 2026
          </span>
          <h1 className="mt-5 font-display text-[clamp(1.85rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-balance text-ink">
            Je rends le travail des équipes
            <br />
            plus simple avec l'IA.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[clamp(1.02rem,1.5vw,1.14rem)] leading-relaxed text-muted">
            Développeuse web en alternance chez Chantelle Group. J'automatise la
            préparation des tests A/B et le reporting de l'équipe avec n8n et
            Claude Code. Je cherche une alternance pour mon Mastère IA &amp;
            Cybersécurité.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 active:scale-[0.98]"
            >
              Voir mes projets
            </Link>
            <a
              href="/CV_Celia_Abbad.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:border-clay-2 active:scale-[0.98]"
            >
              Télécharger le CV
            </a>
          </div>
          <p className="mt-8 text-[13.5px] text-muted">
            Stack : API Claude, Claude Code, MCP, n8n, Next.js
          </p>
        </div>

        <div className="relative grid place-items-center md:min-h-[520px]">
          <Bip />
        </div>
      </section>
    </div>
  );
}
