//COMPONENTS
import Image from "next/image";
import {AlbumImage }from './album-image'
// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./slider.module.css";
import { Pagination } from "swiper";
//IMAGES IMPORTS
import album1 from '../../public/assets/img/albums/01.png'
import album2 from '../../public/assets/img/albums/02.png'
import album3 from '../../public/assets/img/albums/03.png'
import album4 from '../../public/assets/img/albums/04.png'
import album5 from '../../public/assets/img/albums/05.png'
//JSON
// import albumsJson from '../../public/assets/helpers/albums.json'

const SliderSwiper = () =>{

    //----RETURN----
    return(
        <div className={styles.slider_container}>
            <Swiper
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            pagination={{clickable: true,}}
            modules={[Pagination]}
            className="mySwiper">

                <SwiperSlide>
                    <div className={styles.swiper_content}>
                        <div className={`${styles.slide_card} slide-card`}>
                            <div className={styles.image_container}>
                                <AlbumImage></AlbumImage>
                            </div>
                            <h3>Album name</h3>
                            <p>Publicado: </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper_content}>
                        <div className={`${styles.slide_card} slide-card`}>
                            <div className={styles.image_container}>
                                <AlbumImage></AlbumImage>
                            </div>
                            <h3>Album name</h3>
                            <p>Publicado: </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper_content}>
                        <div className={`${styles.slide_card} slide-card`}>
                            <div className={styles.image_container}>
                                <AlbumImage></AlbumImage>
                            </div>
                            <h3>Album name</h3>
                            <p>Publicado: </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className={`${styles.slide_card} slide-card`}>
                        <div className={styles.image_container}>
                            <AlbumImage></AlbumImage>
                        </div>
                        <h3>Album name</h3>
                        <p>Publicado: </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide_card} slide-card`}>
                        <div className={styles.image_container}>
                            <AlbumImage></AlbumImage>
                        </div>
                        <h3>Album name</h3>
                        <p>Publicado: </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide_card} slide-card`}>
                        <div className={styles.image_container}>
                            <AlbumImage></AlbumImage>
                        </div>
                        <h3>Album name</h3>
                        <p>Publicado: </p>
                    </div>
                </SwiperSlide> */}
                
            </Swiper>
        </div> 
    )

    // const [swiperRef, setSwiperRef] = useState(null);
    // const appendNumber = useRef(500);
    // // const prependNumber = useRef(1);
    // // Create array with 500 slides
    // const [slides, setSlides] = useState(
    //   Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
    // );
    // // const prepend = () => {
    // //   setSlides([
    // //     `Slide ${prependNumber.current - 2}`,
    // //     `Slide ${prependNumber.current - 1}`,
    // //     ...slides
    // //   ]);
    // //   prependNumber.current = prependNumber.current - 2;
    // //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    // // };
    // const append = () => {
    //   setSlides([...slides, "Slide " + ++appendNumber.current]);
    // };
    // const slideTo = (index) => {
    //   swiperRef.slideTo(index - 1, 0);
    // };
}
export default SliderSwiper;