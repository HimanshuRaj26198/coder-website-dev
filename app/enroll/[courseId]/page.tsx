"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Calendar, Phone, CheckCircle, Shield, Clock, Users, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import coursesData from "@/data/courses.json"
import EmiPopup from "@/components/popups/emi-popup"
import PartPaymentPopup from "@/components/popups/part-payment-popup"

interface EnrollPageProps {
  params: Promise<{ courseId: string }>
}

export default function EnrollPage({ params }: EnrollPageProps) {
  const [courseId, setCourseId] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState("full")
  const [showEmiPopup, setShowEmiPopup] = useState(false)
  const [showPartPaymentPopup, setShowPartPaymentPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    preferredSchedule: "",
  })

  // Get courseId from params
  React.useEffect(() => {
    params.then(({ courseId }) => setCourseId(courseId))
  }, [params])

  const course = coursesData.courses.find((c) => c.id === courseId)

  if (!course) {
    return <div>Loading...</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enrollment:", { course: course.id, paymentMethod, formData })
    alert("Enrollment submitted successfully! We will contact you shortly.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getPaymentAmount = () => {
    switch (paymentMethod) {
      case "full":
        return course.price
      case "installment":
        return Math.ceil(course.price / 3)
      case "monthly":
        return Math.ceil(course.price / 6)
      default:
        return course.price
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          href={`/courses/${courseId}`}
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Course</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enrollment Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Enroll in Course</h1>
              <p className="text-xl text-gray-600">
                Complete your enrollment for <span className="font-semibold text-purple-600">{course.title}</span>
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Enrollment Details</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleChange("experience", value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Complete Beginner</SelectItem>
                            <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredSchedule">Preferred Schedule</Label>
                      <Select
                        value={formData.preferredSchedule}
                        onValueChange={(value) => handleChange("preferredSchedule", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your preferred schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Weekday Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="weekday-evening">Weekday Evening (6 PM - 9 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend (Flexible)</SelectItem>
                          <SelectItem value="self-paced">Self-Paced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to take this course?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us about your goals and motivation..."
                        value={formData.motivation}
                        onChange={(e) => handleChange("motivation", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Payment Options</h3>

                    <div className="grid gap-4">
                      {/* Full Payment */}
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === "full"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("full")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment"
                              value="full"
                              checked={paymentMethod === "full"}
                              onChange={() => setPaymentMethod("full")}
                              className="text-purple-600"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">Full Payment</h4>
                              <p className="text-sm text-gray-600">Pay the complete amount upfront</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</div>
                            <div className="text-sm text-green-600">Save 10% extra</div>
                          </div>
                        </div>
                      </div>

                      {/* Installment Payment */}
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === "installment"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("installment")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment"
                              value="installment"
                              checked={paymentMethod === "installment"}
                              onChange={() => setPaymentMethod("installment")}
                              className="text-purple-600"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">3 Installments</h4>
                              <p className="text-sm text-gray-600">Pay in 3 equal parts</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              ₹{Math.ceil(course.price / 3).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">x 3 payments</div>
                          </div>
                        </div>
                      </div>

                      {/* Monthly Payment */}
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === "monthly"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("monthly")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="payment"
                              value="monthly"
                              checked={paymentMethod === "monthly"}
                              onChange={() => setPaymentMethod("monthly")}
                              className="text-purple-600"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">Monthly EMI</h4>
                              <p className="text-sm text-gray-600">Pay monthly for 6 months</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              ₹{Math.ceil(course.price / 6).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">per month</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Options */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Need Custom Payment Plan?</h4>
                      <div className="flex space-x-4">
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowEmiPopup(true)}>
                          <Phone className="w-4 h-4 mr-2" />
                          Contact for EMI
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => setShowPartPaymentPopup(true)}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Part Payment Options
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-lg"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment - ₹{getPaymentAmount().toLocaleString()}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Summary & Benefits */}
          <div className="space-y-8">
            {/* Course Summary */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Course Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                    <p className="text-gray-600">{course.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>Certificate included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span>Lifetime access</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Course Price:</span>
                      <span className="line-through text-gray-500">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount ({course.discount}%):</span>
                      <span className="text-green-600">-₹{(course.originalPrice - course.price).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Final Price:</span>
                      <span>₹{course.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{course.lessons} video lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hands-on projects and assignments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Downloadable resources and materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lifetime access to course content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 student support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Job placement assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card className="border-0 shadow-lg bg-green-50">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-green-900 mb-2">Secure Payment</h3>
                <p className="text-sm text-green-700">
                  Your payment information is encrypted and secure. We accept all major payment methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Popups */}
      <EmiPopup
        isOpen={showEmiPopup}
        onClose={() => setShowEmiPopup(false)}
        courseName={course.title}
        coursePrice={course.price}
      />
      <PartPaymentPopup
        isOpen={showPartPaymentPopup}
        onClose={() => setShowPartPaymentPopup(false)}
        courseName={course.title}
        coursePrice={course.price}
      />
    </main>
  )
}
