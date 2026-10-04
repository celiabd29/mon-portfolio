// Logo "AC" de Célia, vectorisé depuis public/logo-couleur.webp.
// Bandes géométriques droites : tout en marine, sauf la grande diagonale
// centrale (le fût partagé du A et du C) en corail (accent Tailwind).
// `color` pilote la couleur marine (ex. blanc sur fond sombre).
const CORAL = "#f5714e";

export default function Logo({ color = "#16233a", className = "", title = "AC" }) {
  return (
    <svg
      viewBox="0 0 446 344"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jambe gauche du A ("/") */}
      <path d="M105 31 L168 31 L112 308 L49 308 Z" fill={color} />
      {/* Barre haute du C */}
      <path d="M230 31 L401 31 L401 88 L250 88 Z" fill={color} />
      {/* Barre basse du C */}
      <path d="M300 252 L401 252 L401 308 L319 308 Z" fill={color} />
      {/* Grande diagonale centrale ("\") — fût partagé A + C */}
      <path d="M178 31 L230 31 L319 308 L267 308 Z" fill={CORAL} />
    </svg>
  );
}
