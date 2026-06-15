import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoG from '../assets/logo_solo_76x90.png'

const links = [
  { href: '#top', label: 'Inicio' },
  { href: '#easyflow', label: 'Easy Flow' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#nosotros', label: 'Nosotros' },
]

const Wordmark = () => (
  <a href="#top" className="flex items-center gap-2 group" aria-label="G3N">
    <img
      src={logoG}
      alt=""
      className="h-6 w-auto transition-transform duration-500 ease-brand group-hover:scale-105"
    />
    <span className="font-display text-2xl font-extrabold tracking-tight text-white">
      G<span className="grad-text">3</span>N
    </span>
    <span className="hidden sm:inline-block h-4 w-px bg-white/15" />
    <span className="hidden sm:inline-block font-display text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-text-dim">
      Software 2026
    </span>
  </a>
)

const Navbar = ({ onContact }) => {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        solid
          ? 'border-b border-teal/15 bg-ink-deep/75 py-3'
          : 'border-b border-transparent bg-transparent py-[18px]'
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-7">
        <Wordmark />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.92rem] font-medium text-text-dim transition-colors hover:text-teal-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onContact}
            className="hidden rounded-full bg-[linear-gradient(118deg,#2C7CB8_0%,#2DD4BF_60%,#6FF0DD_100%)] px-[22px] py-[11px] font-display text-[0.92rem] font-semibold text-ink-deep shadow-[0_10px_28px_-10px_rgba(45,212,191,.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            Solicita una demo
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto max-w-[1180px] space-y-1 px-7 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 font-display font-medium text-text-dim transition-colors hover:bg-white/5 hover:text-teal-light"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false)
              onContact()
            }}
            className="mt-2 block w-full rounded-full bg-[linear-gradient(118deg,#2C7CB8_0%,#2DD4BF_60%,#6FF0DD_100%)] px-5 py-3 text-center font-display font-semibold text-ink-deep"
          >
            Solicita una demo
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
