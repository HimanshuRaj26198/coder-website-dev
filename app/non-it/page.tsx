import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Lightbulb, Target, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { LeadForm } from "@/components/lead-form"

const nonItBenefits = [
  {
    icon: BookOpen,
    title: "Zero Prerequisites",
    description:
      "No prior technical knowledge required. We start from absolute basics and build your skills step by step.",
  },
  {
    icon: Lightbulb,
    title: "Simplified Learning",
    description:
      "Complex technical concepts explained in simple terms with real-world analogies and practical examples.",
  },
  {
    icon: Users,
    title: "Peer Support",
    description:
      "Learn alongside other non-IT professionals making the same transition. Build your network and support system.",
  },
  {
    icon: Target,
    title: "Career Focused",
    description:
      "Every lesson is designed with job requirements in mind. Learn exactly what employers are looking for.",
  },
]

const transitionPaths = [
  {
    background: "Commerce/Finance",
    techRole: "Data Analyst",
    skills: ["Excel", "SQL", "Python", "Tableau"],
    duration: "3-4 months",
    salaryRange: "₹6-12 LPA",
    description: "Your analytical skills are perfect for data roles. Learn to work with databases and create insights.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    background: "Arts/Humanities",
    techRole: "UI/UX Designer",
    skills: ["Design Thinking", "Figma", "User Research", "Prototyping"],
    duration: "4-5 months",
    salaryRange: "₹5-10 LPA",
    description: "Your creativity and understanding of human behavior are valuable in designing user experiences.",
    color: "from-purple-500 to-pink-500",
  },
  {
    background: "Science/Research",
    techRole: "Data Scientist",
    skills: ["Python", "Statistics", "Machine Learning", "Research Methods"],
    duration: "5-6 months",
    salaryRange: "₹8-15 LPA",
    description: "Your research background gives you an edge in data science and analytical thinking.",
    color: "from-green-500 to-teal-500",
  },
  {
    background: "Any Background",
    techRole: "Web Developer",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    duration: "4-6 months",
    salaryRange: "₹6-12 LPA",
    description: "Web development is accessible to everyone. Start building websites and web applications.",
    color: "from-orange-500 to-red-500",
  },
]

const successStories = [
  {
    name: "Meera Joshi",
    background: "B.Com Graduate",
    currentRole: "Data Analyst at Flipkart",
    salary: "₹9 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "From managing accounts to analyzing customer data. My commerce background actually helped me understand business metrics better.",
  },
  {
    name: "Arjun Reddy",
    background: "Mechanical Engineer",
    currentRole: "Full Stack Developer at Zomato",
    salary: "₹11 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "Engineering taught me problem-solving. Coding is just another way to solve problems, but with much better career prospects!",
  },
  {
    name: "Kavya Sharma",
    background: "English Literature",
    currentRole: "Product Manager at Paytm",
    salary: "₹14 LPA",
    image: "/placeholder.svg?height=80&width=80",
    story:
      "My communication skills from literature studies became my superpower in tech. Now I bridge the gap between technical and business teams.",
  },
]

export default function NonItPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Updated with full image display */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 h-full">
          <div className="flex flex-col lg:flex-row items-center h-full gap-8">
            {/* Text Content - Left Side (50% width) */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Perfect for Non-IT Backgrounds</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Background
                  </span>
                  <br />
                  <span className="text-gray-900">is Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Advantage
                  </span>
                  <br />
                  <span className="text-gray-900">in Tech</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Don't let your non-IT background hold you back. Your unique perspective and skills are exactly what
                  the tech industry needs. Start your transformation today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <Link href="/courses">Find Your Path</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <Link href="/book-demo">Free Career Assessment</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Non-IT Transitions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹6-15 LPA</div>
                  <div className="text-sm text-gray-600">Starting Packages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4-6 Months</div>
                  <div className="text-sm text-gray-600">To Job Ready</div>
                </div>
              </div>
            </div>

            {/* Image - Right Side (50% width) */}
            <div className="lg:w-1/2 relative h-full flex items-center justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                <img
                  width="100%"
                  height="auto"
                  src="/assets/images/non-it-landing-hero.png"
                  alt="Diverse professionals learning technology"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                      <div className="text-sm font-semibold">92% Job Success</div>
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
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Non-IT Professionals
              </span>{" "}
              Excel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your diverse background brings fresh perspectives and valuable skills that tech companies desperately need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nonItBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Career Transition Paths */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Your{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Perfect Tech Path
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on your background, here are the most suitable tech career paths with high success rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transitionPaths.map((path, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gray-100 text-gray-600">{path.background}</Badge>
                    <Badge className="bg-green-100 text-green-600">{path.salaryRange}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.techRole}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>High Demand</span>
                    </div>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${path.color} text-white hover:opacity-90`} asChild>
                    <Link href="/courses">Explore This Path</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Non-IT to{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Tech Success
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real people from non-technical backgrounds who are now thriving in tech careers
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
                      <p className="text-sm text-gray-600">{story.background}</p>
                      <Badge className="bg-green-100 text-green-600 mt-1">{story.salary}</Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-purple-600">{story.currentRole}</p>
                  </div>

                  <blockquote className="text-gray-700 italic">"{story.story}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner-Friendly Courses */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Beginner-Friendly
              </span>{" "}
              Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your tech journey with courses designed specifically for non-technical backgrounds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-teal-100 text-teal-600">Zero Prerequisites</Badge>
                  <Badge className="bg-green-100 text-green-600">Most Popular</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development Fundamentals</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Start with HTML, CSS, and JavaScript. Build your first website without any prior coding experience.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>3 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Small batches</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹9,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹15,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white" asChild>
                    <Link href="/courses/web-fundamentals">Start Learning</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-teal-100 text-teal-600">Business Friendly</Badge>
                  <Badge className="bg-blue-100 text-blue-600">High Salary</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analysis with Excel & SQL</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for commerce/finance backgrounds. Learn to analyze data and create business insights.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>2 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Weekend classes</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹7,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹12,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white" asChild>
                    <Link href="/courses/data-analysis">Start Learning</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-teal-100 text-teal-600">Creative Focus</Badge>
                  <Badge className="bg-purple-100 text-purple-600">Growing Field</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design Basics</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Great for arts/humanities backgrounds. Learn design thinking and create user-friendly interfaces.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>3 months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Project-based</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹11,999</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹18,999</span>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white" asChild>
                    <Link href="/courses/ui-ux-design">Start Learning</Link>
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