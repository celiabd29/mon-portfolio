import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/HeroSection";
import FeaturedTeaser from "../components/FeaturedTeaser";
import Impact from "../components/Impact";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedTeaser />
      <Impact />

      {/* CTA de clôture */}
      <div className="mx-auto max-w-6xl px-5">
        <section className="pt-24 md:pt-32">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-[32px] border border-line bg-surface px-6 py-12 text-center shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                On échange ?
              </h2>
              <p className="max-w-md text-muted">
                En recherche d'une alternance de Master en IA. Ouverte aussi aux
                échanges freelance.
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
