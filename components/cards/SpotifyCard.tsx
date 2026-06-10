"use client";

import { Music2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  songUrl: string | null;
}

const bars = [1, 2, 3, 4, 5];

const FALLBACK: SpotifyData = {
  isPlaying: false,
  title: "Chill Lo-fi Beats",
  artist: "coding in the zone 🎧",
  albumArt: null,
  songUrl: null,
};

export default function SpotifyCard() {
  const [data, setData] = useState<SpotifyData>(FALLBACK);
  const [loading, setLoading] = useState(true);

  async function fetchSong() {
    try {
      const res = await fetch("/api/spotify", { cache: "no-store" });
      if (res.ok) {
        const json: SpotifyData = await res.json();
        setData(json);
      }
    } catch {
      // Keep current data on error — no flash of broken state
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSong();
    // Poll every 30 seconds so the card updates when the song changes
    const id = setInterval(fetchSong, 30_000);
    return () => clearInterval(id);
  }, []);

  const CardWrapper = data.songUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={data.songUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="h-full">{children}</div>
      );

  return (
    <CardWrapper>
      <div className="neo-card bg-[var(--card-spotify)] text-[var(--black)] rounded-2xl p-5 flex flex-col justify-between h-full min-h-[160px] group cursor-default transition-transform hover:scale-[1.01]">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-bold uppercase tracking-widest opacity-60"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {data.isPlaying ? "Vibing to" : "Last played"}
          </span>
          <div className="flex items-center gap-1.5">
            <Music2 size={16} className="opacity-50" />
            {data.songUrl && (
              <ExternalLink size={12} className="opacity-30 group-hover:opacity-70 transition-opacity" />
            )}
          </div>
        </div>

        <div>
          {/* Album art + waveform row */}
          <div className="flex items-end gap-3 mb-3">
            {/* Album art */}
            {loading ? (
              <div className="w-10 h-10 rounded-lg bg-black/10 animate-pulse flex-shrink-0" />
            ) : data.albumArt ? (
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border-2 border-black/20 shadow-sm">
                <Image
                  src={data.albumArt}
                  alt={`${data.title} album art`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ) : (
              /* Placeholder when no album art */
              <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                <Music2 size={18} className="opacity-30" />
              </div>
            )}

            {/* Waveform bars */}
            <div className="flex items-end gap-1 h-8">
              {bars.map((_, i) =>
                data.isPlaying ? (
                  <motion.div
                    key={i}
                    className="w-2 bg-[var(--black)] rounded-sm"
                    animate={{ height: ["30%", "90%", "50%", "75%", "30%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  /* Static bars when not playing */
                  <div
                    key={i}
                    className="w-2 bg-[var(--black)] rounded-sm opacity-30"
                    style={{ height: `${[30, 55, 40, 60, 35][i]}%` }}
                  />
                )
              )}
            </div>
          </div>

          {/* Song info */}
          {loading ? (
            <div className="space-y-1.5">
              <div className="h-4 w-32 rounded bg-black/10 animate-pulse" />
              <div className="h-3 w-20 rounded bg-black/10 animate-pulse" />
            </div>
          ) : (
            <>
              <p
                className="text-sm font-bold leading-snug line-clamp-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {data.title}
              </p>
              <p
                className="text-xs opacity-60 mt-0.5 line-clamp-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {data.artist}
              </p>
            </>
          )}

          {/* Status indicator */}
          <div className="mt-2 inline-flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                data.isPlaying
                  ? "bg-[#10b981] animate-pulse"
                  : "bg-black/30"
              }`}
            />
            <span className="text-xs font-bold">
              {loading
                ? "Checking..."
                : data.isPlaying
                ? "Now playing"
                : "Recently played"}
            </span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
