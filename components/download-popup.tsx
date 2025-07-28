"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Download, CheckCircle } from "lucide-react"

interface DownloadPopupProps {
  isOpen: boolean
  onClose: () => void
  documentTitle: string
  onDownload: (userData: any) => void
}

export function DownloadPopup({ isOpen, onClose, documentTitle, onDownload }: DownloadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) return

    onDownload(formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", courseInterest: "" })
      onClose()
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Download Started!</h3>
          <p className="text-gray-600 mb-4">
            Your download has started and a copy has been sent to your email successfully.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">
              📧 Check your inbox for additional resources and course information!
            </p>
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
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Download Resource</h2>
          <p className="text-gray-600">Please provide your details to download:</p>
          <p className="font-semibold text-purple-600 mt-2">{documentTitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseInterest">Course Interest</Label>
            <Select value={formData.courseInterest} onValueChange={(value) => handleChange("courseInterest", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your course interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-stack">Full Stack Web Development</SelectItem>
                <SelectItem value="devops">DevOps Engineering</SelectItem>
                <SelectItem value="data-science">Data Science & AI</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 text-lg"
          >
            Download Now
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By downloading, you agree to receive course information and updates from CoderCrafter.
        </p>
      </div>
    </div>
  )
}
