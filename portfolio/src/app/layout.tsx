import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Geraldo Sadikin",
  description:
    "Personal portfolio of Geraldo Sadikin, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: "full stack developer, react, next.js, typescript, web development, portfolio",
  authors: [{ name: "Geraldo Sadikin" }],
  openGraph: {
    title: "Geraldo Sadikin",
    description: "Personal portfolio showcasing my work and experience in web development",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
