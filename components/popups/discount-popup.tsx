"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Percent, Clock, Zap, CheckCircle, Gift } from "lucide-react"
import { motion } from "framer-motion"

interface DiscountPopupProps {
  isOpen: boolean
  onClose: () => void
  courseName?: string
  coursePrice?: number
}

export default function DiscountPopup({ isOpen, onClose, courseName, coursePrice }: DiscountPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    if (!isOpen) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, onClose])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      phone: ""
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
      valid = false
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

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
      course: courseName || "General Discount",
      coursePrice: coursePrice || 0,
      discountCode: "SAVE40NOW",
      source: "DiscountPopup",
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

      if (!response.ok) throw new Error('Failed to submit discount claim')

      console.log("Discount claim submitted successfully!")
      setSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: ""
        })
      }, 3000)
    } catch (err) {
      console.error("Error submitting discount claim:", err)
    }
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  if (!isOpen) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-orange-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Discount Secured!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Your exclusive 40% discount code is ready!
            </p>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4">
              <p className="text-xl font-bold">SAVE40NOW</p>
              <p className="text-sm opacity-90 mt-1">Use this code at checkout</p>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-sm text-orange-800">
              <span className="font-semibold">Note:</span> The code has been sent to your email as well.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative my-auto max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 sticky top-0 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Percent className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Flash Sale Alert!</h2>
          <p className="text-gray-600">40% OFF all courses - Limited time only!</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4 mb-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-bold">{formatTime(timeLeft)}</span>
          </div>
          <p className="text-sm opacity-90">Offer expires soon!</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-700">Save up to ₹20,000 on premium courses</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
            <Percent className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-700">Biggest discount of the year</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="h-12"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-12"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
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
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white h-12 text-lg"
          >
            Claim 40% Discount Now!
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Valid for new enrollments only. Cannot be combined with other offers.
        </p>
      </div>
    </div>
  )
}