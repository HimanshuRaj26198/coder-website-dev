"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar, Phone, CheckCircle, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"

interface BookDemoPopupProps {
  isOpen: boolean
  onClose: () => void
  courseName: string
  coursePrice: number
  courseId: string
}

export default function BookDemoPopup({ isOpen, onClose, courseName, coursePrice, courseId }: BookDemoPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    customTime: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState<"form" | "call">("form")
  const [showCustomTimeInput, setShowCustomTimeInput] = useState(false)

  if (!isOpen) return null

  const handleTimeSelection = (time: string) => {
    if (time === "Custom Time") {
      setShowCustomTimeInput(true)
      setFormData(prev => ({ ...prev, preferredTime: "", customTime: "" }))
    } else {
      setShowCustomTimeInput(false)
      setFormData(prev => ({ ...prev, preferredTime: time, customTime: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || 
        (!formData.preferredTime && !formData.customTime)) {
      console.error("Please fill all required fields")
      return
    }

    const nameParts = formData.name.trim().split(/\s+/)
    let firstName = ''
    let lastName = ''
    
    if (nameParts.length === 1) {
      firstName = nameParts[0]
    } else if (nameParts.length > 1) {
      firstName = nameParts.slice(0, -1).join(' ')
      lastName = nameParts[nameParts.length - 1]
    }

    const demoTime = formData.customTime || formData.preferredTime

    const payload = {
      ...formData,
      firstName,
      lastName,
      course: courseName,
      coursePrice,
      courseId,
      demoTime,
      source: "DemoForm",
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

      console.log("Enquiry made successfully!")
      setSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredTime: "",
          customTime: ""
        })
      }, 3000)
    } catch (err) {
      console.error("Error in creating new enquiry:", err)
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
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Your demo request for <span className="font-semibold text-indigo-600">{courseName}</span> has been received.
            </p>
            
            <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg p-3">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              <p className="text-blue-700 font-medium">
                Our executive will call you shortly to confirm the details.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> Please keep your phone handy for our call.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-sm"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book a Free Demo</h2>
          <p className="text-gray-600">
            For: <span className="font-semibold">{courseName}</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("form")}
            className={`flex-1 py-2 font-medium text-sm ${activeTab === "form" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          >
            Schedule Demo
          </button>
          <button
            onClick={() => setActiveTab("call")}
            className={`flex-1 py-2 font-medium text-sm ${activeTab === "call" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          >
            Call Now
          </button>
        </div>

        {activeTab === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-12"
              />
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="h-12"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div className="space-y-3">
              <p className="font-medium text-gray-900">Preferred Demo Time *</p>
              <div className="grid grid-cols-2 gap-3">
                {["Morning (9AM-12PM)", "Afternoon (12PM-4PM)", "Evening (4PM-7PM)", "Custom Time"].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleTimeSelection(time)}
                    className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                      (formData.preferredTime === time || (time === "Custom Time" && showCustomTimeInput)) 
                        ? "border-blue-500 bg-blue-50 text-blue-700" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {showCustomTimeInput && (
                <div className="mt-3">
                  <Input
                    type="text"
                    placeholder="Specify your preferred time (e.g., Weekends 10AM)"
                    value={formData.customTime}
                    onChange={(e) => handleChange("customTime", e.target.value)}
                    required={showCustomTimeInput}
                    className="h-12"
                  />
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone || 
                       (!formData.preferredTime && !formData.customTime)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg"
            >
              Book Free Demo
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Talk to Our Career Consultant</h3>
              <p className="text-gray-600 mb-4">
                Get instant answers to all your questions about {courseName}
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Available Monday to Saturday, 9AM to 7PM
            </p>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          By submitting, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  )
}