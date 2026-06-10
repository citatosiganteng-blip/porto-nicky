"use client";

import { motion, type Variants } from "framer-motion";
import TechStackCard from "./cards/TechStackCard";
import LocationCard from "./cards/LocationCard";
import TimeCard from "./cards/TimeCard";
import SpotifyCard from "./cards/SpotifyCard";
import AboutCard from "./cards/AboutCard";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BentoGrid() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-8 text-center"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        A little about me ✦
      </motion.h2>

      {/* Row 1: TechStack (large) + Location (small) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="md:col-span-2"
        >
          <TechStackCard />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <LocationCard />
        </motion.div>
      </div>

      {/* Row 2: Time + Spotify + About */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <TimeCard />
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <SpotifyCard />
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          id="about"
        >
          <AboutCard />
        </motion.div>
      </div>
    </section>
  );
}
