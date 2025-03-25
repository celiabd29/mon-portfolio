import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Politique";
import LegalNotices from "./pages/Mentions";
import AdminAddProject from "./pages/AdminAddProject";
import AdminAddSkill from "./pages/AdminAddSkill";
import Projects from "./components/Projects";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page principale */}
        <Route path="/" element={<Home />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPolicy />}
        />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/admin/projet" element={<AdminAddProject />} />
        <Route path="/admin/skill" element={<AdminAddSkill />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
