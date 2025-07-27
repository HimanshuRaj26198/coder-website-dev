"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, CreditCard, CheckCircle, Phone, Calculator } from "lucide-react"

interface EMIPopupProps {
  isOpen: boolean
  onClose: () => void
  courseName?: string
  coursePrice?: number
}

export default function EMIPopup({ isOpen, onClose, courseName = "Course", coursePrice = 50000 }: EMIPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTenure: "",
    monthlyBudget: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const calculateEMI = (tenure: number) => {
    return Math.round(coursePrice / tenure)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("EMI request:", formData)
    setSubmitted(true)
    setTimeout(() => onClose(), 4000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">EMI Request Submitted!</h3>
          <p className="text-gray-600 mb-4">
            Our finance team will contact you within 2 hours with your personalized EMI plan.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-700 font-medium">📞 Expect a call from +91-XXXX-XXXX-XX</p>
            <p className="text-xs text-green-600 mt-1">Our advisor will help you choose the best EMI option</p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => window.open("tel:+919876543210")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🎉 Easy EMI Options Available!</h2>
          <p className="text-gray-600">Transform your career with affordable monthly payments</p>
          <div className="bg-blue-50 rounded-lg p-3 mt-4">
            <p className="text-sm text-blue-700">
              <strong>{courseName}</strong> - Total Fee: ₹{coursePrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* EMI Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-green-700 font-medium">0% Interest</p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Calculator className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-blue-700 font-medium">Flexible Tenure</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <CreditCard className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-purple-700 font-medium">No Hidden Charges</p>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-xs text-orange-700 font-medium">Instant Approval</p>
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-600" />
            EMI Calculator
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg border-2 border-blue-200">
              <p className="text-sm text-gray-600">3 Months</p>
              <p className="text-xl font-bold text-blue-600">₹{calculateEMI(3).toLocaleString()}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border-2 border-purple-200">
              <p className="text-sm text-gray-600">6 Months</p>
              <p className="text-xl font-bold text-purple-600">₹{calculateEMI(6).toLocaleString()}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border-2 border-green-200">
              <p className="text-sm text-gray-600">12 Months</p>
              <p className="text-xl font-bold text-green-600">₹{calculateEMI(12).toLocaleString()}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Full Name"
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

          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="h-12"
          />

          <div className="space-y-3">
            <p className="font-medium text-gray-900">Preferred EMI Tenure:</p>
            <div className="grid grid-cols-3 gap-3">
              {["3 months", "6 months", "12 months"].map((tenure) => (
                <button
                  key={tenure}
                  type="button"
                  onClick={() => handleChange("preferredTenure", tenure)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    formData.preferredTenure === tenure
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {tenure}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-900">Monthly Budget Range:</p>
            <div className="grid grid-cols-2 gap-3">
              {["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹30,000", "₹30,000+"].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => handleChange("monthlyBudget", budget)}
                  className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                    formData.monthlyBudget === budget
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg"
            >
              Get EMI Options
            </Button>
            <Button
              type="button"
              onClick={() => window.open("tel:+919876543210")}
              className="bg-green-600 hover:bg-green-700 text-white h-12 px-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          * EMI options subject to approval. Terms and conditions apply.
        </p>
      </div>
    </div>
  )
}
