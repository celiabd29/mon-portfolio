import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");

    try {
      const res = await fetch(
        "https://portfolio-v2-nw18.onrender.com/messages/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setResponse("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse(data.error || "Erreur d'envoi.");
      }
    } catch (error) {
      setResponse("Erreur serveur.");
    }
  };
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 bottom-30">
      <section id="contact" className="pt-24 md:pt-32">
        {/* Titre central */}
        <Reveal className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl tracking-wide font-semibold">
            CONTACTEZ-MOI
          </h2>
          <div className="border-b-2 border-white w-[9rem] mt-6"></div>
        </Reveal>
        <p className="font-raleway text-white text-center mt-10 mb-10 mx-auto max-w-2xl px-4">
          En recherche d'une alternance Master IA/Data à partir de novembre
          2026. Ouverte aussi aux échanges freelance.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-black md:mb-8 border-2 rounded-[30px] p-6 md:p-[2rem]"
        >
          <label className="text-white font-raleway mt-4 ml-4 text-md">
            Nom
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors duration-150 ease"
              required
            />
            <Icon
              icon="bx:user"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl"
            />
          </div>

          <label className="text-white font-raleway mt-4 ml-4 text-md">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors duration-150 ease"
              required
            />
            <Icon
              icon="mdi:email-outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
            />
          </div>

          <label className="text-white font-raleway mt-4 ml-4 text-md">
            Message
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-[40px] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors duration-150 ease h-28 resize-none"
              required
            ></textarea>
            <Icon
              icon="tabler:message"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full mb-6 my-2 py-3 bg-accent-400 text-black font-medium rounded-full hover:bg-accent-300 transition duration-200 ease active:scale-[0.99]"
          >
            Envoyer
          </button>
          {response && (
            <p className="text-white mt-2 text-center">{response}</p>
          )}
        </form>
      </section>
      {/* Section témoignages */}
      <section id="testimonials" className="mt-4 mb-10 pt-24 md:pt-32">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl tracking-wide font-semibold text-white">
            RECOMMANDATIONS
          </h2>
          <div className="border-b-2 border-white w-[12rem] mt-6"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          <div className="max-w-md border border-white/40 rounded-[30px] p-6 text-white bg-neutral-900 shadow-lg">
            <p className="italic text-md">
              “Célia s’impose comme une collaboratrice polyvalente. Son
              investissement total, sa flexibilité entre le front-end et le
              back-end, et son aptitude à relever des défis techniques en font
              un véritable couteau suisse du web.”
            </p>
            <p className="mt-4 font-bold text-accent-300">
              Calypso IMBERT, 10MentionWeb
            </p>

            <div className="flex justify-center mt-6">
              <a
                href="/Lettre_de_recommandation_Celia_ABBAD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium underline hover:text-accent-400 transition"
              >
                Voir la lettre de recommandation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
