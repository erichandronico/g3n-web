import { Bell, CheckCheck, Activity } from 'lucide-react'
import Reveal from '../Reveal'

const points = [
  {
    icon: Bell,
    title: 'Notificaciones que te buscan a ti',
    text: 'Cada acción pendiente llega por correo y dentro del sistema, con un enlace directo a lo que tienes que resolver. El usuario no busca: el trabajo lo encuentra.',
  },
  {
    icon: CheckCheck,
    title: 'Aprobadores en su lugar exacto',
    text: 'Defines quién aprueba qué y en qué orden. Solo quien corresponde puede avanzar el siguiente paso, en la secuencia correcta.',
  },
  {
    icon: Activity,
    title: 'Trazabilidad de punta a punta',
    text: 'Desde la solicitud hasta el registro contable, cada paso queda guardado. Siempre sabes en qué estado está todo y quién hizo qué.',
  },
]

const steps = [
  { n: '1', t: 'Solicitud de compra', s: 'Creada por el área que la necesita', badge: 'Inicia' },
  { n: '2', t: 'Aprobación', s: 'Notifica al aprobador que corresponde', badge: 'Aprueba' },
  { n: '3', t: 'Orden de compra', s: 'Se genera y se envía al proveedor', badge: 'Emite' },
  { n: '4', t: 'Recepción e inventario', s: 'El stock se actualiza solo', badge: 'Recibe' },
  { n: '5', t: 'Registro contable', s: 'Todo queda conciliado', badge: 'Cierra' },
]

const FlowGuides = () => {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-7 md:gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Texto */}
        <div>
          <Reveal as="div" className="kicker">
            El flujo guía. Tú decides.
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mt-4 max-w-[14ch] font-display text-[clamp(1.7rem,4vw,2.9rem)] font-bold leading-[1.08] text-navy"
          >
            Un proceso que <span className="text-teal">no se aprende</span> —se sigue.
          </Reveal>
          <Reveal as="p" delay={2} className="mt-5 max-w-[48ch] text-[1.1rem] text-text-dim">
            Easy Flow no obliga a tu equipo a memorizar pantallas ni manuales. La plataforma lleva a
            cada persona de la mano: le avisa cuando hay algo que hacer y le muestra el camino. Nadie
            tiene que preguntarse «¿y ahora qué?».
          </Reveal>

          <div className="mt-8 grid gap-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="flex items-start gap-4">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-teal/20 bg-teal/10">
                  <p.icon className="h-5 w-5 text-teal" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-[1.08rem] font-semibold">{p.title}</h4>
                  <p className="text-[0.96rem] text-text-dim">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tarjeta de flujo */}
        <Reveal
          delay={2}
          className="relative overflow-hidden rounded-[26px] border border-navy/10 bg-white p-7 shadow-soft md:p-9"
        >
          <div className="relative grid gap-3.5">
            {steps.map((step, i) => (
              <div key={step.n}>
                <div className="flex items-center gap-4 rounded-2xl border border-navy/[0.08] bg-paper px-4 py-4">
                  <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-teal font-display text-[0.92rem] font-bold text-white">
                    {step.n}
                  </span>
                  <span className="font-display text-[0.98rem] font-medium text-text">
                    {step.t}
                    <span className="block font-sans text-[0.82rem] font-normal text-text-dim">
                      {step.s}
                    </span>
                  </span>
                  <span className="ml-auto rounded-full border border-teal/20 bg-teal/10 px-2.5 py-[5px] font-display text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teal">
                    {step.badge}
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

export default FlowGuides
