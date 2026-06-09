"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function SobreMiPage() {
  return (
    <main className="bg-crema text-verde-dark">
      <section className="bg-verde-darker text-crema py-24 px-6">
        <motion.div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4">Sobre Mí</p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
              Soy Carid Báez.<br /><em className="text-oro">Soy Pluripasional™.</em>
            </h1>
            <p className="font-inter text-lg text-crema/80 leading-relaxed">Y pasé años creyendo que algo estaba mal en mí — hasta que entendí que mi multiplicidad era exactamente mi mayor fortaleza.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-4 bg-oro/20 -z-10" />
            <Image src="https://galaxy-prod.tlcdn.com/gen/user_33qETT0QJiDNS0tCdOTn2vdz5Fc/f4d64812e8164b66a25edc59f882e617.jpg" alt="Carid Báez" width={480} height={600} className="w-full object-cover" priority />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Mi Historia</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-10" variants={fadeUp}>El día que dejé de llamarme "dispersa"</motion.h2>
          {["Durante años lo tuve todo: proyectos en paralelo, ideas que no cabían en una sola caja, pasiones que se multiplicaban. Y también la crítica constante de que no me enfocaba.",
            "Intenté elegir. Fallé. Y con cada ciclo llegaba una capa más de vergüenza y agotamiento. Pensé que el problema era yo.",
            "No era yo. Era el mapa que me habían dado — diseñado para personas de un solo camino. Cuando finalmente lo entendí, algo se desbloqueó.",
            "Ese giro interno fue el inicio del Sistema Soy Pluripasional™. No como filosofía de autoayuda, sino como metodología de claridad para mentes como la mía."].map((p, i) => (
            <motion.p key={i} className="font-inter text-base text-verde-dark/80 leading-relaxed mb-6" variants={fadeUp}>{p}</motion.p>
          ))}
        </motion.div>
      </section>

      <section className="bg-verde text-crema py-24 px-6">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.p className="text-oro font-inter text-sm tracking-[0.2em] uppercase mb-4" variants={fadeUp}>Mi Filosofía</motion.p>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light mb-10" variants={fadeUp}>Lo que creo con certeza</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "La multiplicidad no es el problema", body: "Tener muchos intereses y talentos no es una falla — es una arquitectura mental diferente, válida y poderosa cuando se comprende." },
              { title: "El agotamiento es la señal", body: "Cuando una mujer pluripasional se agota, es porque está usando un sistema diseñado para otro tipo de mente." },
              { title: "La claridad libera", body: "No necesitas reducirte para avanzar. Necesitas un mapa que te refleje completa." },
            ].map((item, i) => (
              <motion.div key={i} className="border border-crema/20 p-8" variants={fadeUp}>
                <h3 className="font-cormorant text-2xl font-light mb-4 text-oro">{item.title}</h3>
                <p className="font-inter text-sm text-crema/80 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-crema">
        <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 className="font-cormorant text-4xl md:text-5xl font-light text-verde mb-6" variants={fadeUp}>¿Lista para conocer tu propio mapa?</motion.h2>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a href="https://mapa-pluripasional.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-verde text-crema font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde-dark transition-colors duration-300">Tomar el Examen Gratuito</a>
            <Link href="/sesion" className="border border-verde text-verde font-inter text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-verde hover:text-crema transition-colors duration-300">Reservar una Sesión</Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
