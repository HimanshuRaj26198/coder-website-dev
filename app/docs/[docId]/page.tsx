import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, Eye } from "lucide-react"
import docsData from "@/data/docs.json"
import { DownloadButton } from "@/components/download-button"

interface DocPageProps {
  params: Promise<{ docId: string }>
}

export default async function DocPage({ params }: DocPageProps) {
  const { docId } = await params
  const document = docsData.documents.find((doc) => doc.id === docId)

  if (!document) {
    notFound()
  }

  const relatedDocs = docsData.documents
    .filter((doc) => doc.category === document.category && doc.id !== document.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Document Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-600 mb-4">{document.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{document.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{document.description}</p>
        </div>

        {/* Document Details Card */}
        <Card className="border-0 shadow-2xl mb-12">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <FileText className="w-8 h-8" />
              <span>Document Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">File Size</p>
                    <p className="font-semibold text-gray-900">{document.fileSize}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pages</p>
                    <p className="font-semibold text-gray-900">{document.pages} pages</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="font-semibold text-gray-900">{new Date(document.lastUpdated).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Document Type</p>
                    <p className="font-semibold text-gray-900 capitalize">{document.type}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <DownloadButton
                document={document}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Related Documents */}
        {relatedDocs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Documents
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDocs.map((doc) => (
                <Card key={doc.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Badge className="bg-gray-100 text-gray-600 mb-3 capitalize">{doc.type}</Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{doc.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{doc.fileSize}</span>
                      <span>{doc.pages} pages</span>
                    </div>
                    <DownloadButton
                      document={doc}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
