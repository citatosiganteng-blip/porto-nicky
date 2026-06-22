"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import Pusher from "pusher-js";

export default function ActiveCounter() {
  const [activeCount, setActiveCount] = useState<number>(1);
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

    // Fallback: If Pusher is not configured, run Mock Mode
    if (!pusherKey || !pusherCluster) {
      // Set initial count to a realistic number
      const initialCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
      setActiveCount(initialCount);
      setIsLive(false);

      const interval = setInterval(() => {
        setActiveCount((prev) => {
          const rand = Math.random();
          if (rand > 0.6) {
            return Math.min(5, prev + 1);
          } else if (rand < 0.4) {
            return Math.max(1, prev - 1);
          }
          return prev;
        });
      }, 25000); // update every 25s

      return () => clearInterval(interval);
    }

    // Live Mode: Connect to Pusher Channels
    setIsLive(true);
    
    // Enable logging in development (optional)
    if (process.env.NODE_ENV === "development") {
      Pusher.logToConsole = true;
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
      authEndpoint: "/api/pusher/auth",
    });

    const channel = pusher.subscribe("presence-active-users");

    channel.bind("pusher:subscription_succeeded", (members: any) => {
      setActiveCount(members.count);
    });

    channel.bind("pusher:member_added", () => {
      // Get updated count from the members collection
      setActiveCount((channel as any).members.count);
    });

    channel.bind("pusher:member_removed", () => {
      // Get updated count from the members collection
      setActiveCount((channel as any).members.count);
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe("presence-active-users");
      pusher.disconnect();
    };
  }, []);

  return (
    <div
      className="neo-card bg-[var(--card-bg-white)] px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-bold shadow-[2px_2px_0px_var(--shadow-color)]"
      title={isLive ? "Live active visitors (Pusher)" : "Simulated active visitors (Mock)"}
    >
      <div className="relative flex h-2 w-2">
        <span
          className={`animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isLive ? "bg-emerald-400" : "bg-amber-400"
          }`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isLive ? "bg-emerald-500" : "bg-amber-500"
          }`}
        ></span>
      </div>
      <Eye size={13} className="text-[var(--black)]/70 shrink-0" />
      <span className="text-[var(--black)] font-mono leading-none">{activeCount}</span>
    </div>
  );
}
