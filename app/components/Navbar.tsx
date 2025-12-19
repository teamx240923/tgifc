"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { assetPath } from "../utils/assetPath";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);   // NEW
  const ticketRef = useRef<HTMLDivElement | null>(null); // NEW

  const TICKET_LINKS = {
    delhi: "https://www.taabur.com/in/the-great-indian-fitness-carnival-delhi",
    gurgaon: "https://www.taabur.com/in/the-great-indian-fitness-carnival-gurugram",
  };

  // Close ticket dropdown on click outside or Esc
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ticketRef.current && !ticketRef.current.contains(e.target as Node)) {
        setTicketOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTicketOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 px-6 md:px-16">
      <div className="flex items-center justify-between">
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

        {/* Center: Menu (desktop) */}
        <div className="hidden md:flex gap-8 items-center text-base font-medium text-[#1C1C1C] absolute left-1/2 -translate-x-1/2">
          <a href="/#about" className="hover:text-[#81B622] transition-colors">About</a>
          <a href="/#zones" className="hover:text-[#81B622] transition-colors">Event Zones</a>
          <a href="/schedule" className="hover:text-[#81B622] transition-colors">Schedule</a>
          <a href="/#sponsors" className="hover:text-[#81B622] transition-colors">Sponsors</a>
        </div>

        {/* Right: Buttons (desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Book Tickets dropdown (CLICK TO OPEN) */}
          <div className="relative" ref={ticketRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={ticketOpen}
              onClick={() => setTicketOpen((v) => !v)}
              className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Tickets
            </button>

            {ticketOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              >
                <a
                  href={TICKET_LINKS.delhi}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-gray-50 text-[#1C1C1C]"
                  onClick={() => setTicketOpen(false)}
                >
                  Delhi
                </a>
                <a
                  href={TICKET_LINKS.gurgaon}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-gray-50 text-[#1C1C1C]"
                  onClick={() => setTicketOpen(false)}
                >
                  Gurgaon
                </a>
              </div>
            )}
          </div>

          <a
            href="https://forms.gle/VQoaNzFa6vn26Mt87"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#81B622] font-medium transition-colors"
          >
            Volunteer
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-[#1C1C1C] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <MenuClose /> : <MenuOpen />}
        </button>
      </div>

      {/* Mobile dropdown (unchanged from your latest) */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-6 py-6 text-lg font-medium text-[#1C1C1C]">
          <a href="/#about" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#zones" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Event Zones</a>
          <a href="/schedule" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="/#sponsors" className="hover:text-[#81B622]" onClick={() => setMenuOpen(false)}>Sponsors</a>

          <a
            href={TICKET_LINKS.delhi}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 text-center bg-[#81B622] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6AA312]"
            onClick={() => setMenuOpen(false)}
          >
            Book Tickets — Delhi
          </a>
          <a
            href={TICKET_LINKS.gurgaon}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 text-center bg-[#81B622] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6AA312]"
            onClick={() => setMenuOpen(false)}
          >
            Book Tickets — Gurgaon
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

/* tiny wrappers so the icon import line stays simple; optional */
function MenuOpen() { return <Menu size={28} />; }
function MenuClose() { return <X size={28} />; }
