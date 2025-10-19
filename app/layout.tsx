import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "The Great Indian Fitness Carnival 2026",
  description:
    "India's biggest fitness carnival for kids — fun races, games, food, and family entertainment celebrating fitness, togetherness, and joy.",
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
      </body>
    </html>
  );
}
