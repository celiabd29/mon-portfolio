import React, { useState } from "react";
import { Menu, X, Linkedin, Github, Download } from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <div className="bg-black text-white relative">
      {/* Background Icons as Images */}
      <img
        src="src/assets/icons/react-brands.svg"
        alt="React Logo"
        className="absolute top-28 left-8 w-auto h-30 md:h-[8rem] md:left-2/3 md:top-[7rem]"
      />
      <img
        src="src/assets/icons/python-brands(1).svg"
        alt="Python Icon"
        className="absolute top-1/3 right-5 w-auto h-40 md:h-[12rem] md:left-[12rem] md:top-1/3"
      />
      <img
        src="src/assets/icons/node-brands.svg"
        alt="Node Icon"
        className="absolute top-3/4 left-1/4 w-auto h-30 md:h-[6rem] md:left-1/3 md:top-3/4"
      />

      {/* Header */}
      <header className="relative flex items-center justify-center p-6 bg-black fixed w-full z-50">
        <nav className="hidden md:flex flex-1 justify-start gap-10 ml-6">
          <a href="#" className="text-white font-regular hover:text-gray-300">
            PRÉSENTATION
          </a>
          <a href="#" className="text-white font-regular hover:text-gray-300">
            COMPÉTENCES
          </a>
        </nav>
        <div className="flex justify-center items-center w-full">
          <img
            src="src/assets/logo-couleur.webp"
            alt="Logo"
            className="w-auto h-20"
          />
        </div>
        <nav className="hidden md:flex flex-1 justify-end gap-10 mr-6">
          <a href="#" className="text-white font-regular hover:text-gray-300">
            PROJETS
          </a>
          <a href="#" className="text-white font-regular hover:text-gray-300">
            CONTACT
          </a>
          <a href="#" className="text-white font-regular hover:text-gray-300">
            CV
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-auto"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-30 left-0 w-full bg-black p-4 flex flex-col gap-4 z-40 items-center text-center">
          <a href="#" className="text-white text-lg">
            Présentation
          </a>
          <a href="#" className="text-white text-lg">
            Compétences
          </a>
          <a href="#" className="text-white text-lg">
            Projets
          </a>
          <a href="#" className="text-white text-lg">
            Contact
          </a>
        </nav>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-8 mt-[5rem]">
        <div className="mx-auto w-full md:w-1/3">
          <h2 className="text-6xl font-light md:text-start md:text-[5rem]">
            CÉLIA
          </h2>
          <h2 className="text-6xl font-normal mb-4 md:text-end md:text-[5rem]">
            ABBAD
          </h2>
        </div>

        <section className="flex flex-col md:flex-row items-center justify-center text-left p-10 md:items-start md:p-20 mt-18 md:mt-10 gap-6 md:gap-12">
          {/* Titre */}
          <hr className="w-[4rem] border-t-1 my-2 md:hidden" />
          <h1 className="font-raleway text-xl md:text-2xl font-semibold">
            Développeuse Web
          </h1>

          {/* Séparateur */}
          <span className="hidden md:block h-[10rem] border-l border-gray-400"></span>

          {/* Texte */}
          <p className="font-raleway text-center text-md md:text-lg md:text-start max-w-xs md:max-w-lg">
            Bienvenue sur mon portfolio ! Étudiante en développement web à
            Digital Campus Paris, je suis passionnée par la conception de sites
            dynamiques et intuitifs. Actuellement à la recherche d’une
            alternance à partir de septembre 2025, je vous invite à découvrir
            mon travail et mon parcours dans le domaine du digital.
          </p>
        </section>
      </section>

      {/* Barre sticky en bas */}
      <div className="bottom-0 w-full bg-indigo-400 p-4 flex justify-center gap-6 Z-20">
        <a
          href="https://www.linkedin.com/in/c%C3%A9lia-abbad-13801829a/"
          className="text-white "
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/celiabd29/"
          className="text-white ml-4 mr-4"
        >
          <Github size={24} />
        </a>
        <a href="src/assets/CV_Celia_Abbad.pdf" className="text-white">
          <Download size={24} />
        </a>
      </div>
    </div>
  );
}
