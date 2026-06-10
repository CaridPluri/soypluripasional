"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const products = [
  {
    badge: "Guía PDF",
    title: "Del Caos a la Claridad en 7 Días",
    desc: "Un proceso guiado de 7 días para mujeres pluripasionales que quieren salir del estado de dispersión y construir una dirección clara. Incluye ejercicios, preguntas de integración y un mapa de acción.",
    tag: "Próximamente",
    tagColor: "bg-oro/20 text-verde-dark",
  },
  {
    badge: "Plantilla PDF",
    title: "El Mapa de tus Fortalezas Pluripasionales",
    desc: "Una plantilla visual para mapear tus habilidades, pasiones y valores desde tu arquetipo pluripasional. Diseñada para usarse junto con el Examen Gratuito.",
    tag: "Próximamente",
    tagColor: "bg-oro/20 text-verde-dark",
  },
  {
    badge: "Guía de Marca",
    title: "Cómo Presentarte Sin Reducirte",
    desc: "Guía práctica para diseñar tu bio, pitch y presencia digital siendo completamente pluripasional. Para LinkedIn, Instagram y cualquier espacio donde necesites presentarte.",
    tag: "Próximamente",
    tagColor: "bg-oro/20 text-verde-dark",
  },
];

export default function ProductosPage() {
  return (
    <main className="bg-crema text-verde-dark">

      <section className="bg-verde-darker text-crema py-28 px-6 text-center">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Recursos Digitales</motion.p>
          <motion.h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6" variants={fadeUp}>
            Productos que<br /><em className="text-oro">trabajan contigo.</em>
          </motion.h1>
          <motion.p className="font-inter text-lg text-crema/80 leading-relaxed max-w-xl mx-auto" variants={fadeUp}>
            Herramientas diseñadas desde la Metodología Pluripasional™ para que puedas avanzar a tu ritmo, en cualquier momento.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div key={i} className="bg-crema-dark border border-verde/10 p-8 flex flex-col" variants={fadeUp}>
                <p className="font-inter text-xs text-oro tracking-widest uppercase mb-4">{p.badge}</p>
                <h3 className="font-cormorant text-2xl font-light text-verde-dark mb-4 leading-tight">{p.title}</h3>
                <p className="font-inter text-sm text-verde/65 leading-relaxed flex-1 mb-6">{p.desc}</p>
                <span className={`inline-block font-inter text-xs tracking-widest uppercase px-4 py-2 ${p.tagColor} self-start`}>{p.tag}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16 bg-verde-pale border border-verde/10 p-10 text-center" variants={fadeUp}>
            <p className="font-inter text-xs text-oro tracking-widest uppercase mb-4">Sé la Primera en Saber</p>
            <h2 className="font-cormorant text-3xl font-light text-verde-dark mb-4">Los productos llegan pronto.</h2>
            <p className="font-inter text-sm text-verde/65 mb-8 max-w-md mx-auto">
              Toma el Examen Gratuito ahora y serás la primera en recibir acceso cuando lancemos los recursos digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-verde text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde-dark transition-colors">
                Tomar el Examen Gratis →
              </a>
              <Link href="/sesion"
                className="inline-flex items-center justify-center gap-2 border border-verde text-verde font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde hover:text-crema transition-colors">
                Ver Servicios 1:1
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
