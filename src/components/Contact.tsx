import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

  const field =
    "w-full my-2 rounded-2xl border border-line bg-surface px-5 py-3 pr-12 text-ink placeholder-muted/60 transition-colors duration-150 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-ink">
      <section id="contact" className="w-full max-w-2xl pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Contactez-moi
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>
        <p className="mx-auto mt-8 mb-10 max-w-xl text-center text-muted">
          En recherche d'une alternance Master IA / Data à partir de novembre
          2026. Ouverte aussi aux échanges freelance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-[30px] border border-line bg-surface p-6 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)] md:p-8"
        >
          <label htmlFor="name" className="ml-4 text-sm font-medium text-ink">
            Nom
          </label>
          <div className="relative">
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className={field} required />
            <Icon icon="bx:user" className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-muted" />
          </div>

          <label htmlFor="email" className="ml-4 mt-4 block text-sm font-medium text-ink">
            Email
          </label>
          <div className="relative">
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className={field} required />
            <Icon icon="mdi:email-outline" className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-muted" />
          </div>

          <label htmlFor="message" className="ml-4 mt-4 block text-sm font-medium text-ink">
            Message
          </label>
          <div className="relative">
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`${field} h-28 resize-none rounded-[24px]`} required />
            <Icon icon="tabler:message" className="absolute right-4 top-6 -translate-y-1/2 text-xl text-muted" />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-accent py-3.5 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition duration-200 hover:brightness-105 active:scale-[0.99]"
          >
            Envoyer
          </button>
          {response && <p className="mt-3 text-center text-sm font-medium text-muted">{response}</p>}
        </form>
      </section>

      {/* Recommandations */}
      <section id="testimonials" className="w-full pt-24 md:pt-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Recommandations
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mt-12 flex justify-center">
          <div className="max-w-md rounded-[30px] border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]">
            <Icon icon="mingcute:quote-left-fill" className="text-3xl text-accent/70" />
            <p className="mt-3 italic leading-relaxed text-muted">
              Célia s'impose comme une collaboratrice polyvalente. Son
              investissement total, sa flexibilité entre le front-end et le
              back-end, et son aptitude à relever des défis techniques en font un
              véritable couteau suisse du web.
            </p>
            <p className="mt-4 font-bold text-ink">
              Calypso Imbert <span className="font-medium text-muted">· 10MentionWeb</span>
            </p>
            <a
              href="/Lettre_de_recommandation_Celia_ABBAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-semibold text-accent-ink underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              Voir la lettre de recommandation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
