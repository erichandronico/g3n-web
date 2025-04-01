import { FaCommentDots, FaRocket } from 'react-icons/fa'

const FilosofiaG3N = ({ delay="1000", duration="1500", effect='fade-up'}) => {
  return (
    <div
      className="space-y-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
        <FaCommentDots className="text-yellow-600" /> G3N: Más que una marca, una filosofía
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
  )
}

export default FilosofiaG3N