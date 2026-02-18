import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-pink rounded-md"></div> {/* Placeholder Logo */}
                            Ciberbug
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Productos</a>
                        <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Soluciones</a>
                        <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Desarrolladores</a>
                        <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Recursos</a>
                        <button className="bg-brand-dark text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all font-medium">
                            Empezar ahora
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-pink hover:bg-gray-50">Productos</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-pink hover:bg-gray-50">Soluciones</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-pink hover:bg-gray-50">Desarrolladores</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-pink hover:bg-gray-50">Recursos</a>
                        <div className="pt-4">
                            <button className="w-full bg-brand-dark text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-all font-medium">
                                Empezar ahora
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
