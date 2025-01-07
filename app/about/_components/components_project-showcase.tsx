'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectShowcaseProps {
  title: string
  description: string
  images: Array<{
    src: string
    alt: string
  }>
}

export function ProjectShowcase({ title, description, images }: ProjectShowcaseProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="w-full">
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative h-[400px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

