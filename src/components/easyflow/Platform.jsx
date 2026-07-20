import { ShieldCheck, Send, Smartphone, Check } from 'lucide-react'
import Reveal from '../Reveal'

const feats = [
  {
    icon: ShieldCheck,
    title: 'Cloud segura y escalable',
    text: 'Arquitectura moderna y desacoplada en la nube: tus datos protegidos y la plataforma siempre disponible, crezcas lo que crezcas.',
  },
  {
    icon: Send,
    title: 'Integración con Telegram',
    text: 'Recibe avisos y aprueba sin entrar al sistema. Easy Flow te llega por Telegram para que nada se detenga, estés donde estés.',
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

const Platform = () => {
  return (
    <section className="tile-wrap text-ink-text">
      <div className="tile">
        <Reveal as="div" className="kicker">
          Tecnología que no te preocupa
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mt-4 font-display text-[clamp(1.7rem,4vw,2.9rem)] font-bold leading-[1.08] text-navy"
        >
          Moderna, segura y <span className="text-teal">lista para crecer contigo.</span>
        </Reveal>
        <Reveal as="p" delay={2} className="mt-4 max-w-[56ch] text-[1.12rem] text-ink-text-dim">
          Easy Flow está construido sobre arquitectura cloud de última generación: segura, escalable
          y desacoplada. Eso significa disponibilidad, velocidad y la tranquilidad de que la
          plataforma acompaña tu crecimiento sin frenarte.
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {feats.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i + 1}
              className="rounded-brand border border-navy/10 bg-paper p-8 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="mb-5 grid h-[50px] w-[50px] place-items-center rounded-[14px] bg-navy">
                <f.icon className="h-6 w-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 font-display text-[1.22rem] font-bold text-ink-text">{f.title}</h3>
              <p className="text-[0.95rem] text-ink-text-dim">{f.text}</p>
              {f.soon && (
                <span className="mt-3.5 inline-block rounded-full bg-blue/10 px-3 py-[5px] font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-blue">
                  {f.soon}
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3.5">
          {chips.map((c, i) => (
            <Reveal
              key={c}
              delay={i}
              className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-paper px-5 py-2.5 font-display text-[0.92rem] font-medium text-ink-text"
            >
              <Check className="h-4 w-4 text-teal" strokeWidth={2.4} />
              {c}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platform
