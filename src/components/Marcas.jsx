const MARCAS = [
  'Schneider Electric',
  'ABB',
  'Siemens',
  'General Electric',
  'Square D',
  'Rittal',
  'Lovato',
  'Steck',
  'Chint',
];

export default function Marcas() {
  // Duplicate the list so the marquee animation loops seamlessly
  const loop = [...MARCAS, ...MARCAS];

  return (
    <section id="marcas" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 lg:mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Marcas que usamos</span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2
            className="reveal text-3xl lg:text-4xl font-black text-snow tracking-[-0.02em]"
            style={{ '--reveal-delay': '120ms' }}
          >
            Componentes de <span className="word-gold">marcas líderes</span> del sector
          </h2>
          <p
            className="reveal mt-3 text-bone/70 max-w-xl mx-auto"
            style={{ '--reveal-delay': '240ms' }}
          >
            Trabajamos con fabricantes reconocidos a nivel global. Podemos proponer
            alternativas equivalentes según calidad, disponibilidad y presupuesto.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-0 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-0 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-3 animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
              {loop.map((m, i) => (
                <div
                  key={i}
                  className="shrink-0 px-7 py-5 rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  <span className="text-snow font-semibold tracking-tight whitespace-nowrap text-base">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
