import Reveal from '../Reveal'

const values = [
  'Workflow configurable',
  'Aprobadores por nivel',
  'Reglas por área',
  'Notificaciones automáticas',
  '100% flexible',
]

const steps = [
  { n: 'A', t: 'Defines tus pasos', s: 'Los que tu negocio necesita' },
  { n: 'B', t: 'Asignas aprobadores', s: 'En el orden que tú decides' },
  { n: 'C', t: 'Easy Flow lo orquesta', s: 'Notifica, avanza y registra solo' },
]

const Flexibility = () => {
  return (
    <section className="tile-wrap text-ink-text">
      <div className="tile grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal as="div" className="kicker">
            Hecho a la medida de tu empresa
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-4 font-display text-[clamp(1.7rem,4vw,2.9rem)] font-bold leading-[1.08] text-navy"
          >
            Tu flujo, <span className="text-teal">a tu manera.</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mt-5 max-w-[50ch] text-[1.12rem] text-ink-text-dim">
            No hay dos empresas iguales, y Easy Flow lo sabe. El workflow se configura para cada
            cliente: defines los pasos, los niveles de aprobación, quién participa y cómo se
            notifica. La plataforma se adapta a tu operación —no al revés.
          </Reveal>
          <Reveal as="div" delay={2} className="mt-8 flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-navy/15 bg-white px-5 py-3 font-display text-[1rem] font-medium text-ink-text shadow-[0_10px_30px_-22px_rgba(14,34,53,.35)]"
              >
                {v}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={2}
          className="rounded-[26px] border border-navy/10 bg-paper p-7 md:p-9"
        >
          <div className="grid gap-3.5">
            {steps.map((step, i) => (
              <div key={step.n}>
                <div className="flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-white px-4 py-4 shadow-card">
                  <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-teal font-display text-[0.92rem] font-bold text-white">
                    {step.n}
                  </span>
                  <span className="font-display text-[0.98rem] font-medium text-ink-text">
                    {step.t}
                    <span className="block font-sans text-[0.82rem] font-normal text-ink-text-dim">
                      {step.s}
                    </span>
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-[33px] h-3.5 w-0.5 [background:linear-gradient(var(--teal),transparent)]" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Flexibility
