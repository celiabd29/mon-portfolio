import { useEffect } from "react";

// Ajoute <meta name="robots" content="noindex, nofollow"> pendant que la page
// admin est montée, puis le retire. Empêche l'indexation de ces pages.
export default function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
}
