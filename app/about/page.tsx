"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, GraduationCap, Briefcase, Code2, Heart, Music, Coffee, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "2025 - Present",
    title: "Exploring the Next Level",
    company: "Personal Projects & Open Source",
    description: "Deep diving into the Next.js and TypeScript ecosystems. Exploring performance optimizations, static generation strategies, React 19 canary capabilities, and sleek user interface micro-interactions using Framer Motion.",
    icon: <Code2 size={16} />,
  },
  {
    year: "2023 - 2024",
    title: "The Full-Stack Shift",
    company: "University & Freelance",
    description: "Expanded horizons by learning React and frontend state management. Built real-world systems, including a QR-code attendance management system integrated with a WhatsApp API Gateway for real-time alerts.",
    icon: <Briefcase size={16} />,
  },
  {
    year: "2021 - 2023",
    title: "Building the Foundations",
    company: "Academics & Core Development",
    description: "Began my professional coding journey. Mastered PHP, Laravel, MVC design patterns, relational database schema design (MySQL/PostgreSQL), RESTful API construction, and server-side logic.",
    icon: <GraduationCap size={16} />,
  },
];

const skills = {
  Languages: ["TypeScript", "JavaScript", "PHP", "SQL", "HTML5", "CSS3"],
  Frameworks: ["Laravel", "Next.js", "React", "Node.js", "Express"],
  "Styling & UI": ["Tailwind CSS", "Bootstrap", "Framer Motion", "Shadcn UI"],
  "Databases & Tools": ["MySQL", "PostgreSQL", "Git", "Docker", "Postman"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-8 px-4 bg-[var(--bg-base)] text-[var(--black)]">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 border-2 border-[var(--border-color)]/20 px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Biography
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            About Me ✦
          </h1>
          <p
            className="opacity-80 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Hi! I am <strong className="text-[var(--black)]">Muhammad Nicky Ar Ilham</strong>. 
            I'm a full-stack developer, university student, and vibe coder based in Indonesia. I love turning 
            complex problems into elegant, fast, and aesthetically pleasing web applications.
          </p>
        </div>

        {/* Bento-like Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neo-card bg-[var(--card-about)] p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Coffee size={18} className="opacity-70" />
                <h3 className="font-extrabold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                  Work Philosophy
                </h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                I believe coding shouldn't just be about making things work—it should be about making them 
                delightful to interact with. I prioritize simplicity, surgical changes, and building 
                digital interfaces that feel smooth and alive.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold opacity-60 italic">
              "Simple is better than complex."
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="neo-card bg-[var(--card-spotify)] p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Music size={18} className="opacity-70" />
                <h3 className="font-extrabold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                  Off-Duty Vibes
                </h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                When I'm not writing code, I'm usually vibing to Lo-fi beats, exploring synthwave playlists, 
                sipping a warm cup of coffee, or researching new technology trends. Music is the fuel for my coding sessions!
              </p>
            </div>
            <div className="mt-4 text-xs font-bold opacity-60 italic">
              "Coding by the vibes 🎧"
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12">
          <h2
            className="text-2xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            My Journey 🚀
          </h2>

          <div className="relative border-l-2 border-[var(--border-color)]/20 pl-6 ml-3 space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Icon marker */}
                <span className="absolute -left-[35px] top-1 w-7 h-7 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-base)] flex items-center justify-center text-[var(--black)] shadow-[2px_2px_0px_var(--shadow-color)]">
                  {item.icon}
                </span>

                <div>
                  <span
                    className="text-xs font-extrabold bg-[var(--black)] text-[var(--bg-base)] px-2.5 py-1 rounded-xl mb-2 inline-block"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="text-lg font-extrabold text-[var(--black)] leading-snug"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h3>
                  <h4
                    className="text-sm font-semibold opacity-65 mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.company}
                  </h4>
                  <p
                    className="text-sm text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2
            className="text-2xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Technical Toolkit 🛠️
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="neo-card bg-[var(--card-bg-white)] p-5 rounded-2xl"
              >
                <h3
                  className="font-extrabold text-sm uppercase tracking-wider mb-3 opacity-60"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold px-3 py-1.5 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg-subtle)] text-[var(--black)] shadow-[2px_2px_0px_var(--shadow-color)]"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
