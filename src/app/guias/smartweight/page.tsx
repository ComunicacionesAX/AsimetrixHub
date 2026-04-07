import Link from 'next/link';

export default function SmartWeightGuide() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-white/60">
            <Link href="/">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/guias">Guías de Instalación</Link>
            <span className="mx-2">/</span>
            <span className="text-white">SmartWeight</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5zM11 11h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">SmartWeight</h1>
              <p className="text-white/70">Cámara inteligente para corrales de engorde</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-bg-alt rounded-2xl p-12">
            <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <h2 className="text-2xl font-bold mb-4">Guía en desarrollo</h2>
            <p className="text-text-light mb-6">
              La guía detallada de instalación para SmartWeight estará disponible pronto.
            </p>
            <Link
              href="/guias"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a guías
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
