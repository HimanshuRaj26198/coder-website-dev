import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer at Google",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "CoderCrafter transformed my career completely. From a non-IT background to landing a job at Google - the journey was incredible with their expert guidance.",
    rating: 5,
    course: "Full Stack Web Development",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer at Microsoft",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The DevOps course at CoderCrafter is outstanding. Real-world projects and industry mentorship helped me secure my dream job at Microsoft.",
    rating: 5,
    course: "DevOps Engineering Mastery",
  },
  {
    name: "Amit Kumar",
    role: "Data Scientist at Netflix",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Best investment I made for my career. The Python Data Science course is comprehensive and the job assistance program is phenomenal.",
    rating: 5,
    course: "Python for Data Science & AI",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with CoderCrafter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-purple-600 font-medium">{testimonial.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
