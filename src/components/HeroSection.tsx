import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Mascot from "./Mascot";

const NAV = [
  { href: "#projets", label: "Projets" },
  { href: "#impact", label: "Impact" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-4 pb-16 md:pb-24">
        <header className="sticky top-4 z-50">
          <nav className="flex items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-3 py-2.5 pl-5 shadow-[0_12px_30px_-18px_rgba(28,46,74,0.5)] backdrop-blur-md">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-clay-2 to-ink text-[13px] font-extrabold text-white">
                AC
              </span>
              <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
                Célia Abbad
              </span>
            </a>
            <div className="hidden items-center gap-7 text-[14.5px] font-medium text-muted md:flex">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                  {n.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/CV_Celia_Abbad.pdf"
                className="hidden rounded-full bg-ink px-4 py-2.5 text-[14px] font-semibold text-white transition hover:bg-ink/90 sm:inline-block"
              >
                Télécharger le CV
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition active:scale-90 md:hidden"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-white p-3 text-center shadow-lg animate-fade-in md:hidden">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-lg font-medium text-ink hover:bg-ground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/CV_Celia_Abbad.pdf"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-2xl bg-ink px-4 py-3 text-lg font-semibold text-white"
              >
                Télécharger le CV
              </a>
            </nav>
          )}
        </header>

        <section
          id="top"
          className="mt-12 grid items-center gap-6 md:mt-16 md:grid-cols-[1.05fr_0.95fr]"
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
              de Master en IA.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 active:scale-[0.98]"
              >
                Voir mes projets →
              </a>
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

          <div className="relative -order-1 grid min-h-[340px] place-items-center md:order-none md:min-h-[420px]">
            <div className="absolute left-[2%] top-[4%] flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 text-[12.5px] font-semibold shadow-[0_18px_34px_-20px_rgba(28,46,74,0.5)]">
              <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
              37 tests A/B terminés
            </div>
            <div className="absolute bottom-[6%] right-[1%] flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-2.5 text-[12.5px] font-semibold shadow-[0_18px_34px_-20px_rgba(28,46,74,0.5)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              En prod sur 3 sites du groupe
            </div>
            <div className="animate-float">
              <Mascot className="w-[min(360px,74vw)] drop-shadow-[24px_40px_60px_rgba(28,46,74,0.4)]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
