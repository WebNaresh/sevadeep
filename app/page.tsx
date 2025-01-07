import CampaignSection from "./_components/campaign-section";
import Categories from "./_components/categories";
import { DonateButton } from "./_components/DonateButton";
import DonationSection from "./_components/donation-section";
import Footer from "./_components/Footer";
// import HelpTogetherSection from "./_components/help-together-section";
import HeroSearch from "./_components/hero-search";
import HowItWorks from "./_components/HowItWorks";
// import Navbar from "./_components/navbar";
import ProductListing from "./_components/product-listing";
import TestimonialsSection from "./_components/TestimonialSection";
// import StatsSection from "./_components/stats-section";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <DonateButton />
      <HeroSearch />
      <Categories />
      <ProductListing />
      <CampaignSection />
      <DonationSection />
      <HowItWorks />
      <TestimonialsSection />
      {/* <StatsSection />
      <HelpTogetherSection /> */}
      <Footer />
    </main>
  );
}
