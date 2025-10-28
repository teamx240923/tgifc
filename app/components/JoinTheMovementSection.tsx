"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    iconPath: "/Join the Movement Parents.png",
    title: "PARENTS",
    subtitle: "Register Your Child",
    alt: "Parents",
    link: "https://forms.gle/PARENTS_FORM_LINK", // Replace with actual form link
  },
  {
    id: 2,
    iconPath: "/Join the Movement Schools.png",
    title: "SCHOOLS",
    subtitle: "Partner with TGIFC",
    alt: "Schools",
    link: "https://forms.gle/SCHOOLS_FORM_LINK", // Replace with actual form link
  },
  {
    id: 3,
    iconPath: "/Join the Movement Brands.png",
    title: "BRANDS",
    subtitle: "Sponsor a Zone",
    alt: "Brands",
    link: "https://forms.gle/BRANDS_FORM_LINK", // Replace with actual form link
  },
  {
    id: 4,
    iconPath: "/Join the Movement Volunteers.png",
    title: "VOLUNTEERS",
    subtitle: "Join the Crew",
    alt: "Volunteers",
    link: "https://forms.gle/VOLUNTEERS_FORM_LINK", // Replace with actual form link
  },
];

export default function JoinTheMovementSection() {
  return (
    <section id="join" className="py-20 bg-white text-center px-6 md:px-16">
      {/* ✅ Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1C1C1C]">
        Join the Movement
      </h2>

      {/* ✅ Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#FFD23F] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
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
          </Link>
        ))}
      </div>
    </section>
  );
}
