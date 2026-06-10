"use client";

import { MapPin, Globe } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="neo-card bg-[var(--card-location)] text-[var(--black)] rounded-2xl p-5 flex flex-col justify-between h-full min-h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-syne)" }}>
          Location
        </span>
        <Globe size={16} className="opacity-50" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={18} />
          <p className="text-xl font-extrabold" style={{ fontFamily: "var(--font-syne)" }}>
            Indonesia 🇮🇩
          </p>
        </div>
        <p className="text-sm opacity-70 ml-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Open to remote work
        </p>
        <div className="mt-3 flex gap-2">
          <span className="text-xs font-bold bg-[var(--black)] text-[var(--bg-base)] px-3 py-1 rounded-xl border border-[var(--black)]">
            Remote
          </span>
          <span className="text-xs font-bold bg-[var(--card-bg-white)] text-[var(--black)] px-3 py-1 rounded-xl border border-[var(--black)]/20">
            On-site
          </span>
        </div>
      </div>
    </div>
  );
}
