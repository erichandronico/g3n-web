// src/components/Services.jsx
import { FaCode, FaRobot, FaBolt } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-600 mb-4" />,
    title: 'Desarrollo a Medida',
    description:
      'Creamos soluciones web, móviles y de escritorio ajustadas a tus procesos y objetivos.',
  },
  {
    icon: <FaRobot className="text-4xl text-blue-600 mb-4" />,
    title: 'Automatización Inteligente',
    description:
      'Optimizamos tus tareas repetitivas con bots, integraciones y procesos autónomos.',
  },
  {
    icon: <FaBolt className="text-4xl text-blue-600 mb-4" />,
    title: 'Inteligencia Artificial',
    description:
      'Aplicamos modelos de IA para análisis de datos, predicciones, clasificación y más.',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services