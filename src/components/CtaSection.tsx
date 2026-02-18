import React from 'react';
import { Server } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-gray/50 rounded-3xl p-8 md:p-16 relative overflow-hidden bg-gray-50">
                    <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                ¿Listo para asegurar tu <br /> stack tecnológico?
                            </h2>
                            <p className="text-lg text-gray-500 mb-8">
                                Únete a los miles de desarrolladores que construyen aplicaciones seguras y resistentes con Ciberbug.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-dark hover:bg-black transition-all shadow-lg">
                                    Comenzar ahora
                                </button>
                                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-brand-pink bg-transparent hover:bg-pink-50 transition-all">
                                    Contactar ventas
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10"
                            >
                                <div className="bg-gradient-to-tr from-gray-900 to-gray-800 p-1 rounded-2xl shadow-2xl">
                                    <div className="bg-gray-900 rounded-xl overflow-hidden relative">
                                        {/* Abstract visuals representing chip/stack */}
                                        <div className="w-64 h-48 md:w-80 md:h-64 bg-gray-800 relative flex items-center justify-center">
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                            <Server className="text-brand-pink w-16 h-16 relative z-10 opacity-80" />
                                            <div className="absolute w-full h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Decorative bloom */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
