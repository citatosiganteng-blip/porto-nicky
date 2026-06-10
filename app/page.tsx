import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import FeaturedProject from "@/components/FeaturedProject";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  // Fetch blog posts server-side and pass down to the client BlogPreview component
  const posts = getAllPosts().slice(0, 2);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <FeaturedProject />
      <BlogPreview posts={posts} />
      <Contact />
      <Footer />
    </main>
  );
}
