"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Gift, Clock, Star } from "lucide-react"

interface ExitIntentPopupProps {
  isOpen: boolean
  onClose: () => void
  courseCategory?: string
}

export default function ExitIntentPopup({ isOpen, onClose, courseCategory = "" }: ExitIntentPopupProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Exit intent email:", email)
    setSubmitted(true)
    setTimeout(() => onClose(), 3000)
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
          <p className="text-gray-600 mb-4">Check your email for the exclusive discount code!</p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-700">🎉 Your 30% OFF code is on its way!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
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
            type="email"
            placeholder="Enter your email for instant discount"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          <Button
            type="submit"
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
