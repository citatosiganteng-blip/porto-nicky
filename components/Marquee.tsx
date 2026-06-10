"use client";

const items = [
  "Smooth UX ★",
  "High-fidelity ★",
  "Clean code ★",
  "Fast ships ★",
  "Open to collab ★",
  "Made in Indonesia 🇮🇩 ★",
  "Full-Stack Dev ★",
  "Laravel & Next.js ★",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full border-y-2 border-[var(--border-color)] bg-[#10b981] overflow-hidden py-3.5 my-4">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-white font-bold text-sm uppercase tracking-widest"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
