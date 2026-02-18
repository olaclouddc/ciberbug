import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, CreditCard, Box, Globe, Shield, Terminal, Users, FileText, PieChart, Briefcase } from 'lucide-react';

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
    { title: "Estado del sistema", icon: <ActivityIcon /> },
];

// Helper icon
function ActivityIcon() { return <div className="w-5 h-5 rounded-full border-2 border-current opacity-60" />; }

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Track the direction of the slide
    const menuOrder = ['products', 'solutions', 'developers', 'resources', 'pricing'];
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const handleMouseEnter = (menu: string) => {
        if (activeMenu && activeMenu !== menu) {
            const prevIndex = menuOrder.indexOf(activeMenu);
            const nextIndex = menuOrder.indexOf(menu);
            setDirection(nextIndex > prevIndex ? 'right' : 'left');
        }
        setActiveMenu(menu);
    };

    const handleNavMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setIsHovered(false);
    };

    return (
        <nav
            className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pt-3"
        >
            {/* Stripe-like bottom border line - kept full width but faded */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200/0 pointer-events-auto"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-14 md:h-16 flex items-center pointer-events-auto"
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Island Background */}
                <div
                    className={`absolute inset-0 bg-white/90 backdrop-blur-md rounded-lg shadow-sm transition-all duration-200 -z-10 ${activeMenu || isHovered ? "opacity-100" : "opacity-0"}`}
                ></div>

                <div className="w-full flex items-center h-full">
                    {/* Logo - Left Aligned */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer mr-6 lg:mr-10">
                        <span className="text-2xl font-black text-gray-900 tracking-tighter hover:opacity-75 transition-opacity">
                            ciberbug
                        </span>
                    </div>

                    {/* Desktop Menu - Left Aligned next to Logo */}
                    <div className="hidden md:flex space-x-1 lg:space-x-4">
                        <NavItem
                            title="Productos"
                            id="products"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('products')}
                            hasChevron={true}
                        />
                        <NavItem
                            title="Soluciones"
                            id="solutions"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('solutions')}
                            hasChevron={true}
                        />
                        <NavItem
                            title="Desarrolladores"
                            id="developers"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('developers')}
                            hasChevron={true}
                        />
                        <NavItem
                            title="Recursos"
                            id="resources"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('resources')}
                            hasChevron={true}
                        />
                        <NavItem
                            title="Tarifas"
                            id="pricing"
                            activeInfo={activeMenu}
                            onEnter={() => handleMouseEnter('pricing')}
                            hasChevron={false}
                        />
                    </div>

                    {/* Actions - Pushed to the right */}
                    <div className="hidden md:flex items-center space-x-4 ml-auto">
                        <button className="text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors px-3 py-2">
                            Inicia sesión
                        </button>
                        <button className="bg-[#635BFF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5851df] transition-colors shadow-sm flex items-center group">
                            Contacta con ventas
                            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="md:hidden ml-auto">
                        <button className="text-gray-900 p-2">
                            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
                            <div className="w-6 h-0.5 bg-gray-900"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sliding Dropdown Container */}
            <div className="absolute top-full left-0 right-0 flex justify-center pointer-events-none">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-auto">
                    <AnimatePresence>
                        {activeMenu && activeMenu !== 'pricing' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="bg-white rounded-b-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] overflow-hidden"
                            >
                                <div className="relative overflow-hidden p-8">
                                    <AnimatePresence initial={false} mode="popLayout">
                                        <motion.div
                                            key={activeMenu}
                                            initial={{ opacity: 0, x: direction === 'right' ? 30 : -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: direction === 'right' ? -30 : 30 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            {/* Products Content */}
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

                                            {/* Solutions Content */}
                                            {activeMenu === 'solutions' && (
                                                <div className="grid grid-cols-3 gap-6 w-full">
                                                    <div className="col-span-1 border-r border-gray-50">
                                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Por etapa</h4>
                                                        <ul className="space-y-3">
                                                            <li className="text-gray-900 text-sm font-medium hover:text-[#635BFF] cursor-pointer">Grandes empresas</li>
                                                            <li className="text-gray-900 text-sm font-medium hover:text-[#635BFF] cursor-pointer">Startups</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-span-2 pl-4">
                                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Por caso de uso</h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {solutions.map((sol, i) => (
                                                                <div key={i} className="flex items-center gap-2 text-gray-900 text-sm hover:text-[#635BFF] cursor-pointer font-medium">
                                                                    {sol.title}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Developers Content */}
                                            {activeMenu === 'developers' && (
                                                <div className="grid grid-cols-2 gap-8 max-w-md">
                                                    {developers.map((dev, i) => (
                                                        <div key={i} className="flex items-start gap-4 group cursor-pointer">
                                                            <div className="text-gray-400 group-hover:text-[#635BFF] transition-colors">{dev.icon}</div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#635BFF] transition-colors">{dev.title}</h4>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Resources Content */}
                                            {activeMenu === 'resources' && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Blog</h4>
                                                        <p className="text-sm text-gray-500">Noticias, actualizaciones y consejos de ingeniería.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Guías</h4>
                                                        <p className="text-sm text-gray-500">Tutoriales detallados para empezar.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ title, id, activeInfo, onEnter, hasChevron = false }: { title: string, id: string, activeInfo: string | null, onEnter: () => void, hasChevron?: boolean }) => {
    return (
        <div
            className="relative px-3 py-2 cursor-pointer group flex items-center gap-1"
            onMouseEnter={onEnter}
        >
            <span className={`text-sm font-medium transition-colors ${activeInfo === id ? 'text-gray-900' : 'text-gray-900 hover:text-gray-900'}`}>
                {title}
            </span>
            {hasChevron && (
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-all duration-200 ${activeInfo === id ? 'text-gray-900 rotate-180 opacity-100' : 'text-gray-900/40 group-hover:opacity-100 group-hover:text-gray-900'
                        }`}
                />
            )}
        </div>
    );
}

export default Navbar;
