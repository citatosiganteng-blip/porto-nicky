"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function TimeCard() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
      setDate(new Intl.DateTimeFormat("en-US", dateOptions).format(now));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="neo-card bg-[var(--card-time)] text-[var(--black)] rounded-2xl p-5 flex flex-col justify-between h-full min-h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ fontFamily: "var(--font-syne)" }}>
          Local Time
        </span>
        <Clock size={16} className="opacity-50" />
      </div>
      <div>
        <p
          className="text-4xl font-extrabold tracking-tight tabular-nums"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {time || "00:00:00"}
        </p>
        <p className="text-xs mt-1 opacity-60" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {date}
        </p>
        <span className="inline-block mt-2 text-xs font-bold bg-[var(--black)] text-[var(--card-time)] px-3 py-1 rounded-xl">
          UTC+7 · WIB
        </span>
      </div>
    </div>
  );
}
