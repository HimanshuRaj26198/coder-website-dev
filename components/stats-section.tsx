import { Users, Award, BookOpen, Building } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Students Trained",
    description: "Across all our programs",
  },
  {
    icon: Award,
    number: "95%",
    label: "Job Placement Rate",
    description: "Within 6 months of completion",
  },
  {
    icon: BookOpen,
    number: "25+",
    label: "Industry-Ready Courses",
    description: "Updated with latest technologies",
  },
  {
    icon: Building,
    number: "500+",
    label: "Partner Companies",
    description: "Hiring our graduates",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trusted by Thousands of Students</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join the community of successful developers who transformed their careers with VikaraX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-purple-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
