import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("Développement Web");
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => ({
          ...p,
          technologies: Array.isArray(p.technologies)
            ? p.technologies
            : p.technologies.split(",").map((t) => t.trim()),
        }));
        setProjects(formatted);
      });
  }, []);

  const filteredProjects = projects.filter(
    (project) => !category || project.category === category
  );

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 relative">
      <section id="projets">
        <h2 className="relative text-center text-6xl md:text-8xl font-bold top-12 text-violet-400 opacity-30 md:top-16">
          PORTFOLIO
        </h2>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl tracking-wide font-medium">
            MES PROJETS
          </h2>
          <div className="border-b-2 border-white w-[9rem] mt-6 mb-10" />
        </div>
        {/* Catégories */}
        <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6 mt-4 mb-8">
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

        {/* Carrousel Desktop */}
        <div className="hidden md:block w-full max-w-6xl max-h-5xl relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="w-full"
            spaceBetween={50}
            slidesPerView={1}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center h-[480px] bg-[#121212] border border-white rounded-2xl p-6 space-x-10 shadow-lg">
                  {/* Image du projet */}
                  <div className="w-1/2 h-full border border-white rounded-xl overflow-hidden">
                    <img
                      src={`http://localhost:4000/uploads/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contenu du projet */}
                  <div className="w-1/2 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-violet-300 mb-1 font-semibold">
                        Technologies utilisées :
                      </p>
                      <ul className="list-disc ml-5 text-sm text-white mb-4">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-violet-400 text-black px-6 py-2 rounded-full hover:bg-violet-300 transition"
                        >
                          En savoir plus
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flèches en dehors */}
          <div className="custom-prev absolute -left-[6rem] top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 transition">
            <ChevronLeft className="text-white w-16 h-16" />
          </div>
          <div className="custom-next absolute -right-[6rem] top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 transition">
            <ChevronRight className="text-white w-16 h-16" />
          </div>
        </div>

        {/* Version Mobile : Carrousel Swiper */}
        <div className="flex flex-col justify-center items-center text-white bg-black py-10">
          <div className="md:hidden w-full relative max-w-md mx-auto">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next-mobile",
                prevEl: ".custom-prev-mobile",
              }}
              spaceBetween={20}
              slidesPerView={1}
              className="w-full"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#121212] border border-white rounded-2xl p-4 shadow-lg flex flex-col items-center">
                    {/* Image */}
                    <div className="w-full h-[200px] border border-white rounded-xl overflow-hidden mb-5">
                      <img
                        src={`${API_URL}/uploads/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg font-bold text-white text-center mb-1">
                      {project.title}
                    </h3>

                    {/* Sous-titre ou résumé */}
                    <p className="text-gray-300 text-sm text-center mb-4">
                      {project.subtitle ||
                        "Un site e-commerce dédié aux cosmétiques naturels"}
                    </p>

                    {/* Description */}
                    <div className="text-sm text-gray-300 text-justify mb-5 px-1">
                      {project.description}
                    </div>

                    {/* Technologies */}
                    <div className="w-full text-sm text-white mb-5">
                      <p className="text-violet-300 font-semibold mb-1">
                        Technologies utilisées :
                      </p>
                      <ul className="list-disc list-inside">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Bouton */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-violet-400 text-black font-semibold text-sm px-6 py-2 rounded-full hover:bg-violet-300 transition"
                      >
                        En savoir plus
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flèches mobile */}
            <div className="custom-prev-mobile absolute -left-[2rem] top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 transition">
              <ChevronLeft className="text-white w-7 h-7" />
            </div>
            <div className="custom-next-mobile absolute -right-[2rem] top-1/2 -translate-y-1/2 z-50 cursor-pointer hover:scale-110 transition">
              <ChevronRight className="text-white w-7 h-7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
