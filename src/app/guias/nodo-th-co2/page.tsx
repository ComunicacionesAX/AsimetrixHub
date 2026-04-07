import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Verificación eléctrica',
    icon: 'bolt',
    description: 'Antes de comenzar, verifica los siguientes requisitos en el sitio de instalación:',
    items: [
      { text: 'Punto eléctrico a 110V', check: true },
      { text: 'Ambiente seco y protegido de la lluvia', check: true },
    ],
  },
  {
    num: '02',
    title: 'Conexión y verificación',
    icon: 'wifi',
    description: 'Conecta el sensor al toma corriente y presiona el botón para verificar el envío de datos.',
    leds: [
      { color: 'bg-green-500', text: 'LED Verde: Conexión establecida' },
      { color: 'bg-blue-500', text: 'LED Azul: Enviando datos' },
      { color: 'bg-red-500', text: 'LED Rojo: Error / Sin conexión' },
    ],
  },
  {
    num: '03',
    title: 'Ensamblaje del sensor',
    icon: 'inventory',
    description: 'Acomoda el sensor en la canastilla con todos sus componentes.',
    components: [
      { name: 'Unidad principal', icon: 'memory' },
      { name: 'Cable de poder', icon: 'cable' },
      { name: 'Antena', icon: 'wifi' },
      { name: 'Canastilla', icon: 'shield' },
    ],
  },
  {
    num: '04',
    title: 'Instalación final',
    icon: 'pin',
    description: 'Instala el sensor en el galpón, a una altura aproximada de 45 cm desde el suelo hasta la base del sensor (bulbo de color gris).',
    important: 'El objetivo es que el sensor esté lo más cerca de los animales, sin que ellos lo toquen.',
    warnings: [
      'Mantener el sensor alejado de fuentes de calor directas',
      'Realizar limpieza semanal con brocha y paño húmedo',
    ],
  },
];

const icons: Record<string, JSX.Element> = {
  bolt: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  wifi: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 18c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4.4-5.9l1.4 1.4L12 10.6l3.4 3.3 1.4-1.4-4.8-4.8-4.8 4.8z"/>
    </svg>
  ),
  inventory: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 13H8v3H6v-3H3v-2h3v-3h2v3h3v2z"/>
    </svg>
  ),
  pin: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  memory: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 7v10h2v-4h4v4h2v-4h4v4h2v-4h4v-2H2V7h20v10h2V7H2z"/>
    </svg>
  ),
  cable: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2z"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
};

export default function NodoTHCO2Page() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-white/60">
            <Link href="/">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/guias">Guías de Instalación</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nodo T-H-CO2</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Nodo temperatura, humedad y CO2</h1>
              <p className="text-white/70">Guía completa de instalación</p>
            </div>
          </div>
          <div className="flex gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2 min de lectura
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              15 min de instalación
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-alt rounded-2xl p-8 mb-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <p className="text-text-light text-sm">Imagen del sensor Nodo</p>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="bg-primary/5 p-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        {icons[step.icon]}
                        <h2 className="text-xl font-bold">{step.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-text-light mb-4">{step.description}</p>

                  {step.items && (
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.leds && (
                    <div className="bg-bg-alt rounded-xl p-4 space-y-3">
                      {step.leds.map((led, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${led.color}`}></div>
                          <span>{led.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.components && (
                    <div className="grid grid-cols-2 gap-4">
                      {step.components.map((comp, idx) => (
                        <div key={idx} className="bg-bg-alt rounded-xl p-4 flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {icons[comp.icon]}
                          </div>
                          <span className="font-medium">{comp.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.important && (
                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-xl mt-4">
                      <p className="font-medium text-primary-dark">{step.important}</p>
                    </div>
                  )}

                  {step.warnings && (
                    <ul className="space-y-2 mt-4">
                      {step.warnings.map((warning, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                          </svg>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-dark text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda?</h3>
            <p className="text-white/80 mb-6">Contacta a nuestro equipo de soporte</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Damian García</p>
                    <p className="text-white/60 text-sm">damian.garcia@asimetrix.co</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">+57 311 2078988</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Manuela Chavarría</p>
                    <p className="text-white/60 text-sm">manuela.chavarria@asimetrix.co</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">+57 318 2202707</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
