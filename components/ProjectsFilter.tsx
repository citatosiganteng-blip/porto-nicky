"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsFilterProps {
  projects: Project[];
  categories: string[];
}

export default function ProjectsFilter({ projects, categories }: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`neo-btn px-4 py-2 rounded-xl text-sm transition-all duration-150 ${
              activeCategory === cat
                ? "bg-[var(--black)] text-[var(--bg-base)]"
                : "bg-[var(--card-bg-white)] text-[var(--black)] hover:bg-[var(--card-bg-subtle)]"
            }`}
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            {cat}
            <span className="ml-1.5 text-[10px] font-normal opacity-60">
              {cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[var(--text-muted)]">
          <p className="text-4xl mb-3">🫙</p>
          <p className="font-bold" style={{ fontFamily: "var(--font-syne)" }}>
            No projects in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
