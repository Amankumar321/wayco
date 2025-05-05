// components/ui/icon.tsx
"use client"

import { IconType } from "@/types"
import {
  Building,
  TreePine,
  Warehouse as Museum,
  Coffee,
  Utensils,
  Mountain,
  Zap
} from "lucide-react"

interface IconProps {
  type: IconType
  className?: string
}

export function Icon({ type, className }: IconProps) {
  const iconMap = {
    museum: Museum,
    park: TreePine,
    tea: Coffee,
    food: Utensils,
    mountain: Mountain,
    building: Building,
    adventure: Zap,
    culture: Museum
  }

  const IconComponent = iconMap[type] || Building

  return <IconComponent className={`h-4 w-4 ${className}`} />
}