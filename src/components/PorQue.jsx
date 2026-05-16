const PILARES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v6c0 5 3.5 9 9 11 5.5-2 9-6 9-11V7l-9-5z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Seguridad eléctrica',
    body: 'Selección correcta de protecciones, sistemas de puesta a tierra y enclavamientos. Cada tablero pasa pruebas de funcionamiento antes de la entrega.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6M9 13h6M9 17h3"/>
      </svg>
    ),
    title: 'Cableado ordenado',
    body: 'Distribución interna limpia, identificación de circuitos y rotulado claro. Reduce riesgos, facilita mantenimientos y futuras ampliaciones.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 2"/>
      </svg>
    ),
    title: 'Tiempos de entrega',
    body: 'Planificamos cada proyecto con disponibilidad de componentes confirmada y cronograma de fabricación realista — sin sorpresas en obra.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3v4M8 3v4M3 9h18"/>
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M9 14l2 2 4-4"/>
      </svg>
    ),
    title: 'Asesoría técnica',
    body: 'Te orientamos en la selección de marcas, potencias y configuraciones. Trabajamos sobre tu plano o desarrollamos la solución desde cero.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
    title: 'Soporte directo',
    body: 'Atención por WhatsApp con respuestas técnicas — envía fotos del equipo o la placa del motor y orientamos cotización en horas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 15l4-4 4 4 5-5"/>
      </svg>
    ),
    title: 'Mejoras y modernización',
    body: 'Evaluamos tableros existentes para ordenar cableado, cambiar componentes deteriorados, sumar variadores o automatizar con PLC.',
  },
];

export default function PorQue() {
  return (
    <section id="por-que" className="relative py-28 lg:py-36 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">¿Por qué elegirnos?</span>
          </div>
          <h2
            className="reveal text-4xl lg:text-6xl font-black text-snow tracking-[-0.02em] leading-[1.05]"
            style={{ '--reveal-delay': '120ms' }}
          >
            Cada detalle ejecutado
            <br />
            con <span className="word-gold">responsabilidad técnica</span>.
          </h2>
          <p
            className="reveal mt-5 text-lg text-bone/75 max-w-2xl"
            style={{ '--reveal-delay': '240ms' }}
          >
            Nos eligen por la calidad del trabajo, el orden de cada instalación y
            la capacidad de entregar soluciones completas — desde distribución
            básica hasta automatización con PLC.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILARES.map((p, i) => (
            <div
              key={p.title}
              className="reveal card p-7 group"
              style={{ '--reveal-delay': `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-snow mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm text-bone/65 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
