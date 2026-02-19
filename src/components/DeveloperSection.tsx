import React, { useState } from 'react';
import { Terminal, Copy, Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const codeSnippet = `// Instalar Ciberbug SDK
$ npm install @ciberbug/sdk

// Inicializar Ciberbug
const ciberbug = require('@ciberbug/sdk');

await ciberbug.protect({
  apiKey: 'cb_live_...',
  mode: 'strict',
  onViolation: 'block'
});`;

const features = [
    {
        icon: <Terminal className="w-5 h-5" />,
        title: "Webhooks",
        description: "Reciba alertas en tiempo real para eventos de seguridad críticos."
    },
    {
        icon: <ChevronRight className="w-5 h-5" />,
        title: "Documentación Detallada",
        description: "Guías exhaustivas para ayudar a su equipo a integrar más rápido."
    }
];

const DeveloperSection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-brand-dark text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-pink/20 text-brand-pink text-xs font-semibold tracking-wide uppercase mb-6">
                            <span className="mr-2">⚡️</span> DISEÑO API FIRST
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            API potentes para flujos de <br className="hidden sm:block" /> seguridad personalizados.
                        </h2>

                        <p className="text-lg text-gray-400 mb-10">
                            Integre Ciberbug directamente en su pipeline CI/CD. Hemos creado las API más disponibles en Node, Python, Go y Ruby.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-pink hover:bg-pink-700 transition-all shadow-lg hover:shadow-brand-pink/20">
                            Ver documentación <ChevronRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Content - Code Window */}
                    <div className="mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl overflow-hidden shadow-2xl bg-[#1E1E1E] border border-gray-800 font-mono text-sm relative"
                        >
                            <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-gray-400 text-xs">install-ciberbug.js</div>
                                <button
                                    onClick={handleCopy}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                </button>
                            </div>

                            <div className="p-4 md:p-6 overflow-x-auto">
                                <pre className="text-blue-300 text-xs md:text-sm">
                                    <code>{`// Instalar Ciberbug SDK
`}<span className="text-white">$ npm install @ciberbug/sdk</span>

                                        {`// Inicializar Ciberbug
`}<span className="text-purple-400">const</span> <span className="text-yellow-300">ciberbug</span> = <span className="text-blue-400">require</span>(<span className="text-green-300">'@ciberbug/sdk'</span>);

                                        <span className="text-purple-400">await</span> <span className="text-yellow-300">ciberbug</span>.<span className="text-blue-400">protect</span>({`{`}
                                        <span className="text-red-300">apiKey</span>: <span className="text-green-300">'cb_live_...'</span>,
                                        <span className="text-red-300">mode</span>: <span className="text-green-300">'strict'</span>,
                                        <span className="text-red-300">onViolation</span>: <span className="text-green-300">'block'</span>
                                        {`}`});</code>
                                </pre>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DeveloperSection;
