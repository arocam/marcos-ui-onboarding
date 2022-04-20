import { HeaderStyle } from "./header-logged-style";
import Image from "next/image";
import Link from "next/link";
import aluxionLogo from '../../public/assets/img/aluxion.png'
import { AluxionIcon } from "../../public/assets/icons/aluxion-icon";
import { LogOutIcon } from "../../public/assets/icons/log-out";
import { ThemeSwiperIcon } from "../../public/assets/icons/theme-swiper";
import { SeparatorIcon } from "../../public/assets/icons/separator";

export const HeaderLogged = (props) => {
    const {currentPage} = props;
    return(
        <HeaderStyle>
            <div>
                <div className='aluxion-logo'>
                    <Image src={aluxionLogo} height={24} width={133}></Image>
                </div>
                <div className="aluxion-icon">
                    <AluxionIcon></AluxionIcon>
                </div>  
            </div>
            <div className="header-nav">
                <div className={`${currentPage === 'searchAlbum' && 'current-page'} search-link nav-item`}><Link href=''>Buscar</Link></div>
                <div className={`${currentPage === 'myAlbums' && 'current-page'} my-albums-link nav-item`}><Link href=''>My Albums</Link></div>
                <div className="nav-item"><SeparatorIcon/></div>
                <div className={`nav-item`}>
                    <Link href=''>
                        <div className="logout-link">
                            <div className="logout-text">Cerrar sesión</div>
                            <div className="logout-icon"><LogOutIcon></LogOutIcon></div>
                        </div>
                    </Link>
                </div>
                <div className="nav-item"><SeparatorIcon/></div>
                <div className="theme-swiper-icon nav-item"><ThemeSwiperIcon/></div>
            </div>
        </HeaderStyle>
    )
}