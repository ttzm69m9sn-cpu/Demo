const STEPS = [
  {
    n: '01',
    title: 'Diseño',
    body: 'Levantamos requerimiento: potencia, tensión, cargas, modo de operación. Definimos esquema unifilar y selección de componentes.',
    duration: '1–3 días',
  },
  {
    n: '02',
    title: 'Selección de componentes',
    body: 'Especificamos protecciones, contactores, variadores, PLC y borneras según marca y disponibilidad. Confirmamos lista con el cliente.',
    duration: '2–5 días',
  },
  {
    n: '03',
    title: 'Ensamblaje del gabinete',
    body: 'Mecanizado del gabinete, montaje de riel DIN, organización de canaletas y distribución interna de los componentes.',
    duration: '3–7 días',
  },
  {
    n: '04',
    title: 'Cableado certificado',
    body: 'Cableado de fuerza y control con identificación por circuito. Verificación de torque, prensa-estopas y conexionado a borneras.',
    duration: '4–10 días',
  },
  {
    n: '05',
    title: 'Pruebas y puesta en marcha',
    body: 'Pruebas de continuidad, aislamiento, accionamiento de maniobras, protecciones y lógica de control. Programación de PLC y variadores.',
    duration: '1–3 días',
  },
  {
    n: '06',
    title: 'Entrega e instalación',
    body: 'Entrega del tablero rotulado y embalado. Instalación opcional en obra, conexión a la red y puesta en servicio bajo supervisión.',
    duration: 'Coordinado',
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />
      <div className="spotlight top-0 right-1/4" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="mono-tag">III · Proceso</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            </div>
            <h2
              className="reveal font-display font-bold text-snow tracking-[-0.03em] leading-[0.98] text-[clamp(2.5rem,6vw,5.5rem)]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Del plano al tablero
              <br />
              <span className="word-serif text-[0.92em]">en seis pasos</span>
              <span className="word-gold">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <div className="reveal section-num leading-none" style={{ '--reveal-delay': '240ms' }}>
              03
            </div>
            <p className="reveal text-bone/75 max-w-md text-base lg:text-right" style={{ '--reveal-delay': '320ms' }}>
              Cada proyecto sigue un flujo verificable. Cableado certificado,
              rotulado de circuitos y pruebas documentadas — sin sorpresas en obra.
            </p>
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[14px] lg:left-[34px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-14">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className="reveal relative pl-12 lg:pl-24 grid lg:grid-cols-12 gap-6"
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                {/* timeline node */}
                <div className="absolute left-0 top-1 lg:top-2">
                  <div className="relative w-7 h-7 lg:w-[68px] lg:h-[68px] rounded-full bg-ink-0 border border-gold/30 flex items-center justify-center font-mono text-[10px] lg:text-base text-gold tabular shadow-[0_0_24px_-4px_rgba(245,158,11,0.35)]">
                    {step.n}
                    <span className="absolute inset-0 rounded-full border border-gold/20 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-snow tracking-tight">
                      {step.title}
                    </h3>
                    <span className="mono-meta">— Paso {step.n}</span>
                  </div>
                  <p className="text-bone/75 text-base lg:text-lg leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <div className="mono-meta">Duración estimada</div>
                  <div className="font-display text-xl text-snow font-medium mt-1 tabular">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA at the bottom */}
        <div className="reveal mt-20 lg:mt-28 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-2xl lg:text-3xl text-snow font-bold tracking-tight">
              ¿Tienes un proyecto en mente?
            </div>
            <div className="text-bone/70 mt-1">Envíanos tu plano, lista de materiales o requerimiento.</div>
          </div>
          <a
            href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Iniciar cotización
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
