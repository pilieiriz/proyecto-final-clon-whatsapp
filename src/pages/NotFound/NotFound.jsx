import { LuCircleHelp, LuArrowLeft } from 'react-icons/lu';
import styles from './NotFound.module.css';
import useNotFound from './useNotFound';

const NotFound = () => {
    const { handleBack } = useNotFound();


    return (
        <main className={styles.notfound}>
            <article className={styles.notfound__container}>
                <div className={styles.notfound__icon_wrapper}>
                    <LuCircleHelp className={styles.notfound__icon} />
                </div>
                
                <header className={styles.notfound__header}>
                    <h1 className={styles.notfound__title}>404</h1>
                    <h2 className={styles.notfound__subtitle}>Página no encontrada</h2>
                </header>

                <p className={styles.notfound__message}>
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>

                <button 
                    onClick={handleBack}
                    className={styles.notfound__button}
                    aria-label="Volver al inicio"
                >
                    <LuArrowLeft />
                    <span>Volver al inicio</span>
                </button>
            </article>
        </main>
    );
};

export default NotFound;