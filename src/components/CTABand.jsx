import Reveal from './Reveal'
import easyflowIso from '../assets/easyflow-iso.png'

const CTABand = ({ onContact }) => {
  return (
    <section id="contacto" className="bg-blue py-20 text-center md:py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <Reveal className="mb-6 inline-block">
          <img src={easyflowIso} width={120} height={54} alt="EasyFlow" className="mx-auto h-auto w-[84px]" />
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mx-auto max-w-[18ch] font-display text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold uppercase tracking-[0.02em] text-white"
        >
          Deja que tu empresa fluya.
        </Reveal>
        <Reveal as="p" delay={2} className="mx-auto mt-5 max-w-[52ch] text-[0.95rem] text-white/85">
          Te mostramos cómo EasyFlow ordena tus compras, inventario, ventas y contabilidad en un
          solo flujo, configurado a la medida de tu operación.
        </Reveal>
        <Reveal as="div" delay={3} className="mt-9">
          <button
            onClick={onContact}
            className="btn bg-white !text-navy hover:bg-white/90"
          >
            Solicita una demo
          </button>
        </Reveal>
      </div>
    </section>
  )
}

export default CTABand
