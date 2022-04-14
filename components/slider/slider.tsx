import styles from './slider.module.css'
import SliderSwiper from './slider-swiper';

const Slider = () => {
    return(
        <div className={styles.slider_bg}>
            <h2>Los más escuchados</h2>
            <p>Disfruta de tu musica a un solo click y descubre que discos has guardado dentro de mis álbumes</p>
            <SliderSwiper></SliderSwiper>
        </div>
    )
}
export default Slider;