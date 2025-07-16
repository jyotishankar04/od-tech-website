"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { DynamicIcon } from "./dynamic-icon"
import { SITE_CONFIG, NAVIGATION_DATA } from "@/lib/constants"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
            <DynamicIcon name="Code" className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold">{SITE_CONFIG.shortName}</span>
        </div>
        <nav className="flex flex-col space-y-4">
          {NAVIGATION_DATA.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 mt-4">
            {NAVIGATION_DATA.cta}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
