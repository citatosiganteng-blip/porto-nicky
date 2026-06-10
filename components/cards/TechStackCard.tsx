"use client";

import { Layers } from "lucide-react";
import { SiPhp, SiLaravel, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiMysql, SiTailwindcss, SiNodedotjs, SiGit, SiDocker, SiPostgresql } from "react-icons/si";

const stack = [
  { name: "PHP", icon: <SiPhp size={20} />, color: "#7b7fb5" },
  { name: "Laravel", icon: <SiLaravel size={20} />, color: "#ff2d20" },
  { name: "React", icon: <SiReact size={20} />, color: "#00d8ff" },
  { name: "Next.js", icon: <SiNextdotjs size={20} />, color: "#000000" },
  { name: "TypeScript", icon: <SiTypescript size={20} />, color: "#3178c6" },
  { name: "JavaScript", icon: <SiJavascript size={20} />, color: "#f7df1e" },
  { name: "MySQL", icon: <SiMysql size={20} />, color: "#4479a1" },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} />, color: "#336791" },
  { name: "Tailwind", icon: <SiTailwindcss size={20} />, color: "#38bdf8" },
  { name: "Node.js", icon: <SiNodedotjs size={20} />, color: "#68a063" },
  { name: "Git", icon: <SiGit size={20} />, color: "#f05032" },
  { name: "Docker", icon: <SiDocker size={20} />, color: "#2496ed" },
];

export default function TechStackCard() {
  return (
    <div className="neo-card bg-[var(--card-tech)] text-[var(--black)] rounded-2xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-syne)" }}>
          Tech Stack
        </span>
        <Layers size={16} className="opacity-50" />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-1.5 p-2.5 rounded-xl border-2 border-[var(--black)]/10 bg-[var(--card-bg-white)]/60 hover:bg-[var(--card-bg-white)] hover:border-[var(--black)] hover:shadow-[2px_2px_0px_var(--black)] transition-all duration-200 cursor-default"
          >
            <span style={{ color: tech.color }} className="transition-transform duration-200 group-hover:scale-110">{tech.icon}</span>
            <span
              className="text-[9px] font-bold opacity-70 group-hover:opacity-100 text-center leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
