import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import blogsData from "@/data/blogs.json"

export default function BlogPage() {
  const featuredBlogs = blogsData.blogs.filter((blog) => blog.featured)
  const regularBlogs = blogsData.blogs.filter((blog) => !blog.featured)
  const categories = [...new Set(blogsData.blogs.map((blog) => blog.category))]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, career advice, and insights from the tech industry
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="outline" className="px-4 py-2 text-sm bg-white">
            All Posts
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">{blog.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white">Featured</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={blog.author.image || "/placeholder.svg"}
                          alt={blog.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                          <p className="text-xs text-gray-500">{blog.author.role}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white text-xs">{blog.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center space-x-2 mb-4">
                    <img
                      src={blog.author.image || "/placeholder.svg"}
                      alt={blog.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-900">{blog.author.name}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
