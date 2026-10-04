import { useCallback, useEffect, useRef, useState } from "react";

// Panneau qui monte du bas de l'écran (mobile) pour discuter avec Bip.
// Ferme : Échap, tap sur le fond, glissement vers le bas sur la poignée.
// Le focus revient sur le déclencheur (géré par le parent via onClose).
const CLOSE_MS = 260;
const DRAG_TO_CLOSE = 90;

export default function BipSheet({ onClose, children, label = "Discuter avec Bip" }) {
  const [shown, setShown] = useState(false);
  const [dragY, setDragY] = useState(0);
  const panelRef = useRef(null);
  const drag = useRef({ startY: 0, active: false });

  // Monte le panneau juste après le montage
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const close = useCallback(() => {
    setShown(false);
    setDragY(0);
    setTimeout(onClose, CLOSE_MS);
  }, [onClose]);

  // Échap + verrou du scroll de la page + focus dans le panneau
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [close]);

  // Glissement vers le bas sur la poignée
  const onTouchStart = (e) => {
    drag.current = { startY: e.touches[0].clientY, active: true };
  };
  const onTouchMove = (e) => {
    if (!drag.current.active) return;
    const dy = e.touches[0].clientY - drag.current.startY;
    setDragY(dy > 0 ? dy : 0);
  };
  const onTouchEnd = () => {
    drag.current.active = false;
    if (dragY > DRAG_TO_CLOSE) close();
    else setDragY(0);
  };

  const dragging = drag.current.active;

  return (
    <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label={label}>
      {/* Fond semi-opaque */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panneau */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="absolute inset-x-0 bottom-0 flex h-[75vh] flex-col rounded-t-[28px] border-t border-line bg-ground pb-[env(safe-area-inset-bottom)] shadow-[0_-18px_40px_-20px_rgba(28,46,74,0.5)] outline-none"
        style={{
          transform: shown ? `translateY(${dragY}px)` : "translateY(100%)",
          transition: dragging ? "none" : `transform ${CLOSE_MS}ms cubic-bezier(0.22,1,0.36,1)`,
        }}
      >
        {/* Poignée pour fermer en glissant */}
        <button
          type="button"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-label="Fermer"
          className="flex w-full shrink-0 touch-none justify-center pt-3 pb-1"
        >
          <span className="h-1.5 w-11 rounded-full bg-clay-2" />
        </button>

        {/* Contenu : Bip complet (bulle, vidéo, suggestions, champ collé en bas) */}
        <div className="flex min-h-0 flex-1 flex-col items-center gap-3 overflow-y-auto px-5 pb-4 pt-1">
          {children}
        </div>
      </div>
    </div>
  );
}
