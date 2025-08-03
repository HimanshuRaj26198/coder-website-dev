import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp, Clock, DollarSign, Users, Award } from "lucide-react"
import Link from "next/link"
import { LeadForm } from "@/components/lead-form"

const professionalBenefits = [
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Weekend and evening batches designed for working professionals. Learn at your own pace without compromising your current job.",
  },
  {
    icon: TrendingUp,
    title: "Career Transition",
    description:
      "Structured pathway to transition from your current domain to high-paying tech roles with our proven methodology.",
  },
  {
    icon: DollarSign,
    title: "Salary Growth",
    description:
      "Average 150-300% salary increase after course completion. Our alumni report significant career advancement.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Earn certifications recognized by top tech companies and add credibility to your professional profile.",
  },
]

const transitionStories = [
  {
    name: "Rajesh Gupta",
    previousRole: "Mechanical Engineer",
    currentRole: "DevOps Engineer at Amazon",
    salaryIncrease: "250%",
    experience: "5 years",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "From designing machines to managing cloud infrastructure. CoderCrafter helped me transition smoothly while working full-time.",
  },
  {
    name: "Priya Sharma",
    previousRole: "Marketing Manager",
    currentRole: "Product Manager at Google",
    salaryIncrease: "180%",
    experience: "7 years",
    image: "/placeholder.svg?height=80&width=80",
    story: "My marketing background combined with tech skills from CoderCrafter opened doors I never imagined possible.",
  },
  {
    name: "Amit Patel",
    previousRole: "Finance Analyst",
    currentRole: "Data Scientist at Microsoft",
    salaryIncrease: "200%",
    experience: "6 years",
    image: "/placeholder.svg?height=80&width=80",
    story: "Numbers were always my strength. Now I use them to build AI models that impact millions of users.",
  },
]

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>For Working Professionals</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Switch to</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    High-Paying
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Tech Career
                  </span>
                  <br />
                  <span className="text-gray-900">Without Quitting</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transform your career while working full-time. Join thousands of professionals who successfully
                  transitioned to tech with our flexible learning programs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <Link href="/courses">Explore Career Paths</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/book-demo">Free Career Consultation</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15K+</div>
                  <div className="text-sm text-gray-600">Professionals Transitioned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">200%</div>
                  <div className="text-sm text-gray-600">Avg Salary Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">6 Months</div>
                  <div className="text-sm text-gray-600">Average Transition Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <img
                  src="/assets/images/professional-landing-hero.png"
                  alt="Professional learning coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Career Growth</div>
                      <div className="text-sm font-semibold">200% Salary Boost</div>
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
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Professionals Choose
              </span>{" "}
              CoderCrafter?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of career transition while managing professional responsibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Transition Stories */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Career{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Transformation
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real professionals who successfully transitioned to tech careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transitionStories.map((story, index) => (
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
                      <p className="text-sm text-gray-600">{story.experience} experience</p>
                      <Badge className="bg-green-100 text-green-600 mt-1">+{story.salaryIncrease} salary</Badge>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">From:</span>
                      <span className="font-medium">{story.previousRole}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">To:</span>
                      <span className="font-medium text-purple-600">{story.currentRole}</span>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 italic">"{story.story}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses for Professionals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Professional-Friendly
              </span>{" "}
              Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive programs designed for working professionals with weekend and evening batches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-600">Weekend Batches</Badge>
                  <Badge className="bg-green-100 text-green-600">High ROI</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps Engineering Mastery</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for IT professionals looking to upskill. Learn Docker, Kubernetes, AWS, and CI/CD.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Weekend classes</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹18,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹29,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white" asChild>
                    <Link href="/courses/devops-mastery">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-600">Evening Batches</Badge>
                  <Badge className="bg-purple-100 text-purple-600">High Demand</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science & AI</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Leverage your analytical skills in tech. Perfect for finance, consulting, and research professionals.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Evening classes</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹12,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹19,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white" asChild>
                    <Link href="/courses/python-data-science">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-600">Flexible Schedule</Badge>
                  <Badge className="bg-blue-100 text-blue-600">Complete Program</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Stack Development</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete career transition program. Build web applications from scratch to deployment.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>6 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Flexible timing</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹15,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹25,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white" asChild>
                    <Link href="/courses/full-stack-web-dev">Learn More</Link>
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
