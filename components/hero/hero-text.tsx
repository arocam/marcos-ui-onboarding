import styles from './hero.module.css'

const HeroText = () =>{
    return(
        <div className={styles.hero_text__container}>
            <div className={styles.hero_text}>
                {/* Disfruta de la mejor musica */}
                <h1 className={styles.title}>Disfruta de la <br/><span className={styles.c800}> mejor musica</span></h1>
            
                {/* Accede a tu cuenta para guardar tus albumes favoritos */}
                <p className={styles.paragraph}>Accede a tu cuenta para guardar tus <br/> álbumes favoritos</p>
            
                {/* LINK TO CONTACT */}
                <a className={styles.link_container} href="#">
                    <p className={styles.link_desc}>Contacta</p>
                    <svg className={styles.link_vector} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http:www.w3.org/2000/svg">
                        <path d="M10 1L17 8L10 15M1 8H17H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default HeroText;