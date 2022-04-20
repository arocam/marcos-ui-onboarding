import styles from './hero.module.css'
import { EnjoyH1 } from '../global/enjoy-h1';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const HeroText = (props) =>{
    const {linkName, linkHref} = props;
    
    const goToForm = () =>{
        if (linkHref.startsWith('#')) {
            gsap.to(window, {duration: 1.7, scrollTo:{y:linkHref}})
        } else{
            location.replace(linkHref)
        }
    }
    
    return(
        <div className={styles.hero_text__container}>
            <div className={styles.hero_text}>
                {/* Disfruta de la mejor musica */}
                <EnjoyH1></EnjoyH1>
            
                {/* Accede a tu cuenta para guardar tus albumes favoritos */}
                <p className={styles.paragraph}>Accede a tu cuenta para guardar tus <br/> álbumes favoritos</p>
            
                {/* LINK TO CONTACT */}
                
                {/* <Link href=""> */}
                <div onClick={goToForm} className={styles.link_container} >
                    <p className={styles.link_desc}>{linkName}</p>
                    <svg className={styles.link_vector} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http:www.w3.org/2000/svg">
                        <path d="M10 1L17 8L10 15M1 8H17H1Z" stroke="white" /*stroke-width="2" stroke-linecap="round" stroke-linejoin="round"*/ />
                    </svg>
                </div>
                {/* </Link> */}
                
            </div>
        </div>
    )
}

export default HeroText;