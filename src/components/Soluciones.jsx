const SOLUCIONES = [
  {
    n: '01',
    title: 'Distribución eléctrica',
    desc: 'Tableros para distribución, protección y control de circuitos en instalaciones comerciales, industriales y de servicios.',
    image: '/images/soluciones/01-distribucion-electrica/tablero-distribucion-electrica.png',
    tags: ['Termomagnéticos', 'Diferenciales', 'Borneras', 'Puesta a tierra'],
    specs: { tensión: '220/380V', amperaje: '32–630 A', protección: 'IP55' },
  },
  {
    n: '02',
    title: 'Transferencia automática',
    desc: 'Tableros ATS para conmutación entre red y grupo electrógeno. Enclavamientos eléctricos y mecánicos. Retorno automático.',
    image: '/images/soluciones/02-transferencia-automatica/tablero-transferencia-automatica.png',
    tags: ['ATS', 'Grupo electrógeno', 'Continuidad', 'Conmutador motorizado'],
    specs: { control: 'Automático', conmutación: '< 10 s', monitoreo: 'Tensión/Frec.' },
  },
  {
    n: '03',
    title: 'Bombas contra incendio',
    desc: 'Control de bomba principal, bomba jockey y sistemas auxiliares. Arranque directo, estrella-triángulo, suave o variador.',
    image: '/images/soluciones/03-bombas-contra-incendio/tablero-bombas-incendio-rojo.png',
    tags: ['Bomba principal', 'Jockey', 'Modos M/A', 'Alarmas'],
    specs: { arranque: 'Y-Δ / Soft / VFD', señales: 'Manual + Auto', alarmas: 'Visual/Sonora' },
  },
  {
    n: '04',
    title: 'Automatización con PLC',
    desc: 'Tableros con Siemens LOGO!8 y PLC para automatizar maniobras, secuencias, monitoreo y enclavamientos de seguridad.',
    image: '/images/soluciones/04-automatizacion-plc/tablero-automatizacion-plc.png',
    tags: ['Siemens LOGO!8', 'HMI', 'I/O analógicas', 'Comunicación'],
    specs: { PLC: 'LOGO!8 / S7', HMI: 'Opcional', I_O: 'Digital + Analógica' },
  },
  {
    n: '05',
    title: 'Presión constante',
    desc: 'Sistemas con variadores de frecuencia y transmisores de presión. Alternancia de bombas, protección contra arranques bruscos.',
    image: '/images/soluciones/05-presion-constante/componentes-presion-constante-01.png',
    tags: ['Variadores', 'Transmisor', 'Alternancia', 'PID'],
    specs: { control: 'VFD + PID', sensor: '4-20 mA', bombas: 'Hasta 4' },
  },
  {
    n: '06',
    title: 'Arranque de motores',
    desc: 'Arranque directo, estrella-triángulo, doble estrella, soft starter y variador. Para bombas, ventiladores, compresores.',
    image: '/images/soluciones/04-automatizacion-plc/componentes-plc.png',
    tags: ['Directo', 'Estrella-Δ', 'Soft starter', 'Variador'],
    specs: { potencia: '0.5–150 HP', modos: 'Directo / Y-Δ / VFD', protección: 'Térmica' },
  },
  {
    n: '07',
    title: 'Bombas alternadas',
    desc: 'Control automático para alternar bombas en cisternas, tanques, presurización y drenaje. Distribuye horas de operación.',
    image: '/images/soluciones/03-bombas-contra-incendio/componentes-bombas-incendio.png',
    tags: ['Cisternas', 'Drenaje', 'Modo dual', 'Horometro'],
    specs: { control: 'Manual + Auto', alternancia: 'Automática', equipos: '2–4 bombas' },
  },
];

export default function Soluciones() {
  return (
    <section id="soluciones" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="spotlight -top-60 -left-40" />
      <div className="spotlight -bottom-60 -right-40" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-16">
        {/* Section header with massive numeral on the right */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="mono-tag">II · Servicios</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            </div>
            <h2
              className="reveal font-display font-bold text-snow tracking-[-0.03em] leading-[0.98] text-[clamp(2.5rem,6vw,5.5rem)]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Soluciones para
              <br />
              <span className="word-serif text-[0.92em]">cada operación</span>
              <span className="word-gold">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <div className="reveal section-num leading-none" style={{ '--reveal-delay': '240ms' }}>
              02
            </div>
            <p className="reveal text-bone/75 max-w-md text-base lg:text-right" style={{ '--reveal-delay': '320ms' }}>
              Cada tablero se diseña según potencia, tensión, tipo de carga y
              requerimiento operativo — con componentes de marca y pruebas de
              funcionamiento antes de la entrega.
            </p>
          </div>
        </div>

        {/* EDITORIAL LIST — full-width rows, hover lifts the photo */}
        <div className="border-b border-white/5">
          {SOLUCIONES.map((s, i) => (
            <SolucionRow key={s.n} sol={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolucionRow({ sol }) {
  return (
    <div className="sol-row reveal group">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center">
        {/* number */}
        <div className="col-span-2 lg:col-span-1">
          <div className="font-mono text-sm text-gold tabular tracking-wider">{sol.n}</div>
        </div>

        {/* title + desc */}
        <div className="col-span-10 lg:col-span-5">
          <h3 className="font-display font-bold text-[clamp(1.5rem,2.5vw,2.25rem)] tracking-[-0.02em] text-snow group-hover:text-gold transition-colors duration-500 leading-tight">
            {sol.title}
          </h3>
          <p className="text-bone/70 mt-2 text-sm lg:text-base max-w-xl leading-relaxed">
            {sol.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {sol.tags.map((t) => (
              <span
                key={t}
                className="mono-meta px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* specs */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="space-y-1.5">
            {Object.entries(sol.specs).map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-1">
                <span className="mono-meta text-[9px]">{k.replace('_', '/')}</span>
                <span className="font-mono text-xs text-bone tabular">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="col-span-12 lg:col-span-3">
          <div className="relative aspect-[4/3] lg:aspect-square photo-stage corner-frame">
            <span className="tl" /><span className="br" />
            <img
              src={sol.image}
              alt={sol.title}
              loading="lazy"
              className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* full-width arrow indicator */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 sol-arrow text-bone/30">
        <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
          <path d="M1 7h28M22 1l7 6-7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
