import React from 'react';
import { Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const GlobalStats: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-[#FF7E5F] to-brand-pink text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-wide uppercase mb-6">
                            <span className="mr-2">🚀</span> VELOCIDAD
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Protección instantánea en cualquier lugar del mundo.
                        </h2>

                        <p className="text-xl text-white/90 mb-10 max-w-lg">
                            Nuestra red distribuida permite que sus aplicaciones estén protegidas con la menor latencia posible, sin importar dónde se encuentren sus usuarios.
                        </p>

                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-pink bg-white hover:bg-gray-50 transition-all shadow-lg">
                            Ver red global
                            <Globe className="ml-2 -mr-1 h-5 w-5" />
                        </button>
                    </div>

                    {/* Right Content - Stats Cards */}
                    <div className="mt-12 lg:mt-0 grid gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <h3 className="text-4xl font-bold mb-2">99.9%</h3>
                                <p className="text-sm text-white/80">De amenazas detectadas automáticamente</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <h3 className="text-4xl font-bold mb-2">&lt;10ms</h3>
                                <p className="text-sm text-white/80">Latencia añadida a las solicitudes</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex items-center gap-6"
                        >
                            <div className="bg-white p-3 rounded-full text-brand-pink">
                                <Rocket size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Implementación Rápida</h3>
                                <p className="text-white/90 text-sm">Integración en 5 líneas de código. Compatible con Node.js, Python, Go, Ruby y más.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <Globe className="absolute -right-20 -bottom-20 w-[600px] h-[600px]" />
            </div>
        </section>
    );
};

export default GlobalStats;
