import { MapPin, Phone } from 'lucide-react'
import logoG from '../assets/logo_solo_76x90.png'

const Footer = ({ onContact }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink pb-10 pt-16 text-white/60">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-7 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <img src={logoG} alt="" className="h-6 w-auto" />
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              G<span className="text-blue">3</span>N
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="font-display text-[0.92rem] font-medium text-white/70">
              Easy<span className="text-blue-soft">Flow</span>
            </span>
          </div>
          <p className="max-w-[38ch] text-[0.85rem] leading-relaxed">
            Fluye sin límites. Optimiza todo.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-white">
            Contacto
          </h4>
          <a
            href="https://maps.google.com/?q=Antonio+Bellet+193,+Providencia,+Santiago,+Chile"
            target="_blank"
            rel="noreferrer"
            className="mb-3 flex items-start gap-2.5 text-[0.85rem] transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
            <span>
              Antonio Bellet 193, of. 1210, piso 12
              <br />
              Providencia, Santiago
              <br />
              Región Metropolitana
            </span>
          </a>
          <a
            href="tel:+56979261146"
            className="flex items-center gap-2.5 text-[0.85rem] transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 text-blue" />
            +56 9 7926 1146
          </a>
        </div>

        <div>
          <h4 className="mb-5 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-white">
            Enlaces
          </h4>
          <div className="grid gap-2.5 text-[0.85rem]">
            <a href="#easyflow" className="transition-colors hover:text-white">
              EasyFlow
            </a>
            <a href="#modulos" className="transition-colors hover:text-white">
              Módulos
            </a>
            <a href="#nosotros" className="transition-colors hover:text-white">
              Nosotros
            </a>
            <button
              onClick={onContact}
              className="w-fit text-left text-blue-soft transition-colors hover:text-white"
            >
              Solicita una demo →
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1180px] flex-col gap-2 border-t border-white/10 px-7 pt-6 text-[0.78rem] text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {year} G3N Desarrollo e Innovación. Todos los derechos reservados.</p>
        <p>Software del 2026, hecho por el equipo de G3N.</p>
      </div>
    </footer>
  )
}

export default Footer
