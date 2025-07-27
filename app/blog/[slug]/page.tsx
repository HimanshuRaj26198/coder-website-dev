import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import blogsData from "@/data/blogs.json"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const blog = blogsData.blogs.find((b) => b.slug === slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = blogsData.blogs.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <Badge className="bg-purple-100 text-purple-600 mb-4">{blog.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={blog.author.image || "/placeholder.svg"}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{blog.author.name}</p>
                  <p className="text-sm text-gray-600">{blog.author.role}</p>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{blog.excerpt}</p>

            {/* This would be the full article content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>{blog.content}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                <li>Understanding the current market trends and demands</li>
                <li>Essential skills required for success in this field</li>
                <li>Career progression paths and opportunities</li>
                <li>Salary expectations and growth potential</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
              <p>
                The journey begins with understanding your current skill level and identifying the gaps that need to be
                filled. Whether you're a complete beginner or looking to advance your existing skills, having a clear
                roadmap is essential.
              </p>

              <p>
                At VikaraX, we've designed our courses to bridge this gap effectively. Our industry-expert instructors
                and hands-on approach ensure that you're not just learning theory, but gaining practical skills that
                employers value.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                  <div className="group cursor-pointer">
                    <img
                      src={relatedBlog.image || "/placeholder.svg"}
                      alt={relatedBlog.title}
                      className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    />
                    <Badge className="bg-purple-100 text-purple-600 mb-2 text-xs">{relatedBlog.category}</Badge>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{relatedBlog.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
