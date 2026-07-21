import Reveal from './Reveal'
import cardFlow from '../assets/photos/card-flow.jpg'
import cardCustom from '../assets/photos/card-custom.jpg'
import cardTech from '../assets/photos/card-tech.jpg'

const cards = [
  {
    img: cardFlow,
    kicker: 'El flujo guía. Tú decides.',
    title: 'Un proceso que no se aprende —se sigue.',
    text: 'EasyFlow no obliga a tu equipo a memorizar pantallas ni manuales. La plataforma lleva a cada persona de la mano: le avisa cuando hay algo que hacer y le muestra el camino. Nadie tiene que preguntarse «¿y ahora qué?».',
  },
  {
    img: cardCustom,
    kicker: 'Hecho a la medida de tu empresa',
    title: 'Tu flujo, a tu manera.',
    text: 'No hay dos empresas iguales, y EasyFlow lo sabe. El workflow se configura para cada cliente: defines los pasos, los niveles de aprobación, quién participa y cómo se notifica. La plataforma se adapta a tu operación —no al revés.',
    steps: [
      ['Defines tus pasos', 'Los que tu negocio necesita'],
      ['Asignas aprobadores', 'En el orden que tú decides'],
      ['EasyFlow lo orquesta', 'Notifica, avanza y registra solo'],
    ],
  },
  {
    img: cardTech,
    kicker: 'Tecnología que no te preocupa',
    title: 'Moderna, segura y lista para crecer contigo.',
    text: 'EasyFlow está construido sobre arquitectura cloud de última generación: segura, escalable y desacoplada. Eso significa disponibilidad, velocidad y la tranquilidad de que la plataforma acompaña tu crecimiento sin frenarte.',
  },
]

const FeatureCards = () => {
  return (
    <section className="bg-gray py-24 md:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-7 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i + 1} className="bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6 pb-8">
              <div className="mb-2 font-display text-[0.62rem] font-bold uppercase tracking-[0.2em] text-blue">
                {c.kicker}
              </div>
              <h3 className="mb-3 font-display text-[1.02rem] font-bold text-ink">{c.title}</h3>
              <p className="text-[0.86rem] leading-relaxed text-text-dim">{c.text}</p>
              {c.steps && (
                <ul className="mt-4 grid gap-2 border-t border-gray-2 pt-4">
                  {c.steps.map(([t, s], j) => (
                    <li key={t} className="flex items-start gap-2.5 text-[0.82rem]">
                      <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-blue/10 font-display text-[0.62rem] font-bold text-blue">
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span className="text-text">
                        <strong className="font-semibold">{t}:</strong>{' '}
                        <span className="text-text-dim">{s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards
