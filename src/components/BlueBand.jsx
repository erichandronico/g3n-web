const features = [
  'Workflow configurable',
  'Aprobadores por nivel',
  'Reglas por área',
  'Notificaciones automáticas',
  '100% flexible',
]

const BlueBand = () => {
  return (
    <div className="bg-blue py-8">
    <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-7">
        {features.map((f) => (
          <span
            key={f}
            className="flex items-center gap-3 font-display text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/90"
          >
            <span className="inline-block h-2 w-2 rotate-45 border-[1.5px] border-white/80" />
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BlueBand
