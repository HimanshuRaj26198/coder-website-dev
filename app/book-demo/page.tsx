"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Video, CheckCircle, Star, Users } from "lucide-react"

const benefits = [
  "Personalized career roadmap",
  "Live coding demonstration",
  "Industry insights and trends",
  "Course recommendation",
  "Placement assistance overview",
  "Q&A with industry experts",
]

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "2:00 PM - 3:00 PM",
  "4:00 PM - 5:00 PM",
  "6:00 PM - 7:00 PM",
  "8:00 PM - 9:00 PM",
]

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    background: "",
    interest: "",
    experience: "",
    preferredDate: "",
    preferredTime: "",
    questions: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo booking:", formData)
    alert("Demo session booked successfully! We will send you a confirmation email shortly.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      background: "",
      interest: "",
      experience: "",
      preferredDate: "",
      preferredTime: "",
      questions: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Free Demo
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a personalized 1-on-1 session with our career counselor and discover the perfect tech path for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Benefits */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Video className="w-6 h-6" />
                  <span>What You'll Get in This Demo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Duration: 60 Minutes</h3>
                    <p className="text-gray-600">Comprehensive career consultation</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">1-on-1 Session</h3>
                    <p className="text-gray-600">Personalized attention and guidance</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Expert Counselor</h3>
                    <p className="text-gray-600">Industry professional with 10+ years experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Schedule Your Free Demo</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="background">Educational Background</Label>
                    <Select value={formData.background} onValueChange={(value) => handleChange("background", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your background" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="commerce">Commerce/Finance</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="arts">Arts/Humanities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="interest">Course Interest</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select course interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-stack">Full Stack Development</SelectItem>
                        <SelectItem value="data-science">Data Science & AI</SelectItem>
                        <SelectItem value="devops">DevOps Engineering</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some-knowledge">Some Programming Knowledge</SelectItem>
                        <SelectItem value="student">Current Student</SelectItem>
                        <SelectItem value="professional">Working Professional</SelectItem>
                        <SelectItem value="career-change">Looking for Career Change</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      required
                      className="h-12"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) => handleChange("preferredTime", value)}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="questions">Questions or Specific Topics</Label>
                  <Textarea
                    id="questions"
                    placeholder="Any specific questions or topics you'd like to discuss during the demo..."
                    value={formData.questions}
                    onChange={(e) => handleChange("questions", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg rounded-full"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book My Free Demo Session
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By booking this demo, you agree to receive communications from VikaraX. We respect your privacy and
                  will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
