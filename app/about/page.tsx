import HelpTogetherSection from "../_components/help-together-section";
import { AboutSection } from "./_components/components_about-section";
import { DonationSection } from "./_components/components_donation-section";
import { HeroSection } from "./_components/components_hero-section";
import NewsCarousel from "./_components/NewsCarousel";

// const projects = [
//   {
//     title: "Kavathe Yamai",
//     description:
//       "Kavathe Yamai, is a drought-prone village. The process of desilting was completed with the help of 4 poclains and around 250 tractors and truckloads every day, for a span of 1 month. In total 5 thousand tractors and 2000 cu.mtr of silt got removed resulting in the enhancement of the water capacity to 20 lakh liters.",
//     images: Array(3)
//       .fill(0)
//       .map((_, i) => ({
//         src: `/placeholder.svg?height=400&width=600&text=Image ${i + 1}`,
//         alt: `Kavathe Yamai image ${i + 1}`,
//       })),
//   },
//   {
//     title: "Someshwar Lake",
//     description:
//       "Someshwar Lake, Baramati, Soil extraction from a lake near the renowned temple of Someshwar, Karanje, located in Baramati. The project result was the removal of around 15 thousand Brass soil. This extracted brass soil was deposited on the farmlands in an area of around 90 acres for turning to into a fertile land. The fertility of the land benefited around 53 farmers.",
//     images: Array(3)
//       .fill(0)
//       .map((_, i) => ({
//         src: `/placeholder.svg?height=400&width=600&text=Someshwar Lake ${
//           i + 1
//         }`,
//         alt: `Someshwar Lake project image ${i + 1}`,
//       })),
//   },
//   {
//     title: "Deep Talav",
//     description:
//       "Deep Talav, Amdabad In 2016, Started with a desilting the water bodies in this area, and 10 thousand tractors silt got removed. The silt from the water bodies was carried away by the people of this village and was deposited and spread over the agricultural lands in this area.",
//     images: [
//       {
//         src: "/placeholder.svg?height=400&width=600&text=Deep Talav",
//         alt: "Deep Talav water body with commemorative plaque",
//       },
//     ],
//   },
//   {
//     title: "Tribal Homes",
//     description:
//       "Thatched grass huts of these tribal people were transformed into a brick and mortar house, providing them a space to live with dignity. The first phase of the plan includes constructing 66 housing units, consisting of Hall, kitchen, bedroom and attached washrooms.",
//     images: [
//       {
//         src: "/placeholder.svg?height=400&width=600&text=Tribal Homes 1",
//         alt: "Group at Tribal Homes project with Relfor plaque",
//       },
//       {
//         src: "/placeholder.svg?height=400&width=600&text=Tribal Homes 2",
//         alt: "Newly constructed tribal housing units",
//       },
//       {
//         src: "/placeholder.svg?height=400&width=600&text=Tribal Homes 3",
//         alt: "Community gathering at tribal housing project",
//       },
//     ],
//   },
// ];

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-muted/50">
      <HeroSection />
      <NewsCarousel />
      <HelpTogetherSection />
      <AboutSection />
      <DonationSection />
      {/* {projects.map((project, index) => (
        <ProjectShowcase key={index} {...project} />
      ))} */}
    </main>
  );
}
