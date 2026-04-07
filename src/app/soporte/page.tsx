'use client';

import Link from 'next/link';
import { useState } from 'react';

const team = [
  {
    name: 'Damian García',
    role: 'Ingeniero de Soporte',
    email: 'damian.garcia@asimetrix.co',
    phone: '+57 311 2078988',
  },
  {
    name: 'Manuela Chavarría',
    role: 'Especialista Técnica',
    email: 'manuela.chavarria@asimetrix.co',
    phone: '+57 318 2202707',
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo tarda el proceso de instalación?',
    a: 'El tiempo de instalación varía según el producto. Los nodos ambientales suelen tardar entre 15-30 minutos, mientras que sistemas más complejos como PigVision pueden requerir 1-2 horas.',
  },
  {
    q: '¿Qué hago si mi sensor no conecta a la red?',
    a: 'Primero verifica que el LED indicador muestre el estado correcto. Revisa que el punto eléctrico esté funcionando y que la señal WiFi sea estable. Si el problema persiste, contacta a nuestro equipo de soporte.',
  },
  {
    q: '¿Con qué frecuencia debo realizar mantenimiento?',
    a: 'Recomendamos una limpieza mensual de los sensores y una revisión técnica trimestral. Consulta la guía específica de tu producto para instrucciones detalladas.',
  },
  {
    q: '¿Cómo genero un reporte de datos?',
    a: 'Accede al dashboard, selecciona el período de tiempo deseado y utiliza la función de exportación. Puedes generar reportes en formato PDF o Excel.',
  },
];

export default function SoportePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{text: string; isUser: boolean}[]>([
    {text: '¡Hola! Soy Onix, tu asistente virtual de Asimetrix. ¿En qué puedo ayudarte hoy?', isUser: false},
  ]);
  const [chatInput, setChatInput] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, {text: chatInput, isUser: true}]);
    setChatInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        text: 'Gracias por tu mensaje. Un miembro de nuestro equipo de soporte se pondrá en contacto contigo pronto. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?',
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-white/60">
            <Link href="/">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Soporte</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Centro de Soporte</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Estamos aquí para ayudarte. Contacta a nuestro equipo o chatea con Onix, nuestro agente virtual 24/7
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Equipo de Soporte</h2>
              <div className="space-y-4">
                {team.map((member) => (
                  <div key={member.name} className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-text-light mb-3">{member.role}</p>
                        <div className="space-y-2">
                          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-primary hover:underline">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {member.email}
                          </a>
                          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-primary hover:underline">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-bg-alt rounded-2xl p-6">
                <h3 className="font-bold mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-text-light">
                  <p><span className="font-medium text-text">Lunes a Viernes:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-medium text-text">Sábados:</span> 9:00 AM - 1:00 PM</p>
                  <p><span className="font-medium text-text">Domingos:</span> Cerrado</p>
                </div>
                <p className="mt-4 text-sm text-accent">
                  Para emergencias fuera de horario, contacta a nuestro chat Onix disponible 24/7
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-alt transition-colors"
                    >
                      <span className="font-medium pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-text-light flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-4 text-text-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">¿Necesitas más ayuda?</h3>
                <p className="text-text-light mb-4">
                  Explora nuestras guías de instalación o base de conocimiento
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/guias"
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    Guías de Instalación
                  </Link>
                  <Link
                    href="/base-conocimiento"
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    Base de Conocimiento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40"
        aria-label="Abrir chat con Onix"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
      </button>

      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-border">
          <div className="bg-primary-dark text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Onix</h4>
                <p className="text-xs text-white/60">Asistente virtual 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.isUser
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-bg-alt text-text rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
