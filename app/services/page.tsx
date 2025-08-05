import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Lightbulb, Target, Presentation, Network, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Conferences & Summits",
      description: "Global platforms that spotlight disruptive trends and forge strategic alliances.",
      features: [
        "Multi-day flagship conferences",
        "Industry-specific summits",
        "Global networking platforms",
        "Keynote speaker management",
        "Exhibition spaces",
        "Live streaming capabilities",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Bespoke Executive Events",
      description:
        "Tailored VIP gatherings that connect decision-makers, fast-track deals, and open doors to new markets.",
      features: [
        "C-suite roundtables",
        "Private investor meetings",
        "Executive retreats",
        "Board advisory sessions",
        "Strategic partnership forums",
        "Exclusive networking dinners",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Thought Leadership Forums",
      description: "Focused knowledge-sharing environments that drive strategic insight and industry foresight.",
      features: [
        "Expert panel discussions",
        "Innovation showcases",
        "Research presentations",
        "White paper launches",
        "Industry trend analysis",
        "Future forecasting sessions",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Lead-Driven Demand Generation",
      description:
        "High-intent programs that combine data, content, and conversation to convert audiences into opportunities.",
      features: [
        "Qualified lead generation",
        "Account-based marketing events",
        "Sales pipeline acceleration",
        "Customer acquisition programs",
        "Brand positioning campaigns",
        "ROI-focused metrics",
      ],
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: <Presentation className="h-10 w-10" />,
      title: "Innovation Showcases",
      description: "Interactive platforms to launch, demonstrate, and amplify next-gen technologies.",
      features: [
        "Product launch events",
        "Technology demonstrations",
        "Startup pitch competitions",
        "Innovation awards",
        "Interactive exhibitions",
        "Media coverage coordination",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Strategic Networking",
      description: "Curated networking experiences that create lasting business relationships and partnerships.",
      features: [
        "AI-powered matchmaking",
        "Industry-specific meetups",
        "Speed networking sessions",
        "Partnership facilitation",
        "Mentor-mentee programs",
        "Alumni networks",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Comprehensive Event Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From global conferences to intimate executive gatherings, we deliver experiences that drive business
              transformation and industry evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">What We Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of business event management and demand
              generation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
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

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to execution, we follow a proven methodology that ensures exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Understanding your objectives and target audience",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Creating comprehensive event blueprints and timelines",
              },
              {
                step: "03",
                title: "Execution & Management",
                description: "Flawless delivery with real-time monitoring",
              },
              {
                step: "04",
                title: "Analysis & Optimization",
                description: "Measuring success and optimizing for future events",
              },
            ].map((process, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Transform Your Business Events?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Let's discuss how our comprehensive event solutions can drive your business objectives and create lasting
              impact in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
