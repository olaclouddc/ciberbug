import React from 'react';
import { Shield, Cloud, AlertTriangle, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Shield className="h-6 w-6 text-brand-pink" />,
        title: "Detección de Amenazas",
        description: "Rastrea en millones de logs en tiempo real para identificar amenazas activas antes de que se conviertan en violaciones.",
        active: false,
    },
    {
        icon: <Cloud className="h-6 w-6 text-blue-500" />,
        title: "Seguridad en la Nube",
        description: "Protege tu infraestructura AWS, Azure y GCP.",
        active: false,
        status: "All systems operational"
    },
    {
        icon: <AlertTriangle className="h-6 w-6 text-white" />,
        title: "Gestión de Vulnerabilidades",
        description: "Flujos de trabajo automatizados de escaneo y parcheo.",
        active: true, // Dark card
        tags: ["CVE-2023-04...", "Critical Pat..."]
    },
    {
        icon: <Activity className="h-6 w-6 text-brand-purple" />,
        title: "Auditoría y Desempeño",
        description: "SOC2, HIPAA y GDPR desde el primer momento. Genera informes en segundos.",
        active: false,
        progress: true
    }
];

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <h2 className="text-brand-pink font-semibold tracking-wide uppercase text-sm mb-3">Plataforma Unificada</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
                        Un conjunto totalmente integrado de productos de seguridad.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl p-8 transition-all hover:shadow-xl ${feature.active
                                    ? 'bg-brand-dark text-white'
                                    : 'bg-white text-gray-900 border border-gray-100 hover:border-brand-pink/20'
                                }`}
                        >
                            <div className={`p-3 rounded-xl w-fit mb-6 ${feature.active ? 'bg-white/10' : 'bg-brand-pink/5'
                                }`}>
                                {feature.icon}
                            </div>

                            <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                            <p className={`text-base mb-6 ${feature.active ? 'text-gray-400' : 'text-gray-500'}`}>
                                {feature.description}
                            </p>

                            {/* Specific UI details for cards based on design */}
                            {feature.status && (
                                <div className="flex items-center gap-2 text-xs font-medium text-green-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    {feature.status}
                                </div>
                            )}

                            {feature.active && feature.tags && (
                                <div className="flex gap-2">
                                    {feature.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 rounded bg-white/10 text-xs font-mono text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {feature.progress && (
                                <div className="mt-4">
                                    <div className="flex justify-between text-xs mb-1 text-gray-500">
                                        <span>Performance Score</span>
                                        <span className="text-green-500 font-bold">98%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
