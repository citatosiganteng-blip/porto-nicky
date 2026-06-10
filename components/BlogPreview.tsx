"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, PenLine } from "lucide-react";
import { PostMeta } from "@/lib/blog";

export default function BlogPreviewClient({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-8"
      >
        <div>
          <span
            className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 block"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Writing
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Latest posts ✍️
          </h2>
        </div>
        <Link
          href="/blog"
          className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] px-4 py-2 rounded-xl text-sm gap-2 hidden md:inline-flex hover:bg-[var(--card-bg-subtle)]"
        >
          All posts
          <ArrowUpRight size={14} />
        </Link>
      </motion.div>

      {/* Post cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
          >
            <Link href={`/blog/${post.slug}`}>
              <article className="neo-card bg-[var(--card-bg-white)] text-[var(--black)] rounded-2xl p-6 h-full flex flex-col justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150">
                <div>
                  <div
                    className="flex items-center gap-1.5 text-xs opacity-50 mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3
                    className="text-lg font-extrabold mb-2 group-hover:text-[#10b981] transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm opacity-70 leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {post.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2 py-0.5 rounded-full border border-[var(--border-color)]/20 bg-[var(--card-bg-subtle)]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-40 group-hover:opacity-100 group-hover:text-[#10b981] transition-all shrink-0"
                  />
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="text-center mt-8 md:hidden">
        <Link
          href="/blog"
          className="neo-btn bg-[var(--card-bg-white)] text-[var(--black)] px-6 py-3 rounded-xl text-sm gap-2 w-full justify-center"
        >
          All posts
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
