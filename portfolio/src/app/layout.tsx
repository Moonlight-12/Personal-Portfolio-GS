import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geraldo Sadikin",
  description:
    "Personal portfolio of Geraldo Sadikin, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords:
    "full stack developer, react, next.js, typescript, web development, portfolio",
  authors: [{ name: "Geraldo Sadikin" }],
  openGraph: {
    title: "Geraldo Sadikin",
    description:
      "Click here to know more about me!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
