import React from "react";
import "./globals.scss";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi Bold
    "700", // Bold
    "800", // Extra Bold
    "900", // Black
  ],
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
