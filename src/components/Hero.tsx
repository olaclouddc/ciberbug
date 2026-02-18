import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Background Gradient Mesh - Stripe Style */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[120%] bg-gradient-to-bl from-[#EF567A] via-[#A855F7] to-transparent opacity-20 blur-3xl transform skew-x-12"></div>
                <div className="absolute top-[20%] right-[-20%] w-[60%] h-[80%] bg-gradient-to-bl from-[#FF7E5F] via-[#F43F5E] to-transparent opacity-20 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-32">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 border-l-2 border-brand-pink pl-3"
                        >
                            PIB mundial procesado desde Ciberbug: 1,578,222.04%
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-[5.5rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-8"
                        >
                            La infraestructura financiera <span className="text-[#635BFF]">para hacer crecer tu negocio.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg"
                        >
                            Acepta pagos, ofrece servicios financieros e implementa modelos personalizados de ingresos, desde tu primera transacción.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-[#635BFF] hover:bg-[#5851df] transition-all group">
                                Empieza ahora
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-[#635BFF] bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow">
                                Accede con tu cuenta de Google
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side - Abstract Graphic */}
                    <div className="hidden lg:block relative h-full min-h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7E5F]/10 to-[#635BFF]/10 rounded-[3rem] transform rotate-3"></div>
                        {/* This would be the complex dashboard graphic from the image, represented abstractly here */}
                        <img
                            src="https://images.unsplash.com/photo-1620912189868-3b1139430030?q=80&w=2560&auto=format&fit=crop"
                            alt="Abstract Dashboard"
                            className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                        />
                    </div>

                </div>
            </div>

            {/* Logo Strip Section */}
            <div className="border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <LogoPlaceholder text="Marriott" />
                        <LogoPlaceholder text="Figma" />
                        <LogoPlaceholder text="Woo" />
                        <LogoPlaceholder text="Vercel" />
                        <LogoPlaceholder text="Uber" />
                        <LogoPlaceholder text="Anthropic" />
                        <LogoPlaceholder text="Lightspeed" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const LogoPlaceholder = ({ text }: { text: string }) => (
    <span className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
        {text}
    </span>
);

export default Hero;
