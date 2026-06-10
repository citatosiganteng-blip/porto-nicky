"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="neo-card bg-[#18181b] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
      >
        {/* BG pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6366f1] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/50 mb-4 border border-white/20 px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-syne)" }}>
            Get in touch
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Let&apos;s collab 🤝
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Got a project in mind? Or just want to say hi? I&apos;m always open to discussing
            new opportunities, collaborations, or interesting ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:nickyilham@gmail.com"
              className="neo-btn bg-[#10b981] text-white px-8 py-3.5 rounded-xl text-sm gap-2 border-2 border-[#10b981] hover:border-white hover:bg-[#059669]"
            >
              <Mail size={16} />
              Send an email
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/nickyilham"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-white/10 text-white px-8 py-3.5 rounded-xl text-sm gap-2 border-2 border-white/30 hover:bg-white/20 hover:border-white"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>

          <p className="mt-8 text-white/30 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Usually replies within 24 hours ⚡
          </p>
        </div>
      </motion.div>
    </section>
  );
}
