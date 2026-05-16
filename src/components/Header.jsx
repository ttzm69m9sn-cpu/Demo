import { useEffect, useState } from 'react';

const NAV = [
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#por-que', label: '¿Por qué?' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-0/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-gold via-gold to-gold-deep flex items-center justify-center font-black text-ink-0 text-base shadow-[0_8px_24px_-4px_rgba(245,158,11,0.5)] transition-transform group-hover:scale-105">
            S<span className="opacity-70">&amp;</span>M
          </div>
          <div className="leading-tight">
            <div className="text-snow font-semibold text-sm tracking-tight">Industriales</div>
            <div className="text-ash text-[10px] uppercase tracking-[0.18em] font-mono">Eléctricos S&amp;M</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm text-bone hover:text-snow transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden sm:inline-flex !py-2 !px-4 !text-sm"
          >
            Cotizar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink-0/95 backdrop-blur-xl border-t border-white/5">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-bone hover:text-gold rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
