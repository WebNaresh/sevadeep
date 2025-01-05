"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 12081, label: "Total Donations" },
  { number: 1824, label: "Current Needs" },
  { number: 1214, label: "Total NGO's" },
  { number: 100, label: "Total Cities" },
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationRef = useRef<NodeJS.Timeout>(null);
  const startTimeRef = useRef<number | undefined>(undefined);
  const duration = 2000; // Animation duration in milliseconds

  useEffect(() => {
    if (inView) {
      startTimeRef.current = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - (startTimeRef.current || 0);
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * value);

        setDisplayValue(currentValue);

        if (progress < 1) {
          animationRef.current = setTimeout(animate, 16);
        } else {
          setDisplayValue(value);
        }
      };

      animate();

      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-[#E84C3D]">
      {displayValue}+
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Numbers Speak !
          </h2>
          <p className="text-xl text-gray-300">
            Some facts about evadeep initiative!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <AnimatedNumber value={stat.number} />
              <div className="mt-2 text-gray-500 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
