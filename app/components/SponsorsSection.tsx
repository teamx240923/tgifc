"use client";

import Image from "next/image";
import { assetPath } from "../utils/assetPath";

const sponsors = [
  { name: "Aashiana Housing", logo: assetPath("/sponsors/aashiana-logo.jpg"), url: "https://www.ashianahousing.com/" },
  { name: "Ipsaa", logo: assetPath("/sponsors/ipsaa-logo.png"), url: "https://www.ipsaa.in/" },
  { name: "Anytime Fitness", logo: assetPath("/sponsors/anytime-fitness-logo.png"), url: "https://www.anytimefitness.co.in/" },
  { name: "Sixth Element", logo: assetPath("/sponsors/sixthelement-logo.png"), url: "https://www.sixthelement.edu.in/" },
  { name: "Tru Bike", logo: assetPath("/sponsors/trubike-logo.png"), url: "https://tru.bike/" },
  { name: "Barosi", logo: assetPath("/sponsors/barosi-logo.png"), url: "https://www.barosi.in/" },
  { name: "The Beacon School", logo: assetPath("/sponsors/beacon-logo.png"), url: "https://thebeaconschool.in/" },
  { name: "Boss Ladies", logo: assetPath("/sponsors/bossladies-logo.png"), url: "https://bossladies.in/" },
  { name: "Bring my Flowers", logo: assetPath("/sponsors/bringmyflowers-logo.png"), url: "https://bringmyflowers.com/" },
  { name: "Cyclocraze", logo: assetPath("/sponsors/cyclocraze-logo.png"), url: "https://cyclocraze.com/" },
  { name: "Feed Smart", logo: assetPath("/sponsors/feedsmart-logo.png"), url: "https://www.feedsmart.in/" },
  { name: "HealthKart", logo: assetPath("/sponsors/healthkart-logo.png"), url: "https://www.healthkart.com/" },
  { name: "Hippo Homes", logo: assetPath("/sponsors/hippohomes-logo.png"), url: "https://www.hippohomes.com/" },
  { name: "IJM Toyota", logo: assetPath("/sponsors/ijmtoyota-logo.png"), url: "https://www.ijmtoyota.com/" },
  { name: "Oh Nuts", logo: assetPath("/sponsors/ohnuts-logo.png"), url: "https://ohnuts.com/" },
  { name: "Pronto", logo: assetPath("/sponsors/pronto-logo.png"), url: "https://www.withpronto.com/" },
  { name: "Sanfort Global Preschool", logo: assetPath("/sponsors/sanfort-logo.png"), url: "https://sanfortglobalpreschool.com/" },
  { name: "StepWhere", logo: assetPath("/sponsors/stepwhere-logo.png"), url: "https://www.stepwhere.in/" },
  { name: "Twiddles", logo: assetPath("/sponsors/twiddles-logo.png"), url: "https://twiddles.in/" },
  { name: "Xrai Digital", logo: assetPath("/sponsors/xrai-logo.png"), url: "https://xraidigital.com/" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-white text-center px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
        Brand Partnerships
      </h2>

      {/* ✅ Mobile Carousel */}
      <div className="flex md:hidden overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-hide">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-36 bg-white rounded-lg p-3 shadow-sm hover:shadow-md hover:bg-[#F7FDF5] hover:scale-105 transition-all duration-300 snap-start"
          >
            <div className="relative w-20 h-16 mx-auto mb-2">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs font-medium text-[#1C1C1C]">{sponsor.name}</p>
          </a>
        ))}
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-[#F7FDF5] hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-20 h-16 mb-3">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-[#1C1C1C]">{sponsor.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}