"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { DownloadPopup } from "./download-popup"

interface DownloadButtonProps {
  document: {
    id: string
    title: string
    downloadUrl: string
  }
  className?: string
}

export function DownloadButton({ document, className }: DownloadButtonProps) {
  const [showPopup, setShowPopup] = useState(false)

  const handleDownload = (userData: any) => {
    console.log("Download initiated:", { document: document.id, userData })

    // Simulate download
    const link = document.createElement("a")
    link.href = document.downloadUrl
    link.download = `${document.title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Here you would typically send the user data to your backend
    // and trigger the actual download + email sending
  }

  return (
    <>
      <Button onClick={() => setShowPopup(true)} className={className}>
        <Download className="w-5 h-5 mr-2" />
        Download Now
      </Button>

      <DownloadPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        documentTitle={document.title}
        onDownload={handleDownload}
      />
    </>
  )
}
