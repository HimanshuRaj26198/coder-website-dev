import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PopupManager from "@/components/popup-manager"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CoderCrafter - Transform Your Tech Career | Online Software Engineering Courses",
  description: "Master in-demand tech skills with CoderCrafter. Job-ready programs in Full Stack Development, DevOps, Data Science, Mobile Development. 95% placement rate.",
  keywords: "software engineering courses, full stack development, devops training, data science, mobile app development, online coding bootcamp, tech career",
  generator: 'v0.dev',
  icons: {
    icon: '/icon_blue_logo.png', // Default icon (now using your imported logo)
    shortcut: '/icon_blue_logo.png', // Fallback for older browsers
    apple: '/apple-touch-icon.png', // Apple touch icon
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png'
      }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Start of Rocket.Chat Livechat Script --> */}
	<script type="text/javascript" dangerouslySetInnerHTML={{__html: ``}} ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        <PopupManager />
        
        {/* Rocket.Chat Script */}
        <Script id="rocketchat-widget" strategy="afterInteractive">
          {`
            (function(w, d, s, u) {
              w.RocketChat = function(c) { w.RocketChat._.push(c) };
              w.RocketChat._ = [];
              w.RocketChat.url = u;
              var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
              j.async = true;
              j.src = 'https://chat.codercrafter.in/livechat/rocketchat-livechat.min.js?_=201903270000';
              h.parentNode.insertBefore(j, h);
            })(window, document, 'script', 'https://chat.codercrafter.in/livechat');
          `}
        </Script>
      </body>
    </html>
  )
}