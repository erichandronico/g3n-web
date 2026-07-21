import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoG from '../assets/logo_solo_76x90.png'

const links = [
  { href: '#top', label: 'Inicio' },
  { href: '#easyflow', label: 'EasyFlow' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#nosotros', label: 'Nosotros' },
]

const Navbar = ({ onContact }) => {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = solid ? 'text-text-dim hover:text-blue' : 'text-white/85 hover:text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white py-3 shadow-[0_2px_18px_rgba(15,25,35,.08)]' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-7">
        <a href="#top" className="flex items-center gap-2 group" aria-label="G3N">
          <img
            src={logoG}
            alt=""
            className="h-6 w-auto transition-transform duration-500 ease-brand group-hover:scale-105"
          />
          <span
            className={`font-display text-2xl font-extrabold tracking-tight ${
              solid ? 'text-ink' : 'text-white'
            }`}
          >
            G<span className="text-blue">3</span>N
          </span>
          <span
            className={`hidden h-4 w-px sm:inline-block ${solid ? 'bg-ink/15' : 'bg-white/25'}`}
          />
          <span
            className={`hidden font-display text-[0.62rem] font-semibold uppercase tracking-[0.22em] sm:inline-block ${
              solid ? 'text-text-dim' : 'text-white/70'
            }`}
          >
            Software 2026
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors ${linkColor}`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onContact}
            className="rounded-[3px] bg-blue px-5 py-2.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-dark"
          >
            Solicita una demo
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={solid ? 'text-ink md:hidden' : 'text-white md:hidden'}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="space-y-1 bg-white px-7 pb-5 pt-3 shadow-[0_10px_24px_rgba(15,25,35,.1)] md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded px-3 py-2.5 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em] text-text-dim transition-colors hover:bg-gray hover:text-blue"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false)
              onContact()
            }}
            className="mt-2 block w-full rounded-[3px] bg-blue px-5 py-3 text-center font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white"
          >
            Solicita una demo
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
