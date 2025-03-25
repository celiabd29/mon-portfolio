import { Link } from "react-router-dom";
import React from "react";

export default function LegalNotices() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-violet-400 text-center">
        Mentions Légales
      </h1>

      <div className="mt-6 max-w-4xl text-gray-300 text-lg space-y-6">
        <p className="text-center md:text-left">
          <span className="font-semibold">Loi applicable :</span> Articles 6-III
          et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans
          l'Économie Numérique.
        </p>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            1. Éditeur du site
          </h2>
          <p>
            <span className="font-semibold">Nom :</span> Célia ABBAD
          </p>
          <p>
            <span className="font-semibold">Email :</span>{" "}
            contact@celia-abbad.com
          </p>
          <p>
            <span className="font-semibold">Site Web :</span>{" "}
            <a
              href="https://celia-abbad.com/"
              className="text-violet-400 hover:underline"
            >
              celia-abbad.com
            </a>
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">2. Hébergeur</h2>
          <p>
            <span className="font-semibold">Hébergeur :</span> o2switch
          </p>
          <p>222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            3. Propriété intellectuelle
          </h2>
          <p>
            L’ensemble du contenu du site (textes, images, logos) est protégé
            par les lois sur la propriété intellectuelle. Toute reproduction
            sans autorisation est interdite.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            4. Responsabilité
          </h2>
          <p>
            L’éditeur ne peut être tenu responsable des erreurs ou omissions sur
            le site, ni des dommages liés à son utilisation.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            5. Liens externes
          </h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Nous ne sommes
            pas responsables de leur contenu ou politique de confidentialité.
          </p>
        </section>

        <section className="border-t border-gray-600 pt-6">
          <h2 className="text-xl font-bold text-violet-400">
            6. Droit applicable
          </h2>
          <p>Les présentes mentions légales sont soumises au droit français.</p>
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
