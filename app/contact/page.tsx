import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-900 via-orange-900 to-orange-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-600/20 text-orange-200 border-orange-500/30">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Let's Build the Future Together
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're ready to lead the narrative, share the stage, or accelerate your growth — XhibitIQ is your
              gateway to tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="company" className="text-slate-700 font-medium">
                    Company
                  </Label>
                  <Input id="company" placeholder="Your Company Name" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-slate-700 font-medium">
                    I'm Interested In
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="attending">Attending Events</SelectItem>
                      <SelectItem value="speaking">Speaking Opportunities</SelectItem>
                      <SelectItem value="sponsoring">Sponsorship & Partnership</SelectItem>
                      <SelectItem value="bespoke">Bespoke Event Creation</SelectItem>
                      <SelectItem value="media">Media Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements, goals, or any questions you have..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Get In Touch</h2>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900">Phone</h3>
                        <p className="text-slate-600 mb-2">Ready to discuss your event needs?</p>
                        <p className="text-lg font-medium text-purple-600">+91-99716 457 39</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900">Email</h3>
                        <p className="text-slate-600 mb-2">Contact our team lead directly</p>
                        <p className="text-lg font-medium text-emerald-600">Nishanth Kutty</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900">Response Time</h3>
                        <p className="text-slate-600 mb-2">We typically respond within</p>
                        <p className="text-lg font-medium text-orange-600">24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-900">Global Presence</h3>
                        <p className="text-slate-600 mb-2">Events across multiple regions</p>
                        <p className="text-lg font-medium text-rose-600">Asia-Pacific & Middle East</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Partnership Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to engage with XhibitIQ and be part of the future of business events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Event Sponsorship",
                description: "Partner with us to sponsor flagship conferences and summits",
                benefits: ["Brand visibility", "Lead generation", "Thought leadership"],
              },
              {
                title: "Speaking Opportunities",
                description: "Nishanth Kutty at +91-99716 457 39 or nishanth@xhibitiq.com",
                benefits: ["Industry recognition", "Network expansion", "Content amplification"],
              },
              {
                title: "Bespoke Events",
                description: "Create custom events tailored to your specific objectives",
                benefits: ["Targeted audience", "Custom agenda", "Exclusive networking"],
              },
              {
                title: "Media Partnership",
                description: "Collaborate on content creation and event coverage",
                benefits: ["Content collaboration", "Audience sharing", "Co-marketing"],
              },
              {
                title: "Venue Partnership",
                description: "Host our events at your premium venues",
                benefits: ["Venue promotion", "Local networking", "Revenue sharing"],
              },
              {
                title: "Technology Partnership",
                description: "Provide technology solutions for enhanced event experiences",
                benefits: ["Product showcase", "User feedback", "Market validation"],
              },
            ].map((option, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{option.title}</h3>
                  <p className="text-slate-600 mb-6">{option.description}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-slate-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Don't wait for the future to happen. Be part of creating it. Reach out today and let's discuss how
              XhibitIQ can help you achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
