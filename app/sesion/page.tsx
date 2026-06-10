"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const TIDYCAL_REVIEW = "https://tidycal.com/caridaida/assessment-result-review";
const TIDYCAL_MENTORING = "https://tidycal.com/caridaida/pluripasional-mentoring-starter";
const TIDYCAL_FREE = "https://tidycal.com/caridaida/free-beta-strategy-session";

export default function SesionPage() {
  return (
    <main className="bg-crema text-verde-dark">

      {/* HERO */}
      <section className="bg-verde-darker text-crema py-28 px-6 text-center">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Trabaja Conmigo</motion.p>
          <motion.h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6" variants={fadeUp}>
            Tu mapa, en acción.<br /><em className="text-oro">Trabaja con Carid.</em>
          </motion.h1>
          <motion.p className="font-inter text-lg text-crema/80 leading-relaxed mb-10 max-w-xl mx-auto" variants={fadeUp}>
            Tres formas de avanzar — desde la primera sesión gratuita hasta el acompañamiento profundo. Elige la que se alinea con tu momento.
          </motion.p>
        </motion.div>
      </section>

      {/* OFERTA GRATUITA */}
      <section className="py-16 px-6 bg-verde-pale border-b border-verde/10">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.span className="inline-block bg-oro/20 text-verde-dark font-inter text-xs tracking-[0.2em] uppercase px-4 py-1.5 mb-6" variants={fadeUp}>Beta · Acceso Especial</motion.span>
          <motion.h2 className="font-cormorant text-4xl font-light text-verde-dark mb-4" variants={fadeUp}>Sesión Estratégica Gratuita</motion.h2>
          <motion.p className="font-inter text-base text-verde/65 mb-8 max-w-lg mx-auto" variants={fadeUp}>
            Una sesión de 45 minutos para mujeres que han completado el Mapa y quieren explorar cómo avanzar. Sin costo. Sin compromiso.
          </motion.p>
          <motion.a href={TIDYCAL_FREE} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde-dark transition-colors" variants={fadeUp}>
            Agendar Sesión Gratuita →
          </motion.a>
        </motion.div>
      </section>

      {/* 3 TIERS */}
      <section className="py-24 px-6 bg-crema">
        <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4 text-center" variants={fadeUp}>Servicios</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-12 text-center" variants={fadeUp}>Elige tu nivel de acompañamiento</motion.h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* TIER 1 */}
            <motion.div className="bg-crema-dark border border-verde/10 p-8 flex flex-col" variants={fadeUp}>
              <p className="font-inter text-xs text-oro tracking-widest uppercase mb-6">Sesión Única</p>
              <h3 className="font-cormorant text-3xl font-light text-verde-dark mb-2 leading-tight">Sesión Estratégica 1:1</h3>
              <p className="font-inter text-sm text-verde/65 leading-relaxed flex-1 mb-6">
                Revisamos tu Mapa juntas, identificamos fricciones y defines los próximos 3 pasos concretos. Incluye grabación y hoja de ruta escrita.
              </p>
              <ul className="space-y-2 mb-8 font-inter text-xs text-verde/60">
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> 90 minutos · Videollamada</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Lectura profunda del Mapa</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Hoja de ruta personalizada</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Email de seguimiento 72h</li>
              </ul>
              <div className="border-t border-verde/10 pt-6 mb-6">
                <p className="font-cormorant text-4xl font-light text-verde-dark">$97 <span className="font-inter text-sm text-verde/50">USD</span></p>
              </div>
              <a href={TIDYCAL_REVIEW} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-verde text-crema font-inter text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-verde-dark transition-colors">
                Agendar Sesión →
              </a>
            </motion.div>

            {/* TIER 2 — FEATURED */}
            <motion.div className="bg-verde-darker text-crema p-8 flex flex-col relative" variants={fadeUp}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-oro text-verde-darker font-inter text-[10px] tracking-widest uppercase px-4 py-1">Más Popular</span>
              <p className="font-inter text-xs text-oro/70 tracking-widest uppercase mb-6">Trabajo Profundo</p>
              <h3 className="font-cormorant text-3xl font-light mb-2 leading-tight">Trabajo 1:1 con el Mapa</h3>
              <p className="font-inter text-sm text-crema/65 leading-relaxed flex-1 mb-6">
                Tres sesiones de acompañamiento intensivo para integrar tu mapa en una dirección accionable. Para quienes están listas para pasar de la claridad a la acción.
              </p>
              <ul className="space-y-2 mb-8 font-inter text-xs text-crema/60">
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> 3 sesiones de 90 min</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Análisis completo del Mapa</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Estrategia de marca o proyecto</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Plan de 90 días personalizado</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Soporte por email entre sesiones</li>
              </ul>
              <div className="border-t border-crema/10 pt-6 mb-6">
                <p className="font-cormorant text-4xl font-light text-crema">$247 <span className="font-inter text-sm text-crema/40">USD</span></p>
              </div>
              <a href={TIDYCAL_MENTORING} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-oro text-verde-darker font-inter text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-oro-light transition-colors">
                Reservar Paquete →
              </a>
            </motion.div>

            {/* TIER 3 */}
            <motion.div className="bg-crema-dark border border-verde/10 p-8 flex flex-col" variants={fadeUp}>
              <p className="font-inter text-xs text-oro tracking-widest uppercase mb-6">Membersía Mensual</p>
              <h3 className="font-cormorant text-3xl font-light text-verde-dark mb-2 leading-tight">Comunidad Pluripasional</h3>
              <p className="font-inter text-sm text-verde/65 leading-relaxed flex-1 mb-6">
                Acceso mensual a la comunidad de mujeres pluripasionales. Sesiones grupales, recursos exclusivos y un espacio donde tu complejidad es la norma.
              </p>
              <ul className="space-y-2 mb-8 font-inter text-xs text-verde/60">
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Sesión grupal mensual en vivo</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Comunidad privada de miembros</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Acceso a recursos y plantillas</li>
                <li className="flex items-start gap-2"><span className="text-oro">❖</span> Cancela cuando quieras</li>
              </ul>
              <div className="border-t border-verde/10 pt-6 mb-6">
                <p className="font-cormorant text-4xl font-light text-verde-dark">$37 <span className="font-inter text-sm text-verde/50">USD/mes</span></p>
                <p className="font-inter text-xs text-verde/40 mt-1">Próximamente · Lista de espera abierta</p>
              </div>
              <a href="mailto:info@caridbaez.com?subject=Lista%20de%20espera%20Comunidad%20Pluripasional"
                className="inline-flex items-center justify-center gap-2 border border-verde text-verde font-inter text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-verde hover:text-crema transition-colors">
                Unirme a la Lista →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* QUÉ SUCEDE */}
      <section className="bg-verde text-crema py-24 px-6">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Proceso</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12" variants={fadeUp}>Cuatro fases. Un resultado claro.</motion.h2>
          <div className="space-y-6">
            {[
              { num: "01", title: "Lectura de tu Mapa", desc: "Revisamos juntas los resultados de tu Mapa Inicial — no solo los datos, sino lo que significan en el contexto de tu vida actual." },
              { num: "02", title: "Diagnóstico de fricción", desc: "Identificamos los puntos exactos donde tu sistema actual choca con tu arquitectura pluripasional." },
              { num: "03", title: "Mapa de prioridades", desc: "Construimos una visión estratégica que integre tus diferentes dimensiones sin suprimir ninguna." },
              { num: "04", title: "Hoja de ruta concreta", desc: "Sales con los próximos pasos específicos, alineados con tu arquetipo y tu momento actual." },
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

      {/* DETALLES */}
      <section className="bg-crema-dark py-24 px-6">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-3xl font-light text-verde mb-10 text-center" variants={fadeUp}>Detalles de la sesión</motion.h2>
          <motion.div className="border border-verde/15 bg-crema overflow-hidden" variants={fadeUp}>
            {[
              { label: "Formato", value: "Videollamada (Zoom / Google Meet)" },
              { label: "Duración", value: "90 minutos por sesión" },
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

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-verde-darker text-crema text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" variants={fadeUp}>
            La claridad no se encuentra.<br /><em className="text-oro">Se construye juntas.</em>
          </motion.h2>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a href={TIDYCAL_REVIEW} target="_blank" rel="noopener noreferrer"
              className="bg-oro text-verde-darker font-inter text-sm tracking-[0.1em] uppercase px-10 py-5 hover:bg-oro-light transition-colors duration-300">
              Reservar Sesión Estratégica →
            </a>
            <Link href="/examen"
              className="border border-crema/30 text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-crema/10 transition-colors duration-300">
              Primero Quiero el Mapa
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
