"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TEAM_DATA } from "@/lib/constants"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />
      case "twitter":
        return <Twitter className="w-4 h-4" />
      case "instagram":
        return <Instagram className="w-4 h-4" />
      default:
        return <Mail className="w-4 h-4" />
    }
  }

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 mb-4">{TEAM_DATA.badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{TEAM_DATA.title}</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">{TEAM_DATA.subtitle}</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{TEAM_DATA.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.members.map((member) => (
            <Card
              key={member.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <Button
                          key={platform}
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                          asChild
                        >
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {getSocialIcon(platform)}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
