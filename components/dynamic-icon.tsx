import {
  Monitor,
  Code,
  ShoppingCart,
  Smartphone,
  Search,
  HeadphonesIcon,
  Shield,
  Users,
  Zap,
  Target,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Code,
  ShoppingCart,
  Smartphone,
  Search,
  HeadphonesIcon,
  Shield,
  Users,
  Zap,
  Target,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
}

interface DynamicIconProps {
  name: string
  className?: string
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
