"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Product", active: true },
  { id: "technology", name: "Technology" },
  { id: "medical", name: "Medical" },
  { id: "clothes", name: "Clothes" },
  { id: "food", name: "Food" },
];

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

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.active ? "default" : "outline"}
              className={`${
                category.active ? "bg-[#E84C3D] hover:bg-[#E84C3D]/90" : ""
              } text-sm`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <Select defaultValue="newest">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">
              <div className="flex items-center gap-2">
                Newest
                <ChevronDown className="h-4 w-4" />
              </div>
            </SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
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

              <Progress
                value={(product.totalRaised / product.quantityRequired) * 100}
                className="h-2 mb-4"
              />

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
                <div className="w-12 text-center">{quantities[product.id]}</div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white">
                Request a pick up
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-[#E84C3D]">
          See More
        </Button>
      </div>
    </section>
  );
}
