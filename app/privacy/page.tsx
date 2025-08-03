"use client"

import { useState } from "react"
import { Shield, Eye, Lock, Database, Users, FileText, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us. This includes:
      • Personal information (name, email, phone number)
      • Educational background and preferences
      • Payment information (processed securely through third-party providers)
      • Course progress and performance data
      • Communication preferences and feedback`,
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Eye,
      content: `We use the information we collect to:
      • Provide and improve our educational services
      • Process enrollments and payments
      • Send course updates and educational content
      • Provide customer support
      • Analyze usage patterns to enhance user experience
      • Comply with legal obligations`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Users,
      content: `We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:
      • With service providers who assist in our operations
      • When required by law or to protect our rights
      • In connection with a business transfer or merger
      • With your explicit consent
      • For placement assistance with verified hiring partners`,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: `We implement appropriate security measures to protect your information:
      • SSL encryption for data transmission
      • Secure servers and databases
      • Regular security audits and updates
      • Access controls and authentication
      • Employee training on data protection
      • Incident response procedures`,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Shield,
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate information
      • Delete your account and data
      • Opt-out of marketing communications
      • Data portability
      • Lodge complaints with supervisory authorities`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-gray-500">Last updated: January 2024</div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Secure & Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your data is encrypted and stored securely with industry-standard protection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Transparent Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We clearly explain how your information is used to improve your learning experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Your Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You have full control over your data with options to access, modify, or delete.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy Policy Details</h2>

          <div className="space-y-6">
            {privacySections.map((section) => {
              const Icon = section.icon
              const isExpanded = expandedSection === section.id

              return (
                <Card key={section.id} className="overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
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

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
              contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Privacy Team
              </Button>
              <Button size="lg" variant="outline">
                Download PDF Version
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
