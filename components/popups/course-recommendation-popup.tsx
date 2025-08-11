"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, BookOpen, TrendingUp, Users, CheckCircle, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface CourseRecommendationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CourseRecommendationPopup({ isOpen, onClose }: CourseRecommendationPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    interest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Split name into parts
    const nameParts = formData.name.trim().split(/\s+/)
    let firstName = ''
    let lastName = ''
    
    if (nameParts.length === 1) {
      firstName = nameParts[0]
    } else if (nameParts.length > 1) {
      firstName = nameParts.slice(0, -1).join(' ')
      lastName = nameParts[nameParts.length - 1]
    }

    const payload = {
      ...formData,
      firstName,
      lastName,
      source: "CourseRecommendation",
      fullName: formData.name
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) throw new Error('Failed to submit enquiry')

      console.log("Course recommendation submitted successfully!")
      setSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          interest: "",
        })
      }, 3000)
    } catch (err) {
      console.error("Error submitting course recommendation:", err)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Perfect Match Found!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              We've analyzed your goals and found the ideal courses for you.
            </p>
            
            <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg p-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p className="text-blue-700 font-medium">
                Your personalized recommendations are on their way!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> Check your email within 24 hours for detailed course suggestions.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-hidden">
      <div className="bg-white rounded-2xl ">
         <div className=" p-6 sm:p-8 max-w-lg w-full h-[90vh] relative my-3 overflow-y-auto rounded-2xl">

          <button 
          onClick={onClose} 
          className="absolute right-5 top-0 ml-auto block text-gray-400 hover:text-gray-600 mb-2"
          style={{ zIndex: 10 }}
        >
          <X className="w-6 h-6" />
        </button>
         
        <div className="text-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Find Your Perfect Course</h2>
          <p className="text-gray-600 text-sm">Get personalized course recommendations based on your goals</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { icon: <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-1" />, text: "Career Growth", bg: "bg-blue-50", textColor: "text-blue-700" },
            { icon: <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />, text: "Expert Mentors", bg: "bg-purple-50", textColor: "text-purple-700" },
            { icon: <BookOpen className="w-5 h-5 text-green-600 mx-auto mb-1" />, text: "Hands-on Projects", bg: "bg-green-50", textColor: "text-green-700" }
          ].map((item, index) => (
            <div key={index} className={`text-center p-2 ${item.bg} rounded-lg`}>
              {item.icon}
              <p className={`text-xs ${item.textColor}`}>{item.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="h-11"
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-11"
            />
          </div>
          
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="h-11"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
          />

          <div className="space-y-2">
            <p className="font-medium text-gray-900 text-sm">Your Experience Level *</p>
            <div className="grid grid-cols-2 gap-2">
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleChange("experience", level)}
                  className={`p-2 rounded-lg border-2 transition-colors text-sm ${
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

          <div className="space-y-2">
            <p className="font-medium text-gray-900 text-sm">Area of Interest *</p>
            <div className="grid grid-cols-2 gap-2">
              {["Web Development", "Data Science", "Mobile Apps", "DevOps", "AI/ML", "Cybersecurity"].map((field) => (
                <button
                  key={field}
                  type="button"
                  onClick={() => handleChange("interest", field)}
                  className={`p-2 rounded-lg border-2 transition-colors text-xs ${
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
            disabled={!formData.name || !formData.email || !formData.phone || !formData.experience || !formData.interest}
            className="w-full py-6 bg-gradient-to-r from-blue-800 to-purple-800 hover:from-blue-700 hover:to-purple-700 text-white h-11 text-base "
          >
            Get My Course Recommendations
          </Button>
        </form>
        </div>
      </div>
    </div>
  )
}