import { Fingerprint, Heart, MapPin, Users } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-12 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium mb-4">EASY 4 STEPS TO DONATE</p>
          <h2 className="text-3xl md:text-4xl font-bold">How Sevadeep Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Fingerprint className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Authenticate</h3>
            <p className="text-gray-600">
              Every member NGO of SevaDeep is duly verified before it is on-boarded. These NGOs now list their needs. Donor can search the NGOs as per the category and need.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Donate</h3>
            <p className="text-gray-600">
              You can either choose to donate as per the NGO needs, or simply make a general donation. In case you have no preference of NGO, the system will match-make for you.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Co-ordinate</h3>
            <p className="text-gray-600">
              Donor can arrange to either deliver the selected items to the NGO's address or have them collected by the NGO. Decide as per your mutual convenience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Acknowledge, Spread Smiles</h3>
            <p className="text-gray-600">
              Donors are kept informed of the difference made by the donations. Now you may spread the good word on social media and invite friends to join the movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

