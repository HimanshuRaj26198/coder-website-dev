"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import logo from '../public/icon_blue_logo.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={logo}
                alt="CoderCrafter Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CoderCrafter
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors focus:outline-none group">
                <span className="font-medium">Home</span>
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[180px] rounded-lg shadow-lg border border-gray-100 mt-2">
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/" className="w-full px-3 py-2">Main Landing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/freshers" className="w-full px-3 py-2">For Freshers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/professionals" className="w-full px-3 py-2">For Professionals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/non-it" className="w-full px-3 py-2">For Non-IT</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors focus:outline-none group">
                <span className="font-medium">Courses</span>
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[220px] rounded-lg shadow-lg border border-gray-100 mt-2">
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/courses" className="w-full px-3 py-2">All Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/courses?category=Web Development" className="w-full px-3 py-2">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/courses?category=Mobile Development" className="w-full px-3 py-2">Mobile Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/courses?category=DevOps" className="w-full px-3 py-2">DevOps</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <Link href="/courses?category=Data Science" className="w-full px-3 py-2">Data Science</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Resources
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 animate-in fade-in slide-in-from-top">
            <div className="flex flex-col space-y-4 px-2">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 px-3">Home</h3>
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  Main Landing
                </Link>
                <Link href="/freshers" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  For Freshers
                </Link>
                <Link href="/professionals" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  For Professionals
                </Link>
                <Link href="/non-it" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  For Non-IT
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 px-3">Courses</h3>
                <Link href="/courses" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  All Courses
                </Link>
                <Link href="/courses?category=Web Development" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  Web Development
                </Link>
                <Link href="/courses?category=Mobile Development" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  Mobile Development
                </Link>
                <Link href="/courses?category=DevOps" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  DevOps
                </Link>
                <Link href="/courses?category=Data Science" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                  Data Science
                </Link>
              </div>

              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                About
              </Link>
              <Link href="/docs" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                Resources
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                Contact
              </Link>

              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all mt-4"
              >
                <Link href="/book-demo" className="w-full">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}