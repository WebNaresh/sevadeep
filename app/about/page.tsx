import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CSRPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1920"
            alt="Hands holding soil with growing plant"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Carousel */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <h2 className="text-white text-5xl font-bold text-center">
                  About us
                </h2>
              </CarouselItem>
              <CarouselItem>
                <h2 className="text-white text-5xl font-bold text-center">
                  Corporate Social Responsibility
                </h2>
              </CarouselItem>
              <CarouselItem>
                <h2 className="text-white text-5xl font-bold text-center">
                  Making a Difference
                </h2>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* About Relfor Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Heart shaped soil with growing plant"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">About Relfor</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                The Relfor Foundation undertakes development in rural areas with
                a special focus on infrastructure enhancement. From rejuvenating
                lakes by desilting them, constructing homes for tribals, and
                enhancing infrastructure of old-age homes and orphanages. The
                cause being very close to Deepak's heart, he manages and
                overlooks the projects undertaken under the Relfor Foundation
                with equal passion and zeal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Government of Maharashtra – Minister of State for Water
                Resources, Water Conservation and Parliamentary Affairs, has
                acknowledged Relfor Foundation for its contribution to the
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hands sharing food"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Finding the right home for your donation.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A website by Relfor foundation. This website connects Donors with
              NGOs. The NGO's are onboarded on the platform after a detailed
              verification process by Sevadeep team.Do you have anything in good
              condition that you would like to donate to Needy recipient?
              SevaDeep identifies the right recipient NGO, and connects you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Donor can communicate withNGOs, complete the donation, share with
              friends and invite them to join this noble cause based platform.
            </p>
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              How can Donors use the website(sevadeep.org) to donate things?
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                There are two simple options for donation
              </p>

              <div className="space-y-4">
                <p className="text-gray-800">
                  1. Browse list of registered NGOs and their current needs.
                </p>
                <p className="text-gray-800">
                  2. Donate against a specific need of an NGO.
                </p>
              </div>

              <p className="text-center font-medium">or</p>

              <div className="space-y-4">
                <p className="text-gray-800">
                  1. Donate without choosing the NGO need.
                </p>
                <p className="text-gray-800">
                  2. The Sevadeep team will identify the most deserving NGO for
                  your donation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Donation distribution scene"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* NGO Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              How can NGOs use the website to receive donations?
            </h2>
            <div className="space-y-6">
              <ol className="list-decimal list-inside space-y-4 text-gray-800">
                <li>
                  On the NGO Tab, apply for registration by providing the NGO
                  details.
                </li>
                <li>Create and update NGO profile.</li>
                <li>Create and update current needs.</li>
              </ol>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Donation process diagram"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Kavathe Yamai Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kavathe Yamai
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kavathe Yamai, is a drought-prone village. The process of
              desilting was completed with the help of 4 poclains and around 250
              tractors and truckloads every day, for a span of 1 month. In total
              5 thousand tractors and 2000 cu.mtr of silt got removed resulting
              in the enhancement of the water capacity to 20 lakh liters.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[1, 2, 3].map((index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative h-[400px]">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Image ${index}`}
                        alt={`Kavathe Yamai image ${index}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Someshwar Lake
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Someshwar Lake, Baramati, Soil extraction from a lake near the
              renowned temple of Someshwar, Karanje, located in Baramati. The
              project result was the removal of around 15 thousand Brass soil.
              This extracted brass soil was deposited on the farmlands in an
              area of around 90 acres for turning to into a fertile land. The
              fertility of the land benefited around 53 farmers.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[1, 2, 3].map((index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative h-[400px]">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Someshwar Lake ${index}`}
                        alt={`Someshwar Lake project image ${index}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Deep Talav
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Deep Talav, Amdabad In 2016, Started with a desilting the water
              bodies in this area, and 10 thousand tractors silt got removed.
              The silt from the water bodies was carried away by the people of
              this village and was deposited and spread over the agricultural
              lands in this area.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Deep Talav"
                      alt="Deep Talav water body with commemorative plaque"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tribal Homes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Thatched grass huts of these tribal people were transformed into a
              brick and mortar house, providing them a space to live with
              dignity. The first phase of the plan includes constructing 66
              housing units, consisting of Hall, kitchen, bedroom and attached
              washrooms.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { alt: "Group at Tribal Homes project with Relfor plaque" },
                  { alt: "Newly constructed tribal housing units" },
                  { alt: "Community gathering at tribal housing project" },
                ].map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative h-[400px]">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Tribal Homes ${
                          index + 1
                        }`}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
