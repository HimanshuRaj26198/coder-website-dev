"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, BookOpen, TrendingUp, Users } from "lucide-react"

interface CourseRecommendationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CourseRecommendationPopup({ isOpen, onClose }: CourseRecommendationPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    interest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Course recommendation:", formData)
    setSubmitted(true)
    setTimeout(() => onClose(), 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Match Found!</h3>
          <p className="text-gray-600 mb-4">We've found the ideal courses for your career goals.</p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">📚 Your personalized course recommendations are being emailed!</p>
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
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Course</h2>
          <p className="text-gray-600">Get personalized course recommendations based on your goals</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-blue-700">Career Growth</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-purple-700">Expert Mentors</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <BookOpen className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-green-700">Hands-on Projects</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <p className="font-medium text-gray-900">Your Experience Level:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleChange("experience", level)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    formData.experience === level
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-900">Area of Interest:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Web Development", "Data Science", "Mobile Apps", "DevOps", "AI/ML", "Cybersecurity"].map((field) => (
                <button
                  key={field}
                  type="button"
                  onClick={() => handleChange("interest", field)}
                  className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                    formData.interest === field
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {field}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.experience || !formData.interest}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg"
          >
            Get My Course Recommendations
          </Button>
        </form>
      </div>
    </div>
  )
}
