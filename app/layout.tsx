import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Soy Pluripasional™ — Carid Báez",
    template: "%s | Soy Pluripasional™",
  },
  description:
    "Nunca fuiste dispersa. Simplemente, aún no tenías tu mapa. El Mapa Pluripasional™ es la metodología de Carid Báez para mujeres con múltiples pasiones, talentos y trayectorias que quieren claridad, dirección y una marca que las represente completas.",
  keywords: [
    "pluripasional",
    "mapa pluripasional",
    "metodología pluripasional",
    "mujeres multipasionales",
    "identidad pluripasional",
    "multipasional",
    "talentos múltiples",
    "claridad de propósito",
    "Carid Báez",
    "arquetipo pluripasional",
  ],
  authors: [{ name: "Carid Báez" }],
  creator: "Carid Báez",
  metadataBase: new URL("https://soypluripasional.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Soy Pluripasional™",
    url: "https://soypluripasional.com",
    title: "Soy Pluripasional™ — Carid Báez",
    description:
      "La metodología para mujeres con múltiples pasiones que quieren claridad, dirección e identidad integrada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soy Pluripasional™ — Carid Báez",
    description:
      "La metodología para mujeres con múltiples pasiones que quieren claridad, dirección e identidad integrada.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-crema text-verde-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
