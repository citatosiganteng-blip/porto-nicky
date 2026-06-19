"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const statusColors: Record<Project["status"], string> = {
  Live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "In Progress": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Archived: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const statusDot: Record<Project["status"], string> = {
  Live: "bg-emerald-500",
  "In Progress": "bg-amber-500",
  Archived: "bg-zinc-400",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <article className="neo-card bg-[var(--card-bg-white)] rounded-2xl overflow-hidden flex flex-col h-full min-h-[280px] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150">
          {/* Accent bar */}
          <div
            className="h-1.5 w-full shrink-0"
            style={{ backgroundColor: project.accentColor }}
          />

          <div className="p-5 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] border border-[var(--border-color)]/20 px-2 py-0.5 rounded-full mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-base font-extrabold leading-snug text-[var(--black)] group-hover:text-[var(--black)] transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 opacity-30 group-hover:opacity-100 transition-opacity mt-0.5"
                style={{ color: project.accentColor }}
              />
            </div>

            {/* Description */}
            <p
              className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3 flex-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--border-color)]/20 bg-[var(--card-bg-subtle)] text-[var(--black)]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--border-color)]/20 bg-[var(--card-bg-subtle)] text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              {/* Status */}
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${statusColors[project.status]}`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                {project.status}
              </span>

              {/* Year + Github */}
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold text-[var(--text-muted-more)]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.year}
                </span>

              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
