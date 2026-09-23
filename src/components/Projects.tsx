import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Projets deja mis en avant en dur dans ProjectsFeatured : on les exclut.
const FEATURED = ["mania", "prospecteur", "urbanflow"];

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("❌ Erreur de fetch Projects :", error));
  }, [API_URL]);

  const others = projects.filter(
    (p) => !FEATURED.some((f) => (p.title || "").toLowerCase().includes(f))
  );

  if (others.length === 0) return null;

  return (
    <div className="mx-auto max-w-6xl px-5 text-ink">
      <section id="autres-projets" className="pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Autres projets
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 max-w-xl text-center text-muted">
            Quelques sites clients conçus en freelance, sous WordPress (Full Site
            Editing).
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => {
            const Card = project.link ? "a" : "div";
            const props = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={index}>
                <Card
                  {...props}
                  className="group block overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_44px_-32px_rgba(28,46,74,0.5)] transition duration-300 hover:-translate-y-1 hover:border-clay-2 hover:shadow-[0_28px_56px_-30px_rgba(28,46,74,0.5)]"
                >
                  {/* Barre navigateur */}
                  <div className="flex items-center gap-1.5 border-b border-line bg-ground px-3 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-clay-2" />
                    <span className="h-2 w-2 rounded-full bg-clay-2" />
                    <span className="h-2 w-2 rounded-full bg-clay-2" />
                    {project.link && (
                      <span className="ml-2 truncate text-[11px] font-medium text-muted">
                        {hostOf(project.link)}
                      </span>
                    )}
                  </div>

                  {/* Capture */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-ground">
                    <img
                      src={`${API_URL}/uploads/${project.image}`}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Pied */}
                  <div className="flex items-center justify-between gap-2 px-4 py-3.5">
                    <span className="font-display text-base font-bold tracking-tight">
                      {project.title}
                    </span>
                    {project.link && (
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-ink transition group-hover:gap-1.5">
                        Voir le site <ArrowUpRight size={15} />
                      </span>
                    )}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
