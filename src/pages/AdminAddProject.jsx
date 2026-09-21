import React, { useState, useEffect } from "react";

export default function AdminAddProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
    category: "",
    image: null,
  });
  const [projects, setProjects] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchProjects = async () => {
    const res = await fetch("https://portfolio-v2-nw18.onrender.com/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      link: project.link,
      category: project.category,
      image: null,
    });
    setEditingId(project._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) data.append(key, formData[key]);
    }
    try {
      const endpoint = editingId
        ? `https://portfolio-v2-nw18.onrender.com/projects/${editingId}`
        : "https://portfolio-v2-nw18.onrender.com/projects/add";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(endpoint, { method, body: data });
      const result = await res.json();
      alert(result.message || "Action réussie !");
      fetchProjects();
      setFormData({
        title: "",
        description: "",
        technologies: "",
        link: "",
        category: "",
        image: null,
      });
      setEditMode(false);
      setEditingId(null);
    } catch (err) {
      alert("Erreur lors de l'envoi");
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Supprimer ce projet ?")) return;
    try {
      const res = await fetch(`https://portfolio-v2-nw18.onrender.com/projects/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      alert(result.message);
      fetchProjects();
    } catch (err) {
      alert("Erreur lors de la suppression");
    }
  };

  const field =
    "w-full rounded-full border border-line bg-white px-5 py-3 text-ink placeholder-muted/60 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-14 text-ink">
      <h1 className="mb-2 font-display text-4xl font-extrabold tracking-tight">Ajouter un projet</h1>
      <div className="mb-10 h-1 w-16 rounded-full bg-accent" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-5 rounded-3xl border border-line bg-surface p-8 shadow-[0_30px_60px_-40px_rgba(28,46,74,0.5)]"
      >
        <input name="title" placeholder="Titre" value={formData.title} className={field} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} className={`${field} resize-none rounded-2xl`} onChange={handleChange} required />
        <input name="technologies" placeholder="Technos (ex : React, MongoDB)" value={formData.technologies} className={field} onChange={handleChange} required />
        <input name="link" placeholder="Lien du projet" value={formData.link} className={field} onChange={handleChange} required />
        <select name="category" value={formData.category} onChange={handleChange} required className={field}>
          <option value="" disabled>Choisir une catégorie</option>
          <option value="Développement Web">Développement Web</option>
          <option value="Graphisme & UX/UI">Graphisme & UX/UI</option>
        </select>
        <input name="image" type="file" accept="image/*" onChange={handleChange} required
          className="w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-ground file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink hover:file:bg-line" />
        <button type="submit" className="w-full rounded-full bg-accent py-3 font-semibold text-white shadow-[0_14px_28px_-12px_rgba(245,113,78,0.7)] transition hover:brightness-105">
          {editingId ? "Modifier le projet" : "Ajouter le projet"}
        </button>
      </form>

      <h2 className="mb-6 mt-14 font-display text-2xl font-bold tracking-tight">Projets existants</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project._id} className="rounded-2xl border border-line bg-surface p-4 shadow-[0_20px_40px_-30px_rgba(28,46,74,0.5)]">
            <img
              src={`https://portfolio-v2-nw18.onrender.com/uploads/${project.image}`}
              alt={project.title}
              className="mb-3 h-40 w-full rounded-xl border border-line object-cover"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted">{project.description}</p>
            <p className="mt-2 text-sm font-semibold text-accent-ink">{project.technologies}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => handleEdit(project)} className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-ink transition hover:bg-amber-500">
                Modifier
              </button>
              <button onClick={() => deleteProject(project._id)} className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
