"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { assetPath } from "../utils/assetPath";

const events = [
  {
    id: 1,
    title: "TSE–Tata Primanti",
    date: "23.03.2025",
    color: "bg-[#81B622]",
    images: [assetPath("/tse-1.png"), assetPath("/tse-2.png"), assetPath("/tse-3.png"), assetPath("/tse-4.png")],
  },
  {
    id: 2,
    title: "M3M Golf Estate",
    date: "13.04.2025",
    color: "bg-[#FFD23F]",
    images: [assetPath("/golfestate-1.png"), assetPath("/golfestate-2.png"), assetPath("/golfestate-3.png"), assetPath("/golfestate-4.png")],
  },
  {
    id: 3,
    title: "The Grand Arch",
    date: "30.04.2025",
    color: "bg-[#81B622]",
    images: [assetPath("/grandarch-1.png"), assetPath("/grandarch-2.png"), assetPath("/grandarch-3.png")],
  },
];

export default function GlimpseSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images.map((src) => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="glimpses" className="py-20 bg-white text-center px-6 md:px-16 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
        Highlights from the Road to TGIFC 2026
      </h2>

      {/* ✅ Carousel Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-[#1C1C1C]/70 hover:bg-[#1C1C1C] text-white p-3 rounded-full z-10 shadow-lg transition"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className={`min-w-[300px] sm:min-w-[400px] lg:min-w-[450px] ${event.color} text-white rounded-2xl shadow-lg flex-shrink-0 snap-start transition-transform hover:scale-105`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold uppercase">{event.title}</h3>
                <p className="text-lg font-semibold mb-4">{event.date}</p>

                <div className="grid grid-cols-2 gap-2">
                  {event.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(event.images, index)}
                    >
                      <Image
                        src={img}
                        alt={`${event.title} image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-[#1C1C1C]/70 hover:bg-[#1C1C1C] text-white p-3 rounded-full z-10 shadow-lg transition"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* ✅ Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxImages}
          plugins={[Thumbnails]}
        />
      )}
    </section>
  );
}
