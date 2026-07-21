import {
  Bell,
  CheckCheck,
  Activity,
  ShoppingCart,
  Boxes,
  LineChart,
  BookText,
} from 'lucide-react'
import Reveal from './Reveal'

const points = [
  {
    icon: Bell,
    title: 'Notificaciones que te buscan a ti',
    text: 'Cada acción pendiente llega por correo y dentro de la plataforma, con un enlace directo a lo que tienes que resolver. El usuario no busca: el trabajo lo encuentra.',
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

/* Nodos del canvas de workflow (módulos del producto, no un flujo de cliente) */
const nodes = [
  { icon: ShoppingCart, label: 'Compras', x: '6%', y: '14%' },
  { icon: Boxes, label: 'Inventario', x: '56%', y: '6%' },
  { icon: LineChart, label: 'Ventas', x: '62%', y: '44%' },
  { icon: BookText, label: 'Contabilidad', x: '30%', y: '76%' },
  { icon: CheckCheck, label: 'Aprobación', x: '10%', y: '46%' },
  { icon: Bell, label: 'Notificación', x: '70%', y: '74%' },
]

const MeetEasyFlow = ({ onContact }) => {
  return (
    <section id="easyflow" className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-7 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal as="div" className="kicker mb-4">
            ¿Qué es EasyFlow?
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mb-6 max-w-[26ch] font-display text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold leading-[1.25] text-ink"
          >
            La solución que pone a trabajar juntos{' '}
            <span className="text-blue">tus procesos, tus personas y tus datos</span> —sin
            fricción.
          </Reveal>
          <Reveal as="p" delay={2} className="mb-8 text-[0.95rem] text-text-dim">
            En lugar de planillas dispersas, correos sueltos y aprobaciones que se pierden,
            EasyFlow unifica el día a día operativo de tu empresa en una plataforma única. Cada
            solicitud avanza sola por su camino, cada responsable sabe exactamente qué le toca, y
            todo queda registrado y conectado de punta a punta.
          </Reveal>

          <div className="mb-9 grid gap-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i + 1} className="flex items-start gap-4">
                <div className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full border-[1.5px] border-blue text-blue">
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink">
                    {p.title}
                  </h4>
                  <p className="max-w-[52ch] text-[0.86rem] text-text-dim">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" delay={3}>
            <button onClick={onContact} className="btn btn-primary">
              Solicita una demo
            </button>
          </Reveal>
        </div>

        {/* Canvas estilo editor de workflows: módulos conectados, sin flujo de cliente */}
        <Reveal delay={2} className="overflow-hidden rounded-[6px] border border-navy/20 bg-navy shadow-[0_30px_60px_-30px_rgba(11,24,39,.5)]">
          {/* Barra superior */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </span>
            <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/60">
              EasyFlow · Workflow
            </span>
            <span className="flex items-center gap-2 font-display text-[0.6rem] font-bold uppercase tracking-[0.12em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Activo
            </span>
          </div>

          {/* Lienzo con grid de puntos */}
          <div
            className="relative aspect-[4/3.4] sm:aspect-[4/3]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          >
            {/* Conectores */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 320"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 90 70 C 150 60, 190 45, 235 50" className="flow-line" stroke="#82BEE8" strokeWidth="1.6" fill="none" />
              <path d="M 285 75 C 300 105, 300 120, 288 150" className="flow-line" stroke="#82BEE8" strokeWidth="1.6" fill="none" />
              <path d="M 265 175 C 220 215, 190 235, 155 255" className="flow-line" stroke="#82BEE8" strokeWidth="1.6" fill="none" />
              <path d="M 70 90 C 60 120, 58 135, 62 160" className="flow-line" stroke="#82BEE8" strokeWidth="1.6" fill="none" />
              <path d="M 95 170 C 145 185, 175 190, 245 175" className="flow-line" stroke="#5C8DBB" strokeWidth="1.3" fill="none" />
              <path d="M 300 180 C 315 210, 315 225, 305 245" className="flow-line" stroke="#5C8DBB" strokeWidth="1.3" fill="none" />
            </svg>

            {/* Nodos */}
            {nodes.map((n) => (
              <div
                key={n.label}
                className="absolute flex items-center gap-2.5 rounded-[6px] border border-white/15 bg-white/[0.97] py-2 pl-2 pr-3.5 shadow-[0_10px_24px_rgba(0,0,0,.35)]"
                style={{ left: n.x, top: n.y }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-[5px] bg-blue text-white">
                  <n.icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="font-display text-[0.72rem] font-bold text-ink">{n.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default MeetEasyFlow
