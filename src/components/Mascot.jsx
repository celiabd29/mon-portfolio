import React from "react";

/**
 * Perso signature "assistant IA" en clay (stand-in vectoriel du futur rendu 3D).
 * Materiau bleu-gris, un point d'accent corail sur l'antenne, visage calme.
 */
export default function Mascot({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 340"
      role="img"
      aria-label="Assistant IA, personnage signature"
    >
      <defs>
        <linearGradient id="mascot-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6edf5" />
          <stop offset="0.55" stopColor="#c6d5e6" />
          <stop offset="1" stopColor="#a7bdd4" />
        </linearGradient>
        <linearGradient id="mascot-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26374f" />
          <stop offset="1" stopColor="#16233a" />
        </linearGradient>
        <radialGradient id="mascot-cheek" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f5714e" stopOpacity="0.5" />
          <stop offset="1" stopColor="#f5714e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line x1="160" y1="40" x2="160" y2="72" stroke="#8aa4c0" strokeWidth="6" strokeLinecap="round" />
      <circle cx="160" cy="34" r="10" fill="#f5714e" />
      <rect x="34" y="176" width="34" height="86" rx="17" fill="url(#mascot-body)" />
      <rect x="252" y="176" width="34" height="86" rx="17" fill="url(#mascot-body)" />
      <rect x="58" y="70" width="204" height="210" rx="52" fill="url(#mascot-body)" />
      <rect x="88" y="104" width="144" height="118" rx="34" fill="url(#mascot-screen)" />
      <circle cx="132" cy="158" r="12" fill="#eaf1f8" />
      <circle cx="188" cy="158" r="12" fill="#eaf1f8" />
      <circle cx="135" cy="161" r="4" fill="#16233a" />
      <circle cx="191" cy="161" r="4" fill="#16233a" />
      <path d="M138 188 q22 20 44 0" stroke="#eaf1f8" strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="112" cy="196" r="16" fill="url(#mascot-cheek)" />
      <circle cx="208" cy="196" r="16" fill="url(#mascot-cheek)" />
      <rect x="96" y="276" width="46" height="24" rx="12" fill="#a7bdd4" />
      <rect x="178" y="276" width="46" height="24" rx="12" fill="#a7bdd4" />
      <circle cx="222" cy="250" r="7" fill="#2fbf71" />
    </svg>
  );
}
