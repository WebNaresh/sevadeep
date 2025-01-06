"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaWhatsapp } from 'react-icons/fa';

const campaigns = [
  {
    id: 1,
    image: "/images/donation5.jpg",
    title: "Provide Daily Meals to Patient Families at City Government Hospital",
    goal: 100000,
    raised: 45000,
    description: "Help us provide nutritious meals to families supporting their loved ones at the hospital.",
    taxBenefit: true,
  },
  // {
  //   id: 2,
  //   image: "/images/hero2.jpg",
  //   title: "Winter Warmth: Blanket Distribution for Hospital Attendants",
  //   goal: 50000,
  //   raised: 20000,
  //   description: "Support our initiative to distribute warm blankets to patient relatives during cold nights at the hospital.",
  //   taxBenefit: true,
  // },
  // {
  //   id: 3,
  //   image: "/images/hero3.jpg",
  //   title: "Monsoon Relief: Umbrella Distribution for Hospital Visitors",
  //   goal: 30000,
  //   raised: 10000,
  //   description: "Help protect patient families from rain as they travel to and from the hospital during monsoon season.",
  //   taxBenefit: false,
  // },
];

export default function CampaignSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

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

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
      <Button className="bg-[#E84C3D] mb-12">
          <h1 className="text-3xl font-bold uppercase">Narayanseva</h1>
        </Button>
        <p className="text-xl text-gray-600">
          Free Food and Medical Equipment for those in need
        </p>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    {campaign.taxBenefit && (
                      <Badge className="absolute top-2 left-2 bg-green-500">
                        Tax Benefit
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-medium text-lg mb-3 line-clamp-2">
                    {campaign.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {campaign.description}
                  </p>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600"
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
                  </div>
                </CardContent>
                <CardFooter className="p-6 gap-2 pt-0 flex justify-between items-center">
                  <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white">
                    Donate Now
                  </Button>
                <Button className=" bg-green-500 text-white">
                    <FaWhatsapp size={24} />
                    </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {campaigns.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 h-2 bg-[#E84C3D]"
                : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

