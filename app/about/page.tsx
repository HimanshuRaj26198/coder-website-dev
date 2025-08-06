import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: "100+", label: "Students Enrolled", icon: Users },
  { number: "90%", label: "Satisfaction Rate", icon: Award },
  { number: "10+", label: "Industry Partners", icon: Target },
  { number: "4.5/5", label: "Average Rating", icon: Star },
]

const values = [
  {
    icon: Target,
    title: "Quality Education",
    description: "We focus on practical, hands-on learning that prepares you for real-world challenges.",
  },
  {
    icon: Heart,
    title: "Personalized Attention",
    description: "Small batch sizes ensure every student gets the guidance they need.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Join a supportive network of learners and mentors.",
  },
  {
    icon: Award,
    title: "Cutting-Edge Curriculum",
    description: "Learn the most in-demand technologies from industry experts.",
  },
]

const founder = {
  name: "Nayansi",
  role: "Founder & Lead Instructor",
  experience: "5+ years in Full Stack Development",
  image: "/assets/images/founder.jpg",
  description: "Passionate educator with experience building scalable web applications. Committed to making quality tech education accessible to everyone.",
}

const milestones = [
  {
    year: "2023",
    title: "CoderCrafter Founded",
    description: "Started with a vision to provide affordable, high-quality coding education.",
  },
  {
    year: "2024",
    title: "First Cohort Graduated",
    description: "Successfully trained our first batch of students with excellent feedback.",
  },
  {
    year: "2024",
    title: "New Courses Launched",
    description: "Expanded our curriculum based on student demand and industry trends.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CoderCrafter
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A new-age coding institute focused on helping beginners launch their tech careers through practical, project-based learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bridging the Skills Gap</h3>
                    <p className="text-gray-600">
                      We make quality coding education accessible to everyone, regardless of their background.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project-Based Learning</h3>
                    <p className="text-gray-600">
                      Our curriculum focuses on building real projects, not just theory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Transformation</h3>
                    <p className="text-gray-600">
                      We help students develop the skills and portfolio needed to land their first tech job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/coder_about_hero.png"
              alt="Our mission"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at CoderCrafter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate educator behind CoderCrafter
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
              <CardContent className="p-8 text-center">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{founder.role}</p>
                <Badge className="bg-gray-100 text-gray-600 mb-4">{founder.experience}</Badge>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growing story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-5">
                        <Badge className="bg-purple-100 text-purple-600 mb-2">{milestone.year}</Badge>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-lg text-purple-100 mb-6">
            Join our community of learners and take the first step toward your tech career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 text-md rounded-full font-semibold"
            >
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 text-md rounded-full font-semibold bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}