import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import APropos from "./pages/APropos";
import Contact from "./components/Contact";
import CaseStudy from "./pages/CaseStudy";
import PrivacyPolicy from "./pages/Politique";
import LegalNotices from "./pages/Mentions";
import AdminAddProject from "./pages/AdminAddProject";
import AdminAddSkill from "./pages/AdminAddSkill";
import AdminMessage from "./pages/AdminMessage";
import AdminLogin from "./pages/AdminLogin";
import RequireAdmin from "./components/RequireAdmin";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  // Réveille le backend Render (qui s'endort) au premier chargement de la session.
  // Ping silencieux : on n'attend pas la réponse et on ignore les erreurs.
  useEffect(() => {
    try {
      const base = import.meta.env.VITE_API_URL;
      if (base && !sessionStorage.getItem("backend-wake")) {
        sessionStorage.setItem("backend-wake", "1");
        fetch(`${base}/health`, { cache: "no-store" }).catch(() => {});
      }
    } catch {
      // sessionStorage indisponible (navigation privée, etc.) : on ignore
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Pages publiques avec nav + footer partagés */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<CaseStudy />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Pages autonomes */}
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/projet"
          element={
            <RequireAdmin>
              <AdminAddProject />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/skill"
          element={
            <RequireAdmin>
              <AdminAddSkill />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/message"
          element={
            <RequireAdmin>
              <AdminMessage />
            </RequireAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
