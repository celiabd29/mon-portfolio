import React, { useEffect, useState } from "react";

export default function AdminAddSkill() {
  const [formData, setFormData] = useState({ name: "", category: "", image: null });
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
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleEdit = (skill) => {
    setFormData({ name: skill.name, category: skill.category, image: null });
    setEditingId(skill._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) data.append(key, formData[key]);
    }
    const endpoint = editingId
      ? `http://localhost:4000/skills/${editingId}`
      : "http://localhost:4000/skills/add";
    const method = editingId ? "PUT" : "POST";
    const res = await fetch(endpoint, { method, body: data });
    const result = await res.json();
    alert(result.message || "Action réussie !");
    setFormData({ name: "", category: "", image: null });
    setEditingId(null);
    fetchSkills();
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Supprimer cette compétence ?")) return;
    const res = await fetch(`http://localhost:4000/skills/${id}`, { method: "DELETE" });
    const result = await res.json();
    alert(result.message);
    fetchSkills();
  };

  const field =
    "w-full rounded-full border border-line bg-white px-5 py-3 text-ink placeholder-muted/60 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center px-6 py-14 text-ink">
      <h1 className="mb-2 font-display text-4xl font-extrabold tracking-tight">Ajouter une compétence</h1>
      <div className="mb-10 h-1 w-16 rounded-full bg-accent" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-5 rounded-3xl border border-line bg-surface p-8 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]"
      >
        <input name="name" placeholder="Nom de la compétence" value={formData.name} onChange={handleChange} className={field} required />
        <select name="category" value={formData.category} onChange={handleChange} required className={field}>
          <option value="" disabled>Choisir une catégorie</option>
          <option value="Développement Web">Développement Web</option>
          <option value="Graphisme & UX/UI">Graphisme & UX/UI</option>
        </select>
        <input name="image" type="file" accept="image/*" onChange={handleChange} required={!editingId}
          className="w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-ground file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink hover:file:bg-line" />
        <button type="submit" className="w-full rounded-full bg-accent py-3 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105">
          {editingId ? "Modifier" : "Ajouter"} la compétence
        </button>
      </form>

      <h2 className="mb-6 mt-14 font-display text-2xl font-bold tracking-tight">Compétences existantes</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill._id} className="flex flex-col items-center rounded-2xl border border-line bg-surface p-4 shadow-[0_20px_40px_-30px_rgba(28,46,74,0.5)]">
            <img src={`http://localhost:4000/uploads/${skill.image}`} alt={skill.name} className="mb-3 h-16 w-16 object-contain" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm text-muted">{skill.category}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => handleEdit(skill)} className="rounded-full bg-amber-400 px-4 py-1 text-sm font-medium text-ink transition hover:bg-amber-500">
                Modifier
              </button>
              <button onClick={() => deleteSkill(skill._id)} className="rounded-full bg-red-500 px-4 py-1 text-sm font-medium text-white transition hover:bg-red-600">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
