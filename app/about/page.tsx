import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: "50,000+", label: "Students Trained", icon: Users },
  { number: "95%", label: "Job Placement Rate", icon: Award },
  { number: "500+", label: "Partner Companies", icon: Target },
  { number: "4.8/5", label: "Student Rating", icon: Star },
]

const values = [
  {
    icon: Target,
    title: "Excellence in Education",
    description: "We maintain the highest standards in curriculum design, instructor quality, and learning outcomes.",
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Every decision we make is focused on student success and career transformation.",
  },
  {
    icon: Users,
    title: "Industry Collaboration",
    description: "We work closely with top tech companies to ensure our curriculum meets industry demands.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "We constantly update our programs with the latest technologies and industry best practices.",
  },
]

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    experience: "15+ years at Google, Microsoft",
    image: "/placeholder.svg?height=200&width=200",
    description: "Former Engineering Director at Google with a passion for democratizing tech education.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Curriculum",
    experience: "12+ years at Amazon, Netflix",
    image: "/placeholder.svg?height=200&width=200",
    description: "Ex-Principal Engineer at Amazon, specializing in scalable learning systems.",
  },
  {
    name: "Amit Patel",
    role: "Head of Placements",
    experience: "10+ years in Tech Recruitment",
    image: "/placeholder.svg?height=200&width=200",
    description: "Former Head of Engineering Recruitment at multiple unicorn startups.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "VikaraX Founded",
    description: "Started with a vision to bridge the gap between academic learning and industry requirements.",
  },
  {
    year: "2020",
    title: "First 1000 Students",
    description: "Achieved our first milestone of training 1000 students with 90% placement rate.",
  },
  {
    year: "2021",
    title: "Corporate Partnerships",
    description: "Established partnerships with 100+ companies for direct recruitment.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description: "Expanded to 10 cities across India with regional training centers.",
  },
  {
    year: "2023",
    title: "25K Students Milestone",
    description: "Crossed 25,000 successful student placements with average 150% salary increase.",
  },
  {
    year: "2024",
    title: "AI-Powered Learning",
    description: "Launched personalized AI-driven learning paths and career guidance system.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                VikaraX
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize tech education and empower individuals to build successful careers in
              technology, regardless of their background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Democratize Tech Education</h3>
                    <p className="text-gray-600">
                      Make high-quality tech education accessible to everyone, regardless of their background or
                      location.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bridge Industry Gap</h3>
                    <p className="text-gray-600">
                      Connect the gap between academic learning and industry requirements through practical, hands-on
                      training.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Empower Career Growth</h3>
                    <p className="text-gray-600">
                      Enable individuals to transform their careers and achieve financial independence through
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our mission"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at VikaraX
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading VikaraX's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                  <Badge className="bg-gray-100 text-gray-600 mb-4">{member.experience}</Badge>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform tech education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="bg-purple-100 text-purple-600 mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-purple-600 rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of successful students who transformed their careers with VikaraX
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
            >
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full font-semibold bg-transparent"
            >
              <Link href="/book-demo">Book Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
