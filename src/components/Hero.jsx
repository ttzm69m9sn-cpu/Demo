import { useEffect, useRef, useState } from 'react';
import HeroBackground from './HeroBackground.jsx';
import SplitText from './SplitText.jsx';

const SPEC_PILLS = [
  { id: 'volt', label: '220 / 380 / 440 V', x: '8%', y: '24%', anchorX: '50%', anchorY: '40%' },
  { id: 'ip', label: 'Gabinete IP55', x: '78%', y: '14%', anchorX: '50%', anchorY: '32%' },
  { id: 'comp', label: 'Componentes Schneider', x: '4%', y: '62%', anchorX: '50%', anchorY: '58%' },
  { id: 'cert', label: 'Cableado certificado', x: '74%', y: '74%', anchorX: '50%', anchorY: '68%' },
];

const CITIES = ['LIMA', 'AREQUIPA', 'TRUJILLO', 'CUSCO', 'PIURA', 'CHICLAYO'];

export default function Hero() {
  const photoRef = useRef(null);
  const [cityIdx, setCityIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!photoRef.current) return;
      const y = window.scrollY;
      photoRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const interval = setInterval(() => setCityIdx((i) => (i + 1) % CITIES.length), 2400);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100vh] overflow-hidden pt-28 pb-12">
      <HeroBackground />

      {/* full-page fine grid */}
      <div className="absolute inset-0 blueprint-bg-fine opacity-50 pointer-events-none z-[1]" />

      {/* radial spotlight at bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120%] h-[60%] pointer-events-none z-[1]">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[800px] h-[800px] rounded-full bg-gold-soft blur-[100px] pulse-glow" />
      </div>

      {/* LEFT vertical rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5 origin-center">
        <div className="rotate-180 [writing-mode:vertical-rl] mono-meta tracking-[0.4em]">
          INDUSTRIALES ELÉCTRICOS · EST · 2020
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      {/* RIGHT vertical rail */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5">
        <div className="w-px h-20 bg-gradient-to-t from-gold/50 to-transparent" />
        <div className="[writing-mode:vertical-rl] mono-meta tracking-[0.4em]">
          12° 03' S · 77° 02' W · LIMA
        </div>
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-16 w-full">
        {/* TOP META BAR */}
        <div className="reveal flex flex-wrap items-center justify-between gap-4 mb-10 lg:mb-14 pb-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
              <span className="relative rounded-full w-2.5 h-2.5 bg-gold" />
            </span>
            <span className="mono-meta">
              Actualmente fabricando para clientes en{' '}
              <span className="text-gold inline-block w-20 lg:w-24 transition-opacity" key={cityIdx}>
                {CITIES[cityIdx]}
              </span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="mono-meta">N° 001 / VOL. 2026</span>
            <span className="w-px h-3 bg-white/15" />
            <span className="mono-meta">CAPÍTULO I</span>
          </div>
        </div>

        {/* HEADLINE — editorial, oversized, asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-20">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="reveal mono-tag mb-5" style={{ '--reveal-delay': '0ms' }}>
              ◆ Fabricación · Automatización · Distribución
            </div>

            <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.92] text-snow text-[clamp(3.25rem,9vw,7.5rem)]">
              <span className="block overflow-hidden">
                <SplitText baseDelay={150}>Tableros</SplitText>
              </span>
              <span className="block overflow-hidden">
                <SplitText baseDelay={450}>eléctricos</SplitText>
              </span>
              <span className="block overflow-hidden">
                <span className="word-serif text-[0.9em]">
                  <SplitText baseDelay={800}>a la medida</SplitText>
                </span>
                <span className="text-gold">.</span>
              </span>
            </h1>
          </div>

          {/* RIGHT side of headline — descriptor + stats */}
          <div className="lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9">
            <div className="reveal" style={{ '--reveal-delay': '900ms' }}>
              <div className="mono-tag mb-4 text-bone/60">— ¿Qué hacemos?</div>
              <p className="text-lg lg:text-xl text-bone/85 leading-[1.55] mb-8">
                Diseñamos, fabricamos y ponemos en marcha tableros para{' '}
                <span className="serif-italic text-snow">distribución eléctrica</span>,{' '}
                <span className="serif-italic text-snow">automatización con PLC</span>,{' '}
                <span className="serif-italic text-snow">bombeo industrial</span> y{' '}
                <span className="serif-italic text-snow">transferencia automática</span> —
                con cableado certificado y componentes de marca.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Solicitar cotización
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#soluciones" className="btn-secondary">
                  Ver soluciones
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* HERO PHOTO STAGE — full-width dramatic presentation */}
        <div className="reveal-scale relative" style={{ '--reveal-delay': '600ms' }}>
          <div className="photo-stage relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-visible corner-frame">
            <span className="tl" /><span className="br" />

            {/* registration marks at corners */}
            <div className="absolute top-3 left-3 mono-meta text-gold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                REC · 001A
              </div>
            </div>
            <div className="absolute top-3 right-3 mono-meta">REF — TBL-IND-V8</div>
            <div className="absolute bottom-3 left-3 mono-meta">CALIBRE · 14 AWG</div>
            <div className="absolute bottom-3 right-3 mono-meta text-gold">
              <div className="flex items-center gap-1.5">
                LIMA · PE
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
            </div>

            {/* photo */}
            <div
              ref={photoRef}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
            >
              <img
                src="/images/hero/tablero-hero-principal.png"
                alt="Tablero eléctrico industrial — Industriales Eléctricos S&M"
                className="max-h-[90%] w-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.85)] float-slow"
                loading="eager"
              />
            </div>

            {/* SPEC CALLOUTS — Apple/Mercedes-style technical pins */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none">
              {SPEC_PILLS.map((p, i) => (
                <CalloutPin key={p.id} pill={p} delay={1200 + i * 180} />
              ))}
            </div>

            {/* center crosshair tiny detail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none opacity-40">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gold/60" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-gold/60" />
            </div>
          </div>

          {/* underneath: caption + stats strip */}
          <div className="reveal mt-7 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3" style={{ '--reveal-delay': '1500ms' }}>
            {[
              { k: '7+', v: 'Tipos de tableros' },
              { k: '9', v: 'Marcas certificadas' },
              { k: '100%', v: 'Probados antes de entrega' },
              { k: '24+', v: 'Provincias atendidas' },
            ].map((s, i) => (
              <div key={s.v} className="flex items-baseline gap-3">
                <span className="mono-tag w-6 shrink-0">0{i + 1}</span>
                <div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-snow tabular leading-none tracking-tight">
                    {s.k}
                  </div>
                  <div className="mono-meta mt-2">{s.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLL CUE */}
        <a
          href="#soluciones"
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-4 z-10 text-ash hover:text-gold transition-colors mono-meta flex-col items-center gap-2 group"
        >
          <span>Soluciones</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="group-hover:translate-y-1 transition-transform">
            <path d="M7 1v18M1 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

function CalloutPin({ pill, delay }) {
  return (
    <div
      className="reveal absolute"
      style={{ left: pill.x, top: pill.y, '--reveal-delay': `${delay}ms` }}
    >
      <div className="spec-pill pointer-events-auto">{pill.label}</div>
    </div>
  );
}
