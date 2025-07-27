import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, Eye } from "lucide-react"
import Link from "next/link"
import docsData from "@/data/docs.json"
import { DownloadButton } from "@/components/download-button"

export default function DocsPage() {
  const categories = [...new Set(docsData.documents.map((doc) => doc.category))]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>{docsData.documents.length} Documents Available</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Course{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download comprehensive syllabi, roadmaps, and guides for all our courses
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
              {category}
            </Badge>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docsData.documents.map((doc) => (
            <Card key={doc.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-100 text-purple-600">{doc.category}</Badge>
                  <Badge variant="outline" className="capitalize">
                    {doc.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  <Link href={`/docs/${doc.id}`}>{doc.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm line-clamp-3">{doc.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>{doc.fileSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{doc.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Calendar className="w-4 h-4" />
                    <span>Updated {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Link href={`/docs/${doc.id}`} className="flex-1">
                    <button className="w-full px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </Link>
                  <DownloadButton
                    document={doc}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
