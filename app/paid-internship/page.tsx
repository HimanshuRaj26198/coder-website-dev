import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Rocket, ShieldCheck, Users, Clock, Star, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { LeadForm } from "@/components/lead-form"

const internshipData = [
  {
    id: 1,
    title: "Full Stack Development Internship",
    duration: "3 months",
    price: "₹24,999",
    originalPrice: "₹39,999",
    description: "Work on real-world web applications using React, Node.js, and MongoDB",
    features: [
      "Hands-on project experience",
      "Mentorship from senior developers",
      "Certificate of completion",
      "Job placement assistance"
    ],
    category: "Web Development",
    rating: 4.8,
    spotsLeft: 5
  },
  {
    id: 2,
    title: "Data Science Internship",
    duration: "4 months",
    price: "₹29,999",
    originalPrice: "₹49,999",
    description: "Analyze real datasets and build machine learning models",
    features: [
      "Python & SQL training",
      "Kaggle-style projects",
      "Industry mentor",
      "Portfolio building"
    ],
    category: "Data Science",
    rating: 4.7,
    spotsLeft: 3
  },
  {
    id: 3,
    title: "Mobile App Development Internship",
    duration: "3 months",
    price: "₹22,999",
    originalPrice: "₹36,999",
    description: "Build and publish Android/iOS apps using Flutter",
    features: [
      "App publishing guidance",
      "UI/UX principles",
      "API integration",
      "Performance optimization"
    ],
    category: "Mobile Development",
    rating: 4.6,
    spotsLeft: 7
  },
  {
    id: 4,
    title: "Cloud Computing Internship",
    duration: "4 months",
    price: "₹27,999",
    originalPrice: "₹44,999",
    description: "Deploy and manage applications on AWS cloud infrastructure",
    features: [
      "AWS certification prep",
      "Real deployment scenarios",
      "DevOps practices",
      "Security best practices"
    ],
    category: "Cloud Computing",
    rating: 4.9,
    spotsLeft: 2
  }
]

const benefits = [
  {
    icon: Briefcase,
    title: "Guaranteed Internship",
    description: "No more endless applications. Secure your spot with guaranteed placement."
  },
  {
    icon: Rocket,
    title: "Career Jumpstart",
    description: "Gain the experience needed to stand out in today's competitive job market."
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free Investment",
    description: "Our 90% placement rate after internship ensures your investment pays off."
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Access to industry professionals who will guide your career growth."
  }
]

export default function PaidInternshipPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>Guaranteed Tech Internships</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Break Into Tech</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Without The Hassle
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Our paid internship program guarantees you real-world experience when traditional internships are hard to get. 
                  Invest in your future with hands-on projects and mentorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                  asChild
                >
                  <Link href="#internships">Browse Internships</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-transparent"
                  asChild
                >
                  <Link href="#how-it-works">How It Works</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1,200+</div>
                  <div className="text-sm text-gray-600">Interns Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <img
                  src="/assets/images/internship_hero_main.png"
                  alt="Students working on tech projects"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Limited Spots</div>
                      <div className="text-sm font-semibold">Only 5-10 per batch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Paid Internship Section */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Paid Internship Program?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's competitive market, traditional internships are nearly impossible to get without experience. 
              Our program removes the barriers so you can focus on learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">The Problem:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Catch-22 Situation</h4>
                    <p className="text-gray-600">Companies want experience but won't give you experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fierce Competition</h4>
                    <p className="text-gray-600">1000+ applicants for each internship position</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Unpaid Exploitation</h4>
                    <p className="text-gray-600">Most "free" internships offer little real learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Solution:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Guaranteed Placement</h4>
                    <p className="text-gray-600">No rejections - your internship is confirmed upon enrollment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real Projects</h4>
                    <p className="text-gray-600">Work on meaningful projects that boost your portfolio</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Career ROI</h4>
                    <p className="text-gray-600">Our interns typically land jobs with 3-5x salary compared to investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Internship Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50" id="internships">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Available{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Paid Internships
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Limited spots available in each program. Secure your position today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {internshipData.map((internship) => (
              <Card key={internship.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2 bg-green-100 text-green-600">{internship.category}</Badge>
                      <CardTitle className="text-2xl">{internship.title}</CardTitle>
                      <CardDescription className="mt-2">{internship.description}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{internship.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{internship.spotsLeft} spots left</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {internship.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{internship.price}</span>
                          <span className="text-lg text-gray-500 line-through ml-2">{internship.originalPrice}</span>
                        </div>
                        <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white group" asChild>
                          <Link href={`/internships/${internship.id}`}>
                            Apply Now 
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Success Stories
              </span>{" "}
              From Our Interns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our paid internship program transformed careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    AS
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ankit Sharma</h3>
                    <p className="text-sm text-gray-600">Former Intern, Now at Amazon</p>
                    <Badge className="bg-green-100 text-green-600 mt-1">₹18 LPA</Badge>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "The paid internship was the best investment I made in my career. Within 3 months of completing the program, 
                  I received multiple offers from top tech companies. The hands-on experience was exactly what my resume needed."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                    SP
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sneha Patel</h3>
                    <p className="text-sm text-gray-600">Former Intern, Now at Google</p>
                    <Badge className="bg-green-100 text-green-600 mt-1">₹22 LPA</Badge>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "As a non-CS student, I struggled to get any internship opportunities. This program gave me real projects 
                  to work on and mentorship that helped me bridge the gap between academics and industry requirements."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
                    RK
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Rohit Kumar</h3>
                    <p className="text-sm text-gray-600">Former Intern, Now at Microsoft</p>
                    <Badge className="bg-green-100 text-green-600 mt-1">₹20 LPA</Badge>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "The ROI on this internship was incredible. I paid ₹25,000 for the program and within 6 months landed a 
                  job with 8x that amount as my annual salary. The connections I made during the internship were invaluable."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Jumpstart Your Tech Career?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Limited spots available in each internship batch. Apply today to secure your position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
              asChild
            >
              <Link href="#internships">Browse Internships</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full font-semibold"
              asChild
            >
              <Link href="/contact">Speak to Advisor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Why should I pay for an internship when others are free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traditional "free" internships have become extremely competitive, with acceptance rates lower than top universities. 
                  Our paid program guarantees you a spot and ensures you get meaningful work experience rather than just coffee runs. 
                  Think of it as investing in your future earning potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How is this different from a training program?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unlike training programs where you just learn concepts, our internships involve working on real projects 
                  with deadlines, code reviews, and team collaboration - just like a real job. You'll have measurable outcomes 
                  to showcase to future employers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What if I don't get a job after the internship?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our 90% placement rate speaks for itself, but if you complete the program and don't receive any job offers 
                  within 6 months, we offer additional career coaching and project opportunities at no extra cost until you land 
                  a position.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  )
}