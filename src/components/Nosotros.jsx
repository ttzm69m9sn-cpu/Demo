export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-28 lg:py-36 overflow-hidden border-t border-white/5">
      <div className="spotlight -bottom-40 -left-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* left photo with industrial frame */}
          <div className="reveal-scale relative h-[420px] lg:h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[75%] h-[75%] rounded-full bg-gold-soft blur-[60px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/proyectos/tablero-doble-puerta-industrial.png"
                alt="Tablero industrial de doble puerta"
                loading="lazy"
                className="max-h-full w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] float-slow"
              />
            </div>
            {/* corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold/40" />
            {/* meta label */}
            <div className="absolute bottom-4 left-4 px-3 py-2 rounded-md bg-ink-0/80 backdrop-blur border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
              <span className="text-gold">PROYECTO</span> · Tablero doble puerta
            </div>
          </div>

          {/* right copy */}
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Nosotros</span>
            </div>

            <h2
              className="reveal text-4xl lg:text-5xl font-black text-snow tracking-[-0.02em] leading-[1.08]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Ingeniería que se
              <br />
              convierte en <span className="word-gold">soluciones confiables</span>.
            </h2>

            <p
              className="reveal mt-6 text-base lg:text-lg text-bone/80 leading-relaxed"
              style={{ '--reveal-delay': '240ms' }}
            >
              <strong className="text-snow">Industriales Eléctricos S&amp;M E.I.R.L.</strong> es una
              empresa peruana especializada en venta de productos eléctricos
              industriales, automatización y fabricación de tableros eléctricos
              para aplicaciones comerciales, industriales y de bombeo.
            </p>

            <p
              className="reveal mt-4 text-base text-bone/70 leading-relaxed"
              style={{ '--reveal-delay': '320ms' }}
            >
              Diseño, ensamblaje y puesta en marcha con componentes de marcas
              líderes — Schneider Electric, ABB, Siemens, General Electric,
              Square D — para sistemas de protección, control, maniobra y
              automatización industrial.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                {
                  title: 'Misión',
                  body:
                    'Brindar soluciones eléctricas industriales confiables mediante productos de calidad, asesoría técnica y tableros eficientes adaptados a cada cliente.',
                },
                {
                  title: 'Visión',
                  body:
                    'Ser reconocidos en el sector eléctrico industrial por la calidad de nuestros productos, la eficiencia de nuestros tableros y la confianza que generamos.',
                },
              ].map((c, i) => (
                <div
                  key={c.title}
                  className="reveal p-5 rounded-2xl bg-white/[0.025] border border-white/5"
                  style={{ '--reveal-delay': `${380 + i * 100}ms` }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
                    {c.title}
                  </div>
                  <p className="text-sm text-bone/75 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
