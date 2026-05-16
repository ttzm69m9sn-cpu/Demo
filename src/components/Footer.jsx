export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* dramatic final spotlight */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gold-soft blur-[80px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* big closing brand wordmark */}
        <div className="text-center mb-16">
          <div className="reveal-scale inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gold via-gold to-gold-deep text-ink-0 font-black text-3xl shadow-[0_20px_50px_-10px_rgba(245,158,11,0.6)] mb-6">
            S<span className="opacity-70">&amp;</span>M
          </div>
          <h3 className="reveal text-3xl lg:text-4xl font-black text-snow tracking-tight" style={{ '--reveal-delay': '120ms' }}>
            ¿Listo para cotizar?
          </h3>
          <p className="reveal text-bone/70 mt-2 max-w-md mx-auto" style={{ '--reveal-delay': '200ms' }}>
            Cuéntanos del proyecto y orientamos cotización en horas.
          </p>
          <div className="reveal mt-7 flex flex-wrap items-center justify-center gap-3" style={{ '--reveal-delay': '280ms' }}>
            <a
              href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Solicitar cotización
            </a>
            <a href="#soluciones" className="btn-secondary">Ver soluciones</a>
          </div>
        </div>

        {/* hazard stripe divider */}
        <div className="hazard-stripe h-1.5 rounded-full opacity-50 mb-10" />

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Empresa</div>
            <div className="text-snow font-bold">Industriales Eléctricos S&amp;M E.I.R.L.</div>
            <div className="text-bone/65 text-sm mt-2">RUC: 20552965028</div>
            <div className="text-bone/65 text-sm">Av. Oscar R. Benavides 282</div>
            <div className="text-bone/65 text-sm">Cercado de Lima, Perú</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Contacto</div>
            <a href="https://wa.me/51998265837" className="block text-snow hover:text-gold transition-colors">WhatsApp · 998 265 837</a>
            <div className="text-bone/65 text-sm mt-1">Alt · 955 345 973 / 947 342 139</div>
            <a href="mailto:ochoa@smindustrial.com.pe" className="block text-bone/80 hover:text-gold transition-colors text-sm mt-2">ochoa@smindustrial.com.pe</a>
            <a href="https://smindustrial.com.pe" className="block text-bone/60 hover:text-gold transition-colors text-sm">smindustrial.com.pe</a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Atención</div>
            <div className="text-snow font-medium">Lunes a sábado</div>
            <div className="text-bone/65 text-sm">9:00 a.m. — 6:30 p.m.</div>
            <div className="text-bone/65 text-sm mt-3">Lima, provincias y todo el Perú</div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-ash text-xs font-mono">
            © {new Date().getFullYear()} · Industriales Eléctricos S&amp;M E.I.R.L.
          </div>
          <div className="text-ash text-xs font-mono tracking-wider uppercase">
            Tableros eléctricos a medida · Made in Lima
          </div>
        </div>
      </div>
    </footer>
  );
}
