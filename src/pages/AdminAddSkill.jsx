import React, { useEffect, useState } from "react";

export default function AdminAddSkill() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: null,
  });
  const [skills, setSkills] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchSkills = async () => {
    const res = await fetch("http://localhost:4000/skills");
    const data = await res.json();
    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleEdit = (skill) => {
    setFormData({
      name: skill.name,
      category: skill.category,
      image: null,
    });
    setEditingId(skill._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    const endpoint = editingId
      ? `http://localhost:4000/skills/${editingId}`
      : "http://localhost:4000/skills/add";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      body: data,
    });

    const result = await res.json();
    alert(result.message || "Action réussie !");
    setFormData({ name: "", category: "", image: null });
    setEditingId(null);
    fetchSkills();
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Supprimer cette compétence ?")) return;

    const res = await fetch(`http://localhost:4000/skills/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    alert(result.message);
    fetchSkills();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-violet-400 mb-10">
        Ajouter une compétence
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-lg space-y-6"
      >
        <input
          name="name"
          placeholder="Nom de la compétence"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-full border border-white bg-transparent placeholder-gray-400 text-white focus:outline-none"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-full border border-white bg-black text-white focus:outline-none"
        >
          <option value="" disabled>
            Choisir une catégorie
          </option>
          <option value="Développement Web">Développement Web</option>
          <option value="Graphisme & UX/UI">Graphisme & UX/UI</option>
        </select>

        <input
          name="image"
          type="file"
          accept="image/*"
          className="text-white mt-2"
          onChange={handleChange}
          required={!editingId}
        />

        <button
          type="submit"
          className="w-full py-3 bg-violet-400 text-black font-semibold rounded-full hover:bg-violet-300 transition"
        >
          {editingId ? "Modifier" : "Ajouter"} la compétence
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-12 mb-6">Compétences existantes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="border border-white/20 bg-neutral-900 p-4 rounded-xl flex flex-col items-center"
          >
            <img
              src={`http://localhost:4000/uploads/${skill.image}`}
              alt={skill.name}
              className="h-16 w-16 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm text-violet-300">{skill.category}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(skill)}
                className="bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500 text-black text-sm"
              >
                Modifier
              </button>
              <button
                onClick={() => deleteSkill(skill._id)}
                className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 text-white text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
