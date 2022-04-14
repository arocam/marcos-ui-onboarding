import image1 from '../../public/assets/img/gallery/01.png'
import image2 from '../../public/assets/img/gallery/02.png'
import image3 from '../../public/assets/img/gallery/03.png'
import image4 from '../../public/assets/img/gallery/04.png'
import image5 from '../../public/assets/img/gallery/05.png'
import image6 from '../../public/assets/img/gallery/06.png'
import image7 from '../../public/assets/img/gallery/07.png'
import image8 from '../../public/assets/img/gallery/08.png'
import image9 from '../../public/assets/img/gallery/09.png'
import image10 from '../../public/assets/img/gallery/10.png'
import image11 from '../../public/assets/img/gallery/11.png'
import image12 from '../../public/assets/img/gallery/12.png'
import image13 from '../../public/assets/img/gallery/13.png'
import image14 from '../../public/assets/img/gallery/14.png'
import image15 from '../../public/assets/img/gallery/15.png'
import Image from 'next/image'
import styles from './gallery.module.css'
import { GalleryColumn } from './gallery-column'
import { GalleryImage } from './gallery-image'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Gallery = () =>{

    gsap.registerPlugin(ScrollTrigger);
    
    const columns = [
        [image1, image2, image3], [image4, image5, image6], [image7, image8, image9], [image10, image11, image12], [image13, image14, image15]
    ]

    return(
        <div className={styles.gallery_bg}>
            <div className={styles.gallery_container}>
                {columns.map(col =>
                        <GalleryColumn>
                            {col.map(image =>
                                    <GalleryImage>
                                        <Image src={image}></Image>
                                    </GalleryImage>
                                )}
                        </GalleryColumn>
                    )}
                {/* <div className={styles.gallery_column}>
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
                </div> */}
            </div>
        </div>
    )
    
}
export default Gallery;