"use client"

// Test Comment 2
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  Play,
  Download,
  BookOpen,
  Target,
  ArrowLeft,
  Phone,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import coursesData from "@/data/courses.json"
import EmiPopup from "@/components/popups/emi-popup"
import PartPaymentPopup from "@/components/popups/part-payment-popup"

interface CoursePageProps {
  params: Promise<{ courseId: string }>
}

export default function CoursePage({ params }: CoursePageProps) {
  const [courseId, setCourseId] = useState<string>("")
  const [showEmiPopup, setShowEmiPopup] = useState(false)
  const [showPartPaymentPopup, setShowPartPaymentPopup] = useState(false)

  // Get courseId from params
  React.useEffect(() => {
    params.then(({ courseId }) => setCourseId(courseId))
  }, [params])

  const course = coursesData.courses.find((c) => c.id === courseId)

  if (!course) {
    return <div>Loading...</div>
  }

  const relatedCourses = coursesData.courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3)

  const syllabus = [
    {
      module: "Module 1: Introduction & Fundamentals",
      duration: "2 weeks",
      topics: [
        "Course overview and learning objectives",
        "Setting up development environment",
        "Basic concepts and terminology",
        "Hands-on practice exercises",
      ],
    },
    {
      module: "Module 2: Core Concepts",
      duration: "3 weeks",
      topics: [
        "Advanced fundamentals",
        "Best practices and patterns",
        "Real-world applications",
        "Project-based learning",
      ],
    },
    {
      module: "Module 3: Advanced Topics",
      duration: "3 weeks",
      topics: ["Complex problem solving", "Industry-standard tools", "Performance optimization", "Capstone project"],
    },
    {
      module: "Module 4: Professional Development",
      duration: "2 weeks",
      topics: ["Portfolio development", "Interview preparation", "Industry networking", "Career guidance"],
    },
  ]

  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer:
        "This course is designed for beginners, so no prior experience is required. Basic computer literacy and enthusiasm to learn are all you need to get started.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "You get lifetime access to all course materials, including future updates and additional resources that may be added to the course.",
    },
    {
      question: "Is there any job placement assistance?",
      answer:
        "Yes! We provide comprehensive job placement assistance including resume building, interview preparation, and connections with our hiring partner companies.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course, you can request a full refund within 30 days of enrollment.",
    },
    {
      question: "Are there any payment plans available?",
      answer:
        "Yes, we offer flexible payment options including EMI plans and part payment options. You can start with as little as 25% of the course fee and pay the rest in installments.",
    },
  ]

  const jobRoles = [
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Technical Lead",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link href="/courses" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  {course.level}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.subtitle}</p>

              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="relative">
              <img
                src={course.image || "/placeholder.svg?height=400&width=800"}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Preview
                </Button>
              </div>
            </div>

            {/* Course Description */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Job Roles After Completion</h4>
                    <div className="flex flex-wrap gap-2">
                      {jobRoles.map((role, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Syllabus */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Course Syllabus</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {syllabus.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center justify-between w-full mr-4">
                          <span className="font-semibold">{module.module}</span>
                          <Badge variant="outline" className="text-xs">
                            {module.duration}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-4">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start space-x-2">
                              <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Instructor Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Instructor"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    {/* <h4 className="font-semibold text-gray-900 mb-1">{course.instructor}</h4> */}
                    <p className="text-sm text-gray-600 mb-2">Senior Software Engineer at Tech Corp</p>
                    <p className="text-sm text-gray-700">
                      With over 8 years of industry experience, our instructor has worked with leading tech companies
                      and has trained over 10,000 students worldwide. Expert in modern development practices and
                      passionate about teaching.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="border-0 shadow-2xl sticky top-8">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{course.discount}% OFF - Limited Time</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14"
                    asChild
                  >
                    <Link href={`/enroll/${course.id}`}>Enroll Now</Link>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full h-12 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Payment Options */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Flexible Payment Options</h4>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setShowEmiPopup(true)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      0% EMI Available - Contact Us
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setShowPartPaymentPopup(true)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Part Payment - Start with 25%
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Course Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Lifetime access</span>
                    <span className="text-sm">Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm">24/7 student support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Related Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {relatedCourses.map((relatedCourse) => (
                      <Link
                        key={relatedCourse.id}
                        href={`/courses/${relatedCourse.id}`}
                        className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">{relatedCourse.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{relatedCourse.subtitle}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-purple-600">
                            ₹{relatedCourse.price.toLocaleString()}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs text-gray-600">{relatedCourse.rating}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
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
