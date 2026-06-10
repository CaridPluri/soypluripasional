import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Mapa Pluripasional™",
  description:
    "Resolvemos tus dudas sobre el Mapa Pluripasional™, los arquetipos, la metodología y cómo trabajar con Carid Báez. Todo lo que necesitas saber para empezar.",
  keywords: ["preguntas pluripasional", "FAQ mapa pluripasional", "dudas metodología pluripasional"],
};

export default function PreguntasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
