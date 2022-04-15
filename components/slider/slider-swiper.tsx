import {AlbumImage }from './album-image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./slider.module.css";
import { Pagination } from "swiper";

const SliderSwiper = () =>{

    const albums = [
        {id: 0,name: "Album 1", publishedDate: "07/05/2021", coverPage: "01.png"},
        {id: 1,name: "Album 2", publishedDate: "07/05/2021", coverPage: "02.png"},
        {id: 2,name: "Album 3", publishedDate: "07/05/2021", coverPage: "03.png"},
        {id: 3,name: "Album 4", publishedDate: "07/05/2021", coverPage: "04.png"},
        {id: 4,name: "Album 5", publishedDate: "07/05/2021", coverPage: "05.png"},
    ];

    return(
        <div className={styles.slider_container}>
            <Swiper
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            pagination={{clickable: true,}}
            modules={[Pagination]}
            className="mySwiper">

                {albums.map(alb=>
                <SwiperSlide>
                <div className={styles.swiper_content}>
                    <div className={`${styles.slide_card} slide-card`}>
                        <div className={styles.image_container}>
                            <AlbumImage coverPage={alb.coverPage}></AlbumImage>
                        </div>
                        <h3>{alb.name}</h3>
                        <p>Publicado: {alb.publishedDate}</p>
                    </div>
                </div>
            </SwiperSlide>
                )}{/* FIN MAP() */}
            </Swiper>
        </div> 
    )
}
export default SliderSwiper;