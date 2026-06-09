"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function SesionPage() {
  return (
    <main className="bg-crema text-verde-dark">
      <section className="bg-verde-darker text-crema py-28 px-6 text-center">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Trabaja Conmigo</motion.p>
          <motion.h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6" variants={fadeUp}>Sesión Estratégica<br /><em className="text-oro">Pluripasional™</em></motion.h1>
          <motion.p className="font-inter text-lg text-crema/80 leading-relaxed mb-10 max-w-xl mx-auto" variants={fadeUp}>Una sesión de trabajo profundo para mujeres que ya han tomado el Mapa y están listas para convertir la claridad en dirección concreta.</motion.p>
          <motion.a href="mailto:info@caridbaez.com" className="inline-block bg-oro text-verde-darker font-inter text-sm tracking-[0.15em] uppercase px-10 py-5 hover:bg-oro-light transition-colors duration-300" variants={fadeUp}>Reservar Mi Sesión →</motion.a>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Esta sesión es para ti si</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-12" variants={fadeUp}>Ya tienes el mapa. Ahora necesitas la ruta.</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Tomaste el Mapa Inicial Pluripasional™ y quieres profundizar en lo que revela",
              "Tienes varios proyectos en paralelo y no sabes cuál priorizar",
              "Estás en una transición y quieres claridad antes de actuar",
              "Sientes que trabajas mucho pero avanzas poco",
              "Quieres una estrategia que integre tus múltiples dimensiones",
              "Necesitas a alguien que entienda tu complejidad sin pedirte que te reduzcas"].map((item, i) => (
              <motion.div key={i} className="flex items-start gap-4 p-6 bg-crema-dark" variants={fadeUp}>
                <span className="text-oro text-lg shrink-0 mt-0.5">✦</span>
                <p className="font-inter text-sm text-verde-dark/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-verde text-crema py-24 px-6">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Qué Sucede en la Sesión</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" variants={fadeUp}>Cuatro fases. Un resultado claro.</motion.h2>
          <div className="space-y-6">
            {[
              { num: "01", title: "Lectura de tu Mapa", desc: "Revisamos juntas los resultados de tu Mapa Inicial — no solo los datos, sino lo que significan en el contexto de tu vida actual." },
              { num: "02", title: "Diagnóstico de fricción", desc: "Identificamos los puntos exactos donde tu sistema actual choca con tu arquitectura pluripasional." },
              { num: "03", title: "Mapa de prioridades", desc: "Construimos una visión estratégica que integre tus diferentes dimensiones sin suprimir ninguna." },
              { num: "04", title: "Hoja de ruta concreta", desc: "Sales con los próximos 3 pasos específicos, alineados con tu arquetipo y tu momento actual." },
            ].map((phase, i) => (
              <motion.div key={i} className="grid md:grid-cols-[80px_1fr] gap-8 p-8 bg-verde-dark/50 border border-crema/10" variants={fadeUp}>
                <div className="font-cormorant text-5xl text-oro/50 font-light leading-none">{phase.num}</div>
                <div>
                  <h3 className="font-cormorant text-2xl font-light text-oro mb-3">{phase.title}</h3>
                  <p className="font-inter text-sm text-crema/80 leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-crema-dark py-24 px-6">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-3xl font-light text-verde mb-10 text-center" variants={fadeUp}>Detalles de la sesión</motion.h2>
          <motion.div className="border border-verde/15 bg-crema overflow-hidden" variants={fadeUp}>
            {[
              { label: "Formato", value: "Videollamada (Zoom / Google Meet)" },
              { label: "Duración", value: "90 minutos" },
              { label: "Requisito previo", value: "Haber completado el Mapa Inicial Pluripasional™" },
              { label: "Entregable", value: "Grabación de la sesión + hoja de ruta escrita" },
              { label: "Seguimiento", value: "Email de acompañamiento a las 72 horas" },
              { label: "Idioma", value: "Español" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-[140px_1fr] gap-6 p-5 ${i % 2 === 0 ? "bg-crema" : "bg-crema-dark"}`}>
                <span className="font-inter text-xs text-verde-dark/50 uppercase tracking-widest">{row.label}</span>
                <span className="font-inter text-sm text-verde-dark/90">{row.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-verde-darker text-crema text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" variants={fadeUp}>Las plazas son limitadas.<br /><em className="text-oro">La claridad no puede esperar.</em></motion.h2>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a href="mailto:info@caridbaez.com" className="bg-oro text-verde-darker font-inter text-sm tracking-[0.1em] uppercase px-10 py-5 hover:bg-oro-light transition-colors duration-300">Reservar Mi Sesión →</a>
            <Link href="/examen" className="border border-crema/30 text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-crema/10 transition-colors duration-300">Primero Quiero el Mapa</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
