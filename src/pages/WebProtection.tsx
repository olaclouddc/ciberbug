import { motion } from 'framer-motion';
import ProductLayout from '../components/ProductLayout';
import { Shield, Lock, Search, FileCheck, Globe, Activity, CheckCircle } from 'lucide-react';

const WebMockup = () => (
    <div className="relative">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-6 z-10"
        >
            {/* Mock UI Header (Browser style) */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
                <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
                    <Lock size={10} className="text-green-500" />
                    <div className="h-1.5 w-24 bg-gray-200 rounded-full"></div>
                </div>
                <div className="w-10"></div>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {/* Visualizing Protection */}
                <div className="flex justify-center py-6 relative">
                    <div className="w-32 h-32 rounded-full border-4 border-gray-50 flex items-center justify-center relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-pink"
                        ></motion.div>
                        <Globe className="h-12 w-12 text-blue-500 opacity-20" />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute"
                        >
                            <Shield className="h-10 w-10 text-brand-pink" />
                        </motion.div>
                    </div>

                    {/* Floating SSL Badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-0 right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-2"
                    >
                        <div className="bg-green-50 p-1.5 rounded-lg">
                            <FileCheck size={14} className="text-green-500" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-gray-800">SSL Activo</div>
                            <div className="text-[8px] text-green-500 font-medium">Certificado válido</div>
                        </div>
                    </motion.div>

                    {/* Floating Malware Scan Badge */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-2"
                    >
                        <div className="bg-blue-50 p-1.5 rounded-lg">
                            <Search size={14} className="text-blue-500" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-gray-800">Malware Scan</div>
                            <div className="text-[8px] text-blue-500 font-medium">Limpieza 100%</div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats Mockup */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Activity size={12} className="text-brand-purple" />
                            <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-3 w-20 bg-gray-300 rounded"></div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-center justify-between">
                        <div>
                            <div className="h-1.5 w-10 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 w-16 bg-gray-300 rounded"></div>
                        </div>
                        <CheckCircle size={16} className="text-green-500" />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
    </div>
);

const WebProtection = () => {
    return (
        <ProductLayout
            badge="Seguridad Web Integral"
            title={
                <>
                    Protección <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">Web y WordPress.</span>
                </>
            }
            subtitle="Blindamos tu sitio web contra cualquier ataque. Desde detección de malware hasta cortafuegos de aplicaciones de última generación, gestionado por IA."
            rightContent={<WebMockup />}
            primaryBtnText="Pruébalo gratis"
            secondaryBtnText="Solicitar demo"
            featuresSubtitle="Características Elite"
            featuresTitle="Un conjunto totalmente integrado de seguridad."
            features={[
                {
                    title: "Análisis de sitio",
                    desc: "Escaneamos cada rincón de tu código buscando vulnerabilidades antes de que sean explotadas.",
                    icon: <Search />,
                    details: "#",
                    badge: "Detectar",
                    lightBg: true
                },
                {
                    title: "Certificados SSL",
                    desc: "Gestión y renovación automática de certificados para garantizar la confianza de tus usuarios.",
                    icon: <FileCheck />,
                    details: "#",
                    badge: "Cifrar",
                    lightBg: true
                },
                {
                    title: "Anti-malware",
                    desc: "Eliminación automática de amenazas. Si algo entra, nuestro sistema lo aísla y lo neutraliza.",
                    icon: <Lock />,
                    details: "#",
                    badge: "Neutralizar",
                    darkBg: true
                },
                {
                    title: "WAF Avanzado",
                    desc: "Cortafuegos de aplicaciones web con reglas inteligentes actualizadas al minuto.",
                    icon: <Shield />,
                    details: "#",
                    badge: "Bloquear",
                    lightBg: true
                }
            ]}
            bottomBanner={{
                badge: "Velocidad e Inteligencia",
                title: "Protección instantánea en cualquier lugar del mundo.",
                stats: [
                    { label: "Amenazas detectadas", value: "99.9%" },
                    { label: "Latencia añadida", value: "<10ms" }
                ]
            }}
        />
    );
};

export default WebProtection;
