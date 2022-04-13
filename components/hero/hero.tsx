import ArrowVector from './arrow-vector';
import HeroText from './hero-text';
import styles from './hero.module.css'
const Hero = () =>{
    return(
        <div className={styles.hero_bg}>
            <div className={styles.hero}>
                <ArrowVector></ArrowVector>
                <HeroText></HeroText>
            </div>
        </div>
    )
}

export default Hero;