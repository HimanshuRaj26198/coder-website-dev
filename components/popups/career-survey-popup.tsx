"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, BarChart3, TrendingUp, CheckCircle, Mail } from "lucide-react"
import { motion } from "framer-motion"

interface CareerSurveyPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CareerSurveyPopup({ isOpen, onClose }: CareerSurveyPopupProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    interest: "",
    timeline: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleNext = async () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      try {
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
          source: "CareerSurvey",
          fullName: formData.name
        }

        const response = await fetch("/api/enquiries", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })

        if (!response.ok) throw new Error('Failed to submit survey')

        console.log("Survey submitted successfully!")
        setSubmitted(true)
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            currentRole: "",
            experience: "",
            interest: "",
            timeline: "",
          })
          setCurrentStep(1)
        }, 3000)
      } catch (err) {
        console.error("Error submitting career survey:", err)
      }
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
            <Mail className="w-10 h-10 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Your career assessment has been successfully submitted.
            </p>
            
            <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg p-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-blue-700 font-medium">
                Your personalized career report is being prepared.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> You'll receive your detailed analysis via email within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 ">
      <div className="bg-white rounded-2xl">
      <div className=" p-6 sm:p-8 max-w-lg w-full relative my-3 mx-auto h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-sm"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Career Assessment</h2>
          <p className="text-gray-600">Get personalized career recommendations in 60 seconds</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Step {currentStep} of 3</p>
        </div>

        <div className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Let's start with basics</h3>
              <Input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-12"
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-12"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-12"
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
              <Input
                type="text"
                placeholder="Current Role/Status (e.g., Student, Marketing Manager) *"
                value={formData.currentRole}
                onChange={(e) => handleChange("currentRole", e.target.value)}
                className="h-12"
                required
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Tell us about your experience</h3>
              <div className="grid grid-cols-2 gap-3">
                {["0-1 years", "1-3 years", "3-5 years", "5+ years"].map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => handleChange("experience", exp)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      formData.experience === exp
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <p className="font-medium text-gray-900">Which tech field interests you most? *</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Web Development", "Data Science", "Mobile Apps", "DevOps", "AI/ML", "Cybersecurity"].map(
                    (field) => (
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
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">When do you want to start? *</h3>
              <div className="space-y-3">
                {["Immediately", "Within 1 month", "Within 3 months", "Just exploring options"].map((timeline) => (
                  <button
                    key={timeline}
                    type="button"
                    onClick={() => handleChange("timeline", timeline)}
                    className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                      formData.timeline === timeline
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {timeline}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && (!formData.name || !formData.email || !formData.phone || !formData.currentRole)) ||
              (currentStep === 2 && (!formData.experience || !formData.interest)) ||
              (currentStep === 3 && !formData.timeline)
            }
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg"
          >
            {currentStep === 3 ? "Get My Career Report" : "Next Step"}
          </Button>
        </div>
      </div>
      </div>
    </div>
  )
}