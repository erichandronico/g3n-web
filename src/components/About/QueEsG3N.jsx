import { FaChartLine, FaStream, FaForward, FaSeedling } from 'react-icons/fa'

const QueEsG3N = () => {
  return (
    <div className="space-y-10 mb-20" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
      {/* Título */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <FaSeedling className="text-green-600" /> ¿Qué es G3N?
        </h3>
        <p>
          G3N representa nuestra visión de evolución tecnológica aplicada al crecimiento estratégico de las organizaciones.
        </p>
      </div>

      {/* Cards G - 3 - N */}
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
  )
}

export default QueEsG3N