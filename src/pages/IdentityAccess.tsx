import ProductLayout from '../components/ProductLayout';
import { Fingerprint, Key, UserCheck, Shield } from 'lucide-react';

const IdentityAccess = () => {
    return (
        <ProductLayout
            badge="Identidad y Acceso Seguro"
            title={
                <>
                    Control total sobre quién <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">accede a tus datos.</span>
                </>
            }
            subtitle="Implementa Zero Trust con autenticación multifactor y gestión de identidades centralizada. Asegura el acceso remoto y simplifica la experiencia de usuario."
            heroImage="/images/identity_access_hero.png"
            primaryBtnText="Empezar ahora"
            secondaryBtnText="Solicitar demo"
            featuresSubtitle="Seguridad de Acceso"
            featuresTitle="Gestión de identidades de próxima generación."
            features={[
                {
                    title: "Autenticación MFA",
                    desc: "Doble factor de autenticación robusto mediante biometría, tokens de hardware o aplicaciones móviles.",
                    icon: <Fingerprint />,
                    details: "#",
                    badge: "Autenticar",
                    lightBg: true
                },
                {
                    title: "Single Sign-On (SSO)",
                    desc: "Un solo acceso para todas tus aplicaciones corporativas, mejorando la seguridad y la productividad.",
                    icon: <Key />,
                    details: "#",
                    badge: "Simplificar",
                    lightBg: true
                },
                {
                    title: "Control de Accesos",
                    desc: "Políticas granulares basadas en el rol, la ubicación y el dispositivo del usuario en cada momento.",
                    icon: <UserCheck />,
                    details: "#",
                    badge: "Gestionar",
                    darkBg: true
                },
                {
                    title: "Acceso Zero Trust",
                    desc: "Nunca confíes, siempre verifica. Acceso seguro a recursos internos sin necesidad de VPN tradicionales.",
                    icon: <Shield />,
                    details: "#",
                    badge: "Proteger",
                    lightBg: true
                }
            ]}
            bottomBanner={{
                badge: "Escalabilidad Global",
                title: "Protege a tus empleados en cualquier lugar del mundo.",
                stats: [
                    { label: "Usuarios gestionados", value: "+10k" },
                    { label: "Accesos seguros", value: "100%" }
                ]
            }}
        />
    );
};

export default IdentityAccess;
