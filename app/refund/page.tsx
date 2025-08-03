"use client"

import { useState } from "react"
import { RefreshCw, Clock, CheckCircle, XCircle, DollarSign, Calendar, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <RefreshCw className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our straightforward 15-day refund policy ensures risk-free enrollment in all CoderCrafter programs.
            </p>
            <div className="mt-6 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              15-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy Summary */}
      <section className="py-12 px-4 bg-white max-w-4xl mx-auto rounded-xl shadow-sm mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Key Policy Terms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-r border-gray-200 pr-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <p className="text-gray-600">Days from purchase</p>
            </div>
            <div className="border-r border-gray-200 pr-6">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <p className="text-gray-600">Max course completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Refund amount</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8 italic">
            Refunds exclude any transaction fees. See full terms below.
          </p>
        </div>
      </section>

      {/* Refund Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Refund Policy</h2>
          <div className="flex justify-center mb-16">
            <Card className="w-full max-w-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <CardTitle className="text-xl">Standard Refund</CardTitle>
                <CardDescription>Applies to all CoderCrafter courses</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15 Days</div>
                    <div className="text-sm text-gray-500">Refund window</div>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-sm text-gray-600 px-4">
                    Eligible if requested within 15 days of purchase and course completion &lt;25%
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
      <section className="py-12 px-4 bg-gray-100 max-w-6xl mx-auto rounded-lg">
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 shadow-xl text-white">
            <RefreshCw className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need to Initiate a Refund?</h3>
            <p className="text-blue-100 mb-6">
              We aim to make the process simple and transparent while protecting all parties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Begin Refund Request
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Policy Questions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}