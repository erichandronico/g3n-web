import { useEffect } from 'react'
import {
  FaSeedling,
  FaChartLine,
  FaStream,
  FaForward,
  FaCommentDots,
  FaRocket
} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ¿Quiénes somos? */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto">
            En <strong>G3N</strong> nos especializamos en crear soluciones de software que impulsan el crecimiento de nuestros clientes.
            Combinamos innovación, inteligencia artificial y automatización para transformar ideas en productos escalables, eficientes y listos para el futuro.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 text-gray-700 mb-20">
          {/* Misión */}
          <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
            <div className="flex items-center gap-2 mb-3">
              <FaRocket className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
            </div>
            <p className="mb-4 leading-relaxed">
              Impulsar la transformación digital de organizaciones a través de soluciones tecnológicas que agregan valor real, optimizan procesos y aseguran una evolución sostenible.
            </p>
            <p className="leading-relaxed">
              En G3N desarrollamos herramientas a medida como dashboards, indicadores clave (KPIs), alertas, objetivos automatizados e inteligencia aplicada.
              Desde la migración segura a la nube hasta la automatización de tareas críticas, nuestro foco está en digitalizar procesos manuales, ineficientes o inseguros,
              ayudando a nuestros clientes a operar con mayor eficiencia, control y proyección.
            </p>
          </div>

          {/* Visión */}
          <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="800">
            <div className="flex items-center gap-2 mb-3">
              <FaSeedling className="text-green-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
            </div>
            <p className="mb-4 leading-relaxed">
              Ser referentes en innovación tecnológica para la evolución digital de las empresas, aportando soluciones robustas, seguras y estratégicamente diseñadas para cada realidad organizacional.
            </p>
            <p className="leading-relaxed">
              En G3N visualizamos un futuro donde cada compañía —sin importar su tamaño o industria— pueda tomar decisiones más inteligentes, operar con procesos optimizados y crecer en un entorno digital dinámico y seguro.
              Nuestra visión se sustenta en la experiencia, el compromiso técnico y la capacidad de anticiparnos al cambio.
            </p>
          </div>
        </div>

        {/* ¿Por qué G3N? */}
        <div className="space-y-10 mb-20" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FaSeedling className="text-green-600" /> ¿Por qué G3N?
            </h3>
            <p>
              G3N representa nuestra visión de evolución tecnológica aplicada al crecimiento estratégico de las organizaciones.
            </p>
          </div>

        {/* G, 3, N como cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
        {/* G */}
        <div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-delay="1000"
        >
            <div className="flex items-center gap-2 mb-3">
            <FaChartLine className="text-blue-600 text-xl" />
            <h4 className="text-lg font-semibold text-gray-900">G – Growth</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
            Impulsamos el crecimiento de nuestros clientes mediante soluciones tecnológicas robustas, eficientes y escalables.
            Entendemos que el crecimiento no es solo aumentar cifras, sino mejorar procesos, experiencias y resultados sostenibles en el tiempo.
            </p>
        </div>

        {/* 3 */}
        <div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-delay="1500"
        >
            <div className="flex items-center gap-2 mb-3">
            <FaStream className="text-indigo-600 text-xl" />
            <h4 className="text-lg font-semibold text-gray-900">3 – Etapas clave</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li><strong>Analizar:</strong> Evaluamos la situación actual de tu empresa y sus desafíos digitales.</li>
            <li><strong>Transformar:</strong> Aplicamos innovación y herramientas digitales para optimizar procesos.</li>
            <li><strong>Escalar:</strong> Preparamos tus sistemas y equipos para crecer y adaptarse continuamente.</li>
            </ul>
        </div>

        {/* N */}
        <div
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-delay="2000"
        >
            <div className="flex items-center gap-2 mb-3">
            <FaForward className="text-purple-600 text-xl" />
            <h4 className="text-lg font-semibold text-gray-900">N – Next</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
            Nos proyectamos hacia lo que viene. Nuestro enfoque está en llevar a tu organización al siguiente nivel,
            anticipándonos a las tendencias tecnológicas y adaptándonos al cambio constante del entorno digital.
            </p>
        </div>
        </div>

        </div>

        {/* Filosofía */}
        <div className="space-y-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <FaCommentDots className="text-yellow-600" /> G3N: Más que un nombre, una filosofía
          </h3>
          <p>
            En G3N creemos que toda empresa, sin importar su tamaño, puede dar el salto a una versión mejorada de sí misma a través de la tecnología.
            Por eso, desarrollamos soluciones que no solo resuelven problemas actuales, sino que preparan a nuestros clientes para lo que viene.
          </p>

          <h4 className="text-md font-semibold text-gray-900 mb-2">G3N es:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li>Evolución tecnológica con propósito.</li>
            <li>Innovación que impulsa negocios reales.</li>
            <li>El puente entre tu presente digital y tu futuro exponencial.</li>
          </ul>

          <div className="flex justify-center pt-6">
            <FaRocket className="text-blue-600 text-6xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About