import React from 'react';
import { ArrowRight, Shield, Activity, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-48">
            {/* Vertical Layout Lines - Starts exactly at the horizontal header line */}
            <div className="absolute top-[60px] md:top-[68px] bottom-0 left-0 right-0 max-w-7xl mx-auto pointer-events-none z-0 px-4 sm:px-6 lg:px-8">
                <div className="border-x border-gray-200 h-full w-full mx-auto"></div>
            </div>
            {/* Stripe-style slanted background image */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-[30%] -right-[15%] w-[150%] sm:w-[130%] lg:w-[110%] h-[150%]"
                    style={{
                        transform: 'skewY(-12deg)',
                        transformOrigin: 'top right',
                    }}
                >
                    <motion.div
                        className="w-full h-full bg-no-repeat bg-right-top"
                        style={{
                            backgroundImage: 'url("/bg-hero.jpg")',
                            backgroundSize: 'contain',
                        }}
                        initial={{ y: 0, x: 0, rotate: 0 }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            rotate: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-6 text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-semibold tracking-wide uppercase mb-6">
                            <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
                            Ciberinteligencia que trabaja para ti
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tight text-gray-900 mb-6 leading-[0.9]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Gestiona la</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">ciberseguridad</span> <br />
                            de tu empresa.
                        </h1>

                        <p className="mt-4 text-xl text-gray-500 mb-10 max-w-xl">
                            Elige las herramientas que necesites para proteger y asegurar la continuidad de tu negocio. Ciberbug lleva la IA a tus datos, donde quiera que se alojen. Detecta proactivamente las amenazas en toda la organización y ofrece <span className="text-brand-pink font-semibold">ciber resiliencia</span> con detección en tiempo real y respuesta autónoma a amenazas nuevas y conocidas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-pink hover:bg-pink-700 md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Empezar a usarlo
                                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 md:text-lg transition-all">
                                Solicitar acceso
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Shield size={16} className="text-gray-400" />
                                <span>Seguro</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity size={16} className="text-gray-400" />
                                <span>Escalable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock size={16} className="text-gray-400" />
                                <span>Privado</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Abstract UI Representation */}
                    <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-6 z-10"
                        >
                            {/* Mock UI Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                            </div>

                            {/* Main Graph/Chart Area */}
                            <div className="flex justify-center mb-8 relative">
                                <div className="w-40 h-40 rounded-full border-8 border-gray-50 flex items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full border-8 border-brand-pink/20 border-t-brand-pink transform -rotate-45"></div>
                                    <Shield className="h-10 w-10 text-brand-pink" />
                                </div>

                                {/* Floating badge 1 */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-0 right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3"
                                >
                                    <div className="bg-red-50 p-2 rounded-lg">
                                        <Activity size={16} className="text-red-500" />
                                    </div>
                                    <div>
                                        <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                                        <div className="h-2 w-10 bg-gray-100 rounded"></div>
                                    </div>
                                </motion.div>

                                {/* Floating badge 2 */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-0 left-0 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3"
                                >
                                    <div className="bg-green-50 p-2 rounded-lg">
                                        <Lock size={16} className="text-green-500" />
                                    </div>
                                    <div>
                                        <div className="h-2 w-20 bg-gray-200 rounded mb-1"></div>
                                        <div className="h-2 w-12 bg-gray-100 rounded"></div>
                                    </div>
                                    <span className="text-xs font-bold text-green-500">Safe</span>
                                </motion.div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-pink/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
