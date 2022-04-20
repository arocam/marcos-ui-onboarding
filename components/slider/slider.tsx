import SliderSwiper from "./slider-swiper";
import { SliderStyle } from "./slider-style";

const Slider = () => {
  return (
    <SliderStyle>
      <div className={"slider_bg"}>
        <div className={"swiper_section_text"}>
          <h2 className={"swiper_section_text_h2"}>Los más escuchados</h2>
          <p className={"swiper_section_text_p"}>
            Disfruta de tu música a un solo click y descube que discos has
            guardado dentro de “mis álbumes”
          </p>
        </div>
        <SliderSwiper></SliderSwiper>
      </div>
    </SliderStyle>
  );
};
export default Slider;
