import SliderSwiper from "./slider-swiper";
import { SliderStyle } from "./slider-style";

const Slider = () => {
  return (
    <SliderStyle>
      <div className={"slider_bg"}>
        <div className={"title"}>
          <h2 className={"title_h2"}>Los más escuchados</h2>
          <p className={"title_p"}>
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
