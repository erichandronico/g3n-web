import { ShoppingCart, Boxes, LineChart, BookText } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  {
    icon: ShoppingCart,
    title: 'Compras',
    text: 'El corazón de EasyFlow: solicitudes, cotizaciones, aprobaciones y órdenes de compra en un flujo ordenado y automático.',
  },
  {
    icon: Boxes,
    title: 'Inventario',
    text: 'Tu stock siempre al día, sin contar a mano. Lo que compras y lo que vendes se refleja solo en las bodegas.',
  },
  {
    icon: LineChart,
    title: 'Ventas',
    text: 'Del pedido al despacho con la misma lógica de flujo: ordenado, visible y conectado al inventario y a la contabilidad.',
  },
  {
    icon: BookText,
    title: 'Contabilidad',
    text: 'El cierre natural del flujo. Lo que pasa en compras, inventario y ventas llega a contabilidad sin doble digitación.',
  },
]

const IconStrip = () => {
  return (
    <section className="bg-gray py-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-x-7 gap-y-10 px-7 text-center md:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i}>
            <div className="mx-auto mb-5 grid h-[58px] w-[58px] place-items-center rounded-full border-[1.5px] border-blue text-blue">
              <it.icon className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <h3 className="mb-2 font-display text-[0.74rem] font-extrabold uppercase tracking-[0.18em] text-ink">
              {it.title}
            </h3>
            <p className="mx-auto max-w-[30ch] text-[0.82rem] text-text-dim">{it.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default IconStrip
