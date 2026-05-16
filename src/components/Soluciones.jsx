const SOLUCIONES = [
  {
    n: '01',
    title: 'Distribución eléctrica',
    desc: 'Tableros para distribución, protección y control de circuitos en instalaciones comerciales e industriales. Cableado ordenado, identificación de circuitos y puesta a tierra adecuada.',
    image: '/images/soluciones/01-distribucion-electrica/tablero-distribucion-electrica.png',
    tags: ['Termomagnéticos', 'Diferenciales', 'Borneras'],
  },
  {
    n: '02',
    title: 'Transferencia automática',
    desc: 'Tableros ATS para conmutación automática entre red eléctrica y grupo electrógeno. Enclavamientos eléctricos y mecánicos. Vuelve a la red al normalizarse.',
    image: '/images/soluciones/02-transferencia-automatica/tablero-transferencia-automatica.png',
    tags: ['ATS', 'Grupo electrógeno', 'Continuidad'],
  },
  {
    n: '03',
    title: 'Bombas contra incendio',
    desc: 'Control de bomba principal, bomba jockey y sistemas auxiliares. Arranque directo, estrella-triángulo, suave o por variador. Modos manual y automático.',
    image: '/images/soluciones/03-bombas-contra-incendio/tablero-bombas-incendio-rojo.png',
    tags: ['Bomba principal', 'Jockey', 'Alarmas'],
  },
  {
    n: '04',
    title: 'Automatización con PLC',
    desc: 'Tableros con Siemens LOGO!8 y PLC para automatizar maniobras, secuencias y monitoreo. HMI, sensores, variadores y comunicación con otros equipos.',
    image: '/images/soluciones/04-automatizacion-plc/tablero-automatizacion-plc.png',
    tags: ['Siemens LOGO!8', 'HMI', 'I/O analógicas'],
  },
  {
    n: '05',
    title: 'Presión constante',
    desc: 'Sistemas con variadores de frecuencia y transmisores de presión para mantener presión estable. Alternancia de bombas y protección contra arranques bruscos.',
    image: '/images/soluciones/05-presion-constante/componentes-presion-constante-01.png',
    tags: ['Variadores', 'Transmisor de presión', 'Alternancia'],
  },
  {
    n: '06',
    title: 'Arranque de motores',
    desc: 'Tableros de arranque directo, estrella-triángulo, doble estrella, soft starter y variador. Para bombas, ventiladores, compresores y máquinas industriales.',
    image: '/images/soluciones/04-automatizacion-plc/componentes-plc.png',
    tags: ['Estrella-Δ', 'Soft starter', 'Variador'],
  },
  {
    n: '07',
    title: 'Bombas alternadas',
    desc: 'Control automático para alternar bombas en cisternas, tanques, presurización y drenaje. Distribuye horas de operación, evita el desgaste prematuro.',
    image: '/images/soluciones/03-bombas-contra-incendio/componentes-bombas-incendio.png',
    tags: ['Cisternas', 'Drenaje', 'Modo dual'],
  },
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="relative py-28 lg:py-36 overflow-hidden">
      {/* spotlight bleed from hero */}
      <div className="spotlight -top-40 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Servicios y soluciones</span>
          </div>
          <h2
            className="reveal text-4xl lg:text-6xl font-black text-snow tracking-[-0.02em] leading-[1.05]"
            style={{ '--reveal-delay': '120ms' }}
          >
            Soluciones eléctricas
            <br />
            <span className="word-gold">para cada operación</span>
          </h2>
          <p
            className="reveal mt-5 text-lg text-bone/75 max-w-2xl"
            style={{ '--reveal-delay': '240ms' }}
          >
            Cada tablero se diseña según la potencia, tensión, tipo de carga y
            requerimientos operativos del proyecto. Componentes de marca, pruebas
            de funcionamiento y entrega lista para operar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SOLUCIONES.map((s, i) => (
            <article
              key={s.n}
              className="card reveal p-7 lg:p-8 group"
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              {/* photo with amber halo */}
              <div className="relative h-44 lg:h-52 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-gold-soft blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="relative max-h-full max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                />
              </div>

              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-sm text-gold tracking-wider">{s.n}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </span>
              </div>

              <h3 className="text-xl lg:text-[1.375rem] font-bold text-snow tracking-tight mb-2.5 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-bone/65 leading-relaxed mb-5">{s.desc}</p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-ash px-2 py-1 rounded-md bg-white/[0.03] border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
