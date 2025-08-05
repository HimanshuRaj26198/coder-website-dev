"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon, CreditCard, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    preferredContact: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for contacting CoderCrafter. Our team will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses or need help with enrollment? We're here to help you start your tech
            journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">General Inquiries</p>
                    <p className="text-purple-600 font-medium">+91 86048 46317</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Admissions</p>
                    <p className="text-purple-600 font-medium">+91 89203 19125</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp Support</p>
                    <p className="text-green-600 font-medium">+91 89203 19125</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">General</p>
                    <p className="text-blue-600">info@CoderCrafter.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Admissions</p>
                    <p className="text-blue-600">admissions@CoderCrafter.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Support</p>
                    <p className="text-blue-600">support@CoderCrafter.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Visit Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">CoderCrafter Training Institute</p>
                  <p className="text-gray-700">
                    123 Tech Park, Innovation Hub
                    <br />
                    Bangalore, Karnataka 560001
                    <br />
                    India
                  </p>
                </div>
              </CardContent>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">CoderCrafter Head Quarter</p>
                  <p className="text-gray-700">
                    A-1, Housing Colony, Lohiya Nagar
                    <br />
                    Kankarbagh, Patna, Bihar 800020
                    <br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Working Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HeadphonesIcon className="w-5 h-5 text-purple-600" />
                  <span>Need Immediate Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://wa.me/919876543212", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => window.open("tel:+919876543210")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-purple-100">Fill out the form below and we'll get back to you soon</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleChange("inquiryType", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="course-info">Course Information</SelectItem>
                          <SelectItem value="enrollment">Enrollment Support</SelectItem>
                          <SelectItem value="payment">Payment & EMI Options</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="career">Career Guidance</SelectItem>
                          <SelectItem value="demo">Book a Demo</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief subject of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(value) => handleChange("preferredContact", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="any">Any method</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Payment Support Section */}
            <Card className="border-0 shadow-lg mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Payment & EMI Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Need help with payment options, EMI plans, or part payment arrangements? Our payment specialists are
                  here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <h4 className="font-semibold text-gray-900 mb-2">EMI Options</h4>
                    <p className="text-sm text-gray-600 mb-3">0% interest EMI available for 3-12 months</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      Call EMI Specialist
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <h4 className="font-semibold text-gray-900 mb-2">Part Payment</h4>
                    <p className="text-sm text-gray-600 mb-3">Start with just 25% and pay the rest later</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Calendar className="w-4 h-4 mr-2" />
                      Discuss Part Payment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
