import "./globals.css";
import type { Metadata, Viewport } from "next";
import WhatsAppFloating from "./components/WhatsAppFloating";

export const metadata: Metadata = {
  title: "The Great Indian Fitness Carnival 2026",
  description:
    "India's biggest fitness carnival for kids — fun races, games, food, and family entertainment celebrating fitness, togetherness, and joy.",
  icons: {
    icon: "/favicon.ico", // ✅ This line ensures favicon updates across all pages
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark font-sans antialiased overflow-x-hidden">
        {children}
        {/* Floating WhatsApp Help (visible across the site) */}
        <WhatsAppFloating
          phone="919773700541" 
          message="Hi! Can I get more info on this."
        />
      </body>
    </html>
  );
}
