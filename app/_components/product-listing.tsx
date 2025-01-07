"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/cloths.jpg",
    category: "Clothes",
    title: "Share warmth, donate old clothes",
    quantityRequired: 10000,
    totalRaised: 5345,
  },
  {
    id: 2,
    image: "/images/food.jpg",
    category: "Food",
    title: "Feed the hungry, donate canned goods",
    quantityRequired: 5000,
    totalRaised: 2780,
  },
  {
    id: 3,
    image: "/images/medical.jpg",
    category: "Medical",
    title: "Support healthcare, donate medical supplies",
    quantityRequired: 2000,
    totalRaised: 890,
  },
  {
    id: 4,
    image: "/images/technology.jpg",
    category: "Technology",
    title: "Bridge the digital divide, donate old electronics",
    quantityRequired: 1000,
    totalRaised: 456,
  },
];

export default function ProductListing() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Optionally, you can add event listeners or perform other actions here
    }
  }, [emblaApi]);

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 mb-8">
        <Button className="bg-[#E84C3D]">
          <h1 className="text-3xl font-bold">Requirements</h1>
        </Button>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">
              <div className="flex items-center gap-2">
                Latest
                <ChevronDown className="h-4 w-4" />
              </div>
            </SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="regular">Regular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] pl-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="text-[#E84C3D] text-sm mb-2">
                      {product.category}
                    </div>
                    <h3 className="font-semibold text-lg mb-4 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600"
                        style={{
                          width: `${
                            (product.totalRaised / product.quantityRequired) *
                            100
                          }%`,
                        }}
                      />
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-between">
                        <span>Quantity required:</span>
                        <span>{product.quantityRequired.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Total Raised:</span>
                        <span>{product.totalRaised.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className="w-12 text-center">
                        {quantities[product.id]}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button>Request a pick up</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white"
          onClick={scrollPrev}
        >
          <ChevronDown className="h-4 w-4 -rotate-90" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white"
          onClick={scrollNext}
        >
          <ChevronDown className="h-4 w-4 rotate-90" />
        </Button>
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-[#E84C3D]">
          See More
        </Button>
      </div>
    </section>
  );
}
