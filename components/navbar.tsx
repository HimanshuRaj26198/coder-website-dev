"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import logo from '../public/icon_blue_logo.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    home: false,
    courses: false,
    internship: false,
    more: false
  })
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-1 group">
              <Image
                src={logo}
                alt="CoderCrafter Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <h2 className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
                CoderCrafter
              </h2>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors focus:outline-none group">
                <span className="font-medium">Home</span>
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[180px] rounded-lg shadow-lg border border-gray-100 mt-2">
                {/* <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/" className="w-full px-3 py-2">Main Landing</a>
                </DropdownMenuItem> */}
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/freshers" className="w-full px-3 py-2">For Freshers</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/professionals" className="w-full px-3 py-2">For Professionals</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/non-it" className="w-full px-3 py-2">For Non-IT</a>
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
                  <a href="/courses" className="w-full px-3 py-2">All Courses</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/courses?category=Web Development" className="w-full px-3 py-2">Web Development</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/courses?category=Mobile Development" className="w-full px-3 py-2">Mobile Development</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/courses?category=DevOps" className="w-full px-3 py-2">DevOps</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/courses?category=Data Science" className="w-full px-3 py-2">Data Science</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors focus:outline-none group">
                <span className="font-medium">Internship</span>
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[220px] rounded-lg shadow-lg border border-gray-100 mt-2">
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/paid-internship" className="w-full px-3 py-2">Paid Internship</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-purple-50 focus:bg-purple-50">
                  <a href="/courses?category=Web Development" className="w-full px-3 py-2">Internship</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


            <a href="/docs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Resources
            </a>
            <a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About
            </a>
            {/* <a href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Blog
            </a> */}
            <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="/book-demo">Book a free Demo</a>
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
        <div className="md:hidden fixed inset-0 bg-white z-[99999] mt-16 overflow-y-auto pb-[100px]" style={{height: "100vh"}} >
          <div className="px-4 py-6 space-y-2">
            {/* Home Section */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleSection('home')}
                className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:bg-purple-50 rounded-md transition-all"
              >
                <span className="font-medium uppercase tracking-wider">Home</span>
                {openSections.home ? (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.home && (
                <div className="pl-6 space-y-1">
                  <NavLink href="/" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      Main Landing
                    </span>
                  </NavLink>
                  <NavLink href="/freshers" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      For Freshers
                    </span>
                  </NavLink>
                  <NavLink href="/professionals" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                      For Professionals
                    </span>
                  </NavLink>
                  <NavLink href="/non-it" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                      For Non-IT
                    </span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Courses Section */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleSection('courses')}
                className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:bg-purple-50 rounded-md transition-all"
              >
                <span className="font-medium uppercase tracking-wider">Courses</span>
                {openSections.courses ? (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.courses && (
                <div className="pl-6 space-y-1">
                  <NavLink href="/courses" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      All Courses
                    </span>
                  </NavLink>
                  <NavLink href="/courses?category=Web Development" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Web Development
                    </span>
                  </NavLink>
                  <NavLink href="/courses?category=Mobile Development" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                      Mobile Development
                    </span>
                  </NavLink>
                  <NavLink href="/courses?category=DevOps" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                      DevOps
                    </span>
                  </NavLink>
                  <NavLink href="/courses?category=Data Science" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      Data Science
                    </span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Internship Section */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleSection('internship')}
                className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:bg-purple-50 rounded-md transition-all"
              >
                <span className="font-medium uppercase tracking-wider">Internship</span>
                {openSections.internship ? (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.internship && (
                <div className="pl-6 space-y-1">
                  <NavLink href="/paid-internship" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Paid Internship
                    </span>
                  </NavLink>
                  <NavLink href="/internship-with-job" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                      Internship with Job
                    </span>
                  </NavLink>
                  <NavLink href="/international-internship" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                      International Internship
                    </span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* More Section */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleSection('more')}
                className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:bg-purple-50 rounded-md transition-all"
              >
                <span className="font-medium uppercase tracking-wider">More</span>
                {openSections.more ? (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.more && (
                <div className="pl-6 space-y-1">
                  <NavLink href="/about" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                      About
                    </span>
                  </NavLink>
                  <NavLink href="/docs" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Resources
                    </span>
                  </NavLink>
                  <NavLink href="/blog" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                      Blog
                    </span>
                  </NavLink>
                  <NavLink href="/contact" onClick={closeMenu}>
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                      Contact
                    </span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* CTA Buttons - Always visible */}
            <div className="pt-4 space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:text-purple-700 hover:border-purple-700"
              >
                <a href="/login" onClick={closeMenu}>Login</a>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all"
              >
                <a href="/book-demo" onClick={closeMenu}>Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}

function NavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
    >
      {children}
    </a>
  )
}