import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    fetch("https://api.github.com/users/jpliratavares/repos")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const langs = ["Todos", "Python", "JavaScript", "C"];

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) =>
          (p.language || "").toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section id="projetos" className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-4">Projetos</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {langs.map((lang) => (
          <button
            key={lang}
            onClick={() => setFilter(lang)}
            className={`px-4 py-1 rounded-full border text-sm ${
              filter === lang
                ? "bg-white text-black"
                : "border-gray-500 text-gray-300"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 p-4 rounded-lg bg-[#1b1b1e]"
          >
            <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-2">
              {project.description || "Sem descrição."}
            </p>
            <span className="text-xs text-gray-500 px-2 py-1 rounded bg-gray-800">
              {project.language || "Não informado"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
