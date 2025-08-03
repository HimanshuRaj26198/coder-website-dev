import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, TrendingUp, Award, BookOpen, Clock, Star } from "lucide-react"
import Link from "next/link"
import { LeadForm } from "@/components/lead-form"

const fresherBenefits = [
  {
    icon: GraduationCap,
    title: "Student-Friendly Learning",
    description:
      "Courses designed specifically for college students and recent graduates with no prior experience required.",
  },
  {
    icon: Users,
    title: "Peer Learning Groups",
    description: "Connect with fellow students and freshers in dedicated study groups and project collaborations.",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description:
      "Dedicated career counselors to help you choose the right tech path based on your interests and market demand.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certifications that add value to your resume and increase your employability.",
  },
]

const successStories = [
  {
    name: "Ankit Sharma",
    college: "Delhi University",
    role: "Software Engineer at Flipkart",
    salary: "₹12 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "From a mechanical engineering student to a software engineer at Flipkart. CoderCrafter made my career transition seamless.",
  },
  {
    name: "Sneha Patel",
    college: "Mumbai University",
    role: "Frontend Developer at Zomato",
    salary: "₹10 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story: "As a commerce student, I never thought I could code. Now I'm building apps used by millions!",
  },
  {
    name: "Rohit Kumar",
    college: "IIT Delhi",
    role: "Data Scientist at Microsoft",
    salary: "₹18 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story: "CoderCrafter helped me specialize in Data Science and land my dream job at Microsoft right after graduation.",
  },
]

export default function FreshersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                <span>Perfect for Students & Freshers</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">From</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Student
                  </span>
                  <br />
                  <span className="text-gray-900">to</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform your academic knowledge into industry-ready skills. Join thousands of students who landed
                  their first tech job with CoderCrafter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <Link href="/courses">Start Your Journey</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/book-demo">Get Free Counseling</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">25K+</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹8-18 LPA</div>
                  <div className="text-sm text-gray-600">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <img
                  src="/assets/images/studen-page-hero.png"
                  alt="Students learning coding"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                      <div className="text-sm font-semibold">95% Job Placement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Students Choose
              </span>{" "}
              CoderCrafter?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges students face when transitioning from academics to industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fresherBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Student{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real students, real success stories from colleges across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.college}</p>
                      <Badge className="bg-green-100 text-green-600 mt-1">{story.salary}</Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-purple-600">{story.role}</p>
                  </div>

                  <blockquote className="text-gray-700 italic">"{story.story}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses for Freshers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Beginner-Friendly
              </span>{" "}
              Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these carefully curated courses designed for students with no prior experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course cards would be mapped here from JSON data, filtered for beginner level */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-600">Beginner Friendly</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Stack Web Development</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect first course for students. Learn HTML, CSS, JavaScript, React, and Node.js from scratch.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>6 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>120 lessons</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹15,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹25,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white" asChild>
                    <Link href="/courses/full-stack-web-dev">Enroll Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-600">Beginner Friendly</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.7</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Python for Data Science</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Start your data science journey with Python. No math background required - we cover everything!
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>85 lessons</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹12,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹19,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white" asChild>
                    <Link href="/courses/python-data-science">Enroll Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-600">Beginner Friendly</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.6</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Android App Development</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build your first mobile app with Kotlin. Perfect for students interested in mobile development.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>100 lessons</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹13,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹21,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white" asChild>
                    <Link href="/courses/android-development">Enroll Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />
    </main>
  )
}
