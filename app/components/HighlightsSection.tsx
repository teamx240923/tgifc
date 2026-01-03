"use client";
import Image from "next/image";
import { assetPath } from "../utils/assetPath";

const highlights = [
  {
    id: 1,
    // icon: (
    //   <svg className="w-16 h-16 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
    //     <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    //   </svg>
    // ),
    image: assetPath("/Highlights-Visitors.png"),
    stat: "8,000+",
    label: "Visitors"
  },
  {
    id: 2,
    // icon: (
    //   <svg className="w-16 h-16 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
    //     <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    //   </svg>
    // ),
    image: assetPath("/Highlights-Stalls.png"),
    stat: "100+",
    label: "Stalls"
  },
  {
    id: 3,
    // icon: (
    //   <svg className="w-16 h-16 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
    //     <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    //   </svg>
    // ),
    image: assetPath("/Highlights-FunZone.png"),
    stat: "20+",
    label: "Fun Zones"
  },
  {
    id: 4,
    // icon: (
    //   <svg className="w-16 h-16 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
    //     <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/>
    //   </svg>
    // ),
    image: assetPath("/Highlights-Race.png"),
    stat: "India's Biggest",
    label: "Kids Obstacle Race",
    small: true
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1C1C1C]">
        Event Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 max-w-7xl mx-auto">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="bg-white border-4 border-[#81B622] rounded-2xl p-8 flex flex-col items-center justify-center space-y-4 hover:shadow-lg transition-shadow"
          >
            {/* <div className="flex items-center justify-center">
              {item.icon}
            </div> */}
            <div className="w-24 h-24 relative">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-contain hover:scale-125 transition-transform duration-300"
              />
            </div>
            <h3 className={`font-extrabold text-[#1C1C1C] ${item.small ? 'text-xl' : 'text-3xl'}`}>
              {item.stat}
            </h3>
            <p className="text-lg font-semibold text-[#1C1C1C]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
