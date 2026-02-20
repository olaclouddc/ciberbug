import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Shield, Activity, Lock } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    desc: string;
    icon: React.ReactNode;
    details?: string;
    badge?: string;
    badgeColor?: string;
    lightBg?: boolean;
    darkBg?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon, details, badge, badgeColor, lightBg, darkBg }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`p-8 rounded-2xl border ${darkBg ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100 shadow-sm'
            } flex flex-col h-full`}
    >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${lightBg ? 'bg-blue-50 text-[#635BFF]' : darkBg ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-400'
            }`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${darkBg ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>

        {badge && (
            <div className="mt-auto">
                <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${badgeColor || 'bg-brand-pink/10 text-brand-pink'}`}>
                    {badge}
                </span>
            </div>
        )}

        {details && (
            <button className="mt-auto flex items-center text-[#635BFF] text-sm font-semibold hover:opacity-80 transition-opacity group/btn w-fit pt-4">
                Ver detalles
                <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </button>
        )}
    </motion.div>
);

interface ProductLayoutProps {
    badge: string;
    title: React.ReactNode;
    subtitle: string;
    heroImage: string;
    primaryBtnText: string;
    secondaryBtnText: string;
    featuresTitle: string;
    featuresSubtitle: string;
    features: FeatureCardProps[];
    bottomBanner?: {
        badge: string;
        title: string;
        stats: { label: string; value: string }[];
    };
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
    badge,
    title,
    subtitle,
    heroImage,
    primaryBtnText,
    secondaryBtnText,
    featuresTitle,
    featuresSubtitle,
    features,
    bottomBanner
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="relative px-10 sm:px-16 lg:px-24 py-16 lg:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center px-3 py-1 rounded-md bg-brand-pink/10 text-brand-pink text-[10px] font-bold uppercase tracking-widest mb-8">
                                <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                                {badge}
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-oswald font-bold uppercase tracking-tight text-gray-900 mb-8 leading-[0.9]">
                                {title}
                            </h1>

                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                                {subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="inline-flex items-center justify-center px-8 py-3 bg-brand-pink text-white rounded-full font-bold text-sm hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    {primaryBtnText}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                                <button className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-bold text-sm hover:bg-gray-200 transition-all">
                                    {secondaryBtnText}
                                </button>
                            </div>

                            <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Shield size={14} className="text-gray-300" />
                                    <span>Seguro</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity size={14} className="text-gray-300" />
                                    <span>Escalable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Lock size={14} className="text-gray-300" />
                                    <span>Privado</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                                <motion.img
                                    src={heroImage}
                                    alt="Hero Illustration"
                                    className="w-full h-auto"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>

                            {/* Floating elements to add life */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-10 sm:px-16 lg:px-24 py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink mb-4 block">
                            {featuresSubtitle}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight">
                            {featuresTitle}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <FeatureCard key={idx} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Special Banner (Optional) */}
            {bottomBanner && (
                <section className="bg-brand-pink p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="w-[150%] h-[150%] -top-[25%] -right-[25%] absolute bg-white/20 blur-3xl transform -rotate-12 translate-x-1/2"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-white">
                            <span className="inline-block px-3 py-1 rounded-md bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                                {bottomBanner.badge}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                                {bottomBanner.title}
                            </h2>
                            <p className="text-white/80 text-lg mb-8">
                                Nuestra tecnología de vanguardia permite que sus aplicaciones estén siempre protegidas, optimizadas y disponibles en cualquier lugar.
                            </p>
                            <button className="px-8 py-4 bg-white text-brand-pink rounded-full font-bold text-sm hover:shadow-xl transition-all active:scale-95">
                                Ver casos de éxito
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                            {bottomBanner.stats.map((stat, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white min-w-[180px]">
                                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-xs text-white/60 font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductLayout;
