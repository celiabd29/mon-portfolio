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
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
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
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const endpoint = editingId
        ? `https://portfolio-v2-nw18.onrender.com/projects/${editingId}`
        : "https://portfolio-v2-nw18.onrender.com/projects/add";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        body: data,
      });

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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-violet-400 mb-10">
        Ajouter un projet
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-lg space-y-6"
      >
        <input
          name="title"
          placeholder="Titre"
          value={formData.title}
          className="w-full px-5 py-3 rounded-full border border-white bg-transparent placeholder-gray-400 text-white focus:outline-none"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          className="w-full px-5 py-3 rounded-2xl border border-white bg-transparent placeholder-gray-400 text-white focus:outline-none resize-none"
          onChange={handleChange}
          required
        />
        <input
          name="technologies"
          placeholder="Technos (ex: React, MongoDB)"
          value={formData.technologies}
          className="w-full px-5 py-3 rounded-full border border-white bg-transparent placeholder-gray-400 text-white focus:outline-none"
          onChange={handleChange}
          required
        />
        <input
          name="link"
          placeholder="Lien du projet"
          value={formData.link}
          className="w-full px-5 py-3 rounded-full border border-white bg-transparent placeholder-gray-400 text-white focus:outline-none"
          onChange={handleChange}
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
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-violet-400 text-black font-semibold rounded-full hover:bg-violet-300 transition"
        >
          Ajouter le projet
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-6">Projets existants</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="border border-white p-4 rounded-xl">
            <img
              src={`https://portfolio-v2-nw18.onrender.com/uploads/${project.image}`}
              alt={project.title}
              className="h-40 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <p className="text-violet-400 mt-2 text-sm">
              {project.technologies}
            </p>
            <button
              onClick={() => handleEdit(project)}
              className="mt-2 mr-2 bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 text-black"
            >
              Modifier
            </button>
            <button
              onClick={() => deleteProject(project._id)}
              className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
