import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Healora — Spark • Shine • Sustain |Sharmila G A",
  description: "Certified Emotional Resilience Life Coach on a mission to help you break free from overthinking, self-doubt, and emotional exhaustion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
          {children}
      </body>
    </html>
  );
}
