import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsFeatured from "../components/ProjectsFeatured";
import Projects from "../components/Projects";
import Impact from "../components/Impact";
import Competences from "../components/Competences";
import Parcours from "../components/Parcours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-ink">
      <HeroSection />
      <ProjectsFeatured />
      <Projects />
      <Impact />
      <Competences />
      <Parcours />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
