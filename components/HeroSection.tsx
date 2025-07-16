import React from 'react'
import { Badge } from './ui/badge'
import { HERO_DATA } from '@/lib/constants'
import { Button } from './ui/button'
import { ArrowRight, ChevronDown, Play, Rocket } from 'lucide-react'

const HeroSection = () => {
  return (
      <section id="home" className="relative mt-20 md:mt-0 min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-25 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-bounce delay-300"></div>
              <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-30 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-15 animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-teal-400 to-green-500 rounded-full opacity-20 animate-ping delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 mb-6 px-4 py-2 text-sm font-medium">
                      {HERO_DATA.badge}
                  </Badge>

                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                      {HERO_DATA.title}
                      <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                          {HERO_DATA.highlightedTitle}
                      </span>
                      {HERO_DATA.subtitle}
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                      {HERO_DATA.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                      <Button
                          size="lg"
                          onClick={() => {
                              const element = document.getElementById('services')
                              if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' })
                              }
                          }}
                          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-xl text-lg px-8 py-4 h-auto"
                      >
                          <Rocket className="mr-2 w-5 h-5" />
                          {HERO_DATA.primaryCTA}
                          <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button
                          onClick={() => {
                              const element = document.getElementById('portfolio')
                              if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' })
                              }
                          }}
                          size="lg"
                          variant="outline"
                          className="border-2 border-gray-300 hover:border-orange-500 text-lg px-8 py-4 h-auto bg-white/80 backdrop-blur-sm"
                      >
                          <Play className="mr-2 w-5 h-5" />
                          {HERO_DATA.secondaryCTA}
                      </Button>
                  </div>

                  {/* Hero Stats */}
                  <div className="grid md:grid-cols-3 gap-8  max-w-4xl mx-auto">
                      {HERO_DATA.stats.map((stat, index) => (
                          <div
                              key={index}
                              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                          >
                              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                              <div className="text-gray-600 font-medium">{stat.label}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
      </section>
  )
}

export default HeroSection