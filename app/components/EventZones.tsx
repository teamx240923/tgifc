"use client";

import Image from "next/image";

const zones = [
  {
    id: 1,
    iconPath: "/icons/grind-race.svg",
    title: "The Grind Race",
    description: "India's first \"Fitness as sport\" race for kids -- age-based obstacles & sliding challenges"
  },
  {
    id: 2,
    iconPath: "/icons/hungama-zone.svg",
    title: "Hungama Zone",
    description: "Music, mascots, dance-offs, live bands, and surprise acts."
  },
  {
    id: 3,
    iconPath: "/icons/jugmug-mela.svg",
    title: "Jugmug Mela",
    description: "Food, art, games, and shopping stalls -- fun for the whole family"
  },
  {
    id: 4,
    iconPath: "/icons/vichar-manch.svg",
    title: "Vichar Manch",
    description: "Talks & workshops with fitness experts and educators."
  },
];

export default function EventZones() {
  return (
    <section id="zones" className="py-20 bg-[#FFF8E7] text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1C1C1C]">
        Event Zones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 max-w-7xl mx-auto">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="bg-[#FFD23F] rounded-2xl p-8 flex flex-col items-center space-y-6 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <Image
                src={zone.iconPath}
                alt={`${zone.title} icon`}
                width={128}
                height={128}
                className="w-32 h-32"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#1C1C1C]">
              {zone.title}
            </h3>
            <p className="text-base text-[#1C1C1C] leading-relaxed">
              {zone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
