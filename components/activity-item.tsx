// components/activity-item.tsx
"use client"

import { Activity } from "@/types"
import { Icon } from "@/components/icon"
import { Check } from "lucide-react"

export function ActivityItem({ 
  activity, 
  number 
}: { 
  activity: Activity, 
  number: number 
}) {
  return (
    <div className="flex">
      <div className="font-medium mr-2 w-4 flex-shrink-0">{number}.</div>
      <div className="flex-1">
        <div className="flex items-center">
          <Icon type={activity.icon} className="h-4 w-4 mr-2" />
          <span className="font-bold">{activity.name}</span>
          {activity.verified && (
            <span className="ml-1 flex items-center justify-center w-3.5 h-3.5 p-0.5 bg-blue-500 text-white rounded-full">
              <Check strokeWidth={3}></Check>
            </span>
          )}
        </div>
        <div className="text-gray-600 mt-1">
          {activity.description}
        </div>
      </div>
    </div>
  )
}