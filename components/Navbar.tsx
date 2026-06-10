"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    
    // Theme initialization
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`max-w-4xl mx-auto rounded-2xl border-2 border-[var(--border-color)] px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-base)]/90 backdrop-blur-md shadow-[4px_4px_0px_var(--shadow-color)]"
            : "bg-[var(--bg-base)] shadow-[4px_4px_0px_var(--shadow-color)]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-syne font-800 text-lg tracking-tight" style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}>
          <span className="gradient-text">nicky.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--black)]/70 hover:text-[var(--black)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] p-2 rounded-xl cursor-pointer hover:bg-[var(--card-bg-subtle)]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <a
            href="#contact"
            className="neo-btn bg-[#10b981] text-white text-sm px-4 py-2 rounded-xl gap-2 hover:bg-[#059669]"
          >
            Say hi 👋
          </a>
        </div>

        {/* Actions (Mobile) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] p-2 rounded-xl cursor-pointer hover:bg-[var(--card-bg-subtle)]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <button
            className="p-2 rounded-lg border-2 border-[var(--border-color)] bg-[var(--card-bg-white)] text-[var(--black)] cursor-pointer hover:bg-[var(--card-bg-subtle)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl mx-auto mt-2 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--bg-base)] shadow-[4px_4px_0px_var(--shadow-color)] p-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-[var(--black)]/5 transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="neo-btn bg-[#10b981] text-white text-sm px-4 py-2 rounded-xl mt-1 text-center"
            >
              Say hi 👋
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
