import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vomesh Atukuri | Software Engineer & AI Enthusiast",
  description:
    "Vomesh Atukuri is a Software Engineer specializing in full-stack development, React, Next.js, TypeScript, Node.js, and AI-powered applications. Explore projects, experience, and technical skills.",
  keywords: [
    "Vomesh Atukuri",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "AI Engineer",
    "LangChain",
    "Web Development Portfolio",
    "NestJS",
    "Java",
  ],
  authors: [{ name: "Vomesh Atukuri" }],
  creator: "Vomesh Atukuri",
  metadataBase: new URL("https://vomesh.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vomesh.dev",
    title: "Vomesh Atukuri | Software Engineer & AI Enthusiast",
    description:
      "Software Developer focused on building modern, scalable web applications and AI-powered products with React, Next.js, TypeScript, and LLMs.",
    siteName: "Vomesh Atukuri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vomesh Atukuri | Software Engineer & AI Enthusiast",
    description:
      "Software Developer focused on building modern, scalable web applications and AI-powered products.",
    creator: "@vomeshatukuri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vomesh Atukuri",
    url: "https://vomesh.dev",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/vomeshatukuri",
      "https://linkedin.com/in/vomeshatukuri",
    ],
    knowsAbout: [
      "React", "Next.js", "TypeScript", "Node.js", "Java",
      "PostgreSQL", "AI", "LangChain", "NestJS", "Docker"
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
