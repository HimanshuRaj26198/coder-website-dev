// import { Zap, Monitor, Headphones, CreditCard } from "lucide-react"

import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  CreditCard,
  Zap 
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Professional Trainers",
    description: "Learn from industry experts with years of practical experience and teaching expertise.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Dedicated career services including resume prep, mock interviews, and job referrals.",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance from instructors and technical support teams when you need it.",
    color: "from-gray-700 to-gray-900",
    dark: true,
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Options",
    description: "0% EMI, part payments, and custom payment plans to make learning affordable for everyone.",
    color: "from-purple-500 to-pink-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl ${
                feature.dark ? "bg-gray-900 text-white" : "bg-white"
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${feature.dark ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`${feature.dark ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
