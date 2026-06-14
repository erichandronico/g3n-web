import { Code2, Bot, Sparkles } from 'lucide-react'
import { Card, CardTitle, CardContent } from './Card'

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Desarrollo a Medida',
    description:
      'Creamos soluciones web, móviles y de escritorio ajustadas a tus procesos y objetivos.',
  },
  {
    icon: <Bot className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Automatización Inteligente',
    description:
      'Optimizamos tus tareas repetitivas con bots, integraciones y procesos autónomos.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600 mb-4" />,
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
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="mb-2">
                  {service.title}
                </CardTitle>
                <CardContent>
                  {service.description}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
