import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usep Saeful Adzkia - Web Developer Portfolio",
  description: "Informatics Engineering student specializing in web development with Next.js, React, and modern JavaScript technologies.",
  keywords: ["Usep Saeful Adzkia", "Web Developer", "Frontend Developer", "Next.js", "React", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
