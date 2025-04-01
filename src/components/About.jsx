import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NuestraMisionVision from './About/NuestraMisionVision'
import PorqueElegirnos from './About/PorqueElegirnos'
import QueEsG3N from './About/QueEsG3N'
import FilosofiaG3N from './About/FilosofiaG3N'

const About = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto">
            En <strong>G3N</strong> nos especializamos en crear soluciones de software que impulsan el crecimiento de nuestros clientes.
            Combinamos innovación, inteligencia artificial y automatización para transformar ideas en productos escalables, eficientes y listos para el futuro.
          </p>
        </div>

        <NuestraMisionVision />
        <PorqueElegirnos />
        <FilosofiaG3N />
        <QueEsG3N />
      </div>
    </section>
  )
}

export default About
