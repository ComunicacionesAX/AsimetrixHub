import Link from 'next/link';

const categories = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Aprende a usar el panel de control',
    icon: 'dashboard',
    tutorials: [
      { title: 'Introducción al Dashboard', duration: '5 min', level: 'Básico' },
      { title: 'Configuración de alertas', duration: '8 min', level: 'Intermedio' },
      { title: 'Generación de reportes', duration: '10 min', level: 'Avanzado' },
      { title: 'Personalización de vistas', duration: '6 min', level: 'Intermedio' },
    ],
  },
  {
    id: 'nodos',
    name: 'Nodos Ambientales',
    description: 'Tutoriales de uso de sensores',
    icon: 'sensors',
    tutorials: [
      { title: 'Monitoreo en tiempo real', duration: '4 min', level: 'Básico' },
      { title: 'Interpretación de datos', duration: '12 min', level: 'Intermedio' },
      { title: 'Configuración de umbrales', duration: '7 min', level: 'Intermedio' },
      { title: 'Mantenimiento preventivo', duration: '15 min', level: 'Avanzado' },
    ],
  },
  {
    id: 'pigvision',
    name: 'PigVision',
    description: 'Cámara de pesaje inteligente',
    icon: 'camera',
    tutorials: [
      { title: 'Primeros pasos con PigVision', duration: '6 min', level: 'Básico' },
      { title: 'Calibración de la cámara', duration: '10 min', level: 'Intermedio' },
      { title: 'Análisis de crecimiento', duration: '8 min', level: 'Intermedio' },
      { title: 'Exportación de datos', duration: '5 min', level: 'Básico' },
    ],
  },
  {
    id: 'smartweight',
    name: 'SmartWeight',
    description: 'Sistema de pesaje para corrales',
    icon: 'scale',
    tutorials: [
      { title: 'Configuración inicial', duration: '7 min', level: 'Básico' },
      { title: 'Configuración de corrales', duration: '9 min', level: 'Intermedio' },
      { title: 'Reportes de ganancia de peso', duration: '11 min', level: 'Avanzado' },
    ],
  },
  {
    id: 'insylo',
    name: 'Insylo',
    description: 'Monitoreo de silos',
    icon: 'storage',
    tutorials: [
      { title: 'Monitoreo de inventario', duration: '5 min', level: 'Básico' },
      { title: 'Alertas de nivel bajo', duration: '4 min', level: 'Básico' },
      { title: 'Historial de consumo', duration: '8 min', level: 'Intermedio' },
    ],
  },
];

const categoryIcons: Record<string, JSX.Element> = {
  dashboard: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),
  sensors: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l4.59-4.59L16 11l-6 6z"/>
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5zM11 11h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
    </svg>
  ),
  storage: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4l8 5 8-5v4H2V4zm4 8H4v2h2v-2zm-2-2H2v2h2v-2zm4 0h2v2H6v-2zm-4-4v2h2v-2H4zm0 4h2v2H4v-2zm4 0h2v2H8v-2zm-2 0v2h2v-2H6zm2-4H6v2h2v-2zm0 4H6v2h2v-2zm6 0h2v2h-2v-2zm2-4h-2v2h2v-2zm0 4h-2v2h2v-2zm2 0h-2v2h2v-2zm0-4v2h-2v-2h2zm0-4h-2v2h2V9zm0 0h2V7h-2v2zm4 12h-2v2h2v-2zm-4 0v2h-2v-2h2zm2-4v2h-2v-2h2zm0-4v2h-2v-2h2z"/>
    </svg>
  ),
};

const levelColors: Record<string, string> = {
  'Básico': 'bg-green-100 text-green-700',
  'Intermedio': 'bg-yellow-100 text-yellow-700',
  'Avanzado': 'bg-red-100 text-red-700',
};

export default function BaseConocimientoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-white/60">
            <Link href="/">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Base de Conocimiento</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Base de Conocimiento</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Tutoriales, guías y videos para aprovechar al máximo tus productos Asimetrix
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-bg-alt rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold mb-4">Categorías</h3>
                <nav className="space-y-2">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-neutral transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {categoryIcons[cat.icon]}
                      </div>
                      <div>
                        <p className="font-medium">{cat.name}</p>
                        <p className="text-xs text-text-light">{cat.tutorials.length} tutoriales</p>
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {categories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                      {categoryIcons[category.icon]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <p className="text-text-light">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.tutorials.map((tutorial, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-accent transition-all cursor-pointer group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {tutorial.title}
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-text-light">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {tutorial.duration}
                              </span>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[tutorial.level]}`}>
                                {tutorial.level}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="text-text-light mb-6">
            Explora todas nuestras guías o contacta a nuestro equipo de soporte
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guias"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all"
            >
              Ver guías de instalación
            </Link>
            <Link
              href="/soporte"
              className="px-6 py-3 bg-white border border-border text-text font-semibold rounded-lg hover:bg-bg-alt transition-all"
            >
              Contactar soporte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
