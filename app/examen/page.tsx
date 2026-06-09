"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function ExamenPage() {
  return (
    <main className="bg-crema text-verde-dark">
      <section className="bg-verde text-crema py-28 px-6 text-center">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>El Mapa Inicial Pluripasional™</motion.p>
          <motion.h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6" variants={fadeUp}>El examen que finalmente<br /><em className="text-oro">te refleja completa</em></motion.h1>
          <motion.p className="font-inter text-lg text-crema/80 leading-relaxed mb-10 max-w-xl mx-auto" variants={fadeUp}>No es un test de personalidad genérico. Es un diagnóstico diseñado para mentes pluripasionales.</motion.p>
          <motion.a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-oro text-verde-darker font-inter text-sm tracking-[0.15em] uppercase px-10 py-5 hover:bg-oro-light transition-colors duration-300" variants={fadeUp}>Tomar el Examen Gratuito →</motion.a>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4">Qué Es</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-6 leading-tight">Un diagnóstico, no una etiqueta</h2>
            <p className="font-inter text-base text-verde-dark/80 leading-relaxed mb-6">El Mapa Inicial Pluripasional™ analiza tus patrones de energía, motivación y áreas de interés — no para asignarte un tipo fijo, sino para mostrarte la arquitectura única de tu mente.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="bg-verde-darker text-crema p-10">
              <h3 className="font-cormorant text-2xl font-light text-oro mb-6">El examen incluye</h3>
              <ul className="space-y-4">
                {["Identificación de tu Arquetipo Primario","Identificación de tu Arquetipo Secundario","Análisis de tu Área Más Alta de energía","Tu Hilo Conector — el patrón que une todo","Histograma de tus dimensiones pluripasionales","Nivel de Madurez en tu ecosistema","Tu Hobby Sagrado — la fuente que te recarga","Entrega del Mapa PDF personalizado por email"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-inter text-sm text-crema/90"><span className="text-oro mt-0.5 shrink-0">✦</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-crema text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-6" variants={fadeUp}>Tu mapa te está esperando.<br /><em className="text-oro">Es hora de leerlo.</em></motion.h2>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-verde text-crema font-inter text-sm tracking-[0.1em] uppercase px-10 py-5 hover:bg-verde-dark transition-colors duration-300">Comenzar el Examen →</a>
            <Link href="/preguntas" className="border border-verde text-verde font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde hover:text-crema transition-colors duration-300">Ver Preguntas Frecuentes</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
