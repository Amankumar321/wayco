import type { Activity } from "@/types"

export const activities: Activity[] = [
  {
    id: "tokyo-karting",
    name: "Nighttime Go-Karting in Shibuya",
    city: "Tokyo",
    description:
      "Race through the neon-lit streets of Shibuya in costume as your favorite character. Experience Tokyo's vibrant nightlife from a unique perspective.",
    recommendation:
      "Perfect for adventure lovers! This activity combines the thrill of racing with the unique experience of seeing Tokyo's famous neon lights up close. It's a popular activity among young travelers looking for something different.",
    imageUrl: "https://www.japan-guide.com/community/img/1021165_2.jpg",
    rating: 4.8,
    reviews: 1243,
    duration: "2-3 hours",
    bestTime: "Evening",
    icon: "adventure",
    verified: true,
    reviewExamples: [
      {
        name: "Alex T.",
        rating: 5,
        date: "March 2025",
        comment:
          "One of the highlights of our trip! Racing through Shibuya at night was surreal. The guides were fun and made sure everyone was safe.",
      },
      {
        name: "Jamie L.",
        rating: 4,
        date: "February 2025",
        comment:
          "Super fun experience! The costumes add an extra element of fun. Just note it can get chilly at night so bring a jacket.",
      },
    ],
  },
  {
    id: "kyoto-tea",
    name: "Tea Ceremony in Historic Gion Teahouse",
    city: "Kyoto",
    description:
      "Experience a traditional Japanese tea ceremony in Gion, Kyoto's historic geisha district. Learn about the cultural significance and techniques from a tea master.",
    recommendation:
      "This authentic cultural experience offers insight into Japan's rich traditions. The historic teahouse setting in Gion provides the perfect atmosphere to appreciate this centuries-old ritual.",
    imageUrl: "https://www.japan-guide.com/g18/2096_01.jpg",
    rating: 4.9,
    reviews: 876,
    duration: "1.5 hours",
    bestTime: "Morning or Afternoon",
    icon: "tea",
    verified: true,
    reviewExamples: [
      {
        name: "Sarah M.",
        rating: 5,
        date: "April 2025",
        comment:
          "Such a peaceful and enlightening experience. Our host was knowledgeable and patient in explaining every step of the ceremony. The historic teahouse was beautiful!",
      },
      {
        name: "David K.",
        rating: 5,
        date: "January 2025",
        comment:
          "A must-do in Kyoto! The attention to detail and the cultural significance made this so much more than just drinking tea. Highly recommend.",
      },
    ],
  },
  {
    id: "tokyo-teamlab",
    name: "teamLab Planets Digital Art Museum",
    city: "Tokyo",
    description:
      "Immerse yourself in interactive digital art installations where art and the viewer become one. Walk through water, touch floating flowers, and experience art with all your senses.",
    recommendation:
      "This cutting-edge digital art museum offers a perfect blend of technology and artistic expression. It's especially popular among young couples looking for unique photo opportunities and immersive experiences.",
    imageUrl: "https://www.japan-guide.com/ad/g/teamlab_21.jpg",
    rating: 4.7,
    reviews: 2156,
    duration: "2-3 hours",
    bestTime: "Weekday mornings (less crowded)",
    icon: "museum",
    verified: false,
    reviewExamples: [
      {
        name: "Emma R.",
        rating: 5,
        date: "March 2025",
        comment:
          "Mind-blowing experience! The installations are beautiful and unlike anything I've seen before. Wear shorts as you'll be walking through water in some exhibits.",
      },
      {
        name: "Michael T.",
        rating: 4,
        date: "February 2025",
        comment:
          "Absolutely stunning visuals. Gets crowded but worth it. The light and water installations were our favorites.",
      },
    ],
  },
  {
    id: "tokyo-tsukiji",
    name: "Tsukiji Outer Market Food Tour",
    city: "Tokyo",
    description:
      "Explore the famous Tsukiji Outer Market with a local guide. Sample fresh seafood, Japanese street food, and learn about the history of the world's most famous fish market.",
    recommendation:
      "For food lovers, this tour offers an authentic taste of Japanese cuisine. The variety of fresh seafood and street food provides insight into Japan's culinary traditions.",
    imageUrl: "https://www.japan-guide.com/g18/3021_05.jpg",
    rating: 4.6,
    reviews: 1532,
    duration: "3 hours",
    bestTime: "Morning (8-11am)",
    icon: "food",
    verified: false,
    reviewExamples: [
      {
        name: "Lisa J.",
        rating: 5,
        date: "April 2025",
        comment:
          "Amazing food tour! Our guide was knowledgeable and took us to the best stalls. The fresh tuna sashimi was incredible.",
      },
      {
        name: "Ryan P.",
        rating: 4,
        date: "March 2025",
        comment:
          "Great introduction to Japanese seafood. Came back the next day on our own to try more. Definitely come hungry!",
      },
    ],
  },
  {
    id: "kyoto-arashiyama",
    name: "Arashiyama Bamboo Grove & Monkey Park",
    city: "Kyoto",
    description:
      "Walk through the otherworldly bamboo forest and visit the nearby monkey park where you can see Japanese macaques up close with panoramic views of Kyoto.",
    recommendation:
      "This combination offers both natural beauty and wildlife interaction. The bamboo grove is most magical in the early morning light, and the monkey park provides a fun and active element to your Kyoto experience.",
    imageUrl: "https://www.japan-guide.com/g18/3912_02.jpg",
    rating: 4.7,
    reviews: 1876,
    duration: "Half day",
    bestTime: "Early morning (for fewer crowds)",
    icon: "park",
    verified: true,
    reviewExamples: [
      {
        name: "Thomas L.",
        rating: 5,
        date: "March 2025",
        comment:
          "The bamboo grove is even more beautiful in person. Go early to avoid crowds. The monkey park has a steep climb but the views and monkey interactions are worth it!",
      },
      {
        name: "Sophia C.",
        rating: 4,
        date: "February 2025",
        comment:
          "Magical experience walking through the bamboo forest. The monkeys were adorable and the view from the top of the mountain was spectacular.",
      },
    ],
  },
  {
    id: "kyoto-fushimi",
    name: "Fushimi Inari Shrine Hike",
    city: "Kyoto",
    description:
      "Hike through thousands of vermilion torii gates that wind up Mount Inari. This iconic shrine is dedicated to the Shinto god of rice and business.",
    recommendation:
      "This is one of Kyoto's most photographed spots for good reason. The hike through the torii gates offers both cultural significance and natural beauty, with various lookout points along the way.",
    imageUrl: "https://www.japan-guide.com/g19/3915_02.jpg",
    rating: 4.8,
    reviews: 3245,
    duration: "2-3 hours",
    bestTime: "Early morning or late afternoon",
    icon: "mountain",
    verified: false,
    reviewExamples: [
      {
        name: "Jennifer K.",
        rating: 5,
        date: "April 2025",
        comment:
          "Absolutely magical! We went at sunrise and had the place almost to ourselves. The morning light through the gates was stunning.",
      },
      {
        name: "Daniel M.",
        rating: 4,
        date: "March 2025",
        comment:
          "Beautiful shrine and an enjoyable hike. Gets very crowded during the day, so go early if possible. The full hike takes about 2-3 hours.",
      },
    ],
  },
]
