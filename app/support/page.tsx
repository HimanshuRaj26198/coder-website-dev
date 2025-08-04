import type { Metadata } from "next"
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Monitor,
  Wifi,
  Volume2,
  Download,
  RefreshCw,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Technical Support - CoderCrafter | Get Technical Help",
  description:
    "Get immediate technical support for platform issues, video playback problems, login issues, and more. Our tech team is here to help 24/7.",
  keywords: "technical support, tech help, platform issues, video problems, login help, troubleshooting",
}

const commonIssues = [
  {
    title: "Video Playback Issues",
    description: "Videos not loading, buffering, or poor quality",
    icon: Monitor,
    solutions: [
      "Check your internet connection speed",
      "Clear browser cache and cookies",
      "Try a different browser (Chrome, Firefox, Safari)",
      "Disable browser extensions temporarily",
      "Update your browser to the latest version",
    ],
  },
  {
    title: "Login Problems",
    description: "Can't access your account or forgot password",
    icon: AlertCircle,
    solutions: [
      "Use the 'Forgot Password' link on login page",
      "Check if Caps Lock is enabled",
      "Clear browser cookies for our site",
      "Try logging in from an incognito/private window",
      "Contact support if account is locked",
    ],
  },
  {
    title: "Internet Connection",
    description: "Slow loading or connection timeouts",
    icon: Wifi,
    solutions: [
      "Test your internet speed (minimum 5 Mbps recommended)",
      "Restart your router/modem",
      "Connect via ethernet cable if possible",
      "Close other bandwidth-heavy applications",
      "Try connecting from a different network",
    ],
  },
  {
    title: "Audio Issues",
    description: "No sound or poor audio quality",
    icon: Volume2,
    solutions: [
      "Check if your device volume is turned up",
      "Ensure the video player volume is not muted",
      "Test audio with other applications",
      "Update your audio drivers",
      "Try using headphones or external speakers",
    ],
  },
  {
    title: "Download Problems",
    description: "Can't download course materials or certificates",
    icon: Download,
    solutions: [
      "Check if downloads are blocked by your browser",
      "Disable popup blockers temporarily",
      "Try right-clicking and 'Save As'",
      "Clear browser downloads folder if full",
      "Contact support for manual file delivery",
    ],
  },
  {
    title: "Platform Performance",
    description: "Slow loading pages or unresponsive interface",
    icon: RefreshCw,
    solutions: [
      "Refresh the page (Ctrl+F5 or Cmd+Shift+R)",
      "Clear browser cache and cookies",
      "Close unnecessary browser tabs",
      "Restart your browser completely",
      "Check if your device meets minimum requirements",
    ],
  },
]

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7 Available",
    responseTime: "< 2 minutes",
    color: "bg-green-500",
  },
  {
    title: "Email Support",
    description: "Send detailed technical issues via email",
    icon: Mail,
    availability: "24/7 Available",
    responseTime: "< 4 hours",
    color: "bg-blue-500",
  },
  {
    title: "Phone Support",
    description: "Speak directly with technical experts",
    icon: Phone,
    availability: "9 AM - 9 PM IST",
    responseTime: "Immediate",
    color: "bg-purple-500",
  },
]

const systemRequirements = {
  minimum: {
    title: "Minimum Requirements",
    specs: [
      "Windows 10 / macOS 10.14 / Ubuntu 18.04",
      "4GB RAM",
      "Intel Core i3 or equivalent",
      "5 Mbps internet connection",
      "Chrome 90+ / Firefox 88+ / Safari 14+",
    ],
  },
  recommended: {
    title: "Recommended Requirements",
    specs: [
      "Windows 11 / macOS 12+ / Ubuntu 20.04+",
      "8GB RAM or higher",
      "Intel Core i5 or equivalent",
      "25 Mbps internet connection",
      "Latest browser versions",
    ],
  },
}

export default function TechnicalSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Technical Support</h1>
            <p className="text-xl text-red-100 mb-8">
              Having technical issues? We're here to help you get back to learning quickly.
            </p>

            {/* Quick Support Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Support Channels */}
        <div className="mb-16">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Help Now</h2> */}
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div
                  className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm">
                    <Clock className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-600">{channel.availability}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Response time: <span className="font-medium text-green-600">{channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Technical Issues</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <issue.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                    <p className="text-gray-600 text-sm">{issue.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Quick Solutions:</h4>
                  <ul className="space-y-2">
                    {issue.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{systemRequirements.minimum.title}</h3>
              <ul className="space-y-3">
                {systemRequirements.minimum.specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{systemRequirements.recommended.title}</h3>
              <ul className="space-y-3">
                {systemRequirements.recommended.specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
          <p className="text-gray-700 mb-6">
            If you're experiencing critical issues that prevent you from accessing your courses, contact our emergency
            support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91 98765 43210
            </a>
            <a
              href="mailto:emergency@codercrafter.com"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              emergency@codercrafter.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
