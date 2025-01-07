import Image from "next/image";

export function DonationSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/about/home.png"
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
              NGOs. The NGO&apos;s are onboarded on the platform after a
              detailed verification process by Sevadeep team. Do you have
              anything in good condition that you would like to donate to Needy
              recipient? SevaDeep identifies the right recipient NGO, and
              connects you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Donor can communicate with NGOs, complete the donation, share with
              friends and invite them to join this noble cause based platform.
            </p>
          </div>
        </div>
      </section>

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
              src="/about/donation-distribution.png"
              alt="Donation distribution scene"
              fill
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
