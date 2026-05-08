const values = ['وضوح', 'ثقة', 'قيمة', 'أثر']

export function ValueStrip() {
  return (
    <section className="border-y border-white/8 bg-[#0D131A]" aria-label="قيم NAZ">
      <div className="section-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm text-muted-foreground sm:justify-between">
        {values.map((value, index) => (
          <span key={value} className="flex items-center gap-8">
            <span>{value}</span>
            {index < values.length - 1 ? (
              <span className="hidden h-px w-14 bg-white/12 sm:block" />
            ) : null}
          </span>
        ))}
      </div>
    </section>
  )
}
