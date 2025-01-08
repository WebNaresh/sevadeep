"use client";

import { BadgeIndianRupee, Home, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 300,
    label: "Worth Donations",
    prefix: "₹",
    suffix: "+ Cr",
    icon: BadgeIndianRupee,
  },
  {
    number: 15,
    label: "Donor Transactions",
    suffix: " Lakhs",
    icon: Users,
  },
  {
    number: 1400,
    label: "NGOs Impacted",
    suffix: "+",
    icon: Home,
  },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | undefined>(undefined);
  const duration = 2000;

  useEffect(() => {
    if (inView) {
      startTimeRef.current = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - (startTimeRef.current || 0);
        const progress = Math.min(elapsed / duration, 1);

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
    <div ref={ref} className="text-3xl font-bold text-[#E84C3D]">
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-red-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-50 rounded-full">
                    <Icon className="w-6 h-6 text-[#E84C3D]" />
                  </div>
                </div>
                <AnimatedNumber
                  value={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <div className="mt-2 text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
