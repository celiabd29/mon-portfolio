import React from "react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// import "../output.css";

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
