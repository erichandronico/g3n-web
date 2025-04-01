import { FaSeedling } from 'react-icons/fa'

const PorqueElegirnos = ({ delay="1000", duration="2000", effect='fade-up'}) => {
  return (
    <div
      className="space-y-10 mb-20"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <FaSeedling className="text-green-600" /> ¿Por qué elegirnos?
        </h3>
        <p className="mb-4 leading-relaxed">
          G3N representa nuestra visión de evolución tecnológica aplicada al crecimiento estratégico de las organizaciones.
        </p>
        <p className="leading-relaxed">
          Con nosotros podrás desarrollar tu propio Dashboard, indicadores clave (KPIs), alertas, establecer objetivos automatizados e incorporar inteligencia aplicada.
          Trabajamos desde la migración segura a la nube de tus datos hasta la automatización de tareas críticas. Nuestro foco está en agilizar los procesos manuales, transformándolos en herramientas digitales, permitiendo a nuestros clientes operar con mayor eficiencia, control y proyección.
        </p>
      </div>
    </div>
  )
}

export default PorqueElegirnos