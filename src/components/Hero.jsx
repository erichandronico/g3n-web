import background from '../assets/background.jpg'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay para oscurecer un poco el fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative max-w-4xl text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Impulsamos tu innovación<br />con soluciones tecnológicas de alto impacto.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Desarrollo de software, automatización y herramientas inteligentes hechas a medida.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Ver Servicios
        </a>
      </div>
    </section>
  )
}

export default Hero