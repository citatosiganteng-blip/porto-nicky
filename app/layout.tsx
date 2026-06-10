import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Nicky Ar Ilham — Full-Stack Developer",
  description:
    "Portfolio of Muhammad Nicky Ar Ilham — Full-Stack Developer passionate about building elegant web applications. Currently a university student with 3 years of experience.",
  keywords: ["Full-Stack Developer", "Next.js", "Laravel", "React", "Web Developer", "Indonesia"],
  authors: [{ name: "Muhammad Nicky Ar Ilham" }],
  openGraph: {
    title: "Muhammad Nicky Ar Ilham — Full-Stack Developer",
    description: "Portfolio of Muhammad Nicky Ar Ilham — Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased bg-[var(--bg-base)] text-[var(--black)] transition-colors duration-300`}
      >
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
