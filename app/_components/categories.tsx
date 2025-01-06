'use client'

import { Baby, Bell, Home, PawPrintIcon as Paw, HandIcon as PrayingHands, User, Utensils } from 'lucide-react'
import { useState, useRef, useEffect } from "react"

const categories = [
  { name: "Urgent", icon: Bell, bgColor: "bg-blue-50" },
  { name: "Animals", icon: Paw },
  { name: "Children", icon: Baby },
  { name: "Elderly", icon: User },
  { name: "Faith", icon: PrayingHands },
  { name: "Disaster-Relief", icon: Home },
  { name: "Hunger", icon: Utensils },
]

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = 7
  const totalPages = Math.ceil(categories.length / itemsPerPage)

  const handleDotClick = (index: number) => {
    setCurrentPage(index)
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: containerWidth * index,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.offsetWidth
        const scrollPosition = scrollContainerRef.current.scrollLeft
        const newPage = Math.round(scrollPosition / containerWidth)
        setCurrentPage(newPage)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-700 overflow-x-auto pb-4">
        <span className="whitespace-nowrap font-medium">Categories:</span>
        
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 pb-4 sm:pb-0 scrollbar-hide"
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex-shrink-0 w-24 sm:w-auto flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
              category.bgColor || "bg-white"
            }`}
          >
            <category.icon
              className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 fill-current ${
                category.name === "Urgent" ? "text-[#E84C3D]" : "text-[#E84C3D]"
              }`}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === index
                ? "w-6 sm:w-8 h-2 bg-[#E84C3D]"
                : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

