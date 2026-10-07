import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { setAdminToken, hasAdminToken } from "../lib/admin";
import useNoIndex from "../lib/useNoIndex";

export default function AdminLogin() {
  useNoIndex();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  // Déjà connecté : on va directement à l'espace admin.
  if (hasAdminToken()) {
    return <Navigate to="/admin/projet" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = token.trim();
    if (!value) return;
    setAdminToken(value);
    setToken("");
    navigate("/admin/projet", { replace: true });
  };

  const field =
    "w-full rounded-full border border-line bg-white px-5 py-3 text-ink placeholder-muted/60 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-ink">
      <h1 className="mb-2 font-display text-3xl font-extrabold tracking-tight">
        Connexion admin
      </h1>
      <div className="mb-8 h-1 w-16 rounded-full bg-accent" />

      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 rounded-3xl border border-line bg-surface p-8 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]"
      >
        <label htmlFor="admin-token" className="block text-sm font-semibold">
          Token d'administration
        </label>
        <input
          id="admin-token"
          type="password"
          autoComplete="off"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Colle ton token ici"
          className={field}
        />
        <button
          type="submit"
          disabled={!token.trim()}
          className="w-full rounded-full bg-accent py-3 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105 disabled:opacity-40"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
