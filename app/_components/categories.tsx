"use client";

import {
  Baby,
  Bell,
  Home,
  PawPrintIcon as Paw,
  HandIcon as PrayingHands,
  User,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Urgent", icon: Bell, bgColor: "bg-blue-50" },
  { name: "Animals", icon: Paw },
  { name: "Children", icon: Baby },
  { name: "Elderly", icon: User },
  { name: "Faith", icon: PrayingHands },
  { name: "Disaster-Relief", icon: Home },
  { name: "Hunger", icon: Utensils },
];

const itemsPerPage = 7;
const totalPages = Math.ceil(categories.length / itemsPerPage);

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-700 overflow-x-auto pb-4">
        <span className="whitespace-nowrap font-medium">Popular Search:</span>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap text-sm">
            Technology Projects
          </span>
          <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap text-sm">
            Cancer Charity Programs
          </span>
          <span className="text-gray-600 hover:text-[#E84C3D] cursor-pointer whitespace-nowrap text-sm">
            Design Interior
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {visibleCategories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
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
  );
}
