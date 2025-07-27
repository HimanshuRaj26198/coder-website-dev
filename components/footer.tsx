import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  courses: [
    { name: "Full Stack Development", href: "/courses/full-stack-web-dev" },
    { name: "DevOps Engineering", href: "/courses/devops-mastery" },
    { name: "Data Science & AI", href: "/courses/python-data-science" },
    { name: "Mobile Development", href: "/courses?category=Mobile Development" },
    { name: "Frontend Development", href: "/courses/frontend-mastery" },
    { name: "All Courses", href: "/courses" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Instructors", href: "/instructors" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Student Portal", href: "/student-portal" },
    { name: "Course Catalog", href: "/catalog" },
    { name: "Placement Assistance", href: "/placement" },
    { name: "Technical Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VX</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                VikaraX
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We're always in search for talented and motivated people. Don't be shy introduce yourself!
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">hello@vikarax.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-400">
                2000+ Our students are subscribe Around the World. Don't be shy introduce yourself!
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">© 2024 VikaraX. All rights reserved.</div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
