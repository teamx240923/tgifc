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
    iconPath: "/Join the Movement Parents.png",
    title: "PARENTS",
    subtitle: "Register Your Child",
    alt: "Parents"
  },
  {
    id: 3,
    iconPath: "/Join the Movement Schools.png",
    title: "SCHOOLS",
    subtitle: "Partner with TGIFC",
    alt: "Schools"
  },
  {
    id: 4,
    iconPath: "/Join the Movement Brands.png",
    title: "BRANDS",
    subtitle: "Sponsor a Zone",
    alt: "Brands"
  },
  {
    id: 5,
    iconPath: "/Join the Movement Volunteers.png",
    title: "VOLUNTEERS",
    subtitle: "Join the Crew",
    alt: "Volunteers"
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
            className={`rounded-2xl overflow-hidden shadow-lg ${
              card.type === "image" ? "row-span-2" : "bg-[#FFE082]"
            } hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
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
              <div className="relative flex flex-col items-center justify-center p-8 space-y-4">
                <div className="relative w-32 h-32">
                  <Image
                    src={card.iconPath}
                    alt={card.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-[#1C1C1C] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base font-semibold text-[#1C1C1C]">
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
