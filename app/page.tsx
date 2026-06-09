"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

const paraQuienItems = [
  "Tienes múltiples pasiones y te han dicho que eso es un problema",
  "Te has reinventado más de una vez y no sabes cómo explicarlo",
  "Te sientes más viva cuando conectas ideas de diferentes campos",
  "Tu perfil de LinkedIn no captura quién realmente eres",
  "Has construido cosas — pero algo todavía se siente fragmentado",
  "Quieres una marca o proyecto que refleje todo tu rango",
];

const pilares = [
  { num: "01", title: "Integrar", desc: "Conecta tus habilidades, pasiones y experiencia en una narrativa unificada, en lugar de versiones separadas de ti misma." },
  { num: "02", title: "Clarificar", desc: "Define la dirección que es únicamente tuya — una que no te exige reducirte ni simplificarte." },
  { num: "03", title: "Avanzar", desc: "Construye una marca personal, carrera con propósito o proyecto con una base que realmente sostiene." },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="min-h-[92vh] bg-verde-darker flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 10% 60%, #C9A84C22 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
          <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
            <motion.p variants={fadeUp} className="font-inter text-xs tracking-[0.35em] uppercase text-oro/70">Mapa Pluripasional™</motion.p>
            <motion.h1 variants={fadeUp} className="font-cormorant text-[clamp(3rem,9vw,7.5rem)] font-light leading-[1.05] text-crema">
              Nunca fuiste<br /><em className="italic">dispersa.</em><br />Simplemente, aún<br />no tenías tu mapa.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-cormorant text-xl md:text-2xl italic text-oro/80">You were never scattered. You were simply unmapped.</motion.p>
            <motion.p variants={fadeUp} className="font-inter text-base md:text-lg text-crema/65 max-w-2xl leading-relaxed">
              No eres demasiado. No estás desenfocada. Eres pluripasional — y existe una metodología construida exactamente para la forma en que funciona tu mente.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-oro text-verde-darker px-8 py-3.5 font-inter text-sm font-medium hover:bg-oro-light transition-colors">
                Tomar el Examen Gratis →
              </a>
              <Link href="/sesion"
                className="inline-flex items-center gap-2 border border-crema/25 text-crema/80 px-8 py-3.5 font-inter text-sm hover:border-crema/50 hover:text-crema transition-colors">
                Reservar una Sesión Estratégica
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 md:py-32 bg-crema">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde-dark mb-12 leading-tight">El problema nunca fuiste tú.</h2>
            <div className="space-y-6 font-inter text-base md:text-lg text-verde/75 leading-relaxed">
              <p>Te han dicho que &ldquo;elijas una cosa.&rdquo; Que te enfoques. Que dejes de perseguir cada idea.</p>
              <p>Y lo has intentado. Pero cada vez que te reduces, algo esencial queda atrás.</p>
              <p className="text-lg font-medium text-verde-dark">Esto es lo que nadie te dijo: <strong>nunca estuviste dispersa. Solo trabajabas sin un mapa.</strong></p>
              <div className="pt-2 border-l-2 border-oro pl-6">
                <p className="text-lg font-medium text-verde-dark">Tu diversidad de talentos no es una desventaja. Es la estrategia.</p>
                <p className="font-cormorant text-xl italic text-oro mt-2">Your diversity of talent is not a liability. It&apos;s the strategy.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-24 md:py-32 bg-verde-dark text-crema">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
            <p className="font-inter text-xs tracking-[0.35em] uppercase text-oro/70 mb-5">La Metodología</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-5">Conoce el Mapa Pluripasional™</h2>
            <p className="font-inter text-base text-crema/65 leading-relaxed max-w-3xl">
              El Mapa Pluripasional™ es una <strong className="text-crema/90">metodología estratégica</strong> que mapea la intersección de tus talentos, experiencias y pasiones — y revela la dirección clara que sostiene todo lo que eres.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-crema/10">
            {pilares.map((pilar, i) => (
              <motion.div key={pilar.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}
                className="bg-verde-dark p-10 hover:bg-verde transition-colors group">
                <p className="font-inter text-xs text-oro mb-5 tracking-widest">{pilar.num}</p>
                <h3 className="font-cormorant text-3xl font-light mb-4">{pilar.title}</h3>
                <p className="font-inter text-sm text-crema/55 leading-relaxed group-hover:text-crema/70 transition-colors">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-24 md:py-32 bg-crema-dark">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde-dark mb-12 leading-tight">Esto es para ti si…</h2>
            <div className="space-y-5 mb-12">
              {paraQuienItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                  className="flex items-start gap-4">
                  <span className="text-oro mt-1 shrink-0">◆</span>
                  <p className="font-inter text-base text-verde/80 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOS ENTRADAS */}
      <section className="py-24 md:py-32 bg-crema">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="font-cormorant text-4xl md:text-5xl font-light text-verde-dark mb-14 text-center leading-tight">
            Dos formas de empezar
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-verde-pale border border-verde/10 p-10 flex flex-col">
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-oro mb-5">Gratis</p>
              <h3 className="font-cormorant text-3xl font-light text-verde-dark mb-4 leading-tight">El Mapa Pluripasional™</h3>
              <p className="font-inter text-sm text-verde/65 leading-relaxed flex-1 mb-8">Obtén una imagen clara de tu perfil pluripasional en minutos.</p>
              <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-verde text-crema px-6 py-3 font-inter text-sm hover:bg-verde-dark transition-colors self-start">
                Tomar el Examen — Es Gratis →
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
              className="bg-verde-darker text-crema p-10 flex flex-col">
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-oro mb-5">1:1 con Carid</p>
              <h3 className="font-cormorant text-3xl font-light mb-4 leading-tight">La Sesión Estratégica</h3>
              <p className="font-inter text-sm text-crema/55 leading-relaxed flex-1 mb-8">Reserva una sesión guiada para mapear tu integración y definir tu dirección.</p>
              <Link href="/sesion"
                className="inline-flex items-center gap-2 border border-crema/25 text-crema px-6 py-3 font-inter text-sm hover:bg-crema/10 transition-colors self-start">
                Reservar tu Sesión Estratégica →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-28 bg-verde-pale border-t border-oro/15">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-5">
            <div className="w-8 h-px bg-oro mx-auto mb-8" />
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde-dark leading-tight">
              Tu mapa ya existe.<br />Trazémoslo juntas.
            </h2>
            <p className="font-cormorant text-xl italic text-oro">Your map already exists. Let&apos;s draw it together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-verde text-crema px-8 py-3.5 font-inter text-sm hover:bg-verde-dark transition-colors">
                Empezar con el Examen Gratuito →
              </a>
              <Link href="/sesion"
                className="inline-flex items-center justify-center gap-2 border border-verde text-verde px-8 py-3.5 font-inter text-sm hover:bg-verde hover:text-crema transition-colors">
                Ir Directo a la Sesión Estratégica
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
