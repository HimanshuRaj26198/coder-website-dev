"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VX</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              VikaraX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/">Main Landing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/freshers">For Freshers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/professionals">For Professionals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/non-it">For Non-IT</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/courses">All Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses?category=Web Development">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses?category=Mobile Development">Mobile Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses?category=DevOps">DevOps</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses?category=Data Science">Data Science</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-purple-600 transition-colors">
              Resources
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Book Demo Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full"
            >
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-purple-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-purple-600">
                Courses
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                Contact
              </Link>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-fit">
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
