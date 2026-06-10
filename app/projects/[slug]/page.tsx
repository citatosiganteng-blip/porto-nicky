import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Muhammad Nicky Ar Ilham`,
    description: project.description,
  };
}

const statusColors = {
  Live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "In Progress": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Archived: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const statusDot = {
  Live: "bg-emerald-500",
  "In Progress": "bg-amber-500",
  Archived: "bg-zinc-400",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 bg-[var(--bg-base)] text-[var(--black)]">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        {/* Accent Banner */}
        <div
          className="w-full h-2 rounded-full mb-8"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-2 border-[var(--border-color)]/20 px-3 py-1 rounded-full"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${statusColors[project.status]}`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
              {project.status}
            </span>
            <span
              className="text-xs font-bold text-[var(--text-muted-more)] ml-auto"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {project.year}
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {project.title}
          </h1>

          <p
            className="opacity-70 text-lg leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {project.description}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[var(--black)] text-[var(--bg-base)] px-5 py-2.5 rounded-xl text-sm gap-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <FaGithub size={15} />
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] px-5 py-2.5 rounded-xl text-sm gap-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <hr className="border-t-2 border-[var(--border-color)]/10 mb-8" />

        {/* Long Description */}
        <div className="mb-10">
          <h2
            className="text-xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            About this project
          </h2>
          <p
            className="text-[var(--text-muted)] leading-relaxed text-base"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2
            className="text-xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="neo-card bg-[var(--card-bg-white)] rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <span
                  className="flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                <span
                  className="text-sm font-medium text-[var(--black)]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2
            className="text-xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-bold px-3 py-1.5 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg-subtle)] text-[var(--black)] shadow-[2px_2px_0px_var(--shadow-color)]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
