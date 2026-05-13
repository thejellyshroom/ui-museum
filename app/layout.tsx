import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { MuseumShell } from "@/components/museum-shell";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "UI Museum",
  description:
    "A virtual museum for the preservation and study of emergent interface behaviors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable}`}>
        <MuseumShell>{children}</MuseumShell>
      </body>
    </html>
  );
}
