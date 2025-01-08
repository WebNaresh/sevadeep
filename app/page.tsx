"use client";

import { Button } from "@/components/ui/button";
import CampaignSection from "./_components/campaign-section";
import Categories from "./_components/categories";
import DonationSection from "./_components/donation-section";
import DonationForm from "./_components/donation_form";
import HeroSearch from "./_components/hero-search";
import HowItWorks from "./_components/HowItWorks";
import ProductListing from "./_components/product-listing";
import StatsSection from "./_components/stats-section";
import TestimonialsSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSearch />
      <Categories />
      <ProductListing />
      <CampaignSection />
      <DonationSection />
      <HowItWorks />
      <TestimonialsSection />
      <StatsSection />
      <DonationForm
        initialAmount={0}
        buttonComp={
          <div className="fixed bottom-4 right-4 z-50">
            <Button className="bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white font-bold py-2 px-4 rounded-full shadow-lg">
              Donate Now
            </Button>
          </div>
        }
      />
    </main>
  );
}
