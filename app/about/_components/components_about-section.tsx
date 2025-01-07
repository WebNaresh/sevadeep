import Image from "next/image";

export function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px]">
          <Image
            src="/about/about-relfor.png"
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
              The Relfor Foundation undertakes development in rural areas with a
              special focus on infrastructure enhancement. From rejuvenating
              lakes by desilting them, constructing homes for tribals, and
              enhancing infrastructure of old-age homes and orphanages. The
              cause being very close to Deepak's heart, he manages and overlooks
              the projects undertaken under the Relfor Foundation with equal
              passion and zeal.
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
  );
}
