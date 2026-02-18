import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CreditCard, Box, Globe, Shield, Terminal, Users, FileText, PieChart, Briefcase } from 'lucide-react';

const products = [
    {
        title: "Pagos",
        desc: "Acepta pagos online",
        icon: <CreditCard className="text-brand-purple" />,
        items: ["Checkout", "Elements", "Payment Links"]
    },
    {
        title: "Billing",
        desc: "Gestiona suscripciones",
        icon: <FileText className="text-brand-pink" />,
        items: ["Recurring Revenue", "Invoicing"]
    },
    {
        title: "Connect",
        desc: "Pagos para plataformas",
        icon: <Globe className="text-blue-500" />,
        items: ["Onboarding", "Payouts"]
    },
    {
        title: "Fraud",
        desc: "Detección de fraude",
        icon: <Shield className="text-green-500" />,
        items: ["Radar", "Identity"]
    }
];

const solutions = [
    { title: "E-commerce", icon: <Box /> },
    { title: "SaaS", icon: <Briefcase /> },
    { title: "Marketplaces", icon: <Users /> },
    { title: "Creadores", icon: <PieChart /> },
];

const developers = [
    { title: "Documentación", icon: <Terminal /> },
    { title: "Referencias API", icon: <FileText /> },
    { title: "Estado del sistema", icon: <ActivityIcon /> }, // Placeholder for custom icon
];

// Helper icon
function ActivityIcon() { return <div className="w-5 h-5 rounded-full border-2 border-current opacity-60" />; }

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => setActiveMenu(menu);
    const handleMouseLeave = () => setActiveMenu(null);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            onMouseLeave={handleMouseLeave}
        >
            <div className={`absolute inset-0 bg-white/0 transition-all duration-300 ${activeMenu ? "bg-white shadow-sm" : ""}`}></div>

            {/* Stripe-like bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200/60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-2xl font-black text-gray-900 tracking-tighter hover:opacity-75 transition-opacity">
                            ciberbug
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 lg:space-x-8">
                        <NavItem
                            title="Productos"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('products')}
                        />
                        <NavItem
                            title="Soluciones"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('solutions')}
                        />
                        <NavItem
                            title="Desarrolladores"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('developers')}
                        />
                        <NavItem
                            title="Recursos"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('resources')}
                        />
                        <NavItem
                            title="Tarifas"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('pricing')}
                        />
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                            Inicia sesión
                        </button>
                        <button className="bg-[#635BFF] text-white px-4 py-2 rounded-full font-medium hover:bg-[#5851df] transition-colors shadow-sm flex items-center group">
                            Contacta con ventas
                            <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg] group-hover:bg-white/20 rounded-full transition-all" />
                        </button>
                    </div>

                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="md:hidden">
                        <button className="text-gray-900 p-2">
                            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-gray-900"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dynamic Dropdown Container */}
            <AnimatePresence>
                {activeMenu && activeMenu !== 'pricing' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {/* Content switching based on activeMenu */}
                            {activeMenu === 'products' && (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                    {products.map((prod, i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="flex items-center gap-3 mb-3 text-gray-900 font-semibold group-hover:text-[#635BFF] transition-colors">
                                                {prod.icon}
                                                {prod.title}
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3">{prod.desc}</p>
                                            <ul className="space-y-1">
                                                {prod.items.map((item, j) => (
                                                    <li key={j} className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeMenu === 'solutions' && (
                                <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
                                    <div className="col-span-1">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Por etapa</h4>
                                        <ul className="space-y-3">
                                            <li className="text-gray-900 font-medium hover:text-[#635BFF] cursor-pointer">Grandes empresas</li>
                                            <li className="text-gray-900 font-medium hover:text-[#635BFF] cursor-pointer">Startups</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-2">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Por caso de uso</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {solutions.map((sol, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-900 hover:text-[#635BFF] cursor-pointer font-medium">
                                                    {/* Icon placeholder could go here */}
                                                    {sol.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeMenu === 'developers' && (
                                <div className="grid grid-cols-2 gap-8 max-w-md">
                                    {developers.map((dev, i) => (
                                        <div key={i} className="flex items-start gap-4 group cursor-pointer">
                                            <div className="text-gray-400 group-hover:text-[#635BFF] transition-colors">{dev.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 group-hover:text-[#635BFF] transition-colors">{dev.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeMenu === 'resources' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Blog</h4>
                                        <p className="text-sm text-gray-500">Noticias, actualizaciones y consejos de ingeniería.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Guías</h4>
                                        <p className="text-sm text-gray-500">Tutoriales detallados para empezar.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Removed 'hasDropdown' from props as it is unused, though it might be useful for extensions.
// If needed for styling logic: className={`relative px-3 py-2 cursor-pointer group ${!hasDropdown ? '...' : ''}`}
const NavItem = ({ title, activeInfo, onEnter }: { title: string, activeInfo: string | null, onEnter: () => void }) => {
    return (
        <div
            className="relative px-3 py-2 cursor-pointer group"
            onMouseEnter={onEnter}
        >
            <span className={`text-base font-medium transition-colors ${activeInfo ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
                {title}
            </span>
        </div>
    );
}

export default Navbar;
