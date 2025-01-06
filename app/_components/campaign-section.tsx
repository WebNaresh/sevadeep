"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const campaigns = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title:
      "Provide Daily Meals to Patient Families at City Government Hospital",
    goal: 100000,
    raised: 45000,
    description:
      "Help us provide nutritious meals to families supporting their loved ones at the hospital.",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "Winter Warmth: Blanket Distribution for Hospital Attendants",
    goal: 50000,
    raised: 20000,
    description:
      "Support our initiative to distribute warm blankets to patient relatives during cold nights at the hospital.",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "Monsoon Relief: Umbrella Distribution for Hospital Visitors",
    goal: 30000,
    raised: 10000,
    description:
      "Help protect patient families from rain as they travel to and from the hospital during monsoon season.",
  },
];

export default function CampaignSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(campaigns.length / 3);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("INR", "₹");
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Narayanseva Campaigns</h2>
        <p className="text-xl text-gray-600">
          Supporting Patient Families at Government Hospitals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-lg mb-3 line-clamp-2">
                {campaign.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {campaign.description}
              </p>

              <div className="space-y-4">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E84C3D]"
                    style={{
                      width: `${(campaign.raised / campaign.goal) * 100}%`,
                    }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Goal:</div>
                    <div className="font-medium">
                      {formatAmount(campaign.goal)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">Raised:</div>
                    <div className="font-medium">
                      {formatAmount(campaign.raised)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">To Go:</div>
                    <div className="font-medium">
                      {formatAmount(campaign.goal - campaign.raised)}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white">
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
                ? "w-8 h-2 bg-[#E84C3D]"
                : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-[#E84C3D]">
          See More Campaigns
        </Button>
      </div>
    </section>
  );
}
