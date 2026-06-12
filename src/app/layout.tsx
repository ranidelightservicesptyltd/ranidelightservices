import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import DifyChatbot from "@/components/DifyChatbot";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rani Delight Services | Premium Cleaning in Sydney",
  description:
    "You Relax, We Clean. Rani Delight Services provides premium home, office, and rental cleaning in Parramatta & Greater Sydney. Background-checked professionals, eco-friendly supplies, on-time service.",
  keywords: [
    "cleaning service Sydney",
    "Parramatta cleaning",
    "home cleaning",
    "office cleaning",
    "bond cleaning",
    "eco-friendly cleaning",
    "Rani Delight Services",
  ],
  openGraph: {
    title: "Rani Delight Services | Premium Cleaning",
    description: "You Relax, We Clean — Premium cleaning for homes, offices & rentals in Sydney.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} bg-white text-slate-900 antialiased`}>
        <LenisProvider>
          <Navbar />
          <WhatsAppButton />
          <DifyChatbot />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
