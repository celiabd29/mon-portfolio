import React from "react";
import { Link } from "react-router-dom";
import Robot3D from "./Robot3D";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section
        id="top"
        className="mt-8 grid items-center gap-6 md:mt-12 md:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(245,113,78,0.18)]" />
            En alternance · Chantelle Group
          </span>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,7vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance">
            L'IA en production.
            <br />
            <span className="text-accent">Pas des démos.</span>
          </h1>
          <p className="mt-5 max-w-[38ch] text-[clamp(1.02rem,1.5vw,1.16rem)] leading-relaxed text-muted">
            Je code des automatisations IA qui tournent en{" "}
            <b className="font-semibold text-ink">production</b>. En alternance
            chez Chantelle Group (CRO et automatisation), je vise une alternance
            de Master IA &amp; Cybersécurité.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 active:scale-[0.98]"
            >
              Voir mes projets →
            </Link>
            <a
              href="/CV_Celia_Abbad.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:border-clay-2 active:scale-[0.98]"
            >
              Télécharger le CV
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[13.5px] font-medium text-muted">
            <span>Stack&nbsp;:</span>
            {["Claude / LLM", "n8n", "vector stores", "LangChain"].map((t) => (
              <span
                key={t}
                className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[12.5px] font-semibold text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative -order-1 grid min-h-[360px] place-items-center md:order-none md:min-h-[460px]">
          <Robot3D className="h-[360px] w-full max-w-[460px] md:h-[460px]" />
          <div className="pointer-events-none absolute left-[2%] top-[4%] z-10 flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 text-[12.5px] font-semibold shadow-[0_18px_34px_-20px_rgba(28,46,74,0.5)]">
            <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
            37 tests A/B terminés
          </div>
          <div className="pointer-events-none absolute bottom-[6%] right-[1%] z-10 flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 text-[12.5px] font-semibold shadow-[0_18px_34px_-20px_rgba(28,46,74,0.5)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            En prod sur 3 sites du groupe
          </div>
        </div>
      </section>
    </div>
  );
}
