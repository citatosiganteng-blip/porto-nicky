"use client";

import { User, GraduationCap, Code2, Briefcase } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: <Code2 size={14} />, label: "Years coding", value: "3+" },
  { icon: <Briefcase size={14} />, label: "Projects", value: "10+" },
  { icon: <GraduationCap size={14} />, label: "Style", value: "Vibe Coder" },
];

export default function AboutCard() {
  return (
    <div className="neo-card bg-[var(--card-about)] text-[var(--black)] rounded-2xl p-5 flex flex-col justify-between h-full min-h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-syne)" }}>
          About Me
        </span>
        <User size={16} className="opacity-50" />
      </div>

      <div>
        <p className="text-sm opacity-80 leading-relaxed mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
          University student building real-world apps with good music and positive vibes. I love turning ideas into{" "}
          <strong className="text-[var(--black)]">clean, fast, and beautiful</strong> digital products.
        </p>
        <Link href="/about" className="inline-block text-xs font-bold text-[#10b981] hover:underline mb-3" style={{ fontFamily: "var(--font-syne)" }}>
          Read full bio →
        </Link>

        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--card-bg-white)]/80 border border-[var(--black)]/10 rounded-xl p-2 text-center"
            >
              <div className="flex justify-center mb-1 opacity-60">{stat.icon}</div>
              <p className="text-base font-extrabold" style={{ fontFamily: "var(--font-syne)" }}>
                {stat.value}
              </p>
              <p className="text-[10px] opacity-50 leading-tight" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
