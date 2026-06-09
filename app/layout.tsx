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
    "Nunca fuiste dispersa. Simplemente, aún no tenías tu mapa. El Mapa Pluripasional™ es una metodología estratégica para personas con múltiples pasiones, habilidades y trayectorias.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Soy Pluripasional™",
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
