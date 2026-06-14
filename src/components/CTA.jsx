import easyflowIso from '../assets/easyflow-iso.png'
import Reveal from './Reveal'

const CTA = ({ demoUrl }) => {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-32 text-center"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0, #15466b 0%, var(--ink) 55%, var(--ink-deep) 100%)',
      }}
    >
      <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] animate-float rounded-full opacity-[0.32] blur-[80px] [background:radial-gradient(circle,#2DD4BF,transparent_65%)]" />

      <div className="relative z-[2] mx-auto max-w-[1180px] px-7">
        <Reveal className="mb-7 inline-block">
          <img
            src={easyflowIso}
            width={120}
            height={54}
            alt="Easy Flow"
            className="mx-auto h-auto w-[110px] animate-iso-float drop-shadow-[0_14px_40px_rgba(45,212,191,.35)]"
          />
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mx-auto max-w-[16ch] font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold"
        >
          Deja que tu empresa <span className="grad-text">fluya.</span>
        </Reveal>
        <Reveal as="p" delay={2} className="mx-auto mt-6 max-w-[50ch] text-[1.15rem] text-text-dim">
          Te mostramos cómo Easy Flow ordena tus compras, inventario, ventas y contabilidad en un
          solo flujo, configurado a la medida de tu operación.
        </Reveal>
        <Reveal as="div" delay={3} className="mt-10">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Solicita una demo por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA
