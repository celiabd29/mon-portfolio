import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delai en ms, pratique pour decaler des elements voisins (stagger). */
  delay?: number;
  as?: React.ElementType;
};

/**
 * Revele ses enfants (fondu + leger glissement vers le haut) au moment ou ils
 * entrent dans le viewport, une seule fois. On anime uniquement opacity et
 * transform (regle d'or perf) via ease-out (element qui entre a l'ecran).
 * Si l'utilisateur a active "reduire les animations", le contenu s'affiche
 * immediatement, sans transition.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    // Deja dans le viewport au montage (au-dessus de la ligne de flottaison,
    // ou apres un saut d'ancre) : on affiche tout de suite, pas d'attente.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    // Filet de securite : rien ne reste invisible plus de 1,2 s, meme si
    // l'observer ne se declenche pas (saut d'ancre, capture de miniature).
    const failsafe = window.setTimeout(() => setVisible(true), 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-[600ms] ease-out-expo motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
