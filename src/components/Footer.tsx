// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white mb-[3rem] py-6 px-4 flex flex-col items-center md:flex-row md:justify-between">
//       {/* Réseaux sociaux */}
//       <div className="flex space-x-6 mb-4 md:mb-0">
//         <a
//           href="https://www.linkedin.com/in/c%C3%A9lia-abbad-13801829a/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white text-2xl hover:text-gray-400"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/celiabd29"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white text-2xl hover:text-gray-400"
//         >
//           <FaGithub />
//         </a>
//       </div>

//       {/* Logo */}
//       <div className="flex justify-center">
//         <img
//           src="src/assets/logo-couleur.webp"
//           alt="Logo"
//           className="w-auto h-20"
//         />
//       </div>

//       {/* Mentions légales */}
//       <div className="mt-4 md:mt-0 flex flex-col text-center md:text-right">
//         <a href="/politique-de-confidentialite" className="hover:text-gray-400">
//           Politique de confidentialité
//         </a>
//         <a href="/mentions-legales" className="hover:text-gray-400">
//           Mentions légales
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="mt-4 text-sm md:bottom-4 md:left-1/2 md:-translate-x-1/2">
//         © {new Date().getFullYear()} Célia ABBAD | Tous droits réservés
//       </div>
//     </footer>
//   );
// }
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8 border-t border-white mt-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto space-y-6 md:space-y-0">
        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 md:justify-start">
          <a
            href="https://www.linkedin.com/in/c%C3%A9lia-abbad-13801829a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-violet-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/celiabd29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-violet-300 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Logo au centre */}
        <div className="flex justify-center md:ml-[7rem]">
          <img
            src="src/assets/logo-couleur.webp"
            alt="Logo"
            className="h-16 w-auto md:h-20"
          />
        </div>

        {/* Mentions légales à droite */}
        <div className="flex flex-col items-center md:items-end text-sm space-y-1">
          <a
            href="/politique-de-confidentialite"
            className="hover:text-violet-300 transition"
          >
            Politique de confidentialité
          </a>
          <a
            href="/mentions-legales"
            className="hover:text-violet-300 transition"
          >
            Mentions légales
          </a>
        </div>
      </div>

      {/* Copyright en bas centré */}
      <div className="mt-6 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Célia ABBAD | Tous droits réservés
      </div>
    </footer>
  );
}
