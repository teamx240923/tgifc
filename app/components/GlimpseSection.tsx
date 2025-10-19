"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    type: "image",
    image: "/kids_running_field.png",
    alt: "Kids enjoying TGIFC"
  },
  {
    id: 2,
    iconPath: "/icons/parents.svg",
    title: "PARENTS",
    subtitle: "Register Your Child",
    bgColor: "bg-[#FFE082]"
  },
  {
    id: 3,
    iconPath: "/icons/schools.svg",
    title: "SCHOOLS",
    subtitle: "Partner with TGIFC",
    bgColor: "bg-[#FFE082]"
  },
  {
    id: 4,
    iconPath: "/icons/brands.svg",
    title: "BRANDS",
    subtitle: "Sponsor a Zone",
    bgColor: "bg-[#FFE082]",
    titleColor: "text-[#D32F2F]"
  },
  {
    id: 5,
    iconPath: "/icons/volunteers.svg",
    title: "VOLUNTEERS",
    subtitle: "Join the Crew",
    bgColor: "bg-[#FFE082]",
    titleColor: "text-[#D32F2F]"
  }
];

export default function GlimpseSection() {
  return (
    <section className="py-20 bg-[#FFF8E7] text-center px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1C1C1C]">
        A Glimpse of the Fun That Awaits You!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-2xl overflow-hidden ${
              card.type === "image" ? "row-span-2" : card.bgColor || "bg-[#FFD23F]"
            } hover:shadow-xl transition-all hover:scale-105`}
          >
            {card.type === "image" ? (
              <div className="relative h-full min-h-[400px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="p-6 flex flex-col items-center justify-center space-y-4 h-full">
                <div className="flex items-center justify-center">
                  <Image
                    src={card.iconPath}
                    alt={`${card.title} icon`}
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-extrabold ${card.titleColor || "text-[#1C1C1C]"}`}>
                    {card.title}
                  </h3>
                  <p className="text-base font-semibold text-[#1C1C1C] mt-2">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
