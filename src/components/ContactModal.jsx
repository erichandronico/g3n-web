import { useEffect, useRef, useState } from 'react'
import { X, Mail, Phone, MessageCircle, Loader2, CheckCircle2, Send } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || 'https://api.g3n-tech.cl'

const CHANNELS = [
  { value: 'email', label: 'Correo', icon: Mail },
  { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { value: 'phone', label: 'Llamada', icon: Phone },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emptyForm = { name: '', phone: '', email: '', channels: [], website: '' }

/**
 * Modal "Solicita una demo": reemplaza el flujo de WhatsApp.
 * Captura nombre, teléfono, correo (obligatorio) y medios de contacto preferidos
 * (selección múltiple), y los envía al endpoint público /api/contact.
 * Animación de entrada/salida estilo Apple (fade del backdrop + scale del panel).
 */
const ContactModal = ({ open, onClose }) => {
  const [render, setRender] = useState(open)
  const [shown, setShown] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverMsg, setServerMsg] = useState('')
  const firstFieldRef = useRef(null)

  // Montaje + animación de entrada/salida y bloqueo de scroll del body
  useEffect(() => {
    if (open) {
      setRender(true)
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)))
      document.body.style.overflow = 'hidden'
      return () => cancelAnimationFrame(id)
    }
    setShown(false)
    document.body.style.overflow = ''
    const t = setTimeout(() => {
      setRender(false)
      // Reset al cerrar para abrir limpio la próxima vez
      setForm(emptyForm)
      setErrors({})
      setStatus('idle')
      setServerMsg('')
    }, 300)
    return () => clearTimeout(t)
  }, [open])

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Foco en el primer campo al abrir
  useEffect(() => {
    if (shown && firstFieldRef.current) firstFieldRef.current.focus()
  }, [shown])

  if (!render) return null

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const toggleChannel = (value) =>
    setForm((f) => ({
      ...f,
      channels: f.channels.includes(value)
        ? f.channels.filter((c) => c !== value)
        : [...f.channels, value],
    }))

  const validate = () => {
    const next = {}
    if (!form.email.trim()) next.email = 'El correo es obligatorio'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Ingresa un correo válido'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return
    if (!validate()) return

    setStatus('submitting')
    setServerMsg('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          preferredChannels: form.channels,
          website: form.website, // honeypot (oculto)
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setServerMsg(data?.msg || 'No pudimos enviar tu solicitud. Intenta nuevamente.')
        return
      }
      setStatus('success')
      setServerMsg(data?.msg || '¡Gracias por tu contacto! Pronto un ejecutivo se comunicará contigo.')
    } catch {
      setStatus('error')
      setServerMsg('No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.')
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-paper px-4 py-3 text-text placeholder:text-text-dim/60 ' +
    'outline-none transition focus:border-teal focus:bg-white'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Solicita una demo"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-navy/40 backdrop-blur-md transition-opacity duration-300 ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        className={`relative z-[1] w-full max-w-[480px] overflow-hidden rounded-brand border border-navy/10 bg-white shadow-soft transition-all duration-300 ease-brand ${
          shown ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.96] opacity-0'
        }`}
      >
        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 px-7 pt-7">
          <div>
            <div className="kicker mb-2">Solicita una demo</div>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-navy">
              Hablemos de tu <span className="text-teal">flujo</span>.
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-2 text-text-dim transition hover:bg-navy/5 hover:text-text"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="relative px-7 pb-8 pt-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
              <CheckCircle2 className="h-9 w-9 text-teal" />
            </div>
            <p className="mx-auto max-w-[34ch] text-text-dim">{serverMsg}</p>
            <button onClick={onClose} className="btn btn-primary mt-7 w-full justify-center">
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative px-7 pb-7 pt-5" noValidate>
            <p className="mb-5 text-sm text-text-dim">
              Déjanos tus datos y un ejecutivo te contactará para coordinar tu demo.
            </p>

            {/* Honeypot anti-bot (oculto) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setField('website', e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Nombre</label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  placeholder="Tu nombre"
                  className={`${inputBase} border-navy/15`}
                />
              </div>

              {/* Correo (obligatorio) */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">
                  Correo <span className="text-teal">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField('email', e.target.value)}
                  placeholder="tucorreo@empresa.cl"
                  aria-invalid={Boolean(errors.email)}
                  className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-navy/15'}`}
                />
                {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Teléfono */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Teléfono</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  placeholder="+56 9 1234 5678"
                  className={`${inputBase} border-navy/15`}
                />
              </div>

              {/* Medio preferido (multi-select) */}
              <div>
                <label className="mb-2 block text-sm font-medium text-text">
                  ¿Cómo prefieres que te contactemos?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {CHANNELS.map(({ value, label, icon: Icon }) => {
                    const active = form.channels.includes(value)
                    return (
                      <button
                        type="button"
                        key={value}
                        onClick={() => toggleChannel(value)}
                        aria-pressed={active}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ease-brand ${
                          active
                            ? 'border-teal bg-teal/10 text-teal'
                            : 'border-navy/15 text-text-dim hover:border-teal/40 hover:text-text'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {status === 'error' && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {serverMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <Send className="h-[18px] w-[18px]" />
                  Enviar solicitud
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal
