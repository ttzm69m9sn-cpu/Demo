import { useEffect, useState } from 'react';

const NAV = [
  { href: '#soluciones', label: 'Soluciones', n: '02' },
  { href: '#proceso', label: 'Proceso', n: '03' },
  { href: '#nosotros', label: 'Nosotros', n: '04' },
  { href: '#marcas', label: 'Marcas', n: '05' },
  { href: '#faq', label: 'FAQ', n: '06' },
  { href: '#contacto', label: 'Contacto', n: '07' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-0/85 backdrop-blur-2xl border-b border-white/8 py-1'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-16 h-[76px] flex items-center justify-between">
        {/* LOGO LOCKUP */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-bright via-gold to-gold-deep shadow-[0_8px_24px_-6px_rgba(245,158,11,0.6)] transition-transform group-hover:scale-105" />
            <span className="relative font-display font-bold text-ink-0 text-lg tracking-tight">
              S<span className="opacity-70 mx-px">&amp;</span>M
            </span>
            {/* small dot */}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold pulse-glow" />
          </div>

          <div className="leading-tight">
            <div className="font-display font-semibold text-snow text-[15px] tracking-tight">
              Industriales <span className="serif-italic text-gold">Eléctricos</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="mono-meta text-[9px] !tracking-[0.22em]">S&amp;M E.I.R.L.</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="mono-meta text-[9px] !tracking-[0.22em]">EST · LIMA</span>
            </div>
          </div>
        </a>

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 px-3.5 py-2 text-sm text-bone hover:text-snow transition-colors rounded-full hover:bg-white/5"
            >
              <span className="mono-meta text-[9px] text-gold/60 group-hover:text-gold transition-colors">
                {item.n}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 mono-meta">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" />
              <span className="relative rounded-full w-1.5 h-1.5 bg-emerald-400" />
            </span>
            <span>Disponibles</span>
          </div>
          <a
            href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2 !px-4 !text-[13px] hidden sm:inline-flex"
          >
            Cotizar
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-snow"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 6h18M3 12h18M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-0/95 backdrop-blur-xl border-t border-white/5">
          <nav className="px-6 py-4 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 px-3 py-3 text-bone hover:text-gold rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
              >
                <span className="mono-meta text-gold/60">{item.n}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
