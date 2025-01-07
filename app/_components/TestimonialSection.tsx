"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Donor",
    quote:
      "Sevadeep made it incredibly easy for me to connect with and support local NGOs. The transparency in their process gives me confidence that my donations are making a real difference.",
  },
  {
    id: 2,
    name: "Arun Patel",
    role: "NGO Partner",
    quote:
      "As an NGO focused on providing shelter to the homeless, Sevadeep has been instrumental in connecting us with generous donors. Their platform has helped us expand our reach significantly.",
  },
  {
    id: 3,
    name: "Meera Reddy",
    role: "Monthly Contributor",
    quote:
      "What I love about Sevadeep is how they've simplified the donation process while ensuring it reaches those who need it most. Their regular updates keep me informed about the impact.",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "Shelter Home Director",
    quote:
      "The support we've received through Sevadeep has been transformative. Their platform has helped us connect with committed donors who believe in our cause.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Voices of Change
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our donors and NGO partners about their experience with
            Sevadeep
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white rounded-xl shadow-lg p-8 relative border border-orange-100 min-h-[250px] flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 text-orange-600">
                  <Quote className="w-8 h-8 opacity-20" />
                </div>

                <p className="text-gray-600 italic mb-6 text-lg">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-orange-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-orange-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our community of donors and NGOs making a difference in the
            lives of those in need. Your support can transform lives and create
            lasting change.
          </p>
          <div className="mt-8">
            <Link href="#donate">
              <Button>Start Donating Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
