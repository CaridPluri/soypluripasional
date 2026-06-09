"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/examen", label: "El Examen" },
  { href: "/sesion", label: "Trabaja Conmigo" },
  { href: "/preguntas", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-crema/95 backdrop-blur-sm border-b border-verde/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-cormorant text-xl font-light text-verde tracking-wide">
          Soy <em className="text-oro">Pluripasional</em>™
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-sm text-verde-dark/70 hover:text-verde transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://mapa-pluripasional.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verde text-crema font-inter text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-verde-dark transition-colors duration-200"
          >
            Tomar el Examen
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-verde p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-crema border-t border-verde/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-inter text-sm text-verde-dark/80 hover:text-verde"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://mapa-pluripasional.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-verde text-crema font-inter text-xs tracking-[0.15em] uppercase px-5 py-3 text-center hover:bg-verde-dark"
              >
                Tomar el Examen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
