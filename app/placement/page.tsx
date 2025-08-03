import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  FileText,
  MessageSquare,
  Star,
  Briefcase,
  Target,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Career Support - CoderCrafter | Job Readiness Program",
  description:
    "Boost your employability with our career support: CV building, mock interviews, and job search strategies. No placement guarantees—just proven preparation.",
  keywords:
    "career support, job readiness, interview prep, resume help, portfolio building, tech careers",
}

const careerStats = [
  {
    title: "Career Transition Rate",
    value: "90%+",
    description: "Of committed students land tech roles*",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    title: "Avg. Starting Salary",
    value: "₹6-10 LPA",
    description: "For graduates in entry-level roles",
    icon: Award,
    color: "bg-blue-500",
  },
  {
    title: "Hiring Network",
    value: "500+",
    description: "Companies we engage with",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    title: "Alumni Community",
    value: "1,000+",
    description: "Members in our job support network",
    icon: Users,
    color: "bg-orange-500",
  },
]

const careerServices = [
  {
    title: "Resume Optimization",
    description: "Transform your resume with ATS-friendly formats and tech industry insights",
    icon: FileText,
    features: [
      "ATS-compliant templates",
      "Tech-specific keyword optimization",
      "Project highlight strategies",
      "LinkedIn profile overhaul",
      "Cover letter guidance",
    ],
  },
  {
    title: "Portfolio Crafting",
    description: "Showcase your skills effectively to stand out in competitive job markets",
    icon: Target,
    features: [
      "GitHub best practices",
      "Personal website guidance",
      "Project presentation coaching",
      "Technical storytelling techniques",
      "Demo video preparation",
    ],
  },
  {
    title: "Interview Simulations",
    description: "Practice with technical experts to build confidence",
    icon: MessageSquare,
    features: [
      "Real-world coding tests",
      "Behavioral interview drills",
      "Whiteboard practice sessions",
      "Negotiation training",
      "Post-interview analysis",
    ],
  },
  {
    title: "Skill Validation",
    description: "Regular assessments to benchmark your readiness",
    icon: BookOpen,
    features: [
      "Technical competency checks",
      "Coding challenge reviews",
      "Industry-aligned rubrics",
      "Progress analytics",
      "Gap identification",
    ],
  },
]

const hiringPartners = [
  { name: "TCS", logo: "/placeholder.svg?height=60&width=120&text=TCS" },
  { name: "Infosys", logo: "/placeholder.svg?height=60&width=120&text=Infosys" },
  { name: "Wipro", logo: "/placeholder.svg?height=60&width=120&text=Wipro" },
  { name: "Accenture", logo: "/placeholder.svg?height=60&width=120&text=Accenture" },
  { name: "IBM", logo: "/placeholder.svg?height=60&width=120&text=IBM" },
  { name: "Amazon", logo: "/placeholder.svg?height=60&width=120&text=Amazon" },
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
  { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
]

const successStories = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    company: "TCS",
    salary: "₹7.5 LPA",
    course: "Full Stack Web Development",
    image: "/placeholder.svg?height=80&width=80&text=RS",
    testimonial:
      "The interview prep gave me the edge I needed. Landed 3 offers within 2 months of completing the course.",
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    company: "Infosys",
    salary: "₹6.8 LPA",
    course: "Python Data Science",
    image: "/placeholder.svg?height=80&width=80&text=PP",
    testimonial: "Career coaching helped me transition from banking to tech. Worth every rupee!",
  },
  {
    name: "Amit Kumar",
    role: "Junior DevOps Engineer",
    company: "Startup",
    salary: "₹8 LPA",
    course: "DevOps Fundamentals",
    image: "/placeholder.svg?height=80&width=80&text=AK",
    testimonial: "The portfolio guidance made my projects shine during interviews.",
  },
]

const careerProcess = [
  {
    step: 1,
    title: "Skill Mastery",
    description: "Complete coursework with industry-relevant projects",
  },
  {
    step: 2,
    title: "Readiness Evaluation",
    description: "Assess your technical and interview preparedness",
  },
  {
    step: 3,
    title: "Profile Polishing",
    description: "Develop job-search assets with expert feedback",
  },
  {
    step: 4,
    title: "Interview Training",
    description: "Practice with technical and HR simulations",
  },
  {
    step: 5,
    title: "Strategic Job Search",
    description: "Apply through optimized channels and networks",
  },
  {
    step: 6,
    title: "Ongoing Coaching",
    description: "Get continuous support during your job hunt",
  },
]

export default function PlacementAssistance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Launch Support</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We equip you with everything needed for your job search—except guarantees. Our proven preparation system
              has helped 1,000+ learners compete for tech roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Career Services
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                See Alumni Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          *Based on graduates who complete all career prep components and actively job search
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Search Accelerator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we <span className="text-blue-600 font-medium">can</span> promise: exceptional preparation that makes
              you competitive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Career Readiness Path</h2>
            <p className="text-xl text-gray-600">A rigorous approach to maximize your opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 relative">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Outcomes</h2>
            <p className="text-xl text-gray-600">What our graduates achieve through their own efforts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.role}</p>
                    <p className="text-gray-600 text-sm">
                      {story.company} • {story.salary}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{story.testimonial}"</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Completed: {story.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Partners */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Companies Hiring Our Graduates</h2>
            <p className="text-xl text-gray-600">
              These organizations have interviewed CoderCrafter alumni*
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            *Not a guarantee of employment. Individual results vary based on skills and effort.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Serious About Your Tech Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We'll prepare you thoroughly—you bring the determination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Programs
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Career Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}