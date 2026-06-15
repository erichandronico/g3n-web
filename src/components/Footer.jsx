import logoG from '../assets/logo_solo_76x90.png'

const Footer = ({ onContact }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-teal/10 bg-ink-deep py-14">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoG} alt="" className="h-6 w-auto" />
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              G<span className="grad-text">3</span>N
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span className="font-display text-[0.92rem] font-medium text-text-dim">
              Easy <span className="text-teal">Flow</span>
            </span>
          </a>

          <div className="font-sans text-[0.88rem] text-text-dim">
            Fluye sin límites. Optimiza todo.
          </div>

          <button
            onClick={onContact}
            className="font-display text-[0.9rem] font-semibold text-teal-light transition-colors hover:text-white"
          >
            Solicita una demo →
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-[0.82rem] text-text-dim md:flex-row md:items-center md:justify-between">
          <p>© {year} G3N Desarrollo e Innovación. Todos los derechos reservados.</p>
          <p>Software del 2026, hecho por el equipo de G3N.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
