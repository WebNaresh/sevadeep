'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const campaigns = [
  {
    id: 1,
    image: '/placeholder.svg',
    title: 'Help Suvarna & Arun Build A Home For Injured, Diseased Animals in Pune',
    goal: 130000,
    raised: 0
  },
  {
    id: 2,
    image: '/placeholder.svg',
    title: 'Help Suvarna & Arun Build A Home For Injured, Diseased Animals in Pune',
    goal: 130000,
    raised: 0
  },
  {
    id: 3,
    image: '/placeholder.svg',
    title: 'Help Suvarna & Arun Build A Home For Injured, Diseased Animals in Pune',
    goal: 130000,
    raised: 0
  }
]

export default function CampaignSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(campaigns.length / 3)

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount).replace('INR', '₹')
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Narayan seva</h2>
        <p className="text-xl text-gray-600">Introduse Our Campains</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-medium text-lg mb-6 line-clamp-2">
                {campaign.title}
              </h3>
              
              <div className="space-y-4">
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#E84C3D]" 
                    style={{ 
                      width: `${(campaign.raised / campaign.goal) * 100}%` 
                    }} 
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Goal:</div>
                    <div className="font-medium">{formatAmount(campaign.goal)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Raised:</div>
                    <div className="font-medium">{formatAmount(campaign.raised)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">To Go:</div>
                    <div className="font-medium">{formatAmount(campaign.goal - campaign.raised)}</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === index 
                ? 'w-8 h-2 bg-[#E84C3D]' 
                : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-[#E84C3D]">
          See More
        </Button>
      </div>
    </section>
  )
}

