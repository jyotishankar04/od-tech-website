"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"
import { TeamSection } from "@/components/team-section"
import { DynamicIcon } from "@/components/dynamic-icon"
import {
  SITE_CONFIG,
  ABOUT_DATA,
  SERVICES_DATA,
  PORTFOLIO_DATA,
  WHY_CHOOSE_US_DATA,
  FOOTER_DATA,
  NAVIGATION_DATA,
} from "@/lib/constants"
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Contact from "@/components/Contact"
import HeroSection from "@/components/HeroSection"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="">
              <Image src="/logo.png" alt="Logo" className="rounded-full" width={50} height={50} />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">{SITE_CONFIG.shortName}</span>
              <div className="text-xs text-gray-500 -mt-1">{SITE_CONFIG.tagline}</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_DATA.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button  
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden md:flex bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg">
              {NAVIGATION_DATA.cta}
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-orange-100 text-orange-700 mb-4">{ABOUT_DATA.badge}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {ABOUT_DATA.title}
                  <span className="text-orange-500"> {ABOUT_DATA.highlightedTitle}</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">{ABOUT_DATA.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {ABOUT_DATA.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DynamicIcon name={feature.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg">
                {ABOUT_DATA.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button> */}
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/transform.png"
                  alt="Team working on web development"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">{SERVICES_DATA.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{SERVICES_DATA.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{SERVICES_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <DynamicIcon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-gray-400">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">{PORTFOLIO_DATA.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{PORTFOLIO_DATA.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{PORTFOLIO_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Link href={project.url} target="_blank" >
                        <Button className="bg-white text-gray-900 hover:bg-gray-100" size={"sm"}>

                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className={project.badgeColor + " mb-3"}>{project.badge}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Completed in {project.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg">
              {PORTFOLIO_DATA.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">{TESTIMONIALS_DATA.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{TESTIMONIALS_DATA.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{TESTIMONIALS_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`p-8 hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br ${testimonial.gradient}`}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">{WHY_CHOOSE_US_DATA.badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{WHY_CHOOSE_US_DATA.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{WHY_CHOOSE_US_DATA.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US_DATA.reasons.map((reason, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <DynamicIcon name={reason.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <DynamicIcon name="Code" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">{SITE_CONFIG.shortName}</span>
                  <div className="text-sm text-gray-400 -mt-1">{SITE_CONFIG.tagline}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{FOOTER_DATA.description}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            {FOOTER_DATA.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{FOOTER_DATA.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg z-50"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
