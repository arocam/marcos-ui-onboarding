import image1 from '../public/galery/01.png'
import image2 from '../public/galery/02.png'
import image3 from '../public/galery/03.png'
import image4 from '../public/galery/04.png'
import image5 from '../public/galery/05.png'
import image6 from '../public/galery/06.png'
import image7 from '../public/galery/07.png'
import image8 from '../public/galery/08.png'
import image9 from '../public/galery/09.png'
import image10 from '../public/galery/10.png'
import image11 from '../public/galery/11.png'
import image12 from '../public/galery/12.png'
import image13 from '../public/galery/13.png'
import image14 from '../public/galery/14.png'
import image15 from '../public/galery/15.png'
import Image from 'next/image'
import styles from './gallery.module.css'

const Gallery = () =>{
    
    return(
        <div className={styles.gallery_bg}>
            <div className={styles.gallery_container}>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery_image}><Image src={image1}></Image></div>
                    <div className={styles.gallery_image}><Image src={image2}></Image></div>
                    <div className={styles.gallery_image}><Image src={image3}></Image></div>
                </div>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery_image}><Image src={image4}></Image></div>
                    <div className={styles.gallery_image}><Image src={image5}></Image></div>
                    <div className={styles.gallery_image}><Image src={image6}></Image></div>
                </div>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery_image}><Image src={image7}></Image></div>
                    <div className={styles.gallery_image}><Image src={image8}></Image></div>
                    <div className={styles.gallery_image}><Image src={image9}></Image></div>
                </div>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery_image}><Image src={image10}></Image></div>
                    <div className={styles.gallery_image}><Image src={image11}></Image></div>
                    <div className={styles.gallery_image}><Image src={image12}></Image></div>
                </div>
                <div className={styles.gallery_column}>
                    <div className={styles.gallery_image}><Image src={image13}></Image></div>
                    <div className={styles.gallery_image}><Image src={image14}></Image></div>
                    <div className={styles.gallery_image}><Image src={image15}></Image></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;