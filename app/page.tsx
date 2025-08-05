import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users, Globe, Zap, Target, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const industries = [
    "Artificial Intelligence & Automation",
    "Fintech & Digital Economy",
    "Cybersecurity & Digital Trust",
    "Clean Energy & Climate Tech",
    "DeepTech & Space Innovation",
    "Healthcare & Biotech",
    "Smart Cities & Urban Transformation",
    "Web3, Blockchain & Metaverse",
  ]

  const services = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Conferences & Summits",
      description: "Global platforms that spotlight disruptive trends and forge strategic alliances.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Bespoke Executive Events",
      description: "Tailored VIP gatherings that connect decision-makers and fast-track deals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Thought Leadership Forums",
      description: "Focused knowledge-sharing environments that drive strategic insight.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Lead-Driven Demand Generation",
      description: "High-intent programs that convert audiences into opportunities.",
    },
  ]

  const upcomingEvents = [
    { name: "Blocksphere Dubai 2025", date: "12th & 13th November 2025", location: "Dubai" },
    { name: "Digital Health Summit 2026", date: "April 2026", location: "Singapore" },
    { name: "Blocksphere Saudi Arabia 2025", date: "April 2026", location: "Riyadh, Saudi Arabia" },
    { name: "Cyber Security Summit 2026", date: "May 2026", location: "Mumbai, India" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">
              Next-Gen Business Events
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Where Visionaries Converge. Where Industries Evolve.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              At XhibitIQ, we don't just host events — we architect the future of business through next-gen conferences,
              bespoke summits, and breakthrough demand generation platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                View Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Unleashing the Power of Intelligent Exhibitions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              XhibitIQ is a global powerhouse in curating futuristic business experiences. We bring together bold
              thinkers, cutting-edge innovators, and changemakers through world-class conferences, highly targeted
              bespoke events, and transformative summits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Future-First Thinking</h3>
                <p className="text-slate-600">
                  We explore innovation frontiers and design events that spotlight next-decade trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Elite Curation</h3>
                <p className="text-slate-600">
                  Meticulously crafted events ensuring high-impact outcomes for all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Global Reach</h3>
                <p className="text-slate-600">Bespoke delivery that transcends borders and exceeds expectations.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Demand Generation 2.0</h3>
                <p className="text-slate-600">Engineering real engagement, qualified leads, and market activation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From global conferences to bespoke executive gatherings, we create experiences that drive business
              transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Industries We Empower</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From AI to Quantum Tech, Finance to SpaceTech, our events shape conversations that define tomorrow's
              world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
                    {industry}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Upcoming Events</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join industry leaders and visionaries at our upcoming flagship events across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{event.name}</h3>
                  <p className="text-purple-200 mb-2">{event.date}</p>
                  <p className="text-slate-300">{event.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Join the Future with XhibitIQ</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Whether you're a brand ready to lead the narrative, a visionary looking to share the stage, or a company
              hungry for demand and growth — XhibitIQ is your gateway to tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg bg-transparent"
              >
                Request a Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
