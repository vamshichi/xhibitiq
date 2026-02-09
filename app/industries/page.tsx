import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  CreditCard,
  Shield,
  Leaf,
  Rocket,
  Heart,
  Building,
  Coins,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Artificial Intelligence & Automation",
      description:
        "Exploring the frontiers of AI, machine learning, and intelligent automation that's reshaping every industry.",
      trends: ["Generative AI", "Autonomous Systems", "AI Ethics", "Machine Learning"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Fintech & Digital Economy",
      description: "The evolution of financial services, digital payments, and the new economy powered by technology.",
      trends: ["Digital Banking", "Cryptocurrency", "RegTech", "Open Banking"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity & Digital Trust",
      description: "Protecting digital assets and building trust in an increasingly connected world.",
      trends: ["Zero Trust", "AI Security", "Privacy Tech", "Threat Intelligence"],
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Clean Energy & Climate Tech",
      description: "Sustainable technologies and innovations driving the transition to a carbon-neutral future.",
      trends: ["Renewable Energy", "Carbon Capture", "Green Hydrogen", "ESG Tech"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "DeepTech & Space Innovation",
      description: "Breakthrough technologies and space exploration that push the boundaries of human capability.",
      trends: ["Quantum Computing", "Space Tech", "Advanced Materials", "Bioengineering"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare & Biotech",
      description: "Revolutionary medical technologies and biotechnology innovations improving human health.",
      trends: ["Digital Health", "Gene Therapy", "Personalized Medicine", "MedTech"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Smart Cities & Urban Transformation",
      description: "Technology-driven solutions for sustainable urban development and intelligent city management.",
      trends: ["IoT Infrastructure", "Smart Mobility", "Urban Analytics", "Sustainable Architecture"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Coins className="h-10 w-10" />,
      title: "Web3, Blockchain & Metaverse",
      description: "Decentralized technologies and virtual worlds creating new digital economies and experiences.",
      trends: ["DeFi", "NFTs", "Metaverse", "DAOs"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]

  const stats = [
    { number: "8", label: "Key Industries", icon: <Globe className="h-6 w-6" /> },
    { number: "50+", label: "Industry Experts", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "Trending Topics", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-600 to-orange-800 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">Industries We Empower</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Shaping Tomorrow's Industries
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From AI to Quantum Tech, Finance to SpaceTech, our events shape the conversations that define tomorrow's
              world across every major industry vertical.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="text-orange-600">{stat.icon}</div>
                  <span className="text-3xl font-bold text-slate-900">{stat.number}</span>
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Industry Verticals</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We create specialized events and experiences across the most dynamic and rapidly evolving industries of
              our time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden"
              >
                <div className={`h-2 ${industry.bgColor}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {industry.trends.map((trend, trendIndex) => (
                          <Badge key={trendIndex} variant="secondary" className="text-xs">
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">Cross-Industry Innovation</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Our events don't just focus on individual industries—we create platforms where sectors converge,
              collaborate, and cross-pollinate ideas. The most breakthrough innovations happen at the intersection of
              industries.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">AI-Powered Everything</h3>
                  <p className="text-slate-600">
                    Artificial intelligence is transforming every industry, from healthcare diagnostics to financial
                    trading algorithms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Sustainability Focus</h3>
                  <p className="text-slate-600">
                    Every industry is integrating sustainable practices and clean technologies into their core
                    operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Security-First Approach</h3>
                  <p className="text-slate-600">
                    Cybersecurity and digital trust are fundamental requirements across all modern business operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Lead Your Industry?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Join industry leaders, innovators, and visionaries at our specialized events. Whether you're looking to
              showcase your solutions, learn from experts, or network with peers, we have the perfect platform for your
              industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                  Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                >
                  View Industry Events
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
