import "./globals.css";
import React from "react";

export const metadata = {
  title: "Janindu Dissanayake - Portfolio",
  description: "Portfolio of Janindu Dissanayake, Software Engineer",
};

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white">
        <Navbar />
        {children}
        <footer className="text-center py-6 text-gray-500 text-sm mt-auto">
          © 2026 Janindu Dissanayake. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
