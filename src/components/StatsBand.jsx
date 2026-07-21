import { Code2, Workflow, BrainCircuit } from 'lucide-react'
import Reveal from './Reveal'
import statsBg from '../assets/photos/stats-bg.jpg'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo a medida',
    text: 'Soluciones web, móviles y de escritorio ajustadas a tus procesos y objetivos.',
  },
  {
    icon: Workflow,
    title: 'Automatización inteligente',
    text: 'Optimizamos tareas repetitivas con bots, integraciones y procesos autónomos.',
  },
  {
    icon: BrainCircuit,
    title: 'Inteligencia artificial',
    text: 'Modelos de IA para análisis de datos, predicciones, clasificación y más.',
  },
]

const StatsBand = ({ onContact }) => {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 md:py-28">
      <img
        src={statsBg}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,24,39,.95)_0%,rgba(22,49,79,.88)_60%,rgba(22,49,79,.8)_100%)]" />

      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-7 lg:grid-cols-2">
        <div>
          <Reveal as="div" className="kicker mb-4 !text-white/80">
            Detrás de EasyFlow
          </Reveal>
          <Reveal
            as="h2"
            delay={1}
            className="mb-5 max-w-[18ch] font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-[1.15] text-white"
          >
            Somos <span className="text-blue-soft">G3N</span>, evolución tecnológica con propósito.
          </Reveal>
          <Reveal as="p" delay={2} className="mb-8 text-[0.95rem] text-white/80">
            En G3N creamos soluciones de software que impulsan el crecimiento de nuestros clientes.
            Combinamos innovación, inteligencia artificial y automatización para transformar ideas
            en productos escalables, eficientes y listos para el futuro. EasyFlow es la primera
            —y no será la última.
          </Reveal>
          <Reveal as="div" delay={3}>
            <button onClick={onContact} className="btn btn-primary">
              Solicita una demo
            </button>
          </Reveal>
        </div>

        <div>
          <Reveal as="h3" className="mb-2 font-display text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-white">
            Más allá de EasyFlow
          </Reveal>
          <Reveal as="p" delay={1} className="mb-7 text-[0.88rem] text-white/70">
            Además de nuestra plataforma, acompañamos a las empresas con desarrollo y servicios
            tecnológicos a la medida.
          </Reveal>
          <div className="grid gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i + 1} className="flex items-start gap-4">
                <div className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full border-[1.5px] border-white/60 text-white">
                  <s.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white">
                    {s.title}
                  </h4>
                  <p className="max-w-[46ch] text-[0.85rem] text-white/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsBand
