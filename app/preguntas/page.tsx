"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const faqs = [
  { q: "¿Qué es exactamente una mujer pluripasional?", a: "Una mujer pluripasional tiene múltiples intereses, talentos y dimensiones activas que no se reduce a una sola categoría. A menudo ha sido etiquetada como dispersa o incapaz de enfocarse — ninguna de esas etiquetas es correcta." },
  { q: "¿En qué se diferencia el Mapa Pluripasional™ de otros tests de personalidad?", a: "Los tests tradicionales buscan asignarte una etiqueta fija. El Mapa Inicial Pluripasional™ muestra la arquitectura dinámica de tu energía y motivaciones para que tomes decisiones desde tu realidad, no desde un arquetipo genérico." },
  { q: "¿Cuánto tiempo tarda el examen?", a: "Aproximadamente 15 a 25 minutos. Es importante hacerlo en un momento tranquilo, sin interrupciones, para que puedas responder desde un lugar honesto y reflexivo." },
  { q: "¿Realmente es gratuito?", a: "Sí. El Mapa Inicial Pluripasional™ es completamente gratuito. Recibes tu análisis completo y tu PDF personalizado por email sin costo. La Sesión Estratégica es un paso siguiente opcional." },
  { q: "¿Necesito haber tomado el Mapa antes de reservar una sesión?", a: "Sí. La Sesión Estratégica está diseñada como continuación del Mapa. Sin ese diagnóstico previo, la sesión pierde profundidad y especificidad." },
  { q: "¿Las sesiones son en grupo o individuales?", a: "Las Sesiones Estratégicas son individuales — solo tú y yo. El trabajo pluripasional requiere profundidad y personalización que no es posible en formato grupal." },
  { q: "¿Qué pasa si no me identifico con mis resultados del Mapa?", a: "Es más común de lo que parece. A veces los resultados nos incomodan porque revelan algo que preferimos no ver. Si sientes que el mapa no te representa, escríbeme — hay formas de revisitar el proceso." },
  { q: "¿Trabajo con mujeres de cualquier país?", a: "Sí. Todo el trabajo es virtual. Trabajo con mujeres en cualquier zona horaria, en español." },
  { q: "¿Cómo sé si estoy lista para una sesión estratégica?", a: "Estás lista si tomaste el Mapa y quieres entender más profundamente lo que revela, si tienes una decisión importante frente a ti, o si sientes que estás trabajando mucho sin avanzar." },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border-b border-verde/15" variants={fadeUp} custom={index}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-6 text-left group" aria-expanded={open}>
        <span className="font-cormorant text-xl font-light text-verde group-hover:text-verde-dark transition-colors leading-snug">{q}</span>
        <span className={`text-oro text-2xl shrink-0 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
            <p className="font-inter text-sm text-verde-dark/75 leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PreguntasPage() {
  return (
    <main className="bg-crema text-verde-dark">
      <section className="bg-verde text-crema py-24 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Preguntas Frecuentes</motion.p>
          <motion.h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6" variants={fadeUp}>Todo lo que necesitas saber<br /><em className="text-oro">antes de empezar</em></motion.h1>
        </motion.div>
      </section>
      <section className="py-24 px-6">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
        </motion.div>
      </section>
      <section className="bg-verde-darker text-crema py-24 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" variants={fadeUp}>¿Todavía tienes dudas?</motion.h2>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-oro text-verde-darker font-inter text-sm tracking-[0.1em] uppercase px-10 py-5 hover:bg-oro-light transition-colors duration-300">Tomar el Examen Gratuito</a>
            <a href="mailto:hola@soypluripasional.com" className="border border-crema/30 text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-crema/10 transition-colors duration-300">Escribirme Directo</a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
