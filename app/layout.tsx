import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import  PopupManager  from "@/components/popup-manager"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VikaraX - Transform Your Tech Career | Online Software Engineering Courses",
  description:
    "Master in-demand tech skills with VikaraX. Job-ready programs in Full Stack Development, DevOps, Data Science, Mobile Development. 95% placement rate.",
  keywords:
    "software engineering courses, full stack development, devops training, data science, mobile app development, online coding bootcamp, tech career",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <PopupManager />
      </body>
    </html>
  )
}
