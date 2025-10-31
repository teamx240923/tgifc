"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // lightweight icon set
import { assetPath } from "../utils/assetPath";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 md:px-16 flex items-center justify-between">
      {/* Left: Logo */}
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
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center text-base font-medium text-[#1C1C1C] absolute left-1/2 transform -translate-x-1/2">
        <a href="/#about" className="hover:text-[#81B622] transition-colors">About</a>
        <a href="/#zones" className="hover:text-[#81B622] transition-colors">Event Zones</a>
        <a href="/schedule" className="hover:text-[#81B622] transition-colors">Schedule</a>
        <a href="/#sponsors" className="hover:text-[#81B622] transition-colors">Sponsors</a>
      </div>


      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 items-center">
        <a
          href="https://forms.gle/7hsjxp4wu1uKz3Ch9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Register Now
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
          <a href="/#about" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#zones" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Event Zones</a>
          <a href="/schedule" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="/#sponsors" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Sponsors</a>
          <a
            href="https://forms.gle/7hsjxp4wu1uKz3Ch9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#81B622] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6AA312]"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
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
