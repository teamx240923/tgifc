"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  contain?: boolean; // logos etc.
};

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

export default function HeroCarousel({ slides, intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  // autoplay
  useEffect(() => {
    timerRef.current = window.setInterval(() => go(1), intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, slides.length]);

  // pause/resume on hover
  const pause = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const resume = () => {
    if (!timerRef.current) {
      timerRef.current = window.setInterval(() => go(1), intervalMs);
    }
  };

  // swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-[600px] mx-auto rounded-2xl shadow-2xl"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="relative isolate rounded-2xl overflow-hidden bg-black">
        <div
          className="relative w-full aspect-[4/3] md:aspect-[3/2]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 600px"
                className={s.contain ? "object-contain p-6" : "object-cover"}
              />
            </div>
          ))}
        </div>

        {/* Dots only */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-[#81B622]" : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
