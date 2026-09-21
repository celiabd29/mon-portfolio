import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";

const CATEGORIES = [
  "IA & Automatisation",
  "Développement Web",
  "Graphisme & UX/UI",
];

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState("IA & Automatisation");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) {
      console.error("❌ VITE_API_URL est undefined !");
      return;
    }
    fetch(`${API_URL}/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("❌ Erreur de fetch :", error));
  }, [API_URL]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-ink">
      <section id="competences" className="w-full pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Compétences
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 active:scale-[0.97] ${
                  category === c
                    ? "border-ink bg-ink text-white shadow-[0_12px_26px_-14px_rgba(22,35,58,0.6)]"
                    : "border-line bg-surface text-ink hover:border-clay-2"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <span className="hidden h-40 border-l border-line md:block" />

          <div className="grid grid-cols-4 place-items-center gap-6 md:grid-cols-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl border border-line bg-surface px-3 py-4 shadow-[0_14px_30px_-22px_rgba(28,46,74,0.5)] transition-transform duration-200 ease-out-quint hover:-translate-y-1"
                >
                  <img
                    src={`${API_URL}/uploads/${skill.image}`}
                    alt={skill.name}
                    className="h-12 w-12 object-contain"
                  />
                  <p className="mt-2 text-xs font-medium text-muted">{skill.name}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
