import { Button } from "@/components/ui/button"
import { Play, Star, Users, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-pink-200 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">100+ Trusted Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="text-gray-600">Industry Expert</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Launch Your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Tech Career
                </span>
                <br />
                <span className="text-gray-900">in Minutes with</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CoderCrafter
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                The most <strong>powerful</strong> yet the <strong>easiest</strong> way to master software engineering
                skills and land your dream job.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                asChild
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-full bg-transparent"
                asChild
              >
                <Link href="/book-demo" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0% EMI</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Elements */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">CC</span>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  {/* COmment */}
                  <div>
                    <div className="text-xs text-gray-500">Training</div>
                    <div className="text-sm font-semibold">Real-time Projects</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 left-0 bg-white rounded-2xl p-4 shadow-lg animate-bounce delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Industry</div>
                    <div className="text-sm font-semibold">Expert Training</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-0 bg-white rounded-2xl p-4 shadow-lg animate-bounce delay-1000">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Real Experience</div>
                    <div className="text-sm font-semibold">Paid Internship</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 bg-white rounded-2xl p-4 shadow-lg animate-bounce delay-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Online Courses</div>
                    <div className="text-sm font-semibold">24/7 Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
