export type City = "Tokyo" | "Kyoto"

export type IconType = 
  | 'museum'
  | 'park'
  | 'tea'
  | 'food'
  | 'mountain'
  | 'building'
  | 'adventure'
  | 'culture';

export interface Activity {
  id: string
  name: string
  city: City
  description: string
  recommendation: string
  imageUrl: string
  rating: number
  reviews: number
  duration: string
  bestTime: string
  verified: boolean
  icon: IconType
  reviewExamples?: {
    name: string
    rating: number
    date: string
    comment: string
  }[]
}

export type MessageContent = 
  | { type: 'text'; text: string }
  | { type: 'city-group'; cities: CityGroup[] }

export interface CityGroup {
  cityName: City;
  activities: Activity[];
  verified?: boolean;
}

export interface ChatMessage {
  id: string
  sender: "user" | "bot"
  content: MessageContent[]
}