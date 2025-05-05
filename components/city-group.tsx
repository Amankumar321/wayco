"use client"

import { CityGroup as CityGroupType } from "@/types"
import { ActivityItem } from "@/components/activity-item"
import { MapPin, Check } from "lucide-react"

export function CityGroup({ group }: { group: CityGroupType }) {
  return (
    <div className="space-y-3 mb-6">
      {/* City Header */}
      <div className="flex items-center font-semibold text-gray-800">
        <MapPin className="h-4 w-4 mr-1"></MapPin>
        <span>{group.cityName}</span>
        {group.verified && (
          <span className="ml-1 flex items-center justify-center w-3.5 h-3.5 p-0.5 bg-blue-500 text-white rounded-full">
            <Check strokeWidth={3}></Check>
          </span>
        )}
      </div>

      {/* Activities List */}
      <div className="space-y-3 pl-4">
        {group.activities.map((activity, index) => (
          <ActivityItem 
            key={activity.id}
            activity={activity}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  )
}