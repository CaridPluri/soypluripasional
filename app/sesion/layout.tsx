import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabaja Conmigo — Sesión Estratégica 1:1",
  description:
    "Trabaja 1:1 con Carid Báez, Arquitecta de Identidad Pluripasional. Sesión Estratégica, Trabajo Profundo con el Mapa y Comunidad Pluripasional. Reserva ahora.",
  keywords: ["sesión estratégica pluripasional", "coaching pluripasional", "Carid Báez 1:1", "trabajo con el mapa"],
};

export default function SesionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
