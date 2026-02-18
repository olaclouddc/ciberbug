import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Qué está pasando</h2>
                        <p className="text-gray-500">Lo más último de Ciberbug.</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all">
                    <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-5 relative h-96">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                            alt="Skyscrapers"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
                                Reporte Anual
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
                                100k+ usuarios tienen su mejor día en Ciberbug.
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-3xl line-clamp-2 md:line-clamp-none">
                                Desde el Black Friday hasta el Cyber Monday 2024, Ciberbug protegió más de 208 Millones de transacciones para empresas mientras manteníamos un 99.999% de uptime.
                            </p>
                            <div className="inline-flex items-center text-brand-pink font-semibold group-hover:underline">
                                Ver la historia <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-right">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50">
                        Ver todas las historias <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default NewsSection;
