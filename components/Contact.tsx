import { CONTACT_DATA } from "@/lib/constants"
import { Badge, Rocket } from "lucide-react"
import { DynamicIcon } from "./dynamic-icon"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Image from "next/image"

const Contact = () => {
  return (
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <Badge className="bg-orange-100 text-orange-700 mb-4">{CONTACT_DATA.badge}</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{CONTACT_DATA.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{CONTACT_DATA.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="space-y-8">
                      <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">{CONTACT_DATA.subtitle}</h3>
                          <p className="text-lg text-gray-600 mb-8">{CONTACT_DATA.intro}</p>
                      </div>

                      <div className="space-y-6">
                          {CONTACT_DATA.contactInfo.map((info, index) => (
                              <div key={index} className="flex items-start space-x-4">
                                  <div
                                      className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                                  >
                                      <DynamicIcon name={info.icon} className="w-6 h-6 text-white" />
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                      <p className="text-gray-600">{info.value}</p>
                                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className="">
                      {/* <div className="space-y-6">
                          {CONTACT_DATA.socialMedia.map((social, index) => (
                              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                                  <div className="flex items-center space-x-4">
                                      <DynamicIcon name={social.icon} className="w-6 h-6 text-gray-900" />
                                      <p className="text-lg text-gray-600">{social.name}</p>
                                  </div>
                              </a>
                          ))}
                      </div> */}

                      <div className="flex rounded-lg overflow-hidden group hover:shadow-2xl  items-center justify-center">
                          <Image width={500} height={500} src={"/contact.png"} className="w-full transition-all duration-300 group-hover:scale-105 " alt="Contact Image" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Contact
