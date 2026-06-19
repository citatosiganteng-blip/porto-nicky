"use client";

import { motion } from "framer-motion";
import { ExternalLink, QrCode, Smartphone, Database, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const techTags = ["Laravel", "PHP", "WhatsApp API", "QR Code", "MySQL", "Bootstrap"];

const projectFeatures = [
  { icon: <QrCode size={16} />, text: "QR Code Generation & Scanning" },
  { icon: <FaWhatsapp size={16} />, text: "WhatsApp Gateway Integration" },
  { icon: <Smartphone size={16} />, text: "Mobile-responsive UI" },
  { icon: <Database size={16} />, text: "Real-time Attendance Records" },
];

export default function FeaturedProject() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 border-2 border-[var(--border-color)]/20 px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-syne)" }}>
          Featured Project
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "var(--font-syne)" }}>
          The one I&apos;m proud of 💼
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="neo-card rounded-2xl overflow-hidden bg-[var(--card-bg-white)]"
      >
        {/* Project visual header */}
        <div className="relative bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#1e1b4b] p-10 flex items-center justify-center min-h-[220px] border-b-2 border-[var(--border-color)]">
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Central mockup */}
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-20 h-20 bg-[var(--card-bg-white)] rounded-2xl border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] flex items-center justify-center">
              <QrCode size={40} className="text-[#10b981]" />
            </div>
            <div className="text-left">
              <div className="text-white font-extrabold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>
                AbsenQR
              </div>
              <div className="text-white/80 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Attendance × WhatsApp
              </div>
            </div>
            <div className="hidden md:flex w-16 h-16 bg-[var(--black)] rounded-2xl border-2 border-white items-center justify-center">
              <FaWhatsapp size={28} className="text-[#10b981]" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute top-4 right-4 bg-[var(--card-bg-white)]/95 backdrop-blur-sm border-2 border-[var(--border-color)] rounded-xl px-3 py-1.5 text-xs font-bold text-[var(--black)] shadow-[2px_2px_0px_var(--shadow-color)]" style={{ fontFamily: "var(--font-syne)" }}>
            🎓 Final Project
          </div>
          <div className="absolute bottom-4 left-4 bg-[var(--black)] text-[var(--bg-base)] rounded-xl px-3 py-1.5 text-xs font-bold border-2 border-[var(--bg-base)]" style={{ fontFamily: "var(--font-syne)" }}>
            ✓ Shipped
          </div>
        </div>

        {/* Project info */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold mb-2 text-[var(--black)]" style={{ fontFamily: "var(--font-syne)" }}>
                QR Code Attendance System × WhatsApp Gateway
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                A smart attendance system that generates unique QR codes for each session. Students scan
                the code to mark attendance, and the system automatically sends real-time confirmation
                notifications via WhatsApp. Built to streamline university attendance tracking.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {projectFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <span className="text-[#10b981]">{feature.icon}</span>
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3 py-1.5 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg-subtle)] text-[var(--black)] shadow-[2px_2px_0px_var(--shadow-color)]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats + CTA */}
            <div className="flex flex-col gap-3 md:min-w-[180px]">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {[
                  { label: "Status", value: "🟢 Live" },
                  { label: "Type", value: "Web App" },
                  { label: "Stack", value: "Full-Stack" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[var(--card-bg-subtle)] border-2 border-[var(--border-color)]/20 rounded-xl p-3">
                    <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold" style={{ fontFamily: "var(--font-syne)" }}>
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold text-[var(--black)]" style={{ fontFamily: "var(--font-syne)" }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/projects"
                className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] px-5 py-3 rounded-xl text-sm gap-2 w-full hover:bg-[var(--card-bg-subtle)]"
              >
                <ArrowUpRight size={16} />
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
