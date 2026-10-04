import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

// Bip : la mascotte qui répond aux questions sur le parcours de Célia.
// États : salut (une fois à l'arrivée) -> repos (boucle) -> reflechit -> parle -> repos
// variant="full"    : version complète (bulle, vidéo, suggestions, champ) — desktop + panneau mobile
// variant="compact" : version repliée (vidéo + bulle côte à côte, tappable) — hero mobile
const CLIPS = {
  salut: { file: "bip-salut", loop: false, still: "robot-salut" },
  repos: { file: "bip-repos", loop: true, still: "robot-face" },
  reflechit: { file: "bip-reflechit", loop: true, still: "robot-reflechit" },
  parle: { file: "bip-parle", loop: true, still: "robot-parle" },
};
const BASE = "/robot/";
const API_URL = `${import.meta.env.VITE_API_URL ?? ""}/bip/ask`;
const GREETING = "Salut, moi c'est Bip ! Pose-moi une question sur Célia.";
const SUGGESTIONS = [
  "C'est quoi son parcours ?",
  "Sur quels projets elle a travaillé ?",
  "Elle cherche quoi comme alternance ?",
];
const FALLBACK =
  "Oups, je n'arrive pas à répondre pour l'instant. Tu peux écrire directement à Célia depuis la page Contact.";
const MAX_LEN = 300;

function useReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = (e) => setReduced(e.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function Bip({
  className = "",
  variant = "full",
  fill = false,
  onOpen,
  triggerRef,
}) {
  const reduced = useReducedMotion();
  const [state, setState] = useState("salut");
  const [text, setText] = useState("");
  const [asked, setAsked] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const videos = useRef({});
  const typer = useRef(null);

  // Joue la vidéo de l'état actif, met les autres en pause
  useEffect(() => {
    if (reduced) return;
    Object.entries(videos.current).forEach(([key, video]) => {
      if (!video) return;
      if (key === state) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [state, reduced]);

  // Texte qui s'affiche progressivement, comme si Bip parlait
  function typeText(full, onDone) {
    clearInterval(typer.current);
    if (reduced) {
      setText(full);
      onDone?.();
      return;
    }
    let i = 0;
    setText("");
    typer.current = setInterval(() => {
      i += 2;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typer.current);
        onDone?.();
      }
    }, 28);
  }

  useEffect(() => {
    typeText(GREETING);
    return () => clearInterval(typer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function ask(raw) {
    const q = raw.trim().slice(0, MAX_LEN);
    if (!q || loading) return;
    setAsked(q);
    setQuestion("");
    setShowSuggestions(false);
    setShowLinks(false);
    setLoading(true);
    setState("reflechit");
    clearInterval(typer.current);
    setText("");

    let answer = FALLBACK;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 45000);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.answer === "string" && data.answer.trim()) answer = data.answer.trim();
      }
    } catch {
      // réseau coupé, serveur endormi ou timeout : on garde le message de secours
    }

    setLoading(false);
    setState("parle");
    typeText(answer, () => {
      setShowLinks(true);
      setTimeout(() => setState((s) => (s === "parle" ? "repos" : s)), 1500);
    });
  }

  // La mascotte (vidéos ou image statique) — partagée entre les variantes
  const mascot = reduced ? (
    <img
      src={`${BASE}${CLIPS[state].still}.png`}
      alt=""
      className="absolute inset-0 h-full w-full object-contain p-4"
    />
  ) : (
    Object.entries(CLIPS).map(([key, clip]) => (
      <video
        key={key}
        ref={(el) => (videos.current[key] = el)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          key === state ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
        loop={clip.loop}
        poster={key === "repos" ? `${BASE}bip-repos-poster.jpg` : undefined}
        onEnded={key === "salut" ? () => setState("repos") : undefined}
        disablePictureInPicture
        tabIndex={-1}
      >
        <source src={`${BASE}${clip.file}.webm`} type="video/webm" />
        <source src={`${BASE}${clip.file}.mp4`} type="video/mp4" />
      </video>
    ))
  );

  const maskStyle = {
    WebkitMaskImage:
      "radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%)",
    maskImage:
      "radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%)",
  };

  // ───────────────────────── Variante repliée (hero mobile) ─────────────────────────
  if (variant === "compact") {
    return (
      <button
        ref={triggerRef}
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label="Discuter avec Bip, l'assistant de Célia"
        className={`flex w-full items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      >
        <span
          className="relative aspect-square w-[110px] shrink-0"
          aria-hidden="true"
          style={maskStyle}
        >
          {mascot}
        </span>
        <span className="relative flex-1 rounded-[18px] rounded-bl-md border border-line bg-surface px-4 py-3 text-[13.5px] leading-snug text-ink shadow-[0_14px_28px_-20px_rgba(28,46,74,0.5)]">
          <span className="line-clamp-3">{text || GREETING}</span>
          {/* pointe orientée vers Bip (à gauche) */}
          <span
            aria-hidden="true"
            className="absolute -left-[6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 rounded-[2px] border-b border-l border-line bg-surface"
          />
        </span>
      </button>
    );
  }

  // ───────────────────────── Variante complète (desktop + panneau) ─────────────────────────
  return (
    <div
      className={`flex w-full max-w-[400px] flex-col items-center gap-3 ${
        fill ? "h-full" : ""
      } ${className}`}
    >
      {/* Bulle */}
      <div className="relative w-full">
        <div
          className="max-h-[220px] overflow-y-auto rounded-[20px] border border-line bg-surface px-5 py-4 text-[15px] leading-relaxed text-ink shadow-[0_18px_34px_-20px_rgba(28,46,74,0.5)]"
          aria-live="polite"
        >
          {asked && (
            <p className="mb-1.5 text-[13px] text-muted">
              Ta question : « {asked} »
            </p>
          )}
          {loading ? (
            <span className="flex h-6 items-center gap-1.5" role="status" aria-label="Bip réfléchit">
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="h-2 w-2 rounded-full bg-muted motion-safe:animate-bounce"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </span>
          ) : (
            <p className="min-h-6 whitespace-pre-line">{text}</p>
          )}
          {showLinks && (
            <div className="mt-3 flex flex-wrap gap-4 text-[14px] font-semibold">
              <Link to="/projets" className="text-accent-ink underline-offset-4 hover:underline">
                Voir ses projets
              </Link>
              <Link to="/contact" className="text-accent-ink underline-offset-4 hover:underline">
                La contacter
              </Link>
            </div>
          )}
        </div>
        <span
          aria-hidden="true"
          className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-[3px] border-b border-r border-line bg-surface"
        />
      </div>

      {/* Bip */}
      <div
        className="relative aspect-square w-[140px] md:w-[300px]"
        aria-hidden="true"
        style={maskStyle}
      >
        {mascot}
      </div>

      {/* Suggestions : au focus du champ, ou d'emblée dans le panneau mobile */}
      {(showSuggestions || (fill && !asked)) && !loading && (
        <div className="flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => ask(s)}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:border-clay-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Champ de question */}
      <form
        className={`flex w-full items-center gap-2 rounded-full border border-line bg-surface p-1.5 pl-5 shadow-[0_14px_28px_-18px_rgba(28,46,74,0.45)] focus-within:border-clay-2 ${
          fill ? "mt-auto" : ""
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          ask(question);
        }}
      >
        <label htmlFor="bip-question" className="sr-only">
          Pose une question à Bip sur le parcours de Célia
        </label>
        <input
          id="bip-question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          maxLength={MAX_LEN}
          placeholder="Pose-moi une question..."
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-muted focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          aria-label="Envoyer la question"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-white transition hover:brightness-105 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </form>
    </div>
  );
}
