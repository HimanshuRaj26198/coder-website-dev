"use client"

import { useState } from "react"
import { FileText, Scale, UserCheck, AlertTriangle, Shield, Gavel, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


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
    <div className="">
      {/* Hero Section */}
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Terms and Conditions
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-blue text-gray-600 prose-lg mx-auto">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to CoderCrafter ("we," "our," or "us"). These Terms and Conditions govern your use of our website
                            and services. By accessing or using our website, enrolling in our courses, or using any of our services,
                            you agree to comply with and be bound by these terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Enrollment and Payments</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Course Registration</h3>
                        <p>
                            Enrollment in our courses is subject to availability and completion of the registration process. You must
                            provide accurate and complete information during registration.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Fees and Payment</h3>
                        <p>
                            All course fees are due as specified during enrollment. We accept payment via credit card, bank transfer,
                            or other methods specified on our website. Fees are non-refundable except as outlined in our Refund Policy.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.3 Refund Policy</h3>
                        <p>
                            Refund requests must be made in writing within 7 days of course commencement. Refunds will be processed
                            minus any administrative fees (15% of course fee or ₹1000, whichever is lower). No refunds will be issued
                            after the 7-day period.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Student Conduct</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Academic Integrity</h3>
                        <p>
                            Students must maintain academic integrity. Plagiarism, cheating, or any form of academic dishonesty will
                            result in disciplinary action, up to and including dismissal from the program without refund.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Code of Conduct</h3>
                        <p>
                            Students must behave professionally and respectfully toward instructors and fellow students. We reserve
                            the right to dismiss any student for inappropriate behavior without refund.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p>
                            All course materials, including but not limited to lectures, videos, code samples, and documentation, are
                            the intellectual property of CoderCrafter. Students are granted a limited, non-exclusive, non-transferable
                            license to use these materials for personal educational purposes only.
                        </p>
                        <p className="mt-4">
                            Reproduction, distribution, or commercial use of any course materials without express written permission
                            from CoderCrafter is strictly prohibited.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy Policy</h2>
                        <p>
                            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                            personal information. By using our services, you consent to our collection and use of your data as
                            described in the Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p>
                            CoderCrafter shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                            including but not limited to loss of profits, data, or other intangible losses, resulting from:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Your access to or use of our services</li>
                            <li>Any conduct or content of third parties on our platform</li>
                            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                            <li>Any errors or omissions in any content or for any loss or damage incurred as a result</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
                            new Terms on this page. Your continued use of our services after any changes constitutes acceptance of the
                            new Terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without
                            regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                        <p>If you have any questions about these Terms, please contact us:</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Email: <Link href="mailto:legal@codercrafter.com" className="text-blue-600 hover:text-blue-800">legal@codercrafter.com</Link></span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                                <span>Phone: <Link href="tel:+911234567890" className="text-blue-600 hover:text-blue-800">+91 12345 67890</Link></span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Address: 123 Tech Park, Bangalore, Karnataka 560001, India</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

      {/* Detailed Terms */}
      <section className="pb-16 px-4 bg-white">
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
                        <div className="w-10 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl flex items-center gap-3">
                            {section.title}
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
    </div>
  )
}
