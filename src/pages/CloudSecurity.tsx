import ProductLayout from '../components/ProductLayout';
import { Activity, Database, Server, Cpu } from 'lucide-react';

const CloudSecurity = () => {
    return (
        <ProductLayout
            badge="Seguridad en la nube"
            title={
                <>
                    Tu infraestructura en la nube, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">blindada.</span>
                </>
            }
            subtitle="Protección nativa para AWS, Azure y Google Cloud. Detecta proactivamente amenazas en tus entornos híbridos y multi-cloud con IA avanzada."
            heroImage="/images/cloud_security_hero.png"
            primaryBtnText="Empezar análisis"
            secondaryBtnText="Ver demo"
            featuresSubtitle="Beneficios Clave"
            featuresTitle="Ecosistema de seguridad total"
            features={[
                {
                    title: "Backup Cloud",
                    desc: "Copias de seguridad inmutables y redundantes. Recuperación ante desastres en minutos, no horas.",
                    icon: <Database />,
                    details: "#",
                    badge: "Resiliencia",
                    lightBg: true
                },
                {
                    title: "Monitorización 24/7",
                    desc: "Visibilidad total de tu tráfico y recursos. Alertas inteligentes basadas en comportamiento anómalo.",
                    icon: <Activity />,
                    details: "#",
                    badge: "Vigilancia",
                    lightBg: true
                },
                {
                    title: "Administración Cloud",
                    desc: "Gestión experta de configuraciones de seguridad para garantizar el cumplimiento normativo.",
                    icon: <Server />,
                    details: "#",
                    badge: "Control",
                    darkBg: true
                },
                {
                    title: "Auto-escalado",
                    desc: "Ajuste dinámico de recursos para mantener el rendimiento y la seguridad bajo cualquier carga.",
                    icon: <Cpu />,
                    details: "#",
                    badge: "Eficiencia",
                    lightBg: true
                }
            ]}
            bottomBanner={{
                badge: "Potencia Técnica",
                title: "Infraestructura moderna para equipos exigentes.",
                stats: [
                    { label: "SLA Garantizado", value: "99.99%" },
                    { label: "Tiempo de Respuesta", value: "<15min" }
                ]
            }}
        />
    );
};

export default CloudSecurity;
