"use client"

import { useState } from "react"
import { RefreshCw, Clock, CheckCircle, XCircle, DollarSign, Calendar, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RefundPolicy() {
  const [selectedRefundType, setSelectedRefundType] = useState<string>("standard")

  const refundTypes = [
    {
      id: "standard",
      title: "All Courses",
      description: "15-day satisfaction guarantee",
      percentage: 100,
      timeframe: "15 days",
      color: "bg-green-500",
      details: "Full refund available if requested within 15 days of purchase and course completion <25%"
    }
  ]

  const refundProcess = [
    {
      step: 1,
      title: "Submit Request",
      description: "Complete our refund request form with order details and reason",
      icon: FileText,
      timeframe: "Within 15 days of purchase"
    },
    {
      step: 2,
      title: "Verification",
      description: "We verify your course progress and eligibility",
      icon: Clock,
      timeframe: "2 business days"
    },
    {
      step: 3,
      title: "Approval",
      description: "Receive email confirmation of approval/denial",
      icon: CheckCircle,
      timeframe: "1 business day"
    },
    {
      step: 4,
      title: "Refund Issued",
      description: "Approved refunds processed to original payment method",
      icon: DollarSign,
      timeframe: "5-10 business days"
    }
  ]

  const eligibilityCriteria = [
    { 
      criteria: "Request submitted within 15 days of purchase", 
      eligible: true,
      note: "Timely submission required"
    },
    { 
      criteria: "Course completion under 25%", 
      eligible: true,
      note: "Verified by our system"
    },
    { 
      criteria: "No certificate issued/downloaded", 
      eligible: true,
      note: "Certificates void refund eligibility"
    },
    { 
      criteria: "Original payment method active", 
      eligible: true,
      note: "Required for processing"
    },
    { 
      criteria: "Request beyond 15-day window", 
      eligible: false,
      note: "No exceptions to timeframe"
    },
    { 
      criteria: "Course completion over 25%", 
      eligible: false,
      note: "Considered partial consumption"
    },
    { 
      criteria: "Violation of terms of service", 
      eligible: false,
      note: "Includes abusive behavior"
    },
    { 
      criteria: "Previously refunded purchase", 
      eligible: false,
      note: "One refund per student"
    }
  ]

  const specialCases = [
    {
      title: "Duplicate Charges",
      description: "Full refund within 24 hours of verification",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Course Cancellation",
      description: "Automatic refund if we cancel before completion",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Technical Barriers",
      description: "Case-by-case evaluation for access issues",
      icon: AlertCircle,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="">
     <div className="bg-white text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Refund Policy
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-blue prose-lg mx-auto">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                        <p>
                            At CoderCrafter, we strive to provide the highest quality technical education. If you're not satisfied with your purchase, we offer refunds under the conditions outlined in this policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Course Enrollment Refunds</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Standard Courses</h3>
                        <p>
                            You may request a full refund within <strong>7 days</strong> of your enrollment date, provided you have not:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Accessed more than 20% of the course content</li>
                            <li>Downloaded any course materials</li>
                            <li>Submitted any assignments or projects</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Bootcamps & Intensive Programs</h3>
                        <p>
                            For our intensive programs (4+ weeks duration), refunds are available as follows:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li><strong>100% refund</strong> if requested before the program start date</li>
                            <li><strong>50% refund</strong> if requested within the first 3 days</li>
                            <li><strong>No refund</strong> after 3 days into the program</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Refunds</h2>
                        <p>
                            For monthly/annual subscriptions:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>You may cancel within <strong>3 days</strong> of initial purchase for a full refund</li>
                            <li>After 3 days, refunds are prorated based on unused time</li>
                            <li>No refunds for partial months of usage</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Items</h2>
                        <p>
                            The following are not eligible for refunds:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Certification exam fees</li>
                            <li>Any purchased course materials (books, software licenses, etc.)</li>
                            <li>Services already rendered (tutoring sessions, career coaching)</li>
                            <li>Courses purchased during promotional periods unless otherwise stated</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Refunds</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 How to Request</h3>
                        <p>
                            To request a refund, email us at <Link href="mailto:refunds@codercrafter.com" className="text-blue-600 hover:text-blue-800">refunds@codercrafter.com</Link> with:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Your full name</li>
                            <li>Order/receipt number</li>
                            <li>Course/program name</li>
                            <li>Reason for refund request</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Processing Time</h3>
                        <p>
                            Approved refunds will be processed within <strong>7-10 business days</strong>. The refund will be issued to the original payment method.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Special Circumstances</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Technical Issues</h3>
                        <p>
                            If you experience technical difficulties preventing course access, we will first attempt to resolve the issue. If unresolved after 48 hours, a refund may be issued.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.2 Course Cancellation</h3>
                        <p>
                            If CoderCrafter cancels a course before completion, you will receive a full refund or option to transfer to another course.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
                        <p>
                            If you disagree with our refund decision, you may request a review by our academic committee within 14 days of the original decision. Email <Link href="mailto:disputes@codercrafter.com" className="text-blue-600 hover:text-blue-800">disputes@codercrafter.com</Link> with:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Original refund request details</li>
                            <li>Evidence supporting your claim</li>
                            <li>Desired resolution</li>
                        </ul>
                        <p className="mt-4">
                            The committee will respond within 10 business days with a final determination.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                        <p>For refund-related inquiries:</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Email: <Link href="mailto:refunds@codercrafter.com" className="text-blue-600 hover:text-blue-800">refunds@codercrafter.com</Link></span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                                <span>Phone: <Link href="tel:+911234567890" className="text-blue-600 hover:text-blue-800">+91 12345 67890</Link> (Mon-Fri, 9AM-5PM IST)</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Mailing Address: CoderCrafter Refunds, 123 Tech Park, Bangalore, Karnataka 560001, India</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

      {/* Refund Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Refund Process Timeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refundProcess.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.timeframe}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Refund Eligibility</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Qualification Requirements
              </CardTitle>
              <CardDescription>
                Your request must meet all positive criteria below to qualify
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {eligibilityCriteria.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white border">
                    <div className="flex items-center space-x-3">
                      {item.eligible ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                      <span className={`font-medium ${item.eligible ? "text-gray-700" : "text-gray-500"}`}>
                        {item.criteria}
                      </span>
                    </div>
                    {item.note && (
                      <p className="text-xs text-gray-500 mt-1 ml-8">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Exceptional Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialCases.map((caseItem, index) => {
              const Icon = caseItem.icon
              return (
                <Card key={index} className="border-t-4 border-t-green-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className={`w-6 h-6 ${caseItem.color}`} />
                    </div>
                    <CardTitle>{caseItem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {caseItem.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">
            * Exceptional cases require documentation and management approval
          </p>
        </div>
      </section>

      {/* Legal Disclaimers */}
      <div className="pb-12">
        <section className="py-10 px-4 bg-gray-100 max-w-6xl mx-auto rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">Important Legal Notes</h3>
        <div className="prose prose-sm text-gray-600 max-w-4xl mx-auto">
          <ul className="list-disc pl-5 space-y-2">
            <li>Refunds are processed to the original payment method only</li>
            <li>Transaction fees (if any) are non-refundable</li>
            <li>Course progress is measured by system-tracked completion metrics</li>
            <li>Refund requests must include valid reason for dissatisfaction</li>
            <li>Policy effective from date of purchase, not course start date</li>
            <li>CoderCrafter reserves right to deny abusive or fraudulent requests</li>
          </ul>
          <p className="text-xs text-gray-500 mt-6 italic">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
      </div>
    </div>
  )
}