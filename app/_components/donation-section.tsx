'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { X } from 'lucide-react'

const donations = [
  {
    id: 1,
    image: '/placeholder.svg',
    category: 'Medical',
    title: "Share warmth, make someone's life better",
    fundRequired: 10000,
    totalRaised: 5345,
    progress: 20
  },
  {
    id: 2,
    image: '/placeholder.svg',
    category: 'Education',
    title: "Share warmth, make someone's life better",
    fundRequired: 10000,
    totalRaised: 5345,
    progress: 20
  }
]

const paymentMethods = [
  { name: 'PhonePe', icon: '/placeholder.svg' },
  { name: 'Google Pay', icon: '/placeholder.svg' },
  { name: 'Paytm', icon: '/placeholder.svg' },
  { name: 'RuPay', icon: '/placeholder.svg' },
  { name: 'UPI', icon: '/placeholder.svg' }
]

export default function DonationSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3

  return (
    <section className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Donate today and help create a<br />
          brighter future for others.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {/* Left Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64">
            <Image
              src="/placeholder.svg"
              alt="Medical donation"
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
              Medical
            </span>
          </div>
          
          <div className="p-4 md:p-6">
            <h3 className="font-medium text-lg mb-4 flex justify-between items-start">
              Share warmth, make someone's life better
              <button className="text-sm text-[#E84C3D] hover:underline">
                Read more
              </button>
            </h3>
            
            <Progress value={20} className="h-2 mb-6" />
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Fund required :</span>
                <span>10,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Total Raised :</span>
                <span>5,345</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              Donate Now
            </Button>
          </div>
        </div>

        {/* Middle Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-medium text-lg pr-8">
              Share warmth, brighten someone's day, and make a difference in their life. A simple act of kindness, whether big or small, can truly create lasting happiness and positively impact those around you.
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>

          <Progress value={20} className="h-2 mb-6" />
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Fund required :</span>
              <span>10,000</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Total Raised :</span>
              <span>5,345</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <hr className="flex-1" />
            <span className="text-gray-500">or Donate using</span>
            <hr className="flex-1" />
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="border-2 border-gray-200 rounded-lg p-3 md:p-4">
                <Image
                  src="/placeholder.svg"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="md:w-[150px] md:h-[150px]"
                />
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm">
                Receive <span className="text-[#E84C3D]">tax benefits</span> by donating to this cause
              </p>
              <p className="text-xs text-gray-500">Scan & donate with any app</p>
            </div>

            <div className="flex justify-center gap-4">
              {paymentMethods.map((method) => (
                <Image
                  key={method.name}
                  src={method.icon}
                  alt={method.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>

            <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              Donate Now
            </Button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64">
            <Image
              src="/placeholder.svg"
              alt="Education donation"
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
              Education
            </span>
          </div>
          
          <div className="p-4 md:p-6">
            <h3 className="font-medium text-lg mb-4 flex justify-between items-start">
              Share warmth, make someone's life better
              <button className="text-sm text-[#E84C3D] hover:underline">
                Read more
              </button>
            </h3>
            
            <Progress value={20} className="h-2 mb-6" />
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Fund required :</span>
                <span>10,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Total Raised :</span>
                <span>5,345</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              Donate Now
            </Button>
          </div>
        </div>
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

