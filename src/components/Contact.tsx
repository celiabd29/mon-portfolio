import React, { useState } from "react";
import { Icon } from "@iconify/react";

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
      {/* Texte en fond "CONTACT" */}
      <section id="contact">
        <h2 className="relative text-center text-6xl md:text-8xl font-bold top-12 text-violet-400 opacity-30 md:top-16">
          CONTACT
        </h2>

        {/* Titre central */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl tracking-wide font-medium">
            CONTACTEZ-MOI
          </h2>
          <div className="border-b-2 border-white w-[9rem] mt-6"></div>
        </div>
        <p className="font-raleway text-white text-center mt-10 mb-10 mx-4">
          À l'écoute d'opportunités en développement web, freelance ou
          alternance. Contactez-moi !
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full  md:w-1/2 bg-black md:mb-8 border-2 rounded-[30px] p-6 md:p-[2rem]"
        >
          <label className="text-white font-raleway mt-4 ml-4 text-lg">
            Nom
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <Icon
              icon="bx:user"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl"
            />
          </div>

          <label className="text-white font-raleway mt-4 ml-4 text-lg">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <Icon
              icon="mdi:email-outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
            />
          </div>

          <label className="text-white font-raleway mt-4 ml-4 text-lg">
            Message
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full my-2 px-5 py-3 pr-12 border border-white rounded-[40px] bg-transparent text-white placeholder-gray-400 focus:outline-none h-28 resize-none"
              required
            ></textarea>
            <Icon
              icon="tabler:message"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full mb-6 my-2 py-3 bg-violet-400 text-black font-medium rounded-full hover:bg-violet-300 transition"
          >
            Envoyer
          </button>
          {response && (
            <p className="text-white mt-2 text-center">{response}</p>
          )}
        </form>
      </section>
    </div>
  );
}
