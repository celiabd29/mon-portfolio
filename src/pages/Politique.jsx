import { Link } from "react-router-dom";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-violet-400 text-center">
        Politique de Confidentialité
      </h1>

      <div className="mt-6 max-w-4xl text-gray-300 text-lg space-y-6">
        <p className="text-center md:text-left">
          <span className="font-semibold">Dernière mise à jour :</span>{" "}
          21/03/2025
        </p>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">1. Introduction</h2>
          <p>
            Votre confidentialité est importante pour nous. Cette politique
            explique comment nous collectons, utilisons et protégeons vos
            informations personnelles lorsque vous visitez notre site web{" "}
            <strong>celia-abbad.com</strong>.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            2. Données collectées
          </h2>
          <ul className="list-disc list-inside">
            <li>Formulaire de contact : Nom, email et message.</li>
            <li>
              Cookies et technologies similaires : Données analytiques anonymes.
            </li>
          </ul>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            3. Utilisation des données
          </h2>
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul className="list-disc list-inside">
            <li>Répondre à vos demandes via le formulaire de contact.</li>
            <li>
              Améliorer la navigation et analyser les performances du site.
            </li>
          </ul>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            4. Stockage et Sécurité des données
          </h2>
          <p>
            Vos données sont stockées en toute sécurité et ne sont jamais
            revendues à des tiers.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            5. Droits des utilisateurs
          </h2>
          <p>Conformément au RGPD, vous avez le droit de :</p>
          <ul className="list-disc list-inside">
            <li>Accéder à vos données.</li>
            <li>Demander leur modification ou suppression.</li>
            <li>Vous opposer à leur traitement.</li>
          </ul>
          <p>
            Pour toute demande, contactez-nous à :{" "}
            <strong>contact@celia-abbad.com</strong>.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">6. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer l’expérience utilisateur.
            Vous pouvez les désactiver via les paramètres de votre navigateur.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">7. Contact</h2>
          <p>
            Si vous avez des questions concernant cette politique, vous pouvez
            nous contacter à :<strong> contact@celia-abbad.com</strong>.
          </p>
        </section>
      </div>

      <Link
        to="/"
        className="mt-8 bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
