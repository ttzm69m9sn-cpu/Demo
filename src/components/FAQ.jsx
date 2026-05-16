const FAQS = [
  {
    q: '¿Venden productos eléctricos industriales?',
    a: 'Sí. Vendemos productos eléctricos industriales por unidad y también por proyecto. Atendemos requerimientos de llaves térmicas, contactores, guardamotores, variadores de frecuencia, PLC, relés, fuentes de poder, sensores, gabinetes, borneras y accesorios eléctricos.',
  },
  {
    q: '¿También fabrican tableros eléctricos completos?',
    a: 'Sí. Diseñamos y ensamblamos tableros eléctricos completos según la necesidad del cliente. Fabricamos tableros de arranque directo, estrella-triángulo, bombas alternadas, presión constante, transferencia automática, control y fuerza, automatización con PLC, entre otros.',
  },
  {
    q: '¿Qué información necesitan para cotizar un tablero?',
    a: 'Para cotizar correctamente necesitamos: tipo de tablero (arranque directo, presión constante, etc.), tensión de trabajo (220 V / 380 V / 440 V), potencia del motor (HP o kW), cantidad de motores o bombas, tipo de control (manual, automático, con PLC, con variador), aplicación (bomba, ventilador, compresor, máquina, grupo electrógeno), y si tienes plano o referencia (foto, esquema, lista de materiales).',
  },
  {
    q: '¿Puedo enviar una foto del tablero o equipo que necesito reemplazar?',
    a: 'Sí. Puedes enviarnos fotos del tablero, placa del motor, componentes existentes o instalación actual por WhatsApp. Con esa información orientamos mejor y solicitamos los datos adicionales necesarios para preparar una cotización.',
  },
  {
    q: '¿Qué es un tablero de presión constante?',
    a: 'Es un tablero que permite mantener una presión estable en una red de agua mediante variadores de frecuencia, sensores o transmisores de presión y lógica de control. Regula la velocidad de las bombas según el consumo, mejorando el funcionamiento y reduciendo arranques bruscos.',
  },
  {
    q: '¿Hacen tableros con variador de frecuencia?',
    a: 'Sí. Integramos variadores de frecuencia para controlar motores eléctricos, bombas, ventiladores y otros equipos. Configuramos parámetros como rampas de aceleración, desaceleración, frecuencia máxima, señales de arranque, protección y control externo.',
  },
  {
    q: '¿Trabajan con marcas específicas?',
    a: 'Sí. Trabajamos con marcas reconocidas como Schneider Electric, ABB, Siemens, General Electric, Square D y otras marcas del sector eléctrico industrial. La marca puede variar según el requerimiento técnico, disponibilidad y presupuesto del cliente.',
  },
  {
    q: '¿Puedo solicitar una marca específica para mi tablero?',
    a: 'Sí. El cliente puede solicitar una marca específica para los componentes. También podemos proponer alternativas equivalentes según calidad, disponibilidad, plazo de entrega y presupuesto.',
  },
  {
    q: '¿Los tableros se entregan cableados y probados?',
    a: 'Sí. Los tableros se entregan ensamblados, cableados, rotulados y con pruebas básicas de funcionamiento. Antes de la entrega se revisa la correcta conexión de componentes, maniobra, protecciones y lógica de control.',
  },
  {
    q: '¿Pueden fabricar un tablero usando un plano que ya tengo?',
    a: 'Sí. Podemos fabricar el tablero en base a un plano eléctrico, lista de materiales, memoria descriptiva o requerimiento técnico enviado por el cliente. También podemos revisar el plano y sugerir mejoras si fuera necesario.',
  },
  {
    q: '¿Hacen instalación en campo?',
    a: 'Sí, podemos realizar instalación, conexión, pruebas y puesta en marcha según el tipo de proyecto y ubicación. También entregamos solo el tablero para que el cliente o su técnico lo instale.',
  },
  {
    q: '¿Cuánto tiempo demora fabricar un tablero?',
    a: 'Depende del tipo de tablero, cantidad de componentes, disponibilidad de materiales y complejidad del cableado o programación. Un tablero simple toma menos tiempo; uno automatizado con PLC, variadores o transferencia requiere mayor preparación y pruebas.',
  },
  {
    q: '¿Realizan envíos a provincia?',
    a: 'Sí, coordinamos envíos a provincia según el producto, peso, volumen y agencia de transporte elegida por el cliente. También se puede coordinar recojo en tienda o entrega local.',
  },
  {
    q: '¿Puedo solicitar una cotización por WhatsApp?',
    a: 'Sí. Envíanos tu solicitud por WhatsApp indicando el producto o tablero que necesitas. Si cuentas con fotos, placa del motor, plano o lista de materiales, eso ayudará a cotizar con mayor precisión.',
  },
  {
    q: '¿Los productos y tableros tienen garantía?',
    a: 'Sí. Los productos y tableros cuentan con garantía según la marca, condiciones de uso y alcance del servicio. La garantía aplica siempre que la instalación, operación y mantenimiento se realicen correctamente.',
  },
  {
    q: '¿Pueden mejorar o modernizar un tablero antiguo?',
    a: 'Sí. Podemos evaluar tableros existentes para ordenar cableado, cambiar componentes deteriorados, incorporar protecciones, instalar variadores, mejorar la lógica de control, agregar señalización o automatizar el sistema.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 lg:py-36 overflow-hidden border-t border-white/5">
      <div className="spotlight top-1/4 -right-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 lg:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Preguntas frecuentes</span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2
            className="reveal text-4xl lg:text-5xl font-black text-snow tracking-[-0.02em] leading-[1.08]"
            style={{ '--reveal-delay': '120ms' }}
          >
            Lo que <span className="word-gold">más nos preguntan</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="faq-item reveal group border border-white/8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] hover:border-gold/20 transition-all duration-300 overflow-hidden"
              style={{ '--reveal-delay': `${Math.min(i * 30, 300)}ms` }}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer">
                <span className="text-base lg:text-lg font-medium text-snow pr-4">{f.q}</span>
                <span className="faq-icon shrink-0 w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-bone/70 leading-relaxed text-[0.95rem]">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
