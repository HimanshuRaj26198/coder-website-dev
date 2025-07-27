"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Download, FileText, Video, Code } from "lucide-react"

interface FreeResourcePopupProps {
  isOpen: boolean
  onClose: () => void
  courseCategory?: string
}

export default function FreeResourcePopup({ isOpen, onClose, courseCategory = "" }: FreeResourcePopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resource: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Free resource request:", formData)
    setSubmitted(true)
    setTimeout(() => onClose(), 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resources = [
    { id: "ebook", name: "Complete Programming Guide", icon: FileText, description: "200+ page comprehensive guide" },
    { id: "videos", name: "Video Tutorial Series", icon: Video, description: "10 hours of premium content" },
    { id: "templates", name: "Project Templates", icon: Code, description: "Ready-to-use code templates" },
    { id: "roadmap", name: "Career Roadmap", icon: Download, description: "Step-by-step career planning" },
  ]

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Resource Sent!</h3>
          <p className="text-gray-600 mb-4">Your free resource is on its way to your inbox.</p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-700">📧 Check your email for the download link!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Free Learning Resources</h2>
          <p className="text-gray-600">Download premium resources to accelerate your learning</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-900">Choose Your Free Resource:</p>
            <div className="space-y-3">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  type="button"
                  onClick={() => handleChange("resource", resource.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                    formData.resource === resource.id
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <resource.icon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">{resource.name}</p>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.resource}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white h-12 text-lg"
          >
            Download Free Resource
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">No spam, just valuable content. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}
