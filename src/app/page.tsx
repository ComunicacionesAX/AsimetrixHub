import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Centro de Recursos
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Install HUB
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Tu centro de uso del cliente. Encuentra todo lo que necesitas para instalar, 
              configurar y mantener tus productos Asimetrix.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/guias"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Ver Guías
              </Link>
              <Link
                href="/soporte"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Contactar Soporte
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">¿En qué podemos ayudarte?</h2>
          <p className="text-text-light text-center text-lg mb-12 max-w-2xl mx-auto">
            Selecciona la sección que necesites para comenzar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/guias" className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Guías de Instalación</h3>
              <p className="text-text-light">
                Paso a paso detallado para instalar, configurar y mantener cada uno de nuestros productos.
              </p>
              <div className="mt-6 text-accent font-medium flex items-center gap-2">
                Explorar guías
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/base-conocimiento" className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Base de Conocimiento</h3>
              <p className="text-text-light">
                Tutoriales en video, documentación técnica y guías de uso del dashboard y productos.
              </p>
              <div className="mt-6 text-accent font-medium flex items-center gap-2">
                Ver tutoriales
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/soporte" className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent transition-all">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Soporte</h3>
              <p className="text-text-light">
                Contacta a nuestro equipo de soporte o chatea con Onix, nuestro agente virtual 24/7.
              </p>
              <div className="mt-6 text-accent font-medium flex items-center gap-2">
                Obtener ayuda
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Productos Disponibles</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nodo T-H-CO2', desc: 'Temperatura, Humedad y CO2', icon: '🌡️' },
              { name: 'PigVision', desc: 'Cámara inteligente para pesaje', icon: '📹' },
              { name: 'SmartWeight', desc: 'Cámara para corrales de engorde', icon: '⚖️' },
              { name: 'Insylo', desc: 'Sistema de monitoreo de silos', icon: '🏗️' },
            ].map((product) => (
              <div key={product.name} className="bg-bg-alt rounded-xl p-6 text-center hover:bg-bg-neutral transition-colors">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-text-light">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/guias"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Ver todas las guías de instalación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Necesitas ayuda personalizada?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de soporte está disponible para ayudarte con cualquier duda o inconveniente.
          </p>
          <Link
            href="/soporte"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contactar Soporte
          </Link>
        </div>
      </section>
    </div>
  );
}
