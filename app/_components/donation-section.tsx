"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { PhoneIcon as WhatsappIcon } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const donations = [
  {
    id: 1,
    image: "/images/patient1.jpg",
    category: "Critical Care",
    title: "Help Nirmala recover from a severe accident",
    fundRequired: 50000,
    totalRaised: 15000,
    progress: 30,
  },
  {
    id: 2,
    image: "/images/patient2.jpg",
    category: "Cancer Treatment",
    title: "Support Savita fight against breast cancer",
    fundRequired: 100000,
    totalRaised: 40000,
    progress: 40,
  },
  {
    id: 3,
    image: "/images/patient3.webp",
    category: "Pediatric Surgery",
    title: "Give little Rahul a chance at a normal life",
    fundRequired: 75000,
    totalRaised: 25000,
    progress: 33,
  },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay(),
  ]);
  const [selectedDonation, setSelectedDonation] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-8 gap-8 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center">
        Medical Emergencies
      </h2>

      <div className="w-full max-w-6xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2"
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <Image
                      src={donation.image}
                      alt={donation.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-emerald-500">
                      {donation.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="font-medium text-base lg:text-lg mb-2 flex justify-between items-start">
                    <span className="line-clamp-2">{donation.title}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#E84C3D] hover:text-[#E84C3D]/90 p-0 ml-2"
                    >
                      Read more
                    </Button>
                  </CardTitle>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600"
                      style={{
                        width: `${
                          (donation.totalRaised / donation.fundRequired) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Fund required:</span>
                      <span>₹{donation.fundRequired.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Raised:</span>
                      <span>₹{donation.totalRaised.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2 justify-between items-center">
                  <Button>Donate Now</Button>
                  <Button className=" bg-green-500 text-white">
                    <FaWhatsapp size={24} />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button variant="link" className="text-[#E84C3D]">
        See More Patients
      </Button>

      <Dialog
        open={!!selectedDonation}
        onOpenChange={() => setSelectedDonation(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              Help support this patient by making a donation.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter donation amount"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#E84C3D] hover:bg-[#E84C3D]/90"
            >
              Donate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
