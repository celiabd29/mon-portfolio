// Utilitaires pour les pages d'administration.
// Le token admin n'est JAMAIS inclus dans le bundle ni dans localStorage :
// il est saisi sur la page de connexion, gardé en sessionStorage (effacé à la
// fermeture de l'onglet) et envoyé dans l'en-tête Authorization: Bearer sur les
// routes protégées du backend.
export const API = import.meta.env.VITE_API_URL ?? "";

const KEY = "adminToken";
export const LOGIN_PATH = "/admin/login";

export function getAdminToken() {
  try {
    return sessionStorage.getItem(KEY) || "";
  } catch {
    return "";
  }
}

export function setAdminToken(token) {
  try {
    sessionStorage.setItem(KEY, token);
  } catch {
    // stockage indisponible : on ne peut pas mémoriser le token
  }
}

export function clearAdminToken() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // rien à faire
  }
}

export function hasAdminToken() {
  return !!getAdminToken();
}

// fetch avec l'en-tête d'authentification admin.
// Sur 401 : on efface le token et on renvoie vers la page de connexion.
export async function adminFetch(url, options = {}) {
  const token = getAdminToken();
  const headers = { ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { ...options, headers });
  if (res.status === 401) {
    clearAdminToken();
    if (
      typeof window !== "undefined" &&
      window.location.pathname !== LOGIN_PATH
    ) {
      window.location.assign(LOGIN_PATH);
    }
  }
  return res;
}
