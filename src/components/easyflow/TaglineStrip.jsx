const TaglineStrip = () => {
  return (
    <div className="relative overflow-hidden border-y border-teal/15 bg-teal/[0.04] py-9 text-center">
      <span
        className="animate-sheen bg-clip-text font-display text-[clamp(1rem,2.4vw,1.4rem)] font-semibold tracking-[0.04em] text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(100deg,#2DD4BF 0%,#2DD4BF 40%,#fff 50%,#6FF0DD 60%,#6FF0DD 100%)',
          backgroundSize: '280% 100%',
        }}
      >
        Fluye sin límites. Optimiza todo.
      </span>
    </div>
  )
}

export default TaglineStrip
