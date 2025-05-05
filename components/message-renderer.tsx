"use client"

import { MessageContent } from "@/types"
import { CityGroup } from "./city-group"

export function MessageRenderer({ content }: { content: MessageContent[] }) {
  return (
    <div className="space-y-4">
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return <p key={index}>{item.text}</p>
          case 'city-group':
            return item.cities.map((group, groupIndex) => (
              <CityGroup key={groupIndex} group={group} />
            ))
          default:
            return null
        }
      })}
    </div>
  )
}