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
import "swiper/css";
import "swiper/css/navigation";

function App() {
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
        <Route path="/admin/projet" element={<AdminAddProject />} />
        <Route path="/admin/skill" element={<AdminAddSkill />} />
        <Route path="/admin/message" element={<AdminMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
