const WA = 'https://wa.me/51998265837?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Industriales%20El%C3%A9ctricos%20S%26M.%20Deseo%20solicitar%20una%20cotizaci%C3%B3n.';

export default function Contacto() {
  return (
    <section id="contacto" className="relative py-28 lg:py-36 overflow-hidden border-t border-white/5">
      <div className="spotlight top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Contacto</span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2
            className="reveal text-4xl lg:text-6xl font-black text-snow tracking-[-0.02em] leading-[1.05]"
            style={{ '--reveal-delay': '120ms' }}
          >
            Cuéntanos qué tablero
            <br />
            o <span className="word-gold">solución necesitas</span>
          </h2>
          <p
            className="reveal mt-5 text-lg text-bone/75 max-w-2xl mx-auto"
            style={{ '--reveal-delay': '240ms' }}
          >
            Te respondemos por WhatsApp o correo. Si tienes fotos, plano o lista
            de materiales, mejor — orienta la cotización con precisión.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
          {/* LEFT — Form */}
          <form
            className="reveal card p-7 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const text = `Hola, soy ${data.get('nombre')}.\n\nNecesito: ${data.get('tipo')}\nContacto: ${data.get('telefono') || data.get('correo')}\n\nDetalle:\n${data.get('mensaje')}`;
              window.open(`https://wa.me/51998265837?text=${encodeURIComponent(text)}`, '_blank');
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field name="nombre" label="Nombre" placeholder="Tu nombre completo" required />
              <Field name="empresa" label="Empresa" placeholder="Opcional" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field name="telefono" label="Teléfono / WhatsApp" placeholder="+51 9XX XXX XXX" />
              <Field name="correo" label="Correo" type="email" placeholder="tu@correo.com" />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-mono uppercase tracking-[0.2em] text-ash mb-2">
                Tipo de tablero
              </label>
              <select name="tipo" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-snow focus:border-gold/50 focus:bg-white/[0.05] outline-none transition-colors">
                <option className="bg-ink-1">Distribución eléctrica</option>
                <option className="bg-ink-1">Transferencia automática</option>
                <option className="bg-ink-1">Bombas contra incendio</option>
                <option className="bg-ink-1">Automatización con PLC</option>
                <option className="bg-ink-1">Presión constante</option>
                <option className="bg-ink-1">Arranque de motores</option>
                <option className="bg-ink-1">Bombas alternadas</option>
                <option className="bg-ink-1">Otro / asesoría</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-[0.2em] text-ash mb-2">
                Cuéntanos del proyecto
              </label>
              <textarea
                name="mensaje"
                rows={5}
                required
                placeholder="Potencia, tensión, cantidad de motores, aplicación, plano si tienes…"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-snow placeholder:text-ash/60 focus:border-gold/50 focus:bg-white/[0.05] outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Enviar por WhatsApp
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>
            </button>
            <p className="text-xs text-ash mt-3 text-center font-mono">
              Al enviar abrirás un chat de WhatsApp con tu mensaje prellenado
            </p>
          </form>

          {/* RIGHT — Contact info */}
          <div className="space-y-4">
            <InfoCard
              label="WhatsApp"
              big="998 265 837"
              alt="955 345 973 · 947 342 139"
              href={WA}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>
              }
            />
            <InfoCard
              label="Correo corporativo"
              big="ochoa@smindustrial.com.pe"
              href="mailto:ochoa@smindustrial.com.pe"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              }
            />
            <InfoCard
              label="Dirección"
              big="Av. Oscar R. Benavides 282"
              alt="Cercado de Lima, Perú"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              }
            />
            <InfoCard
              label="Horario de atención"
              big="Lunes a sábado"
              alt="9:00 a.m. — 6:30 p.m."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              }
            />

            <div className="card p-6 bg-gradient-to-br from-gold/10 via-transparent to-transparent border-gold/20">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Zona de atención</div>
              <div className="text-snow font-semibold">Lima, provincias y todo el Perú</div>
              <div className="text-bone/65 text-sm mt-1">Coordinamos envíos por agencia de transporte.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-[0.2em] text-ash mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-snow placeholder:text-ash/60 focus:border-gold/50 focus:bg-white/[0.05] outline-none transition-colors"
      />
    </div>
  );
}

function InfoCard({ label, big, alt, href, icon }) {
  const inner = (
    <div className="card p-6 flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-ash">{label}</div>
        <div className="text-snow font-semibold mt-0.5 truncate">{big}</div>
        {alt && <div className="text-bone/60 text-sm mt-0.5 truncate">{alt}</div>}
      </div>
      {href && (
        <span className="text-ash group-hover:text-gold transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </span>
      )}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
