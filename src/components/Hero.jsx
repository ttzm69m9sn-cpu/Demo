import { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground.jsx';

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!photoRef.current) return;
      const y = window.scrollY;
      // gentle parallax: photo drifts up slower than scroll
      photoRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0) rotate(${y * 0.005}deg)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-20">
      <HeroBackground />

      {/* radial spotlight bleed at bottom (mirrors dropship.io funnel motif) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120%] h-[60%] pointer-events-none z-[1]">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[700px] rounded-full bg-gold-soft blur-[80px] pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* LEFT: copy */}
          <div className="text-center lg:text-left">
            <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-7">
              <span className="w-2 h-2 rounded-full bg-gold pulse-glow" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-bone">Fabricación en Lima · Envíos a todo el Perú</span>
            </div>

            <h1
              className="reveal text-[clamp(2.5rem,6.5vw,5rem)] font-black tracking-[-0.03em] text-snow leading-[1.02]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Tableros eléctricos
              <br />
              <span className="word-gold">a medida</span>
              <span className="text-snow">.</span>
            </h1>

            <p
              className="reveal mt-6 text-lg lg:text-xl text-bone/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ '--reveal-delay': '240ms' }}
            >
              Diseñamos, fabricamos y ponemos en marcha tableros eléctricos para
              distribución, automatización, bombeo y transferencia automática —
              con componentes de marca y cableado profesional.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
              style={{ '--reveal-delay': '360ms' }}
            >
              <a
                href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Solicitar cotización
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#soluciones" className="btn-secondary">
                Ver soluciones
              </a>
            </div>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-8 justify-center lg:justify-start"
              style={{ '--reveal-delay': '480ms' }}
            >
              {[
                { k: '7+', v: 'Tipos de tableros' },
                { k: '9', v: 'Marcas líderes' },
                { k: '100%', v: 'Cableado certificado' },
              ].map((s) => (
                <div key={s.v} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-black text-snow tracking-tight">
                    {s.k}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-ash font-mono mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: hero panel photo with parallax */}
          <div className="relative h-[420px] lg:h-[560px] reveal-scale" style={{ '--reveal-delay': '300ms' }}>
            {/* outer amber halo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-gold-soft blur-[60px]" />
            </div>
            {/* inner ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[68%] h-[68%] rounded-full border border-gold/30" />
              <div className="absolute w-[88%] h-[88%] rounded-full border border-gold/10" />
            </div>
            <div
              ref={photoRef}
              className="absolute inset-0 flex items-center justify-center float-slow will-change-transform"
            >
              <img
                src="/images/hero/tablero-hero-principal.png"
                alt="Tablero eléctrico industrial S&M"
                className="max-h-[105%] w-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#soluciones"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 text-ash hover:text-gold transition-colors text-xs font-mono uppercase tracking-[0.3em] flex flex-col items-center gap-2"
      >
        <span>Soluciones</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <path d="M7 1v16M1 12l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
        </svg>
      </a>
    </section>
  );
}
