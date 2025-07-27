"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Percent, Clock, Zap } from "lucide-react"

interface DiscountPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function DiscountPopup({ isOpen, onClose }: DiscountPopupProps) {
  const [email, setEmail] = useState("")
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Discount email:", email)
    setSubmitted(true)
    setTimeout(() => onClose(), 3000)
  }

  if (!isOpen) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Percent className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Discount Secured!</h3>
          <p className="text-gray-600 mb-4">Your exclusive 40% OFF code is ready!</p>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-lg font-bold text-orange-700">SAVE40NOW</p>
            <p className="text-sm text-orange-600 mt-1">Use this code at checkout</p>
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
          <Input
            type="email"
            placeholder="Enter email to unlock 40% discount"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
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
