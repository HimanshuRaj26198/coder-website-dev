"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Gift, Clock, Star, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ExitIntentPopupProps {
  isOpen: boolean
  onClose: () => void
  courseCategory?: string
}

export default function ExitIntentPopup({ isOpen, onClose, courseCategory = "" }: ExitIntentPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      courseCategory,
      discountCode: "SAVE30NOW",
      source: "ExitIntentPopup",
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

      if (!response.ok) throw new Error('Failed to submit exit intent')

      console.log("Exit intent submitted successfully!")
      setSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
        })
      }, 3000)
    } catch (err) {
      console.error("Error submitting exit intent:", err)
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
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Discount Secured!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Your exclusive 30% discount code is ready to use.
            </p>
            
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-4">
              <p className="text-xl font-bold">SAVE30NOW</p>
              <p className="text-sm opacity-90 mt-1">Use this code at checkout</p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Note:</span> The code has been sent to your email as well.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-sm"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Wait! Don't Miss Out!</h2>
          <p className="text-gray-600">Get 30% OFF your first course before you leave</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-700">Limited time offer - expires in 24 hours</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-700">Join 10,000+ successful students</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <Button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.phone}
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white h-12 text-lg"
          >
            Get My 30% Discount Now!
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          No spam, unsubscribe anytime. Offer valid for new students only.
        </p>
      </div>
    </div>
  )
}