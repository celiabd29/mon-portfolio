import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 bottom-30">
      {/* Texte en fond "QUI SUIS-JE ?" */}
      <h2 className="relative text-6xl md:text-8xl font-bold top-12 text-violet-400 opacity-30 md:top-16">
        QUI SUIS-JE ?
      </h2>

      {/* Titre central */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl tracking-wide font-medium">
          PRÉSENTATION
        </h2>
        <div className="border-b-2 border-white w-[9rem] mt-6"></div>
      </div>

      {/* Texte de présentation dans la carte */}
      <div className="mt-14 p-6 border border-violet-300 rounded-xl text-center max-w-md md:max-w-4xl">
        <p className="text-md">
          Je suis Célia Abbad, développeuse web en formation à Digital Campus
          Paris, passionnée par la création de sites modernes, intuitifs et
          performants. Avec une expérience en freelance, j’ai déjà réalisé
          plusieurs projets, du site vitrine au e-commerce, en mettant un point
          d'honneur à allier design, accessibilité et performance.
        </p>

        <p className="mt-4 text-md">
          Actuellement à la recherche d’une alternance à partir de septembre
          2025, je souhaite approfondir mes compétences en développement
          front-end et back-end, en travaillant sur des projets concrets et
          innovants.
        </p>

        <p className="mt-4 text-md">
          Ce qui m’anime ? Concevoir des expériences digitales engageantes,
          apprendre continuellement et relever des défis techniques.
        </p>
      </div>

      <div className=" bg-black text-white flex flex-col items-center py-12 mt-6">
        {/* Titre */}
        <h2 className="text-2xl font-medium mb-10">MES FORMATIONS</h2>

        {/* Timeline - Mobile First */}
        <div className="relative flex flex-col items-start md:hidden">
          <div className="absolute w-1 bg-white h-full left-[2rem] transform -translate-x-1/2"></div>
          {/* Étape 1 */}

          <div className="flex items-center gap-4 mb-10 z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <img
                src="/icons/bachelor.svg"
                alt="Dev Icon"
                className="w-8 h-8 text-violet-500"
              />
            </div>
            <div>
              <p className="text-sm font-medium">2023-2026</p>
              <p className="text-lg font-semibold">
                Bachelor Développement Web
              </p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex items-center gap-4 mb-10 z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <img
                src="/icons/licence.svg"
                alt="University Icon"
                className="w-8 h-8 text-violet-500"
              />
            </div>
            <div>
              <p className="text-sm font-medium">2021-2023</p>
              <p className="text-lg font-semibold">Licence MIASHS</p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex items-center gap-4 z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <img
                src="/icons/diplome.svg"
                alt="Graduation Icon"
                className="w-8 h-8 text-violet-500"
              />
            </div>
            <div>
              <p className="text-sm font-medium">2020-2021</p>
              <p className="text-lg font-semibold">Bac Général</p>
            </div>
          </div>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:flex flex-col items-center relative w-full max-w-4xl">
          <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Étape 1 */}
          <div className="flex items-center w-full mb-12">
            <div className="w-1/2 text-right pr-10">
              <p className="text-lg font-medium">2023-2026</p>
              <p className="text-xl font-bold">Bachelor Développement Web</p>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <img
                src="/icons/bachelor.svg"
                alt="Dev Icon"
                className="w-14 h-14 text-violet-500"
              />
            </div>
            <div className="w-1/2 text-left pl-10">
              <p className="mt-2 py-2 px-4 border rounded-full text-center text-lg w-3xl">
                Formation en alternance à Digital Campus Paris
              </p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex items-center w-full mb-12">
            <div className="w-1/2 text-right pr-10">
              <p className="mt-2 py-2 px-4 border rounded-full text-center text-lg w-3xl">
                Double licence en maths-informatique et économie-gestion à
                l’Université Paris Nanterre
              </p>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <img
                src="/icons/licence.svg"
                alt="University Icon"
                className="w-14 h-14 text-violet-500"
              />
            </div>
            <div className="w-1/2 text-left pl-10">
              <p className="text-lg font-medium">2021-2023</p>
              <p className="text-xl font-bold">Licence MIASHS</p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 text-right pr-10">
              <p className="text-lg font-medium">2020-2021</p>
              <p className="text-xl font-bold">Bac Général</p>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <img
                src="/icons/diplome.svg"
                alt="Graduation Icon"
                className="w-14 h-14 text-violet-500"
              />
            </div>
            <div className="w-1/2 text-left pl-10">
              <p className="mt-2 py-2 px-4 border rounded-full text-center text-lg w-3xl">
                Spécialités maths, SVT et physique-chimie au lycée Henri Bergson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
