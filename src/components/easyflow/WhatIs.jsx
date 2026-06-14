import Reveal from '../Reveal'

const WhatIs = () => {
  return (
    <section id="easyflow" className="bg-paper py-28 text-ink-text md:py-32">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal as="div" className="kicker !text-blue">
          ¿Qué es Easy Flow?
        </Reveal>
        <Reveal
          as="p"
          delay={1}
          className="mt-5 max-w-[30ch] font-display text-[clamp(1.7rem,4.2vw,3rem)] font-semibold leading-[1.18] tracking-[-0.02em]"
        >
          El sistema que pone a trabajar juntos{' '}
          <span className="grad-text-dark">tus procesos, tus personas y tus datos</span> —sin
          fricción.
        </Reveal>
        <Reveal
          as="p"
          delay={2}
          className="mt-7 max-w-[60ch] text-[1.18rem] text-ink-text-dim"
        >
          En lugar de planillas dispersas, correos sueltos y aprobaciones que se pierden, Easy Flow
          unifica el día a día operativo de tu empresa en una plataforma única. Cada solicitud
          avanza sola por su camino, cada responsable sabe exactamente qué le toca, y todo queda
          registrado y conectado de punta a punta.
        </Reveal>
      </div>
    </section>
  )
}

export default WhatIs
