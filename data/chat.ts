import type { ChatMessage } from "@/types"
import { activities } from "./activites"

export const initialMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "bot",
    content: [
      { type: 'text', text: "Hi there! I'm your Japan travel assistant." }
    ]
  },
  {
    id: "2",
    sender: "bot",
    content: [
      { type: 'text', text: "Here are two activities that I think you'll love:" },
      { 
        type: 'city-group',
        cities: [
          {
            cityName: "Tokyo", 
            activities: activities.filter(a => a.id === "tokyo-karting"),
            verified: true
          },
          {
            cityName: "Kyoto", 
            activities: activities.filter(a => a.id === "kyoto-tea"),
            verified: true
          }
        ]
      },
      { type: 'text', text: "Which of these activities interests you more?" }
    ]
  }
]