import CampaignSection from "./_components/campaign-section";
import Categories from "./_components/categories";
import DonationSection from "./_components/donation-section";
import Footer from "./_components/Footer";
import HelpTogetherSection from "./_components/help-together-section";
import HeroSearch from "./_components/hero-search";
import Navbar from "./_components/navbar";
import ProductListing from "./_components/product-listing";
import StatsSection from "./_components/stats-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSearch />
      <Categories />
      <ProductListing />
      <CampaignSection />
      <StatsSection />
      <DonationSection />
      <HelpTogetherSection />
      <Footer />
    </main>
  );
}
