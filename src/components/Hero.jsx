import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import background from '../assets/background2.jpeg'

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-fixed bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay para oscurecer un poco el fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative max-w-4xl text-center text-white z-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Impulsamos tu innovación<br />con soluciones tecnológicas de alto impacto.
        </h1>

        <p
          className="text-lg md:text-xl mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Desarrollo de software, automatización y herramientas inteligentes hechas a medida.
        </p>

        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Ver Servicios
        </a>
      </div>
    </section>
  )
}

export default Hero