'use client'

import { useState } from 'react'
import { Bell, PawPrintIcon as Paw, Baby, User, HandIcon as PrayingHands, Home, Utensils } from 'lucide-react'

const categories = [
  { name: 'Urgent', icon: Bell, bgColor: 'bg-blue-50' },
  { name: 'Animals', icon: Paw },
  { name: 'Children', icon: Baby },
  { name: 'Elderly', icon: User },
  { name: 'Faith', icon: PrayingHands },
  { name: 'Disaster-Relief', icon: Home },
  { name: 'Hunger', icon: Utensils }
]

const itemsPerPage = 7
const totalPages = Math.ceil(categories.length / itemsPerPage)

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(0)

  const startIndex = currentPage * itemsPerPage
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerPage)

  const handleDotClick = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
         <div className="mt-8 flex items-center gap-4 text-gray-700 overflow-x-auto pb-4 md:justify-center">
            <span className="whitespace-nowrap">Popular Search:</span>
            <div className="flex gap-4">
              <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap">Technology Projects</span>
              <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap">Cancer Charity Programs</span>
              <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap">Design Interior</span>
            </div>
          </div>
      <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-x-visible md:pb-0 md:mx-0 md:px-0">
      <div className="grid grid-flow-col md:grid-flow-row auto-cols-max md:grid-cols-4 lg:grid-cols-7 gap-4 min-w-max md:min-w-0">
        {visibleCategories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-all hover:shadow-lg min-w-[150px] ${
              category.bgColor || 'bg-white'
            }`}
          >
            <category.icon 
              className={`h-8 w-8 mb-2 fill-current ${
                category.name === 'Urgent' ? 'text-[#E84C3D]' : 'text-[#E84C3D]'
              }`} 
            />
            <span className="text-sm font-medium text-gray-700">{category.name}</span>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === index 
                ? 'w-8 h-2 bg-[#E84C3D]' 
                : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

