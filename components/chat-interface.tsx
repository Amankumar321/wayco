"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import type { ChatMessage, City } from "@/types"
import { Avatar } from "@/components/avatar"
import { Button } from "@/components/button"
import Image from "next/image"
import { MessageRenderer } from "@/components/message-renderer"
import {
  Send,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
} from "lucide-react"

interface ChatInterfaceProps {
  messages: ChatMessage[]
  onSendMessage: (message: string, selectedCity: City) => void
  step: number
}

export default function ChatInterface({ messages, onSendMessage, step }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState("")
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [showScrollDown, setShowScrollDown] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Check if scroll position is not at bottom
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const isScrolledToBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 100
      setShowScrollDown(!isScrolledToBottom)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (inputValue.trim() || (selectedCity && step == 1)) {
      onSendMessage(inputValue || `I prefer ${selectedCity}`, selectedCity || "Tokyo")
      setInputValue("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    handleSendMessage()
  }, [selectedCity])

  return (
    <div className="flex flex-col w-1/2 border-r border-gray-200 bg-white">
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className="flex items-start max-w-[80%] relative group">
              {message.sender === "bot" && (
                <div className="absolute right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 px-2 py-1 -mt-2">
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <ThumbsUp className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <ThumbsDown className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              )}

              {message.sender === "bot" && (
                <Avatar  className="h-8 w-8 mr-3 mt-1 flex-shrink-0">
                  <div className="rounded-full flex items-center justify-center h-full w-full">
                    <Image src={"/ai-magic.png"} width={48} height={48} alt="" />
                  </div>
                </Avatar>
              )}

              {message.sender === "user" && (
                <Avatar className="h-8 w-8 ml-3 mt-1 order-2 flex-shrink-0">
                  <div className="bg-blue-100 rounded-full flex items-center justify-center h-full w-full">
                    <span className="text-blue-700 text-xs">U</span>
                  </div>
                </Avatar>
              )}

              <div
                className={`rounded-2xl p-4 ${
                  message.sender === "user" ? "bg-blue-400 text-white order-1 mr-2" : "bg-gray-50 text-gray-800"
                }`}
              >
                <MessageRenderer content={message.content} />
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {showScrollDown && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-48 border border-gray-100 left-[25%] transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10"
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </button>
      )}

      <div className="p-4">
        {step === 1 && (
          <div className="mb-4 flex flex-col space-y-2">
            <p className="text-sm text-gray-500">Select your preferred city:</p>
            <div className="flex space-x-2">
              <Button
                variant={selectedCity === "Tokyo" ? "default" : "outline"}
                onClick={() => setSelectedCity("Tokyo")}
                className="flex-1"
              >
                Tokyo
              </Button>
              <Button
                variant={selectedCity === "Kyoto" ? "default" : "outline"}
                onClick={() => setSelectedCity("Kyoto")}
                className="flex-1"
              >
                Kyoto
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mb-4 flex flex-col space-y-2">
            <div className="flex space-x-2">
              <Button
                onClick={() => {
                  onSendMessage("Yes, I'd like to confirm these activities!", selectedCity ?? "Tokyo")
                }}
                className="flex-1"
              >
                Confirm Activities
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  onSendMessage("I'd like to see different options", selectedCity == "Tokyo" ? "Kyoto" : "Tokyo")
                }}
                className="flex-1"
              >
                See Other Options
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-gray-700"
          />
          <Button size="icon" onClick={handleSendMessage} className="ml-2 rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
