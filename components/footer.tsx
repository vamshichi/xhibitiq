import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"   // ✅ correct import for images

export default function Footer() {
  return (
    <footer className=" ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="w-20 h-40  relative">
                          <Image
                            src="/xiq.png" // put this image in public/
                            alt="XhibitIQ Logo"
                            fill
                            className="object-contain rounded-lg "
                          />
                        </div>
            <p className=" leading-relaxed">
              Architecting the future of business through next-gen conferences, bespoke summits, and breakthrough demand
              generation platforms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className=" hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className=" hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className=" hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/industries" className=" hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="">Conferences & Summits</span>
              </li>
              <li>
                <span className="">Bespoke Executive Events</span>
              </li>
              <li>
                <span className="">Thought Leadership Forums</span>
              </li>
              <li>
                <span className="">Demand Generation</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="">+91-99716 457 39</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className=""> nishanth@xhibitiq.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="">
            © 2026 XhibitIQ. All rights reserved. Building the future of business events.
          </p>
        </div>
      </div>
    </footer>
  )
}
