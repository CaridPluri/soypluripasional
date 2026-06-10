import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El Examen Pluripasional™ — Descubre tu Arquetipo",
  description:
    "Toma el Mapa Pluripasional™ gratis y descubre tu arquetipo único. Una metodología estratégica que mapea tus talentos, pasiones y dirección de vida. 100% gratis.",
  keywords: ["examen pluripasional", "test pluripasional gratis", "mapa pluripasional", "arquetipo pluripasional", "test talentos múltiples"],
};

export default function ExamenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
