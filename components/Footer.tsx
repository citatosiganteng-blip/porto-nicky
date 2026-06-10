"use client";

import { Mail, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--border-color)]/10 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-[var(--text-muted)] flex items-center gap-1"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          © {year} Muhammad Nicky Ar Ilham · Built with{" "}
          <Heart size={12} className="text-[#fca5a5] fill-[#fca5a5]" /> &{" "}
          Next.js
        </p>

        <div className="flex items-center gap-3 text-[var(--black)]">
          <a
            href="https://github.com/nickyilham"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-xl border-2 border-[var(--border-color)] bg-[var(--card-bg-white)] hover:bg-[var(--black)] hover:text-[var(--bg-base)] transition-all duration-150 shadow-[2px_2px_0px_var(--shadow-color)]"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:nicky@gmaiarilham.com"
            className="w-9 h-9 flex items-center justify-center rounded-xl border-2 border-[var(--border-color)] bg-[var(--card-bg-white)] hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all duration-150 shadow-[2px_2px_0px_var(--shadow-color)]"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
