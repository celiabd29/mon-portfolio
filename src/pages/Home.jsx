import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/HeroSection";
import FeaturedTeaser from "../components/FeaturedTeaser";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedTeaser />

      {/* Mini à propos */}
      <div className="mx-auto max-w-6xl px-5 text-ink">
        <section className="pt-24 md:pt-32">
          <Reveal>
            <div className="grid items-start gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  Développeuse, côté produit
                </h2>
                <p className="mt-5 max-w-[52ch] leading-relaxed text-muted">
                  J'aime construire des outils que les équipes utilisent
                  vraiment, tous les jours. Après mon Bachelor et une année
                  d'alternance chez Chantelle Group, je me spécialise dans l'IA
                  appliquée et la sécurité des systèmes qui l'utilisent.
                </p>
                <Link
                  to="/a-propos"
                  className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent-ink underline-offset-4 hover:underline"
                >
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </div>

              <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)] md:p-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent-ink">
                  En ce moment
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Mastère Tech Lead IA & Cybersécurité",
                    "Certification Microsoft AI-103 en préparation",
                    "À la recherche d'une alternance dès octobre 2026",
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-[15px] leading-snug"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* CTA de clôture */}
      <div className="mx-auto max-w-6xl px-5">
        <section className="pt-24 md:pt-32">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-[32px] border border-line bg-surface px-6 py-12 text-center shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                On échange ?
              </h2>
              <p className="max-w-md text-muted">
                En recherche d'une alternance de Mastère IA &amp; Cybersécurité.
                Ouverte aussi aux échanges freelance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 active:scale-[0.98]"
              >
                Me contacter <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
};

export default Home;
