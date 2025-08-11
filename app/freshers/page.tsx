import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, TrendingUp, Award, BookOpen, Clock, Star, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { LeadForm } from "@/components/lead-form"
import coursesData from "@/data/courses.json"

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
    role: "Software Engineer at Zensar Tech",
    salary: "12 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "From a mechanical engineering student to a software engineer at Zensar Technologies. CoderCrafter made my career transition seamless.",
  },
  {
    name: "Sneha Patel",
    college: "Mumbai University",
    role: "Frontend Developer at Simform",
    salary: "10 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story: "As a commerce student, I never thought I could code. Now I'm building apps used by millions!",
  },
  {
    name: "Rohit Kumar",
    college: "IIT Delhi",
    role: "Data Scientist at GeekyAnts",
    salary: "18 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story: "CoderCrafter helped me specialize in Data Science and land my dream job at GeekyAnts right after graduation.",
  },
]

export default function FreshersPage() {
   const featuredCourses = coursesData.courses.slice(0, 6)
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-6 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
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
                  <span className=" text-gray-900">
                    Student
                  </span>{" "}
                  <span className="text-gray-900">to</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹8-18 LPA</div>
                  <div className="text-sm text-gray-600">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
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
                      <div className="bg-green-100 rounded-2xl pl-2 w-20 text-green-600 mt-1">{story.salary}</div>
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
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden relative"
            >
              {/* Discount Ribbon */}
              {course.discount > 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 translate-y-4 w-32 text-center z-10">
                  {course.discount}% OFF
                </div>
              )}

              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">View Course Details</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({course.reviews} Reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">By {course.instructor.name}</p>
                    <p className="text-xs text-gray-500">{course.instructor.expertise}</p>
                  </div>
                </div> */}
              </CardContent>

              <CardFooter className="px-6 pt-0 flex flex-col gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Starting at</span>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                      {course.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through mb-0.5">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    EMI available
                  </div>
                </div>

                <div className="flex gap-2 w-full">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 flex-1"
                  >
                    <Link href={`/courses/${course.id}`} className="flex items-center gap-1">
                      Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/30 flex-1"
                  >
                    <Link href={`/enroll/${course.id}`} className="flex items-center gap-1">
                      <Zap className="w-4 h-4 fill-white" /> Enroll
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/courses" className="flex items-center gap-2">
              Browse All Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />
    </main>
  )
}
