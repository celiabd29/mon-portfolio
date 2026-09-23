import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from "react";

function Section({ title, children }) {
  return (
    <section className="border-t border-line pt-6">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-2 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function LegalNotices() {
  return (
    <div className="min-h-screen text-ink">
      <div className="mx-auto max-w-2xl px-5 py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink"
        >
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>

        <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Mentions légales
        </h1>
        <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        <p className="mt-6 text-sm text-muted">
          <span className="font-semibold text-ink">Loi applicable :</span> Articles
          6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans
          l'Économie Numérique.
        </p>

        <div className="mt-8 space-y-8">
          <Section title="1. Éditeur du site">
            <p><span className="font-semibold text-ink">Nom :</span> Célia Abbad</p>
            <p><span className="font-semibold text-ink">Email :</span> celia.abd29@gmail.com</p>
            <p>
              <span className="font-semibold text-ink">Site web :</span>{" "}
              <a
                href="https://celia-abbad.com/"
                className="font-semibold text-accent-ink underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                celia-abbad.com
              </a>
            </p>
          </Section>

          <Section title="2. Hébergeur">
            <p><span className="font-semibold text-ink">Hébergeur :</span> o2switch</p>
            <p>222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p>
              L'ensemble du contenu du site (textes, images, logos) est protégé
              par les lois sur la propriété intellectuelle. Toute reproduction
              sans autorisation est interdite.
            </p>
          </Section>

          <Section title="4. Responsabilité">
            <p>
              L'éditeur ne peut être tenu responsable des erreurs ou omissions
              sur le site, ni des dommages liés à son utilisation.
            </p>
          </Section>

          <Section title="5. Liens externes">
            <p>
              Le site peut contenir des liens vers des sites tiers. Nous ne
              sommes pas responsables de leur contenu ou politique de
              confidentialité.
            </p>
          </Section>

          <Section title="6. Droit applicable">
            <p>Les présentes mentions légales sont soumises au droit français.</p>
          </Section>
        </div>

        <Link
          to="/"
          className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 active:scale-[0.98]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
