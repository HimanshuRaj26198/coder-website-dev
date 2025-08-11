import { Clock, Zap, ShieldCheck, Globe, Rocket } from "lucide-react"

const valueProps = [
  {
    icon: Clock,
    number: "4-6 Months",
    label: "To Job Readiness",
    description: "Focused, industry-aligned training",
  },
  {
    icon: Zap,
    number: "10:1",
    label: "Practical to Theory Ratio",
    description: "Learn by building real projects",
  },
  {
    icon: ShieldCheck,
    number: "1:1",
    label: "Mentorship Sessions",
    description: "Personalized career guidance",
  },
  {
    icon: Rocket,
    number: "100%",
    label: "Career Transformation",
    description: "From any background to tech pro",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Tech Journey Starts Here</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Why CoderCrafter stands out for career changers and beginners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gray-800" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}