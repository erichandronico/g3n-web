import { ShieldCheck, Send, Smartphone, Check } from 'lucide-react'
import Reveal from './Reveal'

const feats = [
  {
    icon: ShieldCheck,
    title: 'Cloud segura y escalable',
    text: 'Arquitectura moderna y desacoplada en la nube: tus datos protegidos y la plataforma siempre disponible, crezcas lo que crezcas.',
  },
  {
    icon: Send,
    title: 'Integración con Telegram',
    text: 'Recibe avisos y aprueba sin entrar a la plataforma. EasyFlow te llega por Telegram para que nada se detenga, estés donde estés.',
  },
  {
    icon: Smartphone,
    title: 'App móvil iOS y Android',
    text: 'Lleva tus flujos en el bolsillo. Aprueba, consulta y avanza desde tu teléfono.',
    soon: 'En desarrollo',
  },
]

const chips = [
  'Tiempo real',
  'Notificaciones email + in-app',
  'Permisos por rol',
  'Trazabilidad total',
]

const PlatformFeatures = () => {
  return (
    <section className="bg-gray py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal as="div" className="kicker mb-12 text-center">
          Tecnología que no te preocupa
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={i + 1} className="bg-white p-8">
              <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px] border-blue text-blue">
                <f.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mb-3 font-display text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-ink">
                {f.title}
              </h3>
              <p className="text-[0.86rem] text-text-dim">{f.text}</p>
              {f.soon && (
                <span className="mt-4 inline-block border border-blue/25 bg-blue/5 px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                  {f.soon}
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          {chips.map((c, i) => (
            <Reveal
              key={c}
              delay={i}
              className="flex items-center gap-2.5 border border-gray-2 bg-white px-5 py-2.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] text-text"
            >
              <Check className="h-4 w-4 text-blue" strokeWidth={2.4} />
              {c}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformFeatures
