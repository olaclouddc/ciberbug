import ProductLayout from '../components/ProductLayout';
import { Shield, Lock, Search, FileCheck } from 'lucide-react';

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
            heroImage="/images/web_protection_hero.png" // I'll need to move/copy the generated images to public/images
            primaryBtnText="Empezar a usarlo"
            secondaryBtnText="Ver demostración"
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
