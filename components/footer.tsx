import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-verde-darker text-crema py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-cormorant text-2xl font-light mb-3">
            Soy <em className="text-oro">Pluripasional</em>™
          </div>
          <p className="font-inter text-xs text-crema/50 leading-relaxed">
            Metodología estratégica para mujeres con múltiples pasiones,
            habilidades y caminos.
          </p>
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
              href="mailto:hola@soypluripasional.com"
              className="font-inter text-xs text-crema/50 hover:text-crema"
            >
              hola@soypluripasional.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-crema/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-inter text-xs text-crema/30">
          © 2024 Soy Pluripasional™ — Carid Báez. Todos los derechos reservados.
        </p>
        <p className="font-inter text-xs text-crema/20 italic">
          Nunca fuiste dispersa. Simplemente, aún no tenías tu mapa.
        </p>
      </div>
    </footer>
  );
}
