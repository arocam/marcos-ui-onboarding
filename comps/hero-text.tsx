import styles from './hero-text.module.css'

const HeroText = () =>{
    return(
        <div>
            <h2 className={`${styles.c_2} ${styles.title}`}>Disfruta de la <br/> <span className={styles.c_1}> mejor musica</span></h2>
            <p className={`${styles.c_2} ${styles.parr}`}>Accede a tu cuenta para guardar tus albumes favoritos</p>
            <div className={styles.link_container}>
                <p className={styles.c_2}>Contacta</p>
                <svg className={styles.link_vector} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L17 8L10 15M1 8H17H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default HeroText;
