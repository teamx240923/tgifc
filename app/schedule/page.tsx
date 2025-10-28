"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlimpseSection from "../components/GlimpseSection";

type Event = {
  date: string;
  title: string;
  location?: string;
  description?: string;
};

export default function SchedulePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setEvents([
      {
        date: "2025-03-23",
        title: "🏃‍♂️ Pre-Launch: TSE – Tata Primanti",
        location: "Gurugram",
        description: "Kids obstacle fun races and family carnival activities.",
      },
      {
        date: "2025-04-13",
        title: "💪 Pre-Launch: M3M Golf Estate",
        location: "Gurugram",
        description: "Fitness workshops and community activities for families.",
      },
      {
        date: "2025-04-30",
        title: "🌳 Pre-Launch: The Grand Arch",
        location: "Gurugram",
        description: "Outdoor kids events, parent-child fitness games, and talks.",
      },
    ]);
  }, []);

  const formatLocalDate = (date: Date) =>
    date.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

  const selectedEvent = events.find(
    (e) => selectedDate && e.date === formatLocalDate(selectedDate)
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="py-36 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
          Road to TGIFC 2026...
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
          {/* Calendar Box */}
          <div className="bg-[#FFD23F] shadow-lg rounded-2xl p-6 transition hover:shadow-xl w-fit mx-auto">
            <div className="text-left mb-3 text-[#1C1C1C] font-semibold text-lg">
              📅 Upcoming Pre-Events
            </div>

            <Calendar
              onChange={(value) => setSelectedDate(value as Date)}
              className="rounded-xl border-0"
              tileClassName={({ date }) => {
                const dateStr = date.toLocaleDateString("en-CA", {
                  timeZone: "Asia/Kolkata",
                });
                if (events.some((e) => e.date === dateStr)) {
                  return "event-day"; // ✅ Custom class name
                }
                return "";
              }}
            />
          </div>

          {/* Event Details */}
          <div className="flex-1 text-left bg-white border-4 border-[#81B622] shadow-lg rounded-2xl p-8 min-h-[360px]">
            {selectedEvent ? (
              <>
                <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="text-[#1C1C1C] mb-2 font-medium">
                  📍 {selectedEvent.location}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-xl mb-2">👋 Hey there!</p>
                <p>Select a highlighted date to explore TGIFC pre-event details.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="-mt-30 md:-mt-34">
        <GlimpseSection />
      </div>
      <Footer />
    </main>
  );
}
