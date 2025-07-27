"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, PiggyBank, CheckCircle, Phone, DollarSign } from "lucide-react"

interface PartPaymentPopupProps {
  isOpen: boolean
  onClose: () => void
  courseName?: string
  coursePrice?: number
}

export default function PartPaymentPopup({
  isOpen,
  onClose,
  courseName = "Course",
  coursePrice = 50000,
}: PartPaymentPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentPlan: "",
    initialAmount: "",
    completionTime: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const paymentPlans = [
    {
      id: "25-75",
      name: "25% + 75%",
      initial: Math.round(coursePrice * 0.25),
      remaining: Math.round(coursePrice * 0.75),
    },
    {
      id: "50-50",
      name: "50% + 50%",
      initial: Math.round(coursePrice * 0.5),
      remaining: Math.round(coursePrice * 0.5),
    },
    { id: "custom", name: "Custom Plan", initial: 0, remaining: 0 },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Part payment request:", formData)
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
          <h3 className="text-xl font-bold text-gray-900 mb-2">Part Payment Plan Requested!</h3>
          <p className="text-gray-600 mb-4">
            Our payment advisor will contact you within 1 hour to finalize your custom payment plan.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-700 font-medium">📞 Expect a call from +91-XXXX-XXXX-XX</p>
            <p className="text-xs text-green-600 mt-1">We'll help you create the perfect payment schedule</p>
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
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <PiggyBank className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">💰 Flexible Part Payment Plans</h2>
          <p className="text-gray-600">Start learning now, pay the rest later!</p>
          <div className="bg-green-50 rounded-lg p-3 mt-4">
            <p className="text-sm text-green-700">
              <strong>{courseName}</strong> - Total Fee: ₹{coursePrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Payment Plan Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {paymentPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handleChange("paymentPlan", plan.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.paymentPlan === plan.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{plan.name}</h3>
                {plan.id !== "custom" ? (
                  <>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-600">Pay Now</p>
                        <p className="text-lg font-bold text-green-600">₹{plan.initial.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded p-2">
                        <p className="text-sm text-gray-600">Pay Later</p>
                        <p className="text-lg font-bold text-blue-600">₹{plan.remaining.toLocaleString()}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-white rounded p-3">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Design your own payment schedule</p>
                  </div>
                )}
              </div>
            </div>
          ))}
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

          {formData.paymentPlan === "custom" && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900">Custom Payment Details:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Initial Payment Amount</label>
                  <Input
                    type="number"
                    placeholder="₹ Amount"
                    value={formData.initialAmount}
                    onChange={(e) => handleChange("initialAmount", e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complete Payment By</label>
                  <select
                    value={formData.completionTime}
                    onChange={(e) => handleChange("completionTime", e.target.value)}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Timeline</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="2-months">Within 2 Months</option>
                    <option value="3-months">Within 3 Months</option>
                    <option value="6-months">Within 6 Months</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <p className="font-medium text-gray-900">When would you like to complete the payment?</p>
            <div className="grid grid-cols-2 gap-3">
              {["Before course completion", "Within 1 month", "Within 2 months", "Within 3 months"].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleChange("completionTime", time)}
                  className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                    formData.completionTime === time
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone || !formData.paymentPlan}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white h-12 text-lg"
            >
              Get Part Payment Plan
            </Button>
            <Button
              type="button"
              onClick={() => window.open("tel:+919876543210")}
              className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Why Choose Part Payment?</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Start learning immediately with minimal upfront cost</li>
            <li>• No interest charges or hidden fees</li>
            <li>• Flexible payment schedules based on your convenience</li>
            <li>• Full course access from day one</li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          * Part payment plans are subject to approval. Terms and conditions apply.
        </p>
      </div>
    </div>
  )
}
