"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const narayansevaImages = [
  {
    src: "/images/donation1.jpg",
    caption:
      "Thank you Harnidi Smith. We appreciate your contribution for needy once.",
  },
  {
    src: "/images/donation2.jpg",
    caption:
      "Thank you Anil Chachar. We appreciate your contribution for needy once.",
  },
  {
    src: "/images/donation3.jpg",
    caption:
      "Thank you Sneha Choudhani. We appreciate your contribution for needy once.",
  },
];

const inkindImages = [
  {
    src: "/images/donation3.jpg",
    caption:
      "Thank you Sneha Kararam for your great generosity! We, at Sevadeep, greatly appreciate your donation.",
  },
  {
    src: "/images/donation2.jpg",
    caption:
      "Thank you Rukhsheen Vajifdar for your great generosity! We, at Sevadeep, greatly appreciate your donation.",
  },
  {
    src: "/images/donation1.jpg",
    caption:
      "Thank you Projekta Amberkar for your great generosity! We, at Sevadeep, greatly appreciate your donation.",
  },
];

export default function HelpTogetherSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">LET&apos;S HELP TOGETHER</h2>
        <p className="text-xl text-gray-600">Sevadeep In Action</p>
      </div>

      <div className="space-y-16">
        {/* Narayanaseva Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            <span className="text-[#E84C3D]">Narayanseva</span>{" "}
            <span className="text-gray-500">(Food Distribution)</span> :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {narayansevaImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="link" className="text-[#E84C3D]">
              Read More
            </Button>
          </div>
        </div>

        {/* Inkind Donations Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            <span className="text-[#E84C3D]">Inkind Donations</span> :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inkindImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="link" className="text-[#E84C3D]">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
