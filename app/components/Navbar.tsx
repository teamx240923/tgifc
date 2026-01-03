"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { assetPath } from "../utils/assetPath";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Works from any route. If we're already on '/', do smooth scroll.
  const handleHashClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      // Navigate to home with the hash; browser will jump to section.
      router.push(`/${hash}`);
    } else {
      // Already on home: smooth scroll
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Also update URL hash without scrolling again
        history.replaceState(null, "", hash);
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 md:px-16 flex items-center justify-between">
      {/* Left: Logo
      <div className="flex-shrink-0">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={assetPath("/tgifc-logo.svg")}
            alt="TGIFC Logo"
            width={70}
            height={70}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div> */}

      {/* Left: Logos */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* New logo (on the left) */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={assetPath("/sponsors/aashiana-logo.jpg")} // <-- update path/filename
            alt="Partner Logo"
            width={90}
            height={90}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* Divider (optional) */}
        {/* <span className="hidden md:block w-px h-6 bg-gray-200" /> */}

        {/* Existing TGIFC logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={assetPath("/tgifc-logo.svg")}
            alt="TGIFC Logo"
            width={70}
            height={70}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu (center) */}
      <div className="hidden md:flex gap-8 items-center text-base font-medium text-[#1C1C1C] absolute left-1/2 -translate-x-1/2">
        <a href="/#about" onClick={handleHashClick("#about")} className="hover:text-[#81B622] transition-colors">About</a>
        <a href="/#zones" onClick={handleHashClick("#zones")} className="hover:text-[#81B622] transition-colors">Event Zones</a>
        <Link href="/schedule" className="hover:text-[#81B622] transition-colors">Schedule</Link>
        <a href="/#sponsors" onClick={handleHashClick("#sponsors")} className="hover:text-[#81B622] transition-colors">Sponsors</a>
      </div>

      {/* Desktop Buttons (right) */}
      <div className="hidden md:flex gap-4 items-center">
        <a
          href="https://www.taabur.com/in/the-great-indian-fitness-carnival-gurugram"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Book Tickets
        </a>
        <a
          href="https://forms.gle/VQoaNzFa6vn26Mt87"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#81B622] font-medium transition-colors"
        >
          Volunteer
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#1C1C1C] focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-6 py-6 text-lg font-medium text-[#1C1C1C] animate-slideDown">
          <a href="/#about" onClick={handleHashClick("#about")} className="hover:text-[#81B622]">About</a>
          <a href="/#zones" onClick={handleHashClick("#zones")} className="hover:text-[#81B622]">Event Zones</a>
          <Link href="/schedule" onClick={() => setMenuOpen(false)} className="hover:text-[#81B622]">Schedule</Link>
          <a href="/#sponsors" onClick={handleHashClick("#sponsors")} className="hover:text-[#81B622]">Sponsors</a>

          <a
            href="https://www.taabur.com/in/the-great-indian-fitness-carnival-gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#81B622] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6AA312]"
            onClick={() => setMenuOpen(false)}
          >
            Book Tickets
          </a>
          <a
            href="https://forms.gle/VQoaNzFa6vn26Mt87"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#81B622]"
            onClick={() => setMenuOpen(false)}
          >
            Volunteer
          </a>
        </div>
      )}
    </nav>
  );
}
