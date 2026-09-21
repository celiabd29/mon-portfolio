import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:gap-0">
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/c%C3%A9lia-abbad-13801829a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-muted transition duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/celiabd29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-muted transition duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <FaGithub />
          </a>
        </div>

        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-clay-2 to-ink text-[13px] font-extrabold text-white">
            AC
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Célia Abbad
          </span>
        </a>

        <div className="flex flex-col items-center gap-1 text-sm text-muted md:items-end">
          <a href="/politique-de-confidentialite" className="transition hover:text-ink">
            Politique de confidentialité
          </a>
          <a href="/mentions-legales" className="transition hover:text-ink">
            Mentions légales
          </a>
        </div>
      </div>
      <div className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Célia Abbad · Tous droits réservés
      </div>
    </footer>
  );
}
