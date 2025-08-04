"use client"

import { useState } from "react"
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Monitor,
  CreditCard,
  Briefcase,
  User,
} from "lucide-react"
import faqData from "@/data/faq.json"

// Note: This would normally be in the page file, but since we're using client components,
// we'll handle SEO through other means
const pageTitle = "FAQ - CoderCrafter | Frequently Asked Questions"
const pageDescription =
  "Find answers to common questions about CoderCrafter courses, payments, technical support, placement assistance, and more."

const iconMap = {
  HelpCircle,
  BookOpen,
  Monitor,
  CreditCard,
  Briefcase,
  User,
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const filteredCategories = faqData.categories.filter((category) => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false

    if (searchTerm) {
      return category.questions.some(
        (question) =>
          question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          question.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return true
  })

  const filteredQuestions = (questions: any[]) => {
    if (!searchTerm) return questions

    return questions.filter(
      (question) =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className=" text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find quick answers to common questions about our courses, platform, and services
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2 rounded-lg text-gray-900 text-lg border border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === "all"
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3" />
                    <span>All Questions</span>
                  </div>
                </button>

                {faqData.categories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap]
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 mr-3" />
                          <span>{category.name}</span>
                        </div>
                        <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          {category.questions.length}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {filteredCategories.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse different categories</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap]
                  const questions = filteredQuestions(category.questions)

                  if (questions.length === 0) return null

                  return (
                    <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                          <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
                        </div>
                      </div>

                      <div className="divide-y divide-gray-200">
                        {questions.map((question) => (
                          <div key={question.id} className="p-6">
                            <button
                              onClick={() => toggleQuestion(question.id)}
                              className="w-full text-left flex items-center justify-between focus:outline-none"
                            >
                              <h3 className="text-lg font-medium text-gray-900 pr-4">{question.question}</h3>
                              {expandedQuestions.includes(question.id) ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>

                            {expandedQuestions.includes(question.id) && (
                              <div className="mt-4 pr-8">
                                <p className="text-gray-700 leading-relaxed">{question.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
