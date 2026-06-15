import { useEffect, useState } from 'react'
import easyflowIso from '../assets/easyflow-iso.png'

const Hero = ({ onContact }) => {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    const onScroll = () => setScrollY(Math.min(window.scrollY, 600))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Entrada blur-up escalonada (estilo Apple)
  const up = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(26px)',
    filter: mounted ? 'blur(0)' : 'blur(10px)',
    transition: 'opacity 1s var(--ease), transform 1s var(--ease), filter 1s var(--ease)',
    transitionDelay: `${delay}s`,
  })

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 80% -10%, #15466b 0%, var(--ink) 42%, var(--ink-deep) 100%)',
      }}
    >
      {/* Glows flotantes */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] animate-float rounded-full opacity-50 blur-[80px] [background:radial-gradient(circle,#2DD4BF,transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-52 -left-36 h-[520px] w-[520px] animate-float-slow rounded-full opacity-50 blur-[80px] [background:radial-gradient(circle,#1C6FA8,transparent_65%)]" />

      {/* Líneas de flujo animadas */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fl" x1="0" x2="1">
            <stop offset="0" stopColor="#1C6FA8" stopOpacity="0" />
            <stop offset=".5" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#6FF0DD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-50 250 C 300 180, 500 360, 800 300 S 1300 200, 1500 300"
          stroke="url(#fl)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="fline"
          style={{ '--o': '0s' }}
        />
        <path
          d="M-50 460 C 320 540, 520 380, 820 470 S 1280 560, 1500 460"
          stroke="url(#fl)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="fline"
          style={{ '--o': '-3s' }}
        />
        <path
          d="M-50 660 C 280 600, 560 740, 860 660 S 1300 600, 1500 680"
          stroke="url(#fl)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="fline"
          style={{ '--o': '-6s' }}
        />
      </svg>

      <div className="relative z-[2] mx-auto w-full max-w-[1180px] px-7 pb-20 pt-32">
        {/* Logo Easy Flow: isotipo + wordmark */}
        <div
          className="mb-7 flex items-center gap-4"
          style={{
            transform: `translateY(${scrollY * 0.16}px) scale(${mounted ? 1 : 0.82})`,
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1.2s var(--ease), transform 1.2s var(--ease)',
            transformOrigin: 'left center',
          }}
        >
          <span className="relative inline-block">
            <span className="pointer-events-none absolute -inset-x-[20%] -inset-y-[30%] -z-10 animate-iso-glow rounded-full [background:radial-gradient(circle,rgba(45,212,191,.55),transparent_62%)] blur-[26px]" />
            <img
              src={easyflowIso}
              width={120}
              height={54}
              alt="Easy Flow"
              className="block h-auto w-[78px] animate-iso-float drop-shadow-[0_14px_40px_rgba(45,212,191,.35)] md:w-[96px]"
            />
          </span>
          <span className="font-display text-[clamp(1.9rem,5vw,3rem)] font-extrabold tracking-tight">
            <span className="text-white">Easy</span> <span className="grad-text">Flow</span>
          </span>
        </div>

        <div className="eyebrow mb-6" style={up(0.45)}>
          <span className="dot" />
          Por G3N · Nuestra plataforma estrella
        </div>

        <h1
          className="max-w-[16ch] font-display text-[clamp(2.7rem,7vw,5.4rem)] font-extrabold"
          style={up(0.6)}
        >
          Fluye sin límites.
          <span className="block grad-text">Optimiza todo.</span>
        </h1>

        <p
          className="mt-7 max-w-[56ch] text-[clamp(1.05rem,2vw,1.32rem)] text-text-dim"
          style={up(0.8)}
        >
          <strong className="text-text">Easy Flow</strong> conecta tus{' '}
          <strong className="text-text">compras, inventario, ventas y contabilidad</strong> en un
          solo flujo continuo —con aprobadores, notificaciones automáticas y un proceso que tu
          equipo no necesita aprender a usar.
        </p>

        <div className="mt-10 flex flex-wrap gap-4" style={up(0.95)}>
          <button onClick={onContact} className="btn btn-primary">
            Solicita una demo
          </button>
          <a href="#modulos" className="btn btn-ghost">
            Conoce los módulos
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2.5 font-display text-[0.74rem] uppercase tracking-[0.2em] text-text-dim">
        <span>Descubre</span>
        <span className="h-12 w-px animate-cue [background:linear-gradient(var(--teal),transparent)]" />
      </div>
    </section>
  )
}

export default Hero
