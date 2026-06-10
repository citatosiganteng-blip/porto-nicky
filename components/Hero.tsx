"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
      {/* Animated background blobs with soft premium hues */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="animate-blob absolute top-20 -left-20 w-96 h-96 bg-emerald-200/30 opacity-40 blur-3xl"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />
        <div
          className="animate-blob absolute top-40 right-10 w-80 h-80 bg-indigo-200/20 opacity-30 blur-3xl"
          style={{
            animationDelay: "3s",
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          }}
        />
        <div
          className="animate-blob absolute bottom-20 left-1/3 w-72 h-72 bg-amber-100/30 opacity-35 blur-3xl"
          style={{
            animationDelay: "6s",
            borderRadius: "50% 40% 60% 30% / 40% 50% 60% 70%",
          }}
        />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 rounded-full border-4 border-[var(--border-color)] bg-[var(--card-bg-subtle)] shadow-[6px_6px_0px_var(--shadow-color)] md:shadow-[8px_8px_0px_var(--shadow-color)] overflow-hidden group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_var(--shadow-color)] transition-all duration-200"
        >
          <Image
            src="/profile.jpg"
            alt="Muhammad Nicky Ar Ilham"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 144px, 176px"
            priority
          />
        </motion.div>

        {/* Available badge */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg-white)] text-[var(--black)] shadow-[3px_3px_0px_var(--shadow-color)] mb-8 text-sm font-medium"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
          </span>
          Available for new projects · 2026 🚀
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Nicky</span> 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-3xl font-medium text-[var(--black)] opacity-70 mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          I build{" "}
          <span className="italic font-bold text-[var(--black)]">
            delightful web stuff
          </span>{" "}
          & write code by the{" "}
          <span className="font-bold underline decoration-wavy decoration-[#10b981]">
            vibes 🎧
          </span>
        </motion.p>

        {/* Bio */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Full-Stack Developer, university student, and passionate vibe coder with{" "}
          <strong className="text-[var(--black)]">3+ years</strong> of crafting
          modern web applications. I love turning complex ideas into clean,
          functional, and beautiful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="neo-btn bg-[#10b981] text-white px-6 py-3 rounded-xl text-sm gap-2 hover:bg-[#059669]"
          >
            See my work
            <ArrowDown size={16} />
          </a>
          <a
            href="https://github.com/nickyilham"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-[var(--black)] text-[var(--bg-base)] px-6 py-3 rounded-xl text-sm gap-2 hover:opacity-90"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href="mailto:nickyilham@gmail.com"
            className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] px-6 py-3 rounded-xl text-sm gap-2 hover:opacity-90"
          >
            <Mail size={16} />
            Email me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-[var(--text-muted-more)]"
        >
          <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
