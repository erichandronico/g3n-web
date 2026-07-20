import easyflowIso from '../assets/easyflow-iso.png'
import Reveal from './Reveal'

const CTA = ({ onContact }) => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-32 text-center">
      <div className="relative z-[2] mx-auto max-w-[1180px] px-7">
        <Reveal className="mb-7 inline-block">
          <img
            src={easyflowIso}
            width={120}
            height={54}
            alt="Easy Flow"
            className="mx-auto h-auto w-[110px] animate-iso-float drop-shadow-[0_12px_28px_rgba(14,34,53,.18)]"
          />
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mx-auto max-w-[16ch] font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold text-navy"
        >
          Deja que tu empresa <span className="text-teal">fluya.</span>
        </Reveal>
        <Reveal as="p" delay={2} className="mx-auto mt-6 max-w-[50ch] text-[1.15rem] text-text-dim">
          Te mostramos cómo Easy Flow ordena tus compras, inventario, ventas y contabilidad en un
          solo flujo, configurado a la medida de tu operación.
        </Reveal>
        <Reveal as="div" delay={3} className="mt-10">
          <button onClick={onContact} className="btn btn-primary">
            Solicita una demo
          </button>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA
