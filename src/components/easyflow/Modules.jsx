import { ShoppingCart, Boxes, LineChart, BookText } from 'lucide-react'
import Reveal from '../Reveal'

const modules = [
  {
    num: '01',
    icon: ShoppingCart,
    title: 'Compras',
    desc: 'El corazón de EasyFlow: solicitudes, cotizaciones, aprobaciones y órdenes de compra en un flujo ordenado y automático.',
    items: [
      'Solicitudes de compra con flujo de aprobación por niveles',
      'Cotizaciones y comparación de proveedores',
      'Órdenes de compra y seguimiento de entregas',
      'Aprobadores secuenciales con notificación automática',
    ],
  },
  {
    num: '02',
    icon: Boxes,
    title: 'Inventario',
    desc: 'Tu stock siempre al día, sin contar a mano. Lo que compras y lo que vendes se refleja solo en las bodegas.',
    items: [
      'Recepción de mercadería conectada a las compras',
      'Control de stock por bodega y movimientos',
      'Valorización de inventario y trazabilidad',
      'Salidas automáticas al concretar ventas',
    ],
  },
  {
    num: '03',
    icon: LineChart,
    title: 'Ventas',
    desc: 'Del pedido al despacho con la misma lógica de flujo: ordenado, visible y conectado al inventario y a la contabilidad.',
    items: [
      'Gestión de pedidos y cotizaciones de venta',
      'Descuento automático de stock al vender',
      'Seguimiento del estado de cada venta',
      'Información lista para facturar y registrar',
    ],
  },
  {
    num: '04',
    icon: BookText,
    title: 'Contabilidad',
    desc: 'El cierre natural del flujo. Lo que pasa en compras, inventario y ventas llega a contabilidad sin doble digitación.',
    items: [
      'Registro conectado a las operaciones del negocio',
      'Facturas, notas de crédito y conciliación',
      'Cuentas de costo y centros de gasto',
      'Una sola verdad: todo cuadra de origen',
    ],
  },
]

const Modules = () => {
  return (
    <section id="modulos" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="mb-14 text-center">
          <Reveal as="div" className="kicker mb-4">
            Cuatro módulos. Un solo flujo.
          </Reveal>
          <Reveal as="h2" delay={1} className="sec-title">
            Todo tu negocio, <span className="text-blue">conectado.</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mx-auto mt-4 max-w-[54ch] text-[0.95rem] text-text-dim">
            Cada módulo es potente por sí solo —y juntos conversan sin que tengas que mover un dato
            a mano.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal
              key={m.title}
              delay={(i % 2) + 1}
              className="relative border border-gray-2 p-8 transition-colors duration-300 hover:border-blue/40"
            >
              <span className="absolute right-7 top-6 font-display text-[2.2rem] font-extrabold text-gray-2">
                {m.num}
              </span>
              <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px] border-blue text-blue">
                <m.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mb-3 font-display text-[0.82rem] font-extrabold uppercase tracking-[0.16em] text-ink">
                {m.title}
              </h3>
              <p className="mb-5 text-[0.88rem] text-text-dim">{m.desc}</p>
              <ul className="grid gap-2.5">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[0.84rem] text-text">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-blue" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
