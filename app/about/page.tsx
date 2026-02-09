import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Target, Zap, TrendingUp, Award, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Future-First Thinking",
      description:
        "We explore the frontiers of innovation and design events that spotlight the trends shaping the next decade.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Elite Curation",
      description:
        "Each summit and event is meticulously crafted with precision — from agenda to audience — ensuring high-impact outcomes.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach, Bespoke Delivery",
      description:
        "Whether it's a flagship summit, VIP roundtable, or closed-door think tank — we deliver experiences that transcend borders.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Demand Generation 2.0",
      description:
        "We go beyond brand exposure — we engineer real engagement, qualified leads, and market activation for our partners.",
    },
  ]

  const whyChooseUs = [
    "Global Network of Visionaries",
    "High-Level Attendee Profiles",
    "Precision Targeting & Lead Delivery",
    "Flawless Event Execution",
    "Innovation-Driven Agendas",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-600 to-orange-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/events-1.png')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">About XhibitIQ</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Unleashing the Power of Intelligent Exhibitions
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              XhibitIQ is a global powerhouse in curating futuristic business experiences that bring together bold
              thinkers, cutting-edge innovators, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Our mission is to ignite industry evolution by bridging the gap between what's now and what's next. From
              AI to Quantum Tech, Finance to SpaceTech, Sustainability to Smart Cities, our events are engineered to
              shape the conversations that define tomorrow's world.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-slate-100 p-8 rounded-2xl">
              <p className="text-lg text-slate-700 italic">
                "We don't just host events — we architect the future of business through next-gen conferences, bespoke
                summits, and breakthrough demand generation platforms."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Edge</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What sets us apart in the world of business events and conferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-slate-900">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Why Leaders Choose XhibitIQ</h2>
              <p className="text-xl text-slate-600">
                Industry leaders trust us to deliver exceptional experiences that drive real business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      {reason}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="h-10 w-10 text-purple-300" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              To be the global catalyst for business transformation, creating platforms where today's visionaries become
              tomorrow's industry leaders. We envision a world where every business interaction at our events sparks
              innovation, drives growth, and shapes the future of commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
