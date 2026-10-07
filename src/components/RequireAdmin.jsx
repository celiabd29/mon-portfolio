import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { hasAdminToken, clearAdminToken, LOGIN_PATH } from "../lib/admin";
import useNoIndex from "../lib/useNoIndex";

// Protège les pages d'administration :
// - redirige vers la connexion si aucun token n'est présent
// - affiche un bouton de déconnexion
// - empêche l'indexation (noindex)
export default function RequireAdmin({ children }) {
  useNoIndex();
  const navigate = useNavigate();

  if (!hasAdminToken()) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  const logout = () => {
    clearAdminToken();
    navigate(LOGIN_PATH, { replace: true });
  };

  return (
    <div className="min-h-screen bg-ground">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 pt-6">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-ink">
          Espace admin
        </span>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:border-clay-2"
        >
          Se déconnecter
        </button>
      </div>
      {children}
    </div>
  );
}
