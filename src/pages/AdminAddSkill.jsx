// AdminAddSkill.jsx
import React, { useState } from "react";
import axios from "axios";

const AdminAddSkill = () => {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Ajoute une image !");

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("categorie", categorie);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:4000/api/skills", formData);
      alert("Compétence ajoutée !");
      setNom("");
      setCategorie("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l’ajout");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Catégorie"
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Ajouter la compétence
      </button>
    </form>
  );
};

export default AdminAddSkill;
