"use client"

import { useState } from "react"
import type { Activity } from "@/types"
import {
  MapPin,
  Star,
  Heart,
  Clock,
  Calendar,
  Check
} from "lucide-react"
import { Icon } from "@/components/icon"

interface VisualPanelProps {
  selectedActivity: Activity | null
  activities: Activity[]
  onSelectActivity: (activity: Activity) => void
}

export default function VisualPanel({ selectedActivity, activities, onSelectActivity }: VisualPanelProps) {
  const [activeTab, setActiveTab] = useState<string>("overview")

  const currentActivity = selectedActivity || activities[0]

  return (
    <div className="w-1/2 bg-white overflow-y-auto">
      {currentActivity && (
        <div className="h-full flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <img
              src={currentActivity.imageUrl}
              alt={currentActivity.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold">{currentActivity.name}</h2>

            <div className="flex items-center mt-1 mb-1">
              <div className="flex items-center text-sm">
                <Star className="h-3.5 w-3.5 fill-current text-black" />
                <span className="ml-1 font-medium">{currentActivity.rating}</span>
              </div>
              <span className="mx-2 text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">{currentActivity.reviews} reviews</span>
              <span className="mx-2 text-gray-400 text-sm">•</span>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                <span className="text-gray-400 text-sm">
                  {currentActivity.city}, Japan
                </span>
              </div>
            </div>

            <div className="mb-4"></div>

            <div className="flex items-center mt-2 mb-4">
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-0.5 mr-2">
                <Heart className="h-3 w-3 fill-current text-red-500" />
                <span className="ml-1 text-sm font-medium">69</span>
              </div>
              <div className="flex -space-x-2 mr-2">
                <div className="h-6 w-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-xs">
                  S
                </div>
                <div className="h-6 w-6 rounded-full bg-green-100 border border-white flex items-center justify-center text-xs">
                  B
                </div>
                <div className="h-6 w-6 rounded-full bg-yellow-100 border border-white flex items-center justify-center text-xs">
                  K
                </div>
              </div>
              <span className="text-xs text-gray-400"><span className="font-semibold">Sara S, Bani Kohli</span>&nbsp;and 3 others mentioned this place</span>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <div className="flex px-4">
              {["Overview", "Guides", "Activities", "Tours", "Reviews", "Location"].map((tab) => (
                <button
                  key={tab}
                  className={`py-3 px-4 text-sm font-semibold relative ${
                    activeTab === tab.toLowerCase() ? "text-black" : "text-gray-400 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            {activeTab === "overview" && (
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{currentActivity.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Best time: {currentActivity.bestTime}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-[15px] leading-relaxed">{currentActivity.description}</p>

                <div>
                  <h3 className="font-semibold mb-2">Why we recommend this:</h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">{currentActivity.recommendation}</p>
                </div>
              </div>
            )}

            {activeTab === "activities" && (
              <div className="grid grid-cols-1 gap-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`cursor-pointer transition-all rounded-lg overflow-hidden shadow-sm hover:shadow-md ${
                      currentActivity.id === activity.id ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => onSelectActivity(activity)}
                  >
                    <div className="flex h-40">
                      <div className="w-1/3">
                        <img
                          src={activity.imageUrl}
                          alt={activity.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex items-center">
                          <Icon type={activity.icon} className="mr-1" />
                          <h3 className="text-lg font-semibold ml-2 truncate">{activity.name}</h3>
                          {
                            activity.verified && (
                              <span className="ml-1 flex items-center justify-center w-3.5 h-3.5 p-0.5 bg-blue-500 text-white rounded-full">
                                <Check strokeWidth={3}></Check>
                              </span>
                            )
                          }
                        </div>
                        <div className="flex items-center mt-1 mb-2">
                          <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-500">{activity.city}</span>
                          <div className="ml-2 flex items-center">
                            <Star className="h-3 w-3 fill-current text-black" />
                            <span className="text-sm ml-1">{activity.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-3">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-4 w-4 fill-current text-black" />
                  <span className="text-base font-semibold">{currentActivity.rating}</span>
                  <span className="text-gray-500 text-sm">• {currentActivity.reviews} reviews</span>
                </div>

                {currentActivity.reviewExamples?.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span>{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < review.rating ? "fill-current text-black" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "guides" && (
              <div className="text-center py-8 text-gray-500">
                <p>Guides content will be displayed here</p>
              </div>
            )}

            {activeTab === "tours" && (
              <div className="text-center py-8 text-gray-500">
                <p>Tours content will be displayed here</p>
              </div>
            )}

            {activeTab === "location" && (
              <div className="text-center py-8 text-gray-500">
                <p>Location information will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
