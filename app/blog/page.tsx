import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar, ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog — Muhammad Nicky Ar Ilham",
  description: "Writing about web development, Laravel, Next.js, and other technical topics.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 bg-[var(--bg-base)] text-[var(--black)]">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Writing ✍️
          </h1>
          <p
            className="opacity-70 text-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Stories, experiences, and technical notes from my coding journey.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="neo-card bg-[var(--card-bg-white)] rounded-2xl p-6 group hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div
                      className="flex items-center gap-4 text-xs opacity-50 mb-2"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readingTime}
                      </div>
                    </div>
                    <h2
                      className="text-xl font-extrabold mb-2 group-hover:text-[#10b981] transition-colors"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="text-sm opacity-70 leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold px-2.5 py-1 rounded-full border-2 border-[var(--border-color)]/20 bg-[var(--card-bg-subtle)]"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="opacity-30 group-hover:opacity-100 group-hover:text-[#10b981] shrink-0 mt-1 transition-all"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
