"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Baby, Bell, PawPrint, Search } from "lucide-react";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/desktop1.webp",
  "/images/desktop2.webp" 
];
const placeholders = [
  "Search by City...",
  "Search by Category...",
  "Search by NGO Need...",
]

export default function HeroSearch() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    const placeholderTimer = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }, 3000) // Change placeholder every 3 seconds

    return () => {
      clearInterval(imageTimer)
      clearInterval(placeholderTimer)
    }
  }, [])

  return (
    <div className="relative min-h-[28rem] flex flex-col justify-between overflow-visible">
      <div className="absolute" />
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}

      <div className="relative z-20 text-center space-y-8 px-4 pt-32">
        <div className="text-4xl capitalize md:text-6xl font-bold text-white max-w-4xl mx-auto mt-12">
        <h1 className=""> Give your helping hand to those who need it</h1> 
        </div>

        <div className="relative -bottom-24 z-1 max-w-3xl mx-auto w-full">
          <div className="flex gap-4 bg-white rounded-lg p-3 shadow-xl z-50">
          

            <div className="flex-1 flex items-center">
              <input
                type="text"
                placeholder={placeholders[currentPlaceholderIndex]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
              />
            </div>

            <Button size="icon" className="bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
