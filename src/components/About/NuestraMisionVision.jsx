import { FaRocket, FaSeedling } from 'react-icons/fa'

const NuestraMisionVision = ({ delay1="200", delay2="800", duration="2000", effect1='fade-right', effect2="fade-left"}) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 text-gray-700 mb-20">
      {/* Misión */}
      <div data-aos={effect1} data-aos-duration={duration} data-aos-delay={delay1}>
        <div className="flex items-center gap-2 mb-3">
          <FaRocket className="text-blue-600 text-2xl" />
          <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
        </div>
        <p className="mb-4 leading-relaxed">
          Impulsar la transformación digital de las organizaciones a través de soluciones tecnológicas que agregan valor real, optimizando los procesos y asegurando una evolución sostenible.
        </p>
      </div>

      {/* Visión */}
      <div data-aos={effect2} data-aos-duration={duration} data-aos-delay={delay2}>
        <div className="flex items-center gap-2 mb-3">
          <FaSeedling className="text-green-600 text-2xl" />
          <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
        </div>
        <p className="mb-4 leading-relaxed">
          Ser referentes en innovación tecnológica para la evolución digital de las empresas, aportando soluciones robustas, seguras y estratégicamente diseñadas para cada realidad organizacional, visualizando un futuro donde cada compañía —sin importar su tamaño o industria— pueda tomar decisiones más inteligentes, operar con procesos optimizados y crecer en un entorno digital dinámico y seguro.
        </p>
      </div>
    </div>
  )
}

export default NuestraMisionVision