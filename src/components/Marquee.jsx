/**
 * Horizontal ticker — runs continuously, used as a brand-thread between sections.
 * Mixes a bold phrase with technical metadata so it reads as a manufacturing log.
 */
export default function Marquee() {
  const items = [
    { type: 'big', text: 'TABLEROS A MEDIDA' },
    { type: 'meta', text: 'EST. LIMA · PE' },
    { type: 'big', text: 'DISEÑO · ENSAMBLAJE · PRUEBAS' },
    { type: 'meta', text: '220 / 380 / 440 V' },
    { type: 'big', text: 'SCHNEIDER · ABB · SIEMENS' },
    { type: 'meta', text: 'IEC 61439' },
    { type: 'big', text: 'INGENIERÍA PERUANA' },
    { type: 'meta', text: 'RUC 20552965028' },
  ];
  const loop = [...items, ...items];

  return (
    <div className="relative py-7 lg:py-9 overflow-hidden border-y border-white/5 bg-ink-1/40">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-0 via-ink-0/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-0 via-ink-0/80 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 ticker-animate whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            {it.type === 'big' ? (
              <span className="font-display font-bold tracking-tight text-[clamp(1.75rem,3.5vw,2.75rem)] text-snow flex items-center gap-4">
                <span className="word-gold serif-italic text-[0.6em] -mt-1 mr-1">✦</span>
                {it.text}
              </span>
            ) : (
              <span className="mono-meta text-gold">/ {it.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
