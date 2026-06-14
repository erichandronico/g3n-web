import { TrendingUp, GitBranch, Zap, Sprout } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../Card'

const QueEsG3N = () => {
  return (
    <div className="space-y-10 mb-20" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Sprout className="text-green-600" /> ¿Qué es G3N?
        </h3>
        <p>
          G3N representa nuestra visión de evolución tecnológica aplicada al crecimiento estratégico de las organizaciones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card data-aos="zoom-in" data-aos-delay="1000">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <CardTitle>G – Growth</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            Impulsamos el crecimiento de nuestros clientes mediante soluciones tecnológicas robustas, eficientes y escalables.
            Entendemos que el crecimiento no es solo aumentar cifras, sino mejorar procesos, experiencias y resultados sostenibles en el tiempo.
          </CardContent>
        </Card>

        <Card data-aos="zoom-in" data-aos-delay="1500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-indigo-600" />
              <CardTitle>3 – Etapas clave</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Analizar:</strong> Evaluamos la situación actual de tu empresa y sus desafíos digitales.</li>
              <li><strong>Transformar:</strong> Aplicamos innovación y herramientas digitales para optimizar procesos.</li>
              <li><strong>Escalar:</strong> Preparamos tus sistemas y equipos para crecer y adaptarse continuamente.</li>
            </ul>
          </CardContent>
        </Card>

        <Card data-aos="zoom-in" data-aos-delay="2000">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-purple-600" />
              <CardTitle>N – Next</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            Nos proyectamos hacia lo que viene. Nuestro enfoque está en llevar a tu organización al siguiente nivel,
            anticipándonos a las tendencias tecnológicas y adaptándonos al cambio constante del entorno digital.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QueEsG3N
