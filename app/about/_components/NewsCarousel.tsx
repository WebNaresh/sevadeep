"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Heartwarming moments with Shri Anna Hajare",
    description:
      "Deepak Nathani visited Padma Bhushan, a social activist and anti-corruption movement founder, Shri Anna Hajare, in Ralegan Siddhi. The discussion focused on water conservation and environmental sustainability. Deepak highlighted the Relfor Foundation's efforts in these areas, which have improved livelihoods for thousands of village people and farmers. Shri Anna Hajare appreciated Deepak's efforts and wished him well. He also emphasized the importance of community involvement and spreading awareness for long-term success in these areas. He encouraged others to follow in Deepak's footsteps and contribute to a sustainable future.",
    imageUrl: "/about/News2.webp",
  },
  {
    id: 2,
    title: "Act of Compassion award 2024",
    description:
      "Relfor Foundation Director Sheena Nathani and Raj Nathani received the award from Chief Guest Shri Nitin Gadkari - Cabinet Minister for Road, Highways and Transport of India at a grand function. There were 120 corporations nominated with 9 different categories like Women Empowerment, Watershed Management and Water Conservation, Skill Development and Entrepreneurship, Environment Protection, Disaster Management / Response etc. The event was organized by Times of India, partnered with Ruby Hall Clinic and program processed by EY (Earnest Young - An International Organisation)",
    imageUrl: "/about/News3.jpeg",
  },
  {
    id: 3,
    title: "Sevasadan NGO Visit",
    description:
      "Relfor CSR team met with Rajya Sabha MP Medhatai Kulkarni, briefed her about the social initiatives carried out by the Relfor Foundation. This time, Medhatai introduced the Sevasadan Society, where she has served as principal for the last twenty five years. The team spent some time with schoolchildren, and then Raj Nathani handed over an educational assistance fund to the Sevasadan Society, with a promise to continue supporting their efforts in the future. The Sevasadan Society expressed gratitude for the support and discussed potential collaboration opportunities with the Relfor Foundation.",
    imageUrl: "/about/News1.jpeg",
  },
];

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-xl bg-background">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {newsItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 p-4">
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative aspect-video sm:aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-6 sm:line-clamp-none">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-75 hover:opacity-100"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-75 hover:opacity-100"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-4 bg-primary" : "w-2 bg-muted"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
