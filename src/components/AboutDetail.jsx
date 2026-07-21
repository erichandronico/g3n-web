import { Target, Eye, TrendingUp, Layers, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const mv = [
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
]

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

const AboutDetail = () => {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-7">
        {/* Misión / Visión */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {mv.map((b, i) => (
            <Reveal key={b.title} delay={i + 1} className="border border-gray-2 p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full border-[1.5px] border-blue text-blue">
                  <b.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-[0.82rem] font-extrabold uppercase tracking-[0.16em] text-ink">
                  {b.title}
                </h3>
              </div>
              <p className="text-[0.88rem] text-text-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* El ADN de G3N */}
        <Reveal as="h3" className="mt-16 text-center font-display text-[0.82rem] font-extrabold uppercase tracking-[0.2em] text-ink">
          El ADN de <span className="text-blue">G3N</span>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {adn.map((card, i) => (
            <Reveal
              key={card.tag}
              delay={i + 1}
              className="border border-gray-2 bg-gray p-7 transition-colors duration-300 hover:border-blue/40"
            >
              <div className="mb-4 grid h-[46px] w-[46px] place-items-center rounded-full border-[1.5px] border-blue text-blue">
                <card.icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div className="mb-3 font-display text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-blue">
                {card.tag}
              </div>
              {card.text && <p className="text-[0.85rem] text-text-dim">{card.text}</p>}
              {card.list && (
                <ul className="grid gap-2.5">
                  {card.list.map(([k, v]) => (
                    <li key={k} className="text-[0.85rem] text-text-dim">
                      <strong className="text-text">{k}:</strong> {v}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* Filosofía */}
        <Reveal delay={1} className="mt-16 border-l-4 border-blue bg-gray p-8 md:p-10">
          <h3 className="mb-3 font-display text-[0.82rem] font-extrabold uppercase tracking-[0.16em] text-ink">
            Más que una marca, una filosofía
          </h3>
          <p className="max-w-[78ch] text-[0.9rem] text-text-dim">
            Creemos que toda empresa, sin importar su tamaño, puede dar el salto a una versión
            mejorada de sí misma a través de la tecnología. Por eso desarrollamos soluciones que no
            solo resuelven problemas actuales, sino que preparan a nuestros clientes para lo que
            viene. G3N es evolución tecnológica con propósito, innovación que impulsa negocios
            reales y el puente entre tu presente digital y tu futuro exponencial.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutDetail
