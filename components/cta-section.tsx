import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Industry-expert instructors",
  "100% job placement assistance",
  "Real-world project experience",
  "Lifetime access to course materials",
  "24/7 student support",
  "Certificate of completion",
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-purple-100">
                Join thousands of successful students who landed their dream jobs in tech. Start your journey today with
                our industry-leading courses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-purple-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
              >
                <Link href="/courses" className="flex items-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-purple-100">Students Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-purple-100">Job Placement Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-100">Partner Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
              <div className="text-purple-100">Excellent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
