import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-verde-dark text-crema py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-cormorant text-2xl font-light mb-3">
            Soy <em className="text-oro">Pluripasional</em>™
          </div>
          <p className="font-inter text-xs text-crema/50 leading-relaxed mb-6">
            Metodología estratégica para mujeres con múltiples pasiones,
            habilidades y caminos.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@luzcarid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Carid"
              className="text-crema/40 hover:text-oro transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.19 8.19 0 004.78 1.52V6.84a4.85 4.85 0 01-1.01-.15z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Soypluripasional"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Soy Pluripasional"
              className="text-crema/40 hover:text-oro transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-inter text-xs text-crema/40 uppercase tracking-widest mb-4">
            Navegar
          </p>
          <ul className="space-y-2">
            {[
              { href: "/sobre-mi", label: "Sobre Mí" },
              { href: "/examen", label: "El Examen" },
              { href: "/sesion", label: "Trabaja Conmigo" },
              { href: "/productos", label: "Productos Digitales" },
              { href: "/preguntas", label: "Preguntas" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-inter text-sm text-crema/60 hover:text-crema transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-inter text-xs text-crema/40 uppercase tracking-widest mb-4">
            Empezar
          </p>
          <a
            href="https://mapa-pluripasional.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-oro text-oro font-inter text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-oro hover:text-verde-darker transition-colors duration-200"
          >
            Examen Gratuito →
          </a>
          <div className="mt-6">
            <a
              href="mailto:info@caridbaez.com"
              className="font-inter text-xs text-crema/50 hover:text-crema"
            >
              info@caridbaez.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-crema/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-inter text-xs text-crema/30">
          © {new Date().getFullYear()} Soy Pluripasional™ — Carid Báez. Todos los derechos reservados.
        </p>
        <p className="font-inter text-xs text-crema/20 italic">
          Nunca fuiste dispersa. Simplemente, aún no tenías tu mapa.
        </p>
      </div>
    </footer>
  );
}
