import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
  ];

  return (
    <main className="flex flex-col items-center justify-center p-8 md:p-12 gap-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Help patients in need pay their hospital bills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64">
            <Image
              src={donations[0].image}
              alt={donations[0].title}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
              {donations[0].category}
            </span>
          </div>

          <div className="p-4 md:p-6">
            <h3 className="font-medium text-lg mb-4 flex justify-between items-start">
              {donations[0].title}
              <button className="text-sm text-[#E84C3D] hover:underline">
                Read more
              </button>
            </h3>

            <Progress value={donations[0].progress} className="h-2 mb-6" />

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Fund required :</span>
                <span>₹{donations[0].fundRequired.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Total Raised :</span>
                <span>₹{donations[0].totalRaised.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              Donate Now
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-medium text-lg pr-8">
              Your donation can make a significant difference in a
              patient&apos;s life. By contributing, you&apos;re helping to
              alleviate the financial burden of medical expenses and giving hope
              to those in need of critical care.
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>

          <Progress value={40} className="h-2 mb-6" />

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Average hospital bill :</span>
              <span>₹50,000</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">
                Patients helped this month :
              </span>
              <span>27</span>
            </div>
          </div>

          {/* Rest of the middle card content remains unchanged */}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 md:h-64">
            <Image
              src={donations[1].image}
              alt={donations[1].title}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
              {donations[1].category}
            </span>
          </div>

          <div className="p-4 md:p-6">
            <h3 className="font-medium text-lg mb-4 flex justify-between items-start">
              {donations[1].title}
              <button className="text-sm text-[#E84C3D] hover:underline">
                Read more
              </button>
            </h3>

            <Progress value={donations[1].progress} className="h-2 mb-6" />

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Fund required :</span>
                <span>₹{donations[1].fundRequired.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Total Raised :</span>
                <span>₹{donations[1].totalRaised.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full bg-[#E84C3D] hover:bg-[#E84C3D]/90">
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      <Button variant="link" className="text-[#E84C3D]">
        See More Patients
      </Button>
    </main>
  );
}
