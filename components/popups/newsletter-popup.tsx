"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, Star, Users, TrendingUp } from "lucide-react"

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", formData)
    setSubmitted(true)
    setTimeout(() => onClose(), 3000)
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const interests = ["Web Development", "Data Science", "AI/ML", "Mobile Apps", "DevOps", "Career Tips"]

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Aboard!</h3>
          <p className="text-gray-600 mb-4">You're now part of our tech community!</p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">📧 Your first newsletter is coming this week!</p>
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
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Tech Community</h2>
          <p className="text-gray-600">Get weekly insights, career tips, and exclusive content</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-blue-700">25K+ Subscribers</p>
          </div>
          <div className="text-center p-3 bg-indigo-50 rounded-lg">
            <Star className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs text-indigo-700">Premium Content</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-purple-700">Career Growth</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-900">What interests you? (Optional)</p>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                    formData.interests.includes(interest)
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formData.name || !formData.email}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg"
          >
            Join the Community
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">Weekly newsletter • No spam • Unsubscribe anytime</p>
      </div>
    </div>
  )
}
