export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">AX</span>
              </div>
              <div>
                <span className="text-white font-semibold text-lg">Asimetrix</span>
                <span className="block text-white/60 text-xs">Install HUB</span>
              </div>
            </div>
            <p className="text-sm text-white/60">
              Monitoreo inteligente para tu producción
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/guias" className="hover:text-white transition-colors">Guías de Instalación</a></li>
              <li><a href="/base-conocimiento" className="hover:text-white transition-colors">Base de Conocimiento</a></li>
              <li><a href="/soporte" className="hover:text-white transition-colors">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>soporte@asimetrix.co</li>
              <li>+57 311 2078988</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          © 2026 Asimetrix - Monitoreo inteligente para tu producción
        </div>
      </div>
    </footer>
  );
}
