import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 bg-[var(--bg-base)] text-[var(--black)]">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div
            className="flex items-center gap-4 text-xs opacity-50 mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <div className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("id-ID", {
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
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {post.title}
          </h1>
          <p
            className="opacity-70 text-lg leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {post.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-2.5 py-1 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg-subtle)] shadow-[2px_2px_0px_var(--shadow-color)]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-t-2 border-[var(--border-color)]/10 mb-10" />

        {/* MDX Content with full dark/light theme support */}
        <div className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-extrabold prose-headings:font-[var(--font-syne)] prose-headings:text-[var(--black)]
          prose-p:font-[var(--font-dm-sans)] prose-p:opacity-85 prose-p:leading-relaxed prose-p:text-[var(--black)]
          prose-a:text-[#10b981] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[var(--black)] prose-strong:font-bold
          prose-code:bg-[var(--card-bg-subtle)] prose-code:text-[#10b981] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:border prose-code:border-[var(--border-color)]/10 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[var(--card-bg-subtle)] prose-pre:border-2 prose-pre:border-[var(--border-color)] prose-pre:shadow-[4px_4px_0px_var(--shadow-color)] prose-pre:rounded-xl prose-pre:p-0
          prose-pre:overflow-hidden
          prose-li:text-[var(--black)] prose-li:opacity-85
        ">
          <MDXRemote 
            source={post.content} 
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight as any],
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
