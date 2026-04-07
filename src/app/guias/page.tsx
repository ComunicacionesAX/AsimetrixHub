import Link from 'next/link';

const guides = [
  {
    id: 'nodo-th-co2',
    name: 'Nodo temperatura, humedad y CO2',
    description: 'Sensor para monitoreo ambiental en galpones',
    time: '15 min',
    reading: '2 min',
    steps: [
      { num: '01', title: 'Verificación eléctrica', icon: 'bolt' },
      { num: '02', title: 'Conexión y verificación', icon: 'wifi' },
      { num: '03', title: 'Ensamblaje del sensor', icon: 'inventory' },
      { num: '04', title: 'Instalación final', icon: 'pin' },
    ],
    link: '/guias/nodo-th-co2',
  },
  {
    id: 'pigvision',
    name: 'PigVision',
    description: 'Cámara inteligente para pesaje de cerdos',
    time: '30 min',
    reading: '5 min',
    steps: [
      { num: '01', title: 'Preparación del sitio', icon: 'bolt' },
      { num: '02', title: 'Instalación física', icon: 'wifi' },
      { num: '03', title: 'Configuración de red', icon: 'inventory' },
      { num: '04', title: 'Calibración', icon: 'pin' },
    ],
    link: '/guias/pigvision',
  },
  {
    id: 'smartweight',
    name: 'SmartWeight',
    description: 'Cámara inteligente para corrales de engorde',
    time: '25 min',
    reading: '3 min',
    steps: [
      { num: '01', title: 'Evaluación del espacio', icon: 'bolt' },
      { num: '02', title: 'Montaje del equipo', icon: 'wifi' },
      { num: '03', title: 'Conexión eléctrica', icon: 'inventory' },
      { num: '04', title: 'Pruebas iniciales', icon: 'pin' },
    ],
    link: '/guias/smartweight',
  },
  {
    id: 'insylo',
    name: 'Insylo',
    description: 'Sistema de monitoreo de silos',
    time: '20 min',
    reading: '3 min',
    steps: [
      { num: '01', title: 'Identificación del silo', icon: 'bolt' },
      { num: '02', title: 'Instalación del sensor', icon: 'wifi' },
      { num: '03', title: 'Configuración', icon: 'inventory' },
      { num: '04', title: 'Verificación', icon: 'pin' },
    ],
    link: '/guias/insylo',
  },
];

const stepIcons: Record<string, JSX.Element> = {
  bolt: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  wifi: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 18c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4.4-5.9l1.4 1.4L12 10.6l3.4 3.3 1.4-1.4-4.8-4.8-4.8 4.8zm6.8-5.9c2.8 2.8 2.8 7.2 0 10l-1.4-1.4c2.1-2.1 2.1-5.5 0-7.6l1.4-1.4c.1.1.1.2 0 .4zM5.3 5.3l1.4 1.4c-2.1 2.1-2.1 5.5 0 7.6l-1.4 1.4c-2.8-2.8-2.8-7.2 0-10l1.4 1.4c-.1.1-.2.1-.4 0z"/>
    </svg>
  ),
  inventory: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 13H8v3H6v-3H3v-2h3v-3h2v3h3v2zm5 0v-3h3V9h-3V6h-2v3h-3v2h3v3h3z"/>
    </svg>
  ),
  pin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
};

export default function GuíasPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-white/60">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Guías de Instalación</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Guías de Instalación</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Sigue cada paso para una correcta instalación de tus productos Asimetrix
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-primary p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{guide.name}</h3>
                      <p className="text-white/70 text-sm">{guide.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-4 mb-6 text-sm text-text-light">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {guide.reading} de lectura
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {guide.time} de instalación
                    </span>
                  </div>

                  <div className="space-y-3">
                    {guide.steps.map((step) => (
                      <div key={step.num} className="flex items-center gap-4 p-3 bg-bg-alt rounded-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-primary">
                            {stepIcons[step.icon]}
                            <span className="font-medium">{step.title}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={guide.link}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all"
                  >
                    Ver guía completa
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
