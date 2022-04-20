import styles from './hero.module.css'
import { TitleH1 } from '../global/enjoy-h1';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import {Paragraph} from '../global/paragraph'

gsap.registerPlugin(ScrollToPlugin);

const HeroText = (props) =>{
    const {linkName, linkHref} = props;
    
    const goToLink = () =>{
        if (linkHref.startsWith('#')) {
            gsap.to(window, {duration: 1.7, scrollTo:{y:linkHref}})
        } else{
            location = linkHref;
        }
    }
    
    return(
        <div className={styles.hero_text__container}>
            <div className={styles.hero_text}>
                <TitleH1 line1='Disfruta de la' line2='mejor música'></TitleH1>
                <Paragraph>Accede a tu cuenta para guardar tus álbumes favoritos</Paragraph>
                <div onClick={goToLink} className={styles.link_container} >
                    <p className={styles.link_desc}>{linkName}</p>
                    <svg className={styles.link_vector} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http:www.w3.org/2000/svg">
                        <path d="M10 1L17 8L10 15M1 8H17H1Z" stroke="white"/>
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default HeroText;