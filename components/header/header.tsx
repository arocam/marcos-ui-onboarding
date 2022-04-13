import Image from "next/image";
import styles from './header.module.css'
import logoAluxion from '../../public/assets/img/aluxion.png'

const Header = ()=>{
    return(
        <header className={styles.header}>
            <Image className={styles.logo} src={logoAluxion} height={24} width={133}></Image>
        </header>
    )
}
export default Header;