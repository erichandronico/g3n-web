import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'

/**
 * Envuelve contenido y lo anima al entrar en viewport (estilo Apple).
 * `delay` (0-4) escalona la entrada para crear efecto de cascada.
 * `as` permite cambiar la etiqueta contenedora (div por defecto).
 */
const Reveal = ({ as: Tag = 'div', delay = 0, className, children, ...props }) => {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', shown && 'is-in', className)}
      style={{ transitionDelay: shown ? `${delay * 0.08}s` : '0s' }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
