"use client"

import { useState } from "react"
import ChatInterface from "@/components/chat-interface"
import VisualPanel from "@/components/visual-panel"
import type { Activity, ChatMessage, City } from "@/types"
import { activities } from "@/data/activites"
import { initialMessages } from "@/data/chat"

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([])
  const [step, setStep] = useState<number>(1)

  
  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity)
  }

  const handleUserResponse = (message: string, selectedCity: City) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        content: [{ type: 'text', text: message }]
      }
    ]);

    // Simulate typing delay
    setTimeout(() => {
      if (step === 1) {
        // Move to step 2 - suggest more activities based on preference
        const preferredCity = selectedCity;
        const cityActivities = activities.filter((activity) => activity.city === preferredCity);

        // Select 3 activities for the preferred city
        const preferredActivities = cityActivities.slice(0, 3);

        const suggestedActivities = [...preferredActivities].filter(Boolean) as Activity[];
        setSelectedActivities(suggestedActivities);

        const cityData = {
          Tokyo: { name: "Tokyo" as City, verified: true },
          Kyoto: { name: "Kyoto" as City, verified: true }
        };

        const botResponse: ChatMessage = {
          id: Date.now().toString(),
          sender: "bot",
          content: [
            { type: 'text', text: "Based on your preference, here's a suggested 4-day trip:" },
            {
              type: 'city-group',
              cities: [
                {
                  cityName: cityData[preferredCity].name,
                  verified: cityData[preferredCity].verified,
                  activities: preferredActivities
                }
              ]
            },
            { type: 'text', text: "Would you like to confirm these activities for your trip?" }
          ]
        };

        setMessages((prev) => [...prev, botResponse]);
        setStep(2);
      } else if (step === 2) {
        // Final confirmation
        const botResponse: ChatMessage = {
          id: Date.now().toString(),
          sender: "bot",
          content: [
            { 
              type: 'text', 
              text: "Great! I've confirmed these activities for your 4-day trip to Japan. You're all set for an amazing adventure!" 
            },
            { 
              type: 'text',
              text: "Is there anything else you'd like to know about these activities or places?"
            }
          ]
        };

        setMessages((prev) => [...prev, botResponse]);
        setStep(3);
      }
    }, 1000);
  };

  return (
    <main className="flex h-screen bg-gray-50 p-8">
      <div className="flex flex-1 overflow-hidden">
        <ChatInterface messages={messages} onSendMessage={handleUserResponse} step={step} />
        <VisualPanel
          selectedActivity={selectedActivity}
          activities={step === 1 ? activities : selectedActivities}
          onSelectActivity={handleActivitySelect}
        />
      </div>
    </main>
  )
}