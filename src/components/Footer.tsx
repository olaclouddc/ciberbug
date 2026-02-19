import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <motion.span
                            className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4 cursor-pointer group"
                            whileHover="hover"
                        >
                            <motion.img
                                src="/ciberbug-pixel-monster.png"
                                alt="Ciberbug"
                                className="w-5 h-5 mr-2 object-contain"
                                variants={{
                                    hover: {
                                        rotate: [0, -10, 10, -10, 10, 0],
                                        scale: [1, 1.1, 1],
                                        transition: {
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                            />
                            Ciberbug
                        </motion.span>
                        <p className="text-gray-500 text-sm">
                            Infraestructura de seguridad para internet. Ayudamos a empresas de todos los tamaños a proteger sus activos y prevenir vulnerabilidades.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Producto</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Detección de Amenazas</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Seguridad en la Nube</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Gestión de Vulnerabilidades</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Recursos</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Documentación</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Referencias API</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Compañía</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Acerca de</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Clientes</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Carreras</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-brand-pink text-sm">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">&copy; 2024 Ciberbug. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Aviso legal</a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Privacidad Datos</a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
