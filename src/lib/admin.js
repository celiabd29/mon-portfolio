// Utilitaires pour les pages d'administration.
// Le token admin n'est JAMAIS inclus dans le bundle : l'admin le saisit une
// fois (il est mémorisé en localStorage), et il est envoyé dans l'en-tête
// Authorization: Bearer sur les routes protégées du backend.
export const API = import.meta.env.VITE_API_URL ?? "";

const KEY = "adminToken";

export function getAdminToken({ prompt = true } = {}) {
  let token = "";
  try {
    token = localStorage.getItem(KEY) || "";
  } catch {
    token = "";
  }
  if (!token && prompt) {
    token = (window.prompt("Token d'administration :") || "").trim();
    if (token) {
      try {
        localStorage.setItem(KEY, token);
      } catch {
        // stockage indisponible : on enverra le token sans le mémoriser
      }
    }
  }
  return token;
}

export function clearAdminToken() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // rien à faire
  }
}

// fetch avec l'en-tête d'authentification admin.
// Sur 401, on oublie le token mémorisé pour en redemander un au prochain appel.
export async function adminFetch(url, options = {}) {
  const token = getAdminToken();
  const headers = { ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { ...options, headers });
  if (res.status === 401) {
    clearAdminToken();
    alert("Token d'administration invalide ou manquant.");
  }
  return res;
}
