import React, { useState, useEffect } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState("Développement Web");
  const API_URL = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   fetch("http://localhost:4000/skills/")
  //     .then((res) => res.json())
  //     .then((data) => setSkills(data))
  //     .catch((error) => console.error("❌ Erreur :", error));
  // }, []);

  useEffect(() => {
    if (!API_URL) {
      console.error("❌ VITE_API_URL est undefined !");
      return;
    }

    fetch(`${API_URL}/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("❌ Erreur de fetch :", error));
  }, []);

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 bottom-30">
      {/* Texte en fond "COMPÉTENCES" */}
      <section id="competences">
        <h2 className="relative text-center text-6xl md:text-8xl font-bold top-12 text-violet-400 opacity-30 md:top-16">
          COMPÉTENCES
        </h2>

        {/* Titre central */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl tracking-wide font-medium">
            LANGAGES/LOGICIELS
          </h2>
          <div className="border-b-2 border-white w-[9rem] mt-6"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center text-white bg-black py-10">
          <div className="flex flex-col space-y-4 md:mr-10">
            <button
              className={`px-4 py-2 rounded-full border ${
                category === "Développement Web" ? "bg-white text-black" : ""
              }`}
              onClick={() => setCategory("Développement Web")}
            >
              Développement Web
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${
                category === "Graphisme & UX/UI" ? "bg-white text-black" : ""
              }`}
              onClick={() => setCategory("Graphisme & UX/UI")}
            >
              Graphisme & UX/UI
            </button>
          </div>
          <span className="hidden md:block h-[10rem] border-l border-gray-400"></span>
          <div className="grid grid-cols-4 mr-4 md:grid-cols-6 gap-6 mt-8 place-items-center">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`${API_URL}/uploads/${skill.image}`}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2">{skill.name}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
