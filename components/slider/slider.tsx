import styles from './slider.module.css'
import SliderSwiper from './slider-swiper';

const Slider = () => {
    return(
        <div className={styles.slider_bg}>
            <div className={styles.title}>
                <h2 className={styles.title_h2}>Los más escuchados</h2>
                <p className={styles.title_p}>Disfruta de tu música a un solo click y descube que discos has guardado dentro de “mis álbumes”</p>
            </div>
            <SliderSwiper></SliderSwiper>
        </div>
    )
}
export default Slider;