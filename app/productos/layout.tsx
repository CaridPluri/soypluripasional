import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos Digitales — Recursos Pluripasionales",
  description:
    "Guías, plantillas y recursos digitales diseñados desde la Metodología Pluripasional™. Herramientas para mujeres con múltiples talentos que quieren claridad y dirección.",
  keywords: ["productos pluripasional", "guía pluripasional PDF", "recursos mujeres multipasionales", "plantillas pluripasional"],
};

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
