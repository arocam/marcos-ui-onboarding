import ArrowVector from './arrow-vector';
import HeroText from './hero-text';
import styles from './hero.module.css'
const Hero = (props) =>{
    const {linkName, linkHref} = props;

    return(
        <div className={styles.hero_bg}>
            <div className={styles.hero}>
                <ArrowVector></ArrowVector>
                <HeroText linkName={linkName} linkHref={linkHref}></HeroText>
            </div>
        </div>
    )
}

export default Hero;