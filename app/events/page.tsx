import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EventsPage() {
  const upcomingEvents = [
    {
      name:"2nd BFSI Tech Innovation Summit & Awards 2026",
      date: "18th June 2026",
      location: "Mumbai, India",
      description:
        "India's premier banking and financial services technology event, showcasing the latest innovations in fintech, digital banking, and financial inclusion.",
      attendees: "400+",
      type: "Industry Summit",
      image: "/images/BFSI_LOGO_ OPTIONS-01.png",
    },
    {
      name: "Blocksphere summit Dubai 2026",
      date: "4th & 5th feb 2026",
      location: "Dubai",
      description:
        "The premier blockchain and Web3 conference in the Middle East, bringing together industry leaders, investors, and innovators.",
      attendees: "500+",
      type: "Flagship Conference",
      image: "/images/bc4.jpg",
    },
    {
      name: "Digital Health Summit 2026",
      date: "April 2026",
      location: "Singapore",
      description:
        "Exploring the future of healthcare technology, telemedicine, and digital health innovations across Asia-Pacific.",
      attendees: "300+",
      type: "Industry Summit",
      image: "/images/health.jpg",
    },
    {
      name: "Blocksphere Saudi Arabia 2025",
      date: "April 2026",
      location: "Riyadh, Saudi Arabia",
      description:
        "Showcasing blockchain adoption and cryptocurrency regulations in the Kingdom's Vision 2030 transformation.",
      attendees: "400+",
      type: "Regional Conference",
      image: "/images/blockchane.jpg",
    },
    {
      name: "Cyber Security Summit 2026",
      date: "May 2026",
      location: "Mumbai, India",
      description:
        "India's largest cybersecurity conference addressing emerging threats, AI security, and enterprise protection strategies.",
      attendees: "600+",
      type: "Security Summit",
      image: "/images/cybersecurity.png",
    },
    {
      name: "Agentic AI & Customer Experience Summit",
      date: "June 2026",
      location: "Bangalore, India",
      description: "Exploring autonomous AI agents and their impact on customer experience and business automation.",
      attendees: "350+",
      type: "AI Summit",
      image: "/images/ai2.jpg",
    },
    {
      name: "Blocksphere SEA 2026",
      date: "July 2026",
      location: "Bali, Indonesia",
      description:
        "Southeast Asia's premier blockchain conference focusing on DeFi, NFTs, and regional crypto adoption.",
      attendees: "450+",
      type: "Regional Summit",
      image: "/images/bc2.jpg",
    },
    {
      name: "Cyber Security Summit Malaysia 2026",
      date: "August 2026",
      location: "Kuala Lumpur, Malaysia",
      description:
        "Malaysia's leading cybersecurity event covering threat intelligence, incident response, and regulatory compliance.",
      attendees: "400+",
      type: "Security Conference",
      image: "/images/cs2.jpg",
    },
    {
      name: "Blocksphere Dubai 2026",
      date: "November 2026",
      location: "Dubai, UAE",
      description: "The second edition of our flagship Dubai blockchain conference, expanding on the success of 2025.",
      attendees: "700+",
      type: "Flagship Conference",
      image: "/images/bc3.jpg",
    },
  ]

  const eventTypes = [
    { name: "Flagship Conference", count: 2, color: "bg-purple-100 text-purple-800" },
    { name: "Industry Summit", count: 2, color: "bg-emerald-100 text-emerald-800" },
    { name: "Regional Conference", count: 2, color: "bg-orange-100 text-orange-800" },
    { name: "Security Summit", count: 2, color: "bg-rose-100 text-rose-800" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">Upcoming Events</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Global Events Calendar
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders and visionaries at our upcoming flagship events across the globe. Where the future
              of business unfolds.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <Badge key={index} className={`${type.color} px-4 py-2 text-sm font-medium`}>
                {type.name} ({type.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300 bg-black"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm">{event.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{event.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-slate-700">
                      <Calendar className="h-5 w-5 text-purple-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-700">
                      <MapPin className="h-5 w-5 text-purple-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-700">
                      <Users className="h-5 w-5 text-purple-500" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                      Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Event Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our events consistently deliver exceptional value and measurable outcomes for all participants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "3,500+", label: "Total Expected Attendees", icon: <Users className="h-8 w-8" /> },
              { number: "8", label: "Global Events Planned", icon: <Calendar className="h-8 w-8" /> },
              { number: "7", label: "Countries & Regions", icon: <MapPin className="h-8 w-8" /> },
              { number: "24", label: "Months of Planning", icon: <Clock className="h-8 w-8" /> },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <p className="text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Join the Future?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Whether you're looking to attend, sponsor, or speak at our events, we'd love to hear from you. Let's shape
              the future of business together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
