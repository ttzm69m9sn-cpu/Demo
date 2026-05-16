export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="spotlight -bottom-40 -left-40" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="mono-tag">IV · Nosotros</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            </div>
            <h2
              className="reveal font-display font-bold text-snow tracking-[-0.03em] leading-[0.98] text-[clamp(2.5rem,6vw,5.5rem)]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Ingeniería que se
              <br />
              <span className="word-serif text-[0.92em]">vuelve confianza</span>
              <span className="word-gold">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <div className="reveal section-num leading-none" style={{ '--reveal-delay': '240ms' }}>
              04
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT photo with stage */}
          <div className="reveal-scale lg:col-span-5 relative">
            <div className="photo-stage corner-frame relative aspect-[3/4]">
              <span className="tl" /><span className="br" />
              <div className="absolute top-3 left-3 mono-meta text-gold">PROY · 042</div>
              <div className="absolute top-3 right-3 mono-meta">DOBLE PUERTA</div>
              <img
                src="/images/proyectos/tablero-doble-puerta-industrial.png"
                alt="Tablero industrial de doble puerta"
                loading="lazy"
                className="absolute inset-0 m-auto max-h-[88%] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] float-slow"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between mono-meta">
                <span>TENSIÓN · 380 V</span>
                <span className="text-gold">IP 55</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 mono-meta">
              <span className="w-8 h-px bg-gold/60" />
              Trabajo entregado — Lima · 2024
            </div>
          </div>

          {/* RIGHT copy */}
          <div className="lg:col-span-7">
            <p className="reveal text-xl lg:text-2xl text-snow leading-[1.4] font-display" style={{ '--reveal-delay': '180ms' }}>
              <strong className="font-bold">Industriales Eléctricos S&amp;M E.I.R.L.</strong>{' '}
              es una empresa peruana especializada en{' '}
              <span className="word-serif">venta de productos eléctricos industriales</span>,
              automatización y fabricación de tableros eléctricos.
            </p>

            <p className="reveal mt-6 text-base lg:text-lg text-bone/75 leading-relaxed" style={{ '--reveal-delay': '280ms' }}>
              Diseño, ensamblaje y puesta en marcha con componentes de marcas líderes
              — Schneider Electric, ABB, Siemens, General Electric, Square D — para
              sistemas de protección, control, maniobra y automatización industrial.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                {
                  title: 'Misión',
                  body: 'Brindar soluciones eléctricas industriales confiables mediante productos de calidad, asesoría técnica y tableros eficientes adaptados a cada cliente.',
                },
                {
                  title: 'Visión',
                  body: 'Ser reconocidos en el sector eléctrico industrial por la calidad de nuestros productos, la eficiencia de nuestros tableros y la confianza que generamos.',
                },
              ].map((c, i) => (
                <div
                  key={c.title}
                  className="reveal corner-frame relative p-6 lg:p-7 bg-white/[0.025] border border-white/5 rounded-2xl"
                  style={{ '--reveal-delay': `${380 + i * 100}ms` }}
                >
                  <span className="tl" /><span className="br" />
                  <div className="mono-tag mb-3">{c.title}</div>
                  <p className="text-sm lg:text-base text-bone/80 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            {/* Capabilities list — adds depth */}
            <div className="reveal mt-10" style={{ '--reveal-delay': '600ms' }}>
              <div className="mono-meta mb-4">Tipos de tableros que fabricamos</div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  'Bombas alternadas',
                  'Presión constante',
                  'Automatizados con PLC',
                  'Bombas contra incendio',
                  'Transferencia automática',
                  'Estrella-triángulo / doble',
                  'Arranque directo',
                  'Variadores de frecuencia',
                ].map((c) => (
                  <div key={c} className="flex items-center gap-3 text-sm text-bone/85 py-1.5 border-b border-white/5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold shrink-0">
                      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
