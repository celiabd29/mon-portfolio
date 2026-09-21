import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = ["IA & Produits", "Développement Web", "Graphisme & UX/UI"];

function ProjectImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-full w-full object-contain object-center" />
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("IA & Produits");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) {
      console.error("❌ VITE_API_URL est undefined !");
      return;
    }
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

  const filteredProjects = projects.filter(
    (project) => !category || project.category === category
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-ink">
      <section id="projets" className="w-full pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Mes projets
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        {/* Catégories */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`w-[250px] rounded-full border px-4 py-2.5 text-center text-sm font-semibold transition duration-200 active:scale-[0.97] ${
                category === c
                  ? "border-ink bg-ink text-white shadow-[0_12px_26px_-14px_rgba(22,35,58,0.6)]"
                  : "border-line bg-surface text-ink hover:border-clay-2"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Carrousel Desktop */}
        <div className="relative mx-auto mt-12 hidden w-full max-w-5xl md:block">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full pb-4"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-[480px] items-center gap-10 rounded-3xl border border-line bg-surface p-6 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
                  <div className="h-full w-1/2 overflow-hidden rounded-2xl border border-line bg-ground">
                    <ProjectImage src={`${API_URL}/uploads/${project.image}`} alt={project.title} />
                  </div>
                  <div className="flex h-full w-1/2 flex-col justify-between">
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-accent-ink">
                        Technologies
                      </p>
                      <ul className="mb-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <li
                            key={i}
                            className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-semibold text-ink"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:brightness-105 active:scale-[0.97]"
                        >
                          En savoir plus →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute -left-16 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-clay-3 transition-transform duration-200 ease-out-quint hover:scale-110 hover:text-ink active:scale-95">
            <ChevronLeft className="h-12 w-12" />
          </div>
          <div className="custom-next absolute -right-16 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-clay-3 transition-transform duration-200 ease-out-quint hover:scale-110 hover:text-ink active:scale-95">
            <ChevronRight className="h-12 w-12" />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center py-12 md:hidden">
          <div className="relative mx-auto w-full max-w-md">
            <div className="swiper-pagination-mobile mb-4 flex justify-center space-x-2" />
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ nextEl: ".custom-next-mobile", prevEl: ".custom-prev-mobile" }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-mobile",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              spaceBetween={20}
              slidesPerView={1}
              className="w-full"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="mx-auto w-[88%] rounded-3xl border border-line bg-surface px-4 py-5 shadow-[0_24px_50px_-34px_rgba(28,46,74,0.5)]">
                    <div className="mb-4 h-[220px] w-full overflow-hidden rounded-2xl border border-line bg-ground">
                      <ProjectImage src={`${API_URL}/uploads/${project.image}`} alt={project.title} />
                    </div>
                    <h3 className="mb-2 text-center font-display text-lg font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-accent-ink">
                      Technologies
                    </p>
                    <ul className="mb-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="rounded-lg border border-line bg-ground px-2.5 py-1 text-xs font-semibold text-ink"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto block w-fit rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:brightness-105 active:scale-[0.97]"
                      >
                        En savoir plus →
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-prev-mobile absolute -left-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-clay-3 transition-transform duration-200 ease-out-quint hover:scale-110 active:scale-95">
              <ChevronLeft className="h-7 w-7" />
            </div>
            <div className="custom-next-mobile absolute -right-3 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-clay-3 transition-transform duration-200 ease-out-quint hover:scale-110 active:scale-95">
              <ChevronRight className="h-7 w-7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
