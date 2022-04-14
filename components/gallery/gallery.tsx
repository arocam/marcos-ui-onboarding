import image1 from '../../public/assets/img/gallery/01.jpg'
import image2 from '../../public/assets/img/gallery/02.jpg'
import image3 from '../../public/assets/img/gallery/03.jpg'
import image4 from '../../public/assets/img/gallery/04.jpg'
import image5 from '../../public/assets/img/gallery/05.jpg'
import image6 from '../../public/assets/img/gallery/06.jpg'
import image7 from '../../public/assets/img/gallery/07.jpg'
import image8 from '../../public/assets/img/gallery/08.jpg'
import image9 from '../../public/assets/img/gallery/09.jpg'
import image10 from '../../public/assets/img/gallery/10.jpg'
import image11 from '../../public/assets/img/gallery/11.jpg'
import image12 from '../../public/assets/img/gallery/12.jpg'
import image13 from '../../public/assets/img/gallery/13.jpg'
import image14 from '../../public/assets/img/gallery/14.jpg'
import image15 from '../../public/assets/img/gallery/15.jpg'
import Image from 'next/image'
import styles from './gallery.module.css'
import { GalleryColumn } from './gallery-column'
import { GalleryImage } from './gallery-image'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () =>{
    

    const column1 = useRef();
    const column2 = useRef();
    const column3 = useRef();
    const column4 = useRef();
    const column5 = useRef();

    let tlColumn1 = gsap.timeline({scrollTrigger:{trigger: '.c1',markers: true,start: '',end:'bottom -1000',scrub: 3},})
    let tlColumn2 = gsap.timeline({scrollTrigger:{trigger: '.c2',markers: true,start: '',end:'bottom -1000',scrub: 3},})
    let tlColumn3 = gsap.timeline({scrollTrigger:{trigger: '.c3',markers: true,start: '',end:'bottom -1000',scrub: 3},})
    let tlColumn4 = gsap.timeline({scrollTrigger:{trigger: '.c4',markers: true,start: '',end:'bottom -1000',scrub: 3},})
    let tlColumn5 = gsap.timeline({scrollTrigger:{trigger: '.c5',markers: true,start: '',end:'bottom -1000',scrub: 3},})

    useEffect(()=>{
        tlColumn1.to(column1.current,{y: '-200'})
        tlColumn2.to(column2.current,{y: '200'})
        tlColumn3.to(column3.current,{y: '-200'})
        tlColumn4.to(column4.current,{y: '200'})
        tlColumn5.to(column5.current,{y: '-200'})
    
    
    }, [])

    const columns = [
        [image1, image2, image3,image4], [image4, image5, image6, image7], [image7, image8, image9, image10], [image10, image11, image12, image13], [image13, image14, image15, image1],[image3, image5, image9, image2]
    ]

    return(
        <div className={styles.gallery_bg}>
            <div className={styles.gallery_container}>
                {/* SIN SEPARAR COLUMNAS (para usar el ref) */}
                
                <GalleryColumn className="c1" ref={column1}>
                    {columns[0].map(image =>
                        <GalleryImage>
                            <Image src={image} className="gallery-image"></Image>
                        </GalleryImage>
                    )}
                </GalleryColumn>
                <GalleryColumn className="c2" ref={column2}>
                    {columns[1].map(image =>
                        <GalleryImage>
                            <Image src={image} className="gallery-image"></Image>
                        </GalleryImage>
                    )}
                </GalleryColumn>
                <GalleryColumn className="c3" ref={column3}>
                    {columns[2].map(image =>
                        <GalleryImage>
                            <Image src={image} className="gallery-image"></Image>
                        </GalleryImage>
                    )}
                </GalleryColumn>
                <GalleryColumn className="c4" ref={column4}>
                    {columns[3].map(image =>
                        <GalleryImage>
                            <Image src={image} className="gallery-image"></Image>
                        </GalleryImage>
                    )}
                </GalleryColumn>
                <GalleryColumn className="c5" ref={column5}>
                    {columns[4].map(image =>
                        <GalleryImage>
                            <Image src={image} className="gallery-image"></Image>
                        </GalleryImage>
                    )}
                </GalleryColumn>
                
                {/* SEPARANDO CADA COLUMNA */}
                {/* {columns.map((col, index: number) =>
                        <GalleryColumn ref={`column${index}`}>
                            {col.map((image, index: number) =>
                                        // LLamado del componente
                                        <GalleryImage>
                                            <Image src={image} className="gallery-image"></Image>
                                        </GalleryImage>
                                )}
                        </GalleryColumn>
                    )} */}

                    {/* SEPARANDO CADA IMAGEN */}
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