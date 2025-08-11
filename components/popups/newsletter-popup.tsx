"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, Star, Users, TrendingUp, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
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
      source: "NewsletterSignup",
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

      if (!response.ok) throw new Error('Failed to submit newsletter signup')

      console.log("Newsletter signup submitted successfully!")
      setSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          interests: [],
        })
      }, 3000)
    } catch (err) {
      console.error("Error submitting newsletter signup:", err)
    }
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
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome to Our Community!</h3>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              You're now part of our exclusive tech community.
            </p>
            
            <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg p-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p className="text-blue-700 font-medium">
                Your first newsletter is coming this week!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Pro Tip:</span> Check your spam folder if you don't see our email.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-2xl">
      <div className=" p-8 max-w-lg w-full relative h-[90vh] my-3 overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1 shadow-sm"
          aria-label="Close"
        >
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
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="h-12"
            />
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              required
              className="h-12"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
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
            disabled={!formData.name || !formData.email || !formData.phone}
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg"
          >
            Join the Community
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Weekly newsletter • No spam • Unsubscribe anytime
        </p>
      </div>
      </div>
    </div>
  )
}