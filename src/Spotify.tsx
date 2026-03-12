import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: any;
  }
}

const SpotifyAuraPage = () => {
    // Integración del widget de Voiceflow para el chatbot de Aura
    useEffect(() => {
        const script = document.createElement('script');
        script.onload = function () {
            window.voiceflow.chat.load({
                verify: { projectID: '69b16ab287d7cd23e925965e' }, // <-- REEMPLAZA ESTO
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                render: {
                    mode: 'overlay',
                },
                autostart: false,
                appearance: {
                    color: '#1DB954', // Color verde neón
                    title: 'Aura v.2030'
                }
            },

            );
        };
        script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            // Limpieza del script si el componente se desmonta
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#ff00ff]/20 selection:text-[#00ffff] overflow-x-hidden relative">

            {/* Líneas y Rejillas de Fondo Cyberpunk */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:100px_100px]" style={{ backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)' }}></div>
            </div>

            {/* HEADER: NODO NEURONAL */}
            <header className="fixed top-0 w-full bg-[#050505]/90 backdrop-blur-sm border-b border-[#00ffff]/20 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Logo Aura 2030 */}
                        <div className="relative flex h-8 w-8 items-center justify-center">
                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-70"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1DB954]"></span>
                            <div className="absolute -inset-1 rounded-full border border-[#00ffff] opacity-30 blur-[2px]"></div>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">
                            Spotify <span className="font-light text-[#1DB954]">Aura 2030</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex gap-10 text-xs font-mono font-medium tracking-widest uppercase text-[#a0a0a0]">
                        <a href="#biometria" className="hover:text-[#1DB954] transition-colors relative group">
                            NODO NEURONAL
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1DB954] group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#psicologia" className="hover:text-[#ff00ff] transition-colors relative group">
                            BIO-SENSORES
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff00ff] group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#etica" className="hover:text-[#00ffff] transition-colors relative group">
                            PROTOCOLO ÉTICO
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffff] group-hover:w-full transition-all"></span>
                        </a>
                    </nav>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#1DB954] bg-[#1DB954]/10 px-4 py-1.5 rounded-full border border-[#1DB954]/30 blur-[0.5px]">
                        <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></div>
                        v.2030.4.1 [STREAMING BIOMÉTRICO ACTIVO]
                    </div>
                </div>
            </header>

            {/* HERO SECTION: EL DESPERTAR SENSORIAL */}
            <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center z-10">
                {/* Resplandor de fondo neón */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1DB954]/15 rounded-full blur-[180px] pointer-events-none"></div>
                <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#00ffff]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff00ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-800 bg-gray-900/50 mb-10 backdrop-blur-sm shadow-inner shadow-[#00ffff]/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_8px_#ff00ff]"></span>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-300">PROTOCOLO ORÁCULO 2030 INICIADO</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-tight mb-8 z-10 text-white">
                    EL MERCADO <span className="text-[#00ffff]">COLAPSÓ</span>. <br />
                    LA MÚSICA <span className="text-[#ff00ff]">MUTÓ</span>.
                </h1>

                <p className="max-w-3xl text-xl md:text-2xl text-gray-400 mb-14 z-10 font-light leading-relaxed">
                    Iniciando enlace neuronal. Aura v.2030 no reproduce listas de reproducción. <span className="text-white font-semibold">Es una frecuencia bio-sincrónica</span>. Detecta tu fisiología, pulso neuronal y carga cognitiva para <span className="text-white font-semibold animate-pulse">inyectar</span> la frecuencia exacta que tu neocórtex necesita en este nanosegundo.
                </p>

                {/* Botón de Acción Principal */}
                <button className="z-10 group relative px-10 py-5 bg-gradient-to-r from-[#1DB954] to-emerald-400 text-black font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_#1DB954]">
                    <div className="absolute inset-0 w-full h-full bg-white/25 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        CONECTAR MI AURA
                    </span>
                </button>
            </section>

            <hr className="border-gray-900" />

            {/* BODY / FEATURES SECTION: TU CÓMPLICE NEURAL */}
            <section className="py-28 px-6 max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-5 text-white">TU CÓMPLICE NEURAL: AURA v.2030</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Una arquitectura de inteligencia artificial sensorial para la nueva era del consumo inmersivo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Feature 1: Biometría */}
                    <div className="bg-gradient-to-b from-gray-900 to-[#020202] border border-gray-800 p-10 rounded-3xl hover:border-[#ff00ff]/60 transition-colors shadow-lg hover:shadow-[#ff00ff]/20">
                        <div className="h-14 w-14 rounded-xl bg-[#ff00ff]/10 flex items-center justify-center mb-8 border border-[#ff00ff]/20 shadow-inner">
                            <svg className="w-7 h-7 text-[#ff00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">HIPERSEGMENTACIÓN BIOMÉTRICA</h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Algoritmos que procesan tus signos vitales en tiempo real. Leemos tu fisiología: dilatación pupilar, micro-sudoración, temperatura frontal y niveles de cortisol. La personalización ya no es demográfica; es neuro-biológica.
                        </p>
                    </div>

                    {/* Feature 2: Chatbot Personalidad */}
                    <div className="bg-gradient-to-b from-gray-900 to-[#020202] border border-gray-800 p-10 rounded-3xl hover:border-[#1DB954]/60 transition-colors shadow-lg hover:shadow-[#1DB954]/20">
                        <div className="h-14 w-14 rounded-xl bg-[#1DB954]/10 flex items-center justify-center mb-8 border border-[#1DB954]/20 shadow-inner">
                            <svg className="w-7 h-7 text-[#1DB954]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">CHATBOT CON PSICOLOGÍA COGNITIVA</h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Aura no responde, comprende. Nuestro asistente cognitivo adapta su tono de voz, empatía y sarcasmo según tu nivel de estrés detectado en la terminal neuronal. No es soporte técnico, es tu cómplice psicológico.
                        </p>
                    </div>

                    {/* Feature 3: Personalización Sensorial */}
                    <div className="bg-gradient-to-b from-gray-900 to-[#020202] border border-gray-800 p-10 rounded-3xl hover:border-[#00ffff]/60 transition-colors shadow-lg hover:shadow-[#00ffff]/20">
                        <div className="h-14 w-14 rounded-xl bg-[#00ffff]/10 flex items-center justify-center mb-8 border border-[#00ffff]/20 shadow-inner">
                            <svg className="w-7 h-7 text-[#00ffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 1v8m0 0v1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">PERSONALIZACIÓN SENSORIAL INDIVIDUAL</h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            El algoritmo que te conoce mejor que tú mismo. Transiciones sonoras invisibles, frecuencias binaurales y estimulación háptica que se ajustan dinámicamente. Aura te lleva a un estado de flujo puro, garantizando la fidelización absoluta del consumidor.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN VISUAL: AURICULARES Y PERSONA EN CONEXIÓN NEURONAL */}
            <section className="py-24 px-6 bg-gray-950/40 relative z-10 overflow-hidden">
                {/* Efectos de neón radiales */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ffff]/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff00ff]/10 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">

                    {/* Lado Izquierdo: Modelo Auriculares Hápticos */}
                    <div className="flex-1 text-center md:text-left relative flex flex-col items-center md:items-start justify-center">

                        {/* Modelado Visual Auriculares Hápticos 2030 */}
                        <div className="relative h-60 w-60 mb-10 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#1DB954] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative h-full w-full rounded-full bg-gray-900 border-2 border-gray-800 p-8 shadow-2xl">
                                {/* Diadema */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-28 border-[6px] border-gray-800 rounded-b-xl"></div>
                                {/* Copas */}
                                <div className="absolute left-0 bottom-4 h-32 w-20 bg-gray-800 rounded-l-3xl border-4 border-gray-700"></div>
                                <div className="absolute right-0 bottom-4 h-32 w-20 bg-gray-800 rounded-r-3xl border-4 border-gray-700"></div>
                                {/* Neón en Copas */}
                                <div className="absolute left-2 bottom-6 h-28 w-16 bg-[#00ffff]/20 rounded-l-2xl animate-pulse"></div>
                                <div className="absolute right-2 bottom-6 h-28 w-16 bg-[#00ffff]/20 rounded-r-2xl animate-pulse delay-75"></div>
                                {/* Bio-sensores */}
                                <div className="absolute left-1/2 top-10 -translate-x-1/2 flex gap-1.5 opacity-60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff00ff]"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff]"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]"></span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-3xl font-black mb-4 text-white tracking-tight leading-tight">AURICULARES <span className="text-[#00ffff]">AURA MORPHOLOGY</span></h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Equipados con transductores hápticos de pandeo y una rejilla de bio-sensores de conductividad de la piel. Aura Radiology analiza y ajusta la morfología física de los auriculares para garantizar el acoplamiento perfecto con tu cráneo y neocórtex.
                        </p>
                    </div>

                    {/* Lado Derecho: Modelo Persona Escuchando/Sincronizando */}
                    <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">

                        {/* Modelado Visual Persona en Sincronización */}
                        <div className="relative h-64 w-64 mb-10 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#1DB954] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative h-full w-full rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center p-6 shadow-2xl overflow-hidden">
                                {/* Silueta Persona */}
                                <div className="h-40 w-28 bg-gray-800 rounded-b-full border-4 border-gray-700 absolute bottom-0"></div>
                                {/* Neocórtex Link */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#ff00ff]/20 animate-spin-slow"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-[#00ffff]/20 animate-reverse-spin-slow delay-150"></div>
                                {/* Bio-Frecuencia */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-baseline gap-1 opacity-70">
                                    {[...Array(10)].map((_, i) => (
                                        <span key={i} className="w-1 rounded-sm bg-[#1DB954] animate-pulse" style={{ height: `${Math.random() * 20 + 5}px`, animationDelay: `${i * 0.1}s` }}></span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <h3 className="text-3xl font-black mb-4 text-white tracking-tight leading-tight">FRECUENCIA <span className="text-[#ff00ff]">BIO-SINCRÓNICA</span></h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm md:max-w-none">
                            Aura detecta cortisol elevado. El algoritmo muta a un protocolo de frecuencias binaurales a 432 Hz y sonidos de oleaje profundo. Los biosensores confirman la estabilización del sistema nervioso del usuario en 90 nanosegundos.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER: PROTOCOLO ÉTICO */}
            <footer className="border-t border-gray-900 bg-[#020202] py-16 mt-20 relative z-10 overflow-hidden">
                {/* Efectos de neón */}
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#1DB954]/5 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/5 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start opacity-70">
                            <div className="w-5 h-5 bg-[#1DB954] rounded-sm"></div>
                            <span className="font-bold tracking-tight text-white">Spotify Aura</span>
                        </div>
                        <div className="max-w-xs text-xs font-mono text-[#a0a0a0] leading-relaxed">
                            v.2030.4.1 [ONLINE] | Encriptación Biométrica de Grado Clínico Activada
                        </div>
                    </div>

                    <div className="text-xs text-gray-700 font-mono text-center md:text-right leading-loose">
                        <p>PROYECTO ORÁCULO 2030</p>
                        <p className="mt-1">PITCH DE INVERSIÓN — SHOWROOM DE GUERRILLA</p>
                        <p className="mt-1 text-gray-800">© 2030 AGENCIA MIND READERS | DIRECCIÓN DE ESTRATEGIA DISRUPTIVA</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SpotifyAuraPage;