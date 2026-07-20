import { MapPin, Phone } from 'lucide-react'
import logoG from '../assets/logo_solo_76x90.png'

const Footer = ({ onContact }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy py-14 text-white">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoG} alt="" className="h-6 w-auto" />
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              G<span className="text-teal-soft">3</span>N
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="font-display text-[0.92rem] font-medium text-white/70">
              Easy <span className="text-teal-soft">Flow</span>
            </span>
          </a>

          <div className="font-sans text-[0.88rem] text-white/70">
            Fluye sin límites. Optimiza todo.
          </div>

          <button
            onClick={onContact}
            className="font-display text-[0.9rem] font-semibold text-teal-soft transition-colors hover:text-white"
          >
            Solicita una demo →
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[0.88rem] text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <a
            href="https://maps.google.com/?q=Antonio+Bellet+193,+Providencia,+Santiago,+Chile"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2.5 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-soft" />
            <span>
              Antonio Bellet 193, of. 1210, piso 12 · Providencia, Santiago, Región Metropolitana
            </span>
          </a>
          <a
            href="tel:+56979261146"
            className="flex items-center gap-2.5 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 text-teal-soft" />
            <span>+56 9 7926 1146</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[0.82rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} G3N Desarrollo e Innovación. Todos los derechos reservados.</p>
          <p>Software del 2026, hecho por el equipo de G3N.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
