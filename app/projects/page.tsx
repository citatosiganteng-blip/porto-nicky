import { getAllProjects, getProjectCategories } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import ProjectsFilter from "@/components/ProjectsFilter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects — Muhammad Nicky Ar Ilham",
  description:
    "A full collection of projects by Muhammad Nicky Ar Ilham — full-stack web apps,an Vibe Codder, tools, and experiments built with Laravel, Next.js, React, and more.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 bg-[var(--bg-base)] text-[var(--black)]">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 border-2 border-[var(--border-color)]/20 px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Portfolio
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            All Projects 🗂️
          </h1>
          <p
            className="opacity-70 text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Things I&apos;ve built — from university assignments to real-world production apps.
            Each project is a step forward in my journey as a full-stack developer.
          </p>
        </div>

        {/* Filter + Grid */}
        <ProjectsFilter projects={projects} categories={categories} />
      </div>
    </main>
  );
}
