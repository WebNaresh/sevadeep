"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[400px] lg:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/about/about-hero.png"
          alt="Hands holding soil with growing plant"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <h2 className="text-white text-5xl font-bold text-center">
                About us
              </h2>
            </CarouselItem>
            <CarouselItem>
              <h2 className="text-white text-5xl font-bold text-center">
                Corporate Social Responsibility
              </h2>
            </CarouselItem>
            <CarouselItem>
              <h2 className="text-white text-5xl font-bold text-center">
                Making a Difference
              </h2>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
