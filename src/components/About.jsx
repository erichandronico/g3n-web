import {
  Target,
  Eye,
  TrendingUp,
  Layers,
  Sparkles,
  Code2,
  Workflow,
  BrainCircuit,
} from 'lucide-react'
import Reveal from './Reveal'

const adn = [
  {
    icon: TrendingUp,
    tag: 'G — Growth',
    text: 'Impulsamos el crecimiento de nuestros clientes con soluciones tecnológicas robustas, eficientes y escalables. Crecer no es solo aumentar cifras: es mejorar procesos, experiencias y resultados sostenibles en el tiempo.',
  },
  {
    icon: Layers,
    tag: '3 — Etapas clave',
    list: [
      ['Analizar', 'Evaluamos la situación actual de tu empresa y sus desafíos digitales.'],
      ['Transformar', 'Aplicamos innovación y herramientas digitales para optimizar procesos.'],
      ['Escalar', 'Preparamos tus sistemas y equipos para crecer y adaptarse continuamente.'],
    ],
  },
  {
    icon: Sparkles,
    tag: 'N — Next',
    text: 'Nos proyectamos hacia lo que viene. Llevamos a tu organización al siguiente nivel, anticipándonos a las tendencias tecnológicas y adaptándonos al cambio constante del entorno digital.',
  },
]

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

const About = () => {
  return (
    <section id="nosotros" className="tile-wrap">
      <div className="tile relative overflow-hidden">
        {/* Intro */}
        <Reveal as="div" className="kicker">
          Detrás de Easy Flow
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mt-4 max-w-[18ch] font-display text-[clamp(1.7rem,4vw,2.9rem)] font-bold leading-[1.08] text-navy"
        >
          Somos <span className="text-teal">G3N</span>, evolución tecnológica con propósito.
        </Reveal>
        <Reveal as="p" delay={2} className="mt-5 max-w-[62ch] text-[1.12rem] text-text-dim">
          En G3N creamos soluciones de software que impulsan el crecimiento de nuestros clientes.
          Combinamos innovación, inteligencia artificial y automatización para transformar ideas en
          productos escalables, eficientes y listos para el futuro. Easy Flow es la primera —y no
          será la última.
        </Reveal>

        {/* Misión / Visión */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: 'Nuestra Misión',
              text: 'Impulsar la transformación digital de las organizaciones a través de soluciones tecnológicas que agregan valor real, optimizando los procesos y asegurando una evolución sostenible.',
            },
            {
              icon: Eye,
              title: 'Nuestra Visión',
              text: 'Ser referentes en innovación tecnológica para la evolución digital de las empresas: soluciones robustas, seguras y estratégicamente diseñadas para que cada compañía —sin importar su tamaño— tome decisiones más inteligentes y crezca en un entorno digital dinámico y seguro.',
            },
          ].map((b, i) => (
            <Reveal
              key={b.title}
              delay={i + 1}
              className="rounded-brand border border-navy/10 bg-paper p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-teal/20 bg-teal/10">
                  <b.icon className="h-5 w-5 text-teal" strokeWidth={1.9} />
                </div>
                <h3 className="font-display text-[1.35rem] font-bold text-navy">{b.title}</h3>
              </div>
              <p className="text-[1rem] text-text-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* ADN de G3N */}
        <Reveal as="h3" className="mt-20 font-display text-[1.6rem] font-bold text-navy">
          El ADN de <span className="text-teal">G3N</span>
        </Reveal>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {adn.map((card, i) => (
            <Reveal
              key={card.tag}
              delay={i + 1}
              className="group relative overflow-hidden rounded-brand border border-navy/10 bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/30"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-[14px] border border-teal/20 bg-teal/10">
                <card.icon className="h-6 w-6 text-teal" strokeWidth={1.7} />
              </div>
              <div className="mb-3 font-display text-[1.15rem] font-bold text-teal">{card.tag}</div>
              {card.text && <p className="text-[0.96rem] text-text-dim">{card.text}</p>}
              {card.list && (
                <ul className="grid gap-2.5">
                  {card.list.map(([k, v]) => (
                    <li key={k} className="text-[0.94rem] text-text-dim">
                      <strong className="text-text">{k}:</strong> {v}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* Filosofía */}
        <Reveal
          delay={1}
          className="mt-16 rounded-brand border border-teal/20 bg-teal/[0.05] p-8 md:p-10"
        >
          <h3 className="font-display text-[1.4rem] font-bold text-navy">
            Más que una marca, una filosofía
          </h3>
          <p className="mt-3 max-w-[70ch] text-[1.02rem] text-text-dim">
            Creemos que toda empresa, sin importar su tamaño, puede dar el salto a una versión
            mejorada de sí misma a través de la tecnología. Por eso desarrollamos soluciones que no
            solo resuelven problemas actuales, sino que preparan a nuestros clientes para lo que
            viene. G3N es evolución tecnológica con propósito, innovación que impulsa negocios reales
            y el puente entre tu presente digital y tu futuro exponencial.
          </p>
        </Reveal>

        {/* Servicios — capacidades más allá de Easy Flow */}
        <Reveal as="h3" className="mt-20 font-display text-[1.6rem] font-bold text-navy">
          Más allá de Easy Flow
        </Reveal>
        <Reveal as="p" delay={1} className="mt-3 max-w-[54ch] text-[1.05rem] text-text-dim">
          Además de nuestra plataforma, acompañamos a las empresas con desarrollo y servicios
          tecnológicos a la medida.
        </Reveal>
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i + 1}
              className="rounded-brand border border-navy/10 bg-paper p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-[14px] border border-teal/20 bg-teal/10">
                <s.icon className="h-6 w-6 text-teal" strokeWidth={1.7} />
              </div>
              <h4 className="mb-2 font-display text-[1.15rem] font-semibold text-navy">{s.title}</h4>
              <p className="text-[0.95rem] text-text-dim">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
