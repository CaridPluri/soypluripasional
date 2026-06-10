import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Carid Báez — Arquitecta de Identidad Pluripasional",
  description:
    "Conoce a Carid Báez, creadora de la Metodología Pluripasional. Una arquitecta de identidad que diseñó el sistema para mujeres con múltiples pasiones y talentos.",
  keywords: ["Carid Báez", "arquitecta de identidad pluripasional", "sobre pluripasional", "quién es pluripasional"],
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
