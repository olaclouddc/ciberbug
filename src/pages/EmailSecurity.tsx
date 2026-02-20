import ProductLayout from '../components/ProductLayout';
import { Lock, AlertTriangle, Send, Inbox } from 'lucide-react';

const EmailSecurity = () => {
    return (
        <ProductLayout
            badge="Seguridad de Email Profesional"
            title={
                <>
                    Blindaje total para tu <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">correo corporativo.</span>
                </>
            }
            subtitle="Deten las amenazas antes de que lleguen a la bandeja de entrada. Protección avanzada contra phishing, malware y fugas de datos integrada en tu flujo de trabajo."
            heroImage="/images/email_security_hero.png"
            primaryBtnText="Proteger mi email"
            secondaryBtnText="Prueba gratuita"
            featuresSubtitle="Capas de Defensa"
            featuresTitle="Protección inteligente para la comunicación más crítica."
            features={[
                {
                    title: "Anti-Phishing",
                    desc: "Detección basada en IA de intentos de suplantación de identidad y enlaces maliciosos en tiempo real.",
                    icon: <AlertTriangle />,
                    details: "#",
                    badge: "Detectar",
                    lightBg: true
                },
                {
                    title: "Relay SMTP Seguro",
                    desc: "Asegura el envío de tus correos y garantiza que lleguen a su destino sin ser bloqueados.",
                    icon: <Send />,
                    details: "#",
                    badge: "Garantizar",
                    lightBg: true
                },
                {
                    title: "Cifrado End-to-End",
                    desc: "Toda tu información sensible viaja cifrada y solo es accesible por el destinatario autorizado.",
                    icon: <Lock />,
                    details: "#",
                    badge: "Cifrar",
                    darkBg: true
                },
                {
                    title: "Antispam Inteligente",
                    desc: "Filtros de última generación que mantienen tu bandeja limpia de correos no deseados.",
                    icon: <Inbox />,
                    details: "#",
                    badge: "Filtrar",
                    lightBg: true
                }
            ]}
            bottomBanner={{
                badge: "Seguridad sin Fricción",
                title: "Integración nativa con Microsoft 365 y Google Workspace.",
                stats: [
                    { label: "Spam bloqueado", value: "99.8%" },
                    { label: "Phishing detectado", value: "100%" }
                ]
            }}
        />
    );
};

export default EmailSecurity;
