import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

// Projets deja mis en avant en dur dans ProjectsFeatured : on les exclut de la
// liste dynamique pour eviter les doublons.
const FEATURED = ["mania", "prospecteur", "urbanflow"];

function ProjectImage({ src, alt }) {
  return <img src={src} alt={alt} className="h-full w-full object-contain object-center" />;
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => ({
          ...p,
          technologies: Array.isArray(p.technologies)
            ? p.technologies
            : p.technologies.split(",").map((t) => t.trim()),
        }));
        setProjects(formatted);
      })
      .catch((error) => console.error("❌ Erreur de fetch Projects :", error));
  }, [API_URL]);

  const others = projects.filter(
    (p) => !FEATURED.some((f) => (p.title || "").toLowerCase().includes(f))
  );

  if (others.length === 0) return null;

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-ink">
      <section id="autres-projets" className="w-full pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Autres projets
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="relative mx-auto mt-10 w-full max-w-5xl">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={1}
            className="w-full pb-4"
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {others.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-5 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
                  <div className="mb-4 h-44 w-full overflow-hidden rounded-2xl border border-line bg-ground">
                    <ProjectImage src={`${API_URL}/uploads/${project.image}`} alt={project.title} />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-semibold text-ink">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-fit rounded-full bg-accent px-5 py-2 pt-2 text-sm font-semibold text-white transition hover:brightness-105 active:scale-[0.97]"
                    >
                      En savoir plus →
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute -left-12 top-1/2 z-40 hidden -translate-y-1/2 cursor-pointer text-clay-3 transition hover:text-ink md:block">
            <ChevronLeft className="h-9 w-9" />
          </div>
          <div className="custom-next absolute -right-12 top-1/2 z-40 hidden -translate-y-1/2 cursor-pointer text-clay-3 transition hover:text-ink md:block">
            <ChevronRight className="h-9 w-9" />
          </div>
        </div>
      </section>
    </div>
  );
}
