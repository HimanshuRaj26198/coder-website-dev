"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, User, MessageSquare, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields")
      return
    }

    const nameParts = formData.name.trim().split(/\s+/)
    let firstName = ''
    let lastName = ''
    
    if (nameParts.length === 1) {
      firstName = nameParts[0]
    } else if (nameParts.length > 1) {
      firstName = nameParts.slice(0, -1).join(' ')
      lastName = nameParts[nameParts.length - 1]
    }


    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/enquiries", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course || "Not specified",
          experience: formData.experience || "Not specified",
          message: formData.message || "No additional message",
          source: "Career Consultation Form",
          enquiryType: "career-consultation"
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit enquiry')
      }

      // Success case
      setIsSuccess(true)
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        message: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)

    } catch (err) {
      console.error("Error submitting enquiry:", err)
      setError("Failed to submit your enquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You, {formData.name.split(' ')[0]}!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Your career consultation request has been received successfully.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our career counselor will contact you within 24 hours to discuss your tech career path.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            Back to Form
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">CoderCrafter</span>
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and our career counselor will contact you within 24 hours
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Start Your Tech Journey Today</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Full Name *</span>
                  </Label>
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
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address *</span>
                  </Label>
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
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number *</span>
                  </Label>
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
                  <Label htmlFor="course">Course Interest</Label>
                  <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-stack">Full Stack Web Development</SelectItem>
                      <SelectItem value="devops">DevOps Engineering</SelectItem>
                      <SelectItem value="data-science">Python Data Science & AI</SelectItem>
                      <SelectItem value="android">Android Development</SelectItem>
                      <SelectItem value="ios">iOS Development</SelectItem>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Current Experience Level</Label>
                <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                    <SelectItem value="some-knowledge">Some Programming Knowledge</SelectItem>
                    <SelectItem value="student">Current IT Student</SelectItem>
                    <SelectItem value="professional">Working Professional (Non-IT)</SelectItem>
                    <SelectItem value="it-professional">IT Professional (Career Switch)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Additional Message</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your career goals or any specific questions..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Free Career Counseling"}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to receive communications from CoderCrafter. We respect your privacy and
                will never share your information.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}