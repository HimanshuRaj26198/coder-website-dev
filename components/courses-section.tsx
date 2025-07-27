import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import coursesData from "@/data/courses.json"

export function CoursesSection() {
  const featuredCourses = coursesData.courses.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Featured Courses</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master In-Demand{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Tech Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Courses that help aspiring developers become industry-ready professionals with hands-on projects and expert
            mentorship.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white">{course.discount}% OFF</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({course.reviews} Reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">By {course.instructor.name}</p>
                    <p className="text-xs text-gray-500">{course.instructor.expertise}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Link href={`/courses/${course.id}`}>Learn More</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <Link href={`/enroll/${course.id}`}>Enroll Now</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full"
          >
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
