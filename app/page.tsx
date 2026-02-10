import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Users,
  Globe,
  Zap,
  Target,
  Lightbulb,
  TrendingUp,
  Brain,
  CreditCard,
  Shield,
  Leaf,
  Rocket,
  Heart,
  Building,
  Coins,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const industries = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Artificial Intelligence & Automation",
      subtitle: "The Future of Intelligence",
      description: "Exploring neural networks, machine learning, and autonomous systems reshaping every sector.",
      trends: ["Generative AI", "Neural Networks", "Autonomous Systems"],
      color: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-purple-600/10",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/25",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Fintech & Digital Economy",
      subtitle: "Money Reimagined",
      description: "Revolutionary financial services, digital payments, and the tokenized economy of tomorrow.",
      trends: ["Digital Banking", "DeFi", "Central Bank Digital Currencies"],
      color: "from-emerald-500 via-teal-500 to-emerald-600",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/25",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity & Digital Trust",
      subtitle: "Fortress of the Future",
      description: "Advanced threat protection, zero-trust architectures, and quantum-safe security protocols.",
      trends: ["Zero Trust", "Quantum Cryptography", "AI Security"],
      color: "from-rose-500 via-red-500 to-rose-600",
      bgGradient: "from-rose-500/10 via-red-500/5 to-rose-600/10",
      borderColor: "border-rose-500/30",
      glowColor: "shadow-rose-500/25",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Clean Energy & Climate Tech",
      subtitle: "Sustainable Tomorrow",
      description: "Carbon capture, renewable energy systems, and breakthrough climate technologies.",
      trends: ["Carbon Capture", "Green Hydrogen", "Smart Grids"],
      color: "from-green-500 via-lime-500 to-green-600",
      bgGradient: "from-green-500/10 via-lime-500/5 to-green-600/10",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/25",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "DeepTech & Space Innovation",
      subtitle: "Beyond Earth's Limits",
      description: "Quantum computing, space exploration, and technologies that push human boundaries.",
      trends: ["Quantum Computing", "Space Tech", "Advanced Materials"],
      color: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/5 to-blue-600/10",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/25",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare & Biotech",
      subtitle: "Life Enhanced",
      description: "Gene therapy, personalized medicine, and biotechnology innovations extending human life.",
      trends: ["Gene Therapy", "Personalized Medicine", "Digital Health"],
      color: "from-pink-500 via-rose-500 to-pink-600",
      bgGradient: "from-pink-500/10 via-rose-500/5 to-pink-600/10",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-pink-500/25",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Smart Cities & Urban Transformation",
      subtitle: "Cities That Think",
      description: "IoT infrastructure, smart mobility, and AI-driven urban management systems.",
      trends: ["IoT Infrastructure", "Smart Mobility", "Urban AI"],
      color: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/5 to-orange-600/10",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/25",
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Web3, Blockchain & Metaverse",
      subtitle: "Decentralized Reality",
      description: "Blockchain protocols, virtual worlds, and the decentralized internet of tomorrow.",
      trends: ["DeFi Protocols", "Virtual Worlds", "DAOs"],
      color: "from-indigo-500 via-purple-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-purple-500/5 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/25",
    },
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
    { name: "2nd BFSI Tech Innovation Summit & Awards 2026", date: "18th June", location: " Mumbai, India" },
    { name: "Cyber Security Summit & Awards 2026", date: "August 2026", location: "New Delhi, India" },
    { name: "Agentic AI & Customer Experience Summit 2026", date: "October 2026", location: " Bangalore, India" },
    { name: "Blocksphere India Summit & Awards 2026", date: "December 2026", location: "Mumbai, India" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-950 to-black text-white">
        <div className="absolute inset-0 bg-[url('/images/events-1.png')] opacity-25"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-800 text-orange-200 border-orange-500/30 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
              Next-Gen Business Events
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
              Where Visionaries Converge. Where Industries Evolve.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              At XhibitIQ, we don't just host events — we architect the future of business through next-gen conferences,
              bespoke summits, and breakthrough demand generation platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent hover:scale-105 transition-all duration-300"
                >
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
              Unleashing the Power of Intelligent Exhibitions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              XhibitIQ is a global powerhouse in curating futuristic business experiences. We bring together bold
              thinkers, cutting-edge innovators, and changemakers through world-class conferences, highly targeted
              bespoke events, and transformative summits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all  hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                  <Zap className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                  Future-First Thinking
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  We explore innovation frontiers and design events that spotlight next-decade trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300">
                  <Target className="h-8 w-8 text-emerald-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                  Elite Curation
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Meticulously crafted events ensuring high-impact outcomes for all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all   hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                  <Globe className="h-8 w-8 text-orange-600 group-hover:animate-spin" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                  Global Reach
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  Bespoke delivery that transcends borders and exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all  hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-600 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  <TrendingUp className="h-8 w-8 text-rose-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-rose-600 transition-colors duration-300">
                  Demand Generation 2.0
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  Engineering real engagement, qualified leads, and market activation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              From global conferences to bespoke executive gatherings, we create experiences that drive business
              transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all   hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 group`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%)] bg-[length:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform ">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
              <span className="text-purple-200 text-sm font-medium tracking-wider">FUTURE INDUSTRIES</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Empower
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
              From AI to Quantum Tech, Finance to SpaceTech, our events shape conversations that define tomorrow's world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group relative animate-in fade-in-0 slide-in-from-bottom-4 duration-700`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                {/* Enhanced Holographic Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100`}
                ></div>

                {/* Main Card with Advanced Styling */}
                <div
                  className={`relative bg-white/5 backdrop-blur-sm border ${industry.borderColor} rounded-3xl overflow-hidden transition-all duration-700 group-hover:bg-white/10 group-hover:border-white/20 group-hover:transform group-hover:-translate-y-4 group-hover:scale-105 group-hover:${industry.glowColor} group-hover:shadow-2xl`}
                >
                  {/* Animated Top Accent */}
                  <div className={`h-1 bg-gradient-to-r ${industry.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="p-8">
                    {/* Enhanced Icon Section */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all   relative z-10`}
                      >
                        {industry.icon}
                      </div>
                      {/* Multi-layer Glow Effects */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all  `}
                      ></div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl scale-150 transition-all duration-700`}
                      ></div>

                      {/* Corner Tech Accents */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-purple-400/30 group-hover:border-purple-400 transition-colors  "></div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-blue-400/30 group-hover:border-blue-400 transition-colors  "></div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-purple-300 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {industry.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {industry.description}
                      </p>

                      {/* Enhanced Trend Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {industry.trends.map((trend, trendIndex) => (
                          <div key={trendIndex} className="relative group/tag">
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity  `}
                            ></div>
                            <Badge
                              variant="secondary"
                              className="relative text-xs bg-white/10 text-slate-200 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                            >
                              {trend}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Tech Overlay Effects */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                      <div className={`w-full h-full bg-gradient-to-br ${industry.color} rounded-full blur-3xl`}></div>
                    </div>

                    {/* Animated Status Indicators */}
                    <div className="absolute bottom-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity  ">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.color} rounded-full animate-pulse`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.color} rounded-full animate-pulse delay-100`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.color} rounded-full animate-pulse delay-200`}
                      ></div>
                    </div>

                    {/* Hover Scan Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity   pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-2000 ease-linear"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1200">
            <Link href="/industries">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all   hover:scale-105">
                {/* Multi-layer Button Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-600 to-blue-600 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity  "></div>
                <div className="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>

                {/* Animated Border Sweep */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Button Content */}
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Explore All Industries</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20  text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
              Our Upcoming Events
            </h2>
            <p className="text-xl text-slate-900 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              Join industry leaders and visionaries at our upcoming flagship events across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className={`bg-white/10 border-orange-100 backdrop-blur-sm hover:bg-orange-600 transition-all   hover:-translate-y-3 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 group hover:shadow-2xl hover:shadow-purple-500/25`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-purple-200 transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-black mb-2 group-hover:text-purple-100 transition-colors duration-300">
                    {event.date}
                  </p>
                  <p className="text-black group-hover:text-slate-200 transition-colors duration-300">
                    {event.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-800">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-black text-slate-100 hover:bg-orange-600 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-100 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
              Join the Future with XhibitIQ
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              Whether you're a brand ready to lead the narrative, a visionary looking to share the stage, or a company
              hungry for demand and growth — XhibitIQ is your gateway to tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Request a Proposal
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
