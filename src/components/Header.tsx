import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icônes burger et fermeture
import Logo from "../assets/logo-couleur.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // État du menu mobile

  return (
    <header className="fixed top-4 left-0 w-full bg-black text-white flex items-center px-6 py-6 z-50">
      {/* Logo */}
      <div className="relative w-full flex justify-center right-[10px]">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Menu Burger */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FiX size={30} className="text-white fill-white" />
        ) : (
          <FiMenu size={30} className="text-white fill-white" />
        )}
      </button>

      {/* Menu Mobile (s'affiche quand `isOpen` est vrai) */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-xl space-y-6 z-50">
          <a
            href="#about"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Présentation
          </a>
          <a
            href="#skills"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Compétences
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
