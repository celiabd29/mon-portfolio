import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from "react";

function Section({ title, children }) {
  return (
    <section className="border-t border-line pt-6">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
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
          Politique de confidentialité
        </h1>
        <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        <p className="mt-6 text-sm text-muted">
          <span className="font-semibold text-ink">Dernière mise à jour :</span> 21/03/2025
        </p>

        <div className="mt-8 space-y-8">
          <Section title="1. Introduction">
            <p>
              Votre confidentialité est importante pour nous. Cette politique
              explique comment nous collectons, utilisons et protégeons vos
              informations personnelles lorsque vous visitez notre site web{" "}
              <strong className="font-semibold text-ink">celia-abbad.com</strong>.
            </p>
          </Section>

          <Section title="2. Données collectées">
            <ul className="list-inside list-disc space-y-1">
              <li>Formulaire de contact : nom, email et message.</li>
              <li>Cookies et technologies similaires : données analytiques anonymes.</li>
            </ul>
          </Section>

          <Section title="3. Utilisation des données">
            <p>Vos données sont utilisées uniquement pour :</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Répondre à vos demandes via le formulaire de contact.</li>
              <li>Améliorer la navigation et analyser les performances du site.</li>
            </ul>
          </Section>

          <Section title="4. Stockage et sécurité des données">
            <p>
              Vos données sont stockées en toute sécurité et ne sont jamais
              revendues à des tiers.
            </p>
          </Section>

          <Section title="5. Droits des utilisateurs">
            <p>Conformément au RGPD, vous avez le droit de :</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Accéder à vos données.</li>
              <li>Demander leur modification ou suppression.</li>
              <li>Vous opposer à leur traitement.</li>
            </ul>
            <p>
              Pour toute demande, contactez-nous à :{" "}
              <strong className="font-semibold text-ink">celia.abd29@gmail.com</strong>.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Nous utilisons des cookies pour améliorer l'expérience utilisateur.
              Vous pouvez les désactiver via les paramètres de votre navigateur.
            </p>
          </Section>

          <Section title="7. Contact">
            <p>
              Si vous avez des questions concernant cette politique, vous pouvez
              nous contacter à :{" "}
              <strong className="font-semibold text-ink">celia.abd29@gmail.com</strong>.
            </p>
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
