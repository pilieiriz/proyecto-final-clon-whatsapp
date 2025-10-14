import { LuMessageSquare, LuCode, LuTrendingUp, LuCircleCheck, LuSend, LuLock, LuPalette } from 'react-icons/lu';
import { FaReact, FaIcons } from 'react-icons/fa';
import { SiVite, SiReactrouter } from 'react-icons/si';
import BackButton from './components/BackButton/BackButton';
import HelpHeader from './components/HelpHeader/HelpHeader';
import HelpSection from './components/HelpSection/HelpSection';
import FeatureListItem from './components/FeatureListItem/FeatureListItem';
import TechCard from './components/TechCard/TechCard';
import styles from './Help.module.css';
import useHelp from './useHelp';

const Help = () => {
    const { handleBack } = useHelp();

    return (
        <main className={styles.help__container}>
            <BackButton onClick={handleBack} />

            <article className={styles.help__wrapper}>
                <HelpHeader
                    title="Centro de Ayuda"
                    subtitle="Documentación y guía de uso del chat"
                />

                <section className={styles.help__content}>
                    <HelpSection Icon={LuMessageSquare} title="Funcionamiento General">
                        <p className={styles.help__section_content}>
                            Esta aplicación es un clon de WhatsApp Web desarrollado con tecnologías modernas de React.
                            Proporciona una experiencia de usuario fluida y familiar para la comunicación en tiempo real.
                        </p>
                        <ul className={styles.help__list}>
                            <FeatureListItem
                                icon={LuLock}
                                title="Autenticación"
                                description="Sistema de login con persistencia de sesión mediante localStorage. Las credenciales se mantienen seguras durante toda la sesión."
                            />
                            <FeatureListItem
                                icon={LuSend}
                                title="Mensajería"
                                description="Interfaz intuitiva para enviar y recibir mensajes. Los mensajes se organizan en conversaciones fáciles de seguir."
                            />
                            <FeatureListItem
                                icon={LuPalette}
                                title="Personalización"
                                description="Modo claro y oscuro disponibles. Cambia el tema desde el panel de configuración según tus preferencias visuales."
                            />
                        </ul>
                    </HelpSection>

                    <HelpSection Icon={LuCode} title="Tecnologías Utilizadas">
                        <p className={styles.help__section_content}>
                            Este proyecto está construido con las siguientes tecnologías y herramientas:
                        </p>
                        <div className={styles.help__tech_grid}>
                            <TechCard icon={FaReact} name="React" version="v19.1.1" />
                            <TechCard icon={SiVite} name="Vite" version="v7.1.7" />
                            <TechCard icon={SiReactrouter} name="React Router" version="v7.9.4" />
                            <TechCard icon={FaIcons} name="React Icons" version="v5.5.0" />
                        </div>
                        <p className={styles.help__section_content}>
                            <strong>Arquitectura:</strong> Context API para gestión de estado global (Auth y Theme),
                            CSS Modules para estilos aislados, y React Hooks para lógica reutilizable.
                            Sistema de rutas protegidas implementado con React Router DOM.
                        </p>
                    </HelpSection>

                    <HelpSection Icon={LuTrendingUp} title="Posibles Mejoras Futuras">
                        <p className={styles.help__section_content}>
                            Roadmap de funcionalidades y mejoras planificadas:
                        </p>
                        <ul className={styles.help__list}>
                            <FeatureListItem
                                icon={LuCircleCheck}
                                title="Backend Real"
                                description="Implementación de API REST con Node.js y base de datos MongoDB."
                            />
                            <FeatureListItem
                                icon={LuCircleCheck}
                                title="Multimedia"
                                description="Soporte para envío de imágenes, videos, documentos y notas de voz. Previsualización de archivos multimedia."
                            />
                            <FeatureListItem
                                icon={LuCircleCheck}
                                title="Grupos y Canales"
                                description="Crear y gestionar conversaciones grupales. Administración de miembros, permisos y configuraciones de grupo."
                            />
                            <FeatureListItem
                                icon={LuCircleCheck}
                                title="Notificaciones Push"
                                description="Sistema de notificaciones del navegador para nuevos mensajes. Configuración personalizable de alertas."
                            />
                            <FeatureListItem
                                icon={LuCircleCheck}
                                title="Búsqueda Avanzada"
                                description="Búsqueda de mensajes, contactos y archivos compartidos. Filtros por fecha, tipo de contenido y emisor."
                            />
                        </ul>
                    </HelpSection>
                </section>
            </article>
        </main>
    );
};

export default Help;