"use client"

import { useState } from "react"
import { FileText, Scale, UserCheck, AlertTriangle, Shield, Gavel, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsOfService() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const termsSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: UserCheck,
      priority: "high",
      content: `By accessing and using CoderCrafter's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms apply to all users, including:
      • Students enrolled in courses
      • Visitors browsing our website
      • Corporate clients and partners
      • Instructors and content creators
      
      If you do not agree with any part of these terms, you must not use our services.`,
    },
    {
      id: "services",
      title: "Description of Services",
      icon: FileText,
      priority: "medium",
      content: `CoderCrafter provides online educational services including:
      • Programming and technology courses
      • Live and recorded video lectures
      • Interactive coding exercises and projects
      • Career guidance and placement assistance
      • Certification programs
      • Community forums and peer interaction
      • Technical support and mentorship
      
      We reserve the right to modify, suspend, or discontinue any service at any time.`,
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      icon: Scale,
      priority: "high",
      content: `As a user of our platform, you agree to:
      • Provide accurate and complete information
      • Maintain the security of your account credentials
      • Use the platform only for lawful purposes
      • Respect intellectual property rights
      • Not share course content without permission
      • Engage respectfully with other users and instructors
      • Report any technical issues or policy violations
      • Complete courses within the specified timeframes`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Shield,
      priority: "high",
      content: `All content on CoderCrafter, including but not limited to:
      • Course materials and curriculum
      • Video lectures and presentations
      • Code examples and projects
      • Assessments and quizzes
      • Platform design and functionality
      
      Is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit written permission.`,
    },
    {
      id: "payment-terms",
      title: "Payment and Refund Terms",
      icon: Gavel,
      priority: "medium",
      content: `Payment terms and conditions:
      • All fees are due at the time of enrollment
      • Prices are subject to change with notice
      • Refunds are governed by our Refund Policy
      • Failed payments may result in service suspension
      • Corporate billing terms may vary
      • Currency conversions are approximate
      • Taxes may apply based on your location`,
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: AlertTriangle,
      priority: "medium",
      content: `CoderCrafter's liability is limited to the maximum extent permitted by law:
      • We provide services "as is" without warranties
      • We are not liable for indirect or consequential damages
      • Our total liability is limited to the amount paid for services
      • We do not guarantee specific career outcomes
      • Technical issues may occasionally affect service availability
      • Third-party integrations are subject to their own terms`,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-blue-600 opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
              <Scale className="w-10 h-10 text-slate-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our educational platform and services.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Last updated: January 2024</span>
              <span>•</span>
              <span>Version 2.1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Terms Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Fair Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Use our platform responsibly and respect other learners.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Content Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our course materials are protected by intellectual property laws.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Clear Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Transparent payment, refund, and service policies.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Understanding service limitations and liability terms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Terms & Conditions</h2>

          <div className="space-y-6">
            {termsSections.map((section) => {
              const Icon = section.icon
              const isExpanded = expandedSection === section.id

              return (
                <Card key={section.id} className="overflow-hidden border-l-4 border-l-blue-500">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl flex items-center gap-3">
                            {section.title}
                            <Badge className={getPriorityColor(section.priority)}>{section.priority}</Badge>
                          </CardTitle>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="pl-14">
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed">{section.content}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <Scale className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Agreement & Legal Support</h3>
            <p className="text-gray-600 mb-6">
              By using our services, you agree to these terms. If you have questions about any legal aspects or need
              clarification, our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
                Contact Legal Team
              </Button>
              <Button size="lg" variant="outline">
                Download Terms PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
