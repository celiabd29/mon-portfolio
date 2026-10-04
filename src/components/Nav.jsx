import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NAV = [
  { to: "/", label: "Accueil", end: true },
  { to: "/projets", label: "Projets" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`;

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-5 pt-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-3 py-2.5 pl-5 shadow-[0_12px_30px_-18px_rgba(28,46,74,0.5)] backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Célia Abbad — accueil">
          <Logo className="h-8 w-auto" title="Célia Abbad" />
          <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
            Célia Abbad
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-[14.5px] font-medium md:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition active:scale-90 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-white p-3 text-center shadow-lg animate-fade-in md:hidden">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-ink hover:bg-ground"
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
