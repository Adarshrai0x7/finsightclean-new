import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NextAuthProvider from "@/components/NextAuthProvider"
import ChatbotWidget from "@/components/chats/chatbot" // ✅ Add this

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinSight - Stock Trading Platform",
  description: "Professional stock trading and portfolio management platform",
  generator: "v0.dev"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <ChatbotWidget /> {/* ✅ This adds the chatbot on every page */}
        </NextAuthProvider>
      </body>
    </html>
  )
}
