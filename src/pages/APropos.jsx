import React from "react";
import Competences from "../components/Competences";
import Parcours from "../components/Parcours";
import Reveal from "../components/Reveal";

export default function APropos() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 text-ink">
        <section className="pt-16 md:pt-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-ink">
              À propos
            </span>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Développeuse web, orientée IA en production
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              23 ans, à Paris. En alternance chez Chantelle Group sur le CRO et
              l'automatisation IA, et en Mastère Tech Lead, IA et Cybersécurité à
              Digital Campus. Je code des automatisations IA qui tournent en
              production, pas des démos.
            </p>
          </Reveal>
        </section>
      </div>

      <Competences />
      <Parcours />
    </>
  );
}
