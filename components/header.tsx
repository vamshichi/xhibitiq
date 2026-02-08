"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"   // ✅ correct import for images
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-black top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo Image */}
            <div className="w-20 h-40 py-8 relative">
              <Image
                src="/X-logo.png" // put this image in public/
                alt="XhibitIQ Logo"
                fill
                className="object-contain rounded-lg py-4"
              />
            </div>

            {/* Brand Name */}
            {/* <span className="text-2xl font-bold text-slate-900">XhibitIQ</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-slate-200 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              Request Proposal
            </Button>
            <Button className="bg-orange-600 hover:bg-purple-700 text-white">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-purple-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  Request Proposal
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Let's Talk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
