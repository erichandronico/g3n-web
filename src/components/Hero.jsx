import { useEffect, useState } from 'react'
import heroPhoto from '../assets/photos/hero.jpg'
import easyflowIso from '../assets/easyflow-iso.png'

const Hero = ({ onContact }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Entrada escalonada
  const up = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(26px)',
    transition: 'opacity 1s var(--ease), transform 1s var(--ease)',
    transitionDelay: `${delay}s`,
  })

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Foto + overlay navy */}
      <img
        src={heroPhoto}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 [background:linear-gradient(100deg,rgba(11,24,39,.94)_0%,rgba(22,49,79,.82)_48%,rgba(22,49,79,.5)_100%)]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1180px] px-7 pb-24 pt-36">
        {/* Logo EasyFlow: isotipo + wordmark */}
        <div className="mb-7 flex items-center gap-4" style={up(0.1)}>
          <img
            src={easyflowIso}
            width={120}
            height={54}
            alt="EasyFlow"
            className="block h-auto w-[72px] drop-shadow-[0_10px_24px_rgba(0,0,0,.4)] md:w-[88px]"
          />
          <span className="font-display text-[clamp(1.7rem,4.5vw,2.6rem)] font-extrabold tracking-tight">
            <span className="text-white">Easy</span>
            <span className="text-blue-soft">Flow</span>
          </span>
        </div>

        <div className="kicker mb-6 !text-white/80" style={up(0.2)}>
          Por G3N · Nuestra plataforma estrella
        </div>
        <h1
          className="max-w-[14ch] font-display text-[clamp(2.4rem,6.5vw,4.6rem)] font-extrabold uppercase leading-[1.04] tracking-[0.01em] text-white"
          style={up(0.4)}
        >
          Fluye sin límites.
          <span className="block text-blue-soft">Optimiza todo.</span>
        </h1>
        <p
          className="mt-7 max-w-[52ch] text-[clamp(1rem,1.8vw,1.15rem)] text-white/80"
          style={up(0.6)}
        >
          <strong className="text-white">EasyFlow</strong> conecta tus{' '}
          <strong className="text-white">compras, inventario, ventas y contabilidad</strong> en un
          solo flujo continuo —con aprobadores, notificaciones automáticas y un proceso que tu
          equipo no necesita aprender a usar.
        </p>
        <div className="mt-10 flex flex-wrap gap-4" style={up(0.8)}>
          <button onClick={onContact} className="btn btn-primary">
            Solicita una demo
          </button>
          <a href="#modulos" className="btn btn-outline">
            Conoce los módulos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
