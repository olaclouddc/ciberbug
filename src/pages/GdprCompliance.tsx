import ProductLayout from '../components/ProductLayout';
import { CheckCircle, Scale, ClipboardCheck, Lock } from 'lucide-react';

const GdprCompliance = () => {
    return (
        <ProductLayout
            badge="Cumplimiento GDPR y LOPD"
            title={
                <>
                    Privacidad asegurada y <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">cumplimiento total.</span>
                </>
            }
            subtitle="Simplifica la gestión de la protección de datos en tu organización. Herramientas avanzadas para garantizar el cumplimiento legal y evitar sanciones millonarias."
            heroImage="/images/gdpr_compliance_hero.png"
            primaryBtnText="Auditoría gratuita"
            secondaryBtnText="Ver soluciones"
            featuresSubtitle="Gestión Legal"
            featuresTitle="Todo lo que necesitas para estar al día con la normativa."
            features={[
                {
                    title: "Cumplimiento Legal",
                    desc: "Adaptación completa a la normativa GDPR y LOPD con documentación automatizada y actualizada.",
                    icon: <Scale />,
                    details: "#",
                    badge: "Legal",
                    lightBg: true
                },
                {
                    title: "Protección de Datos",
                    desc: "Implementación de medidas técnicas y organizativas para garantizar la integridad de los datos personales.",
                    icon: <Lock />,
                    details: "#",
                    badge: "Seguridad",
                    lightBg: true
                },
                {
                    title: "Auditorías de Privacidad",
                    desc: "Informes detallados sobre el estado de la privacidad en tu empresa y recomendaciones de mejora.",
                    icon: <ClipboardCheck />,
                    details: "#",
                    badge: "Revisar",
                    darkBg: true
                },
                {
                    title: "Gestión de Derechos",
                    desc: "Portal integrado para que tus usuarios puedan ejercer sus derechos ARCO de forma sencilla.",
                    icon: <CheckCircle />,
                    details: "#",
                    badge: "Gestionar",
                    lightBg: true
                }
            ]}
            bottomBanner={{
                badge: "Tranquilidad Legal",
                title: "Evita riesgos innecesarios con una gestión proactiva.",
                stats: [
                    { label: "Cumplimiento", value: "100%" },
                    { label: "Riesgos evitados", value: "99%" }
                ]
            }}
        />
    );
};

export default GdprCompliance;
