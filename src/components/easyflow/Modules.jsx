import { ShoppingCart, Boxes, LineChart, BookText } from 'lucide-react'
import Reveal from '../Reveal'

const modules = [
  {
    num: '01',
    icon: ShoppingCart,
    title: 'Compras',
    desc: 'El corazón de Easy Flow: solicitudes, cotizaciones, aprobaciones y órdenes de compra en un flujo ordenado y automático.',
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
    <section id="modulos" className="tile-wrap">
      <div className="tile tile-dark">
        <Reveal as="div" className="kicker !text-teal-soft">
          Cuatro módulos. Un solo flujo.
        </Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="mt-4 font-display text-[clamp(1.7rem,4vw,2.9rem)] font-bold leading-[1.08] text-white"
        >
          Todo tu negocio, <span className="text-teal-soft">conectado.</span>
        </Reveal>
        <Reveal as="p" delay={2} className="mt-4 max-w-[54ch] text-[1.12rem] text-white/70">
          Cada módulo es potente por sí solo —y juntos conversan sin que tengas que mover un dato a
          mano.
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal
              key={m.title}
              delay={(i % 2) + 1}
              className="group relative overflow-hidden rounded-brand border border-white/10 bg-white/[0.06] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-soft/30"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-teal-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-8 top-7 font-display text-[2.6rem] font-bold text-white/[0.08]">
                {m.num}
              </span>
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-[15px] border border-teal-soft/25 bg-teal-soft/10">
                <m.icon className="h-7 w-7 text-teal-soft" strokeWidth={1.7} />
              </div>
              <h3 className="mb-2.5 font-display text-[1.5rem] font-bold text-white">{m.title}</h3>
              <p className="mb-5 text-[0.99rem] text-white/65">{m.desc}</p>
              <ul className="grid gap-2.5">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[0.92rem] text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-soft" />
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
