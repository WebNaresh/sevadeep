"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function DonateButton() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        size="lg"
        className="rounded-full shadow-lg bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-primary-foreground  transition-all duration-300 ease-in-out"
      >
        <Heart className="mr-2 h-4 w-4 font-extrabold" /> Donate Now
      </Button>
    </div>
  );
}
