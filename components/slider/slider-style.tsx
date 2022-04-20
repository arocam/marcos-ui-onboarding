import styled from "styled-components";

export const SliderStyle = styled.div`
  .swiper_content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider_bg {
    width: 100%;
    height: 100vh;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #222222;
  }
  .swiper_section_text_h2,
  .swiper_section_text_p {
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }
  .swiper_section_text_h2 {
    width: 50%;
    font-size: 40px;
    margin-bottom: 24px;
  }
  .swiper_section_text_p {
    width: 80%;
    max-width: 460px;
    font-size: 16px;
    line-height: 32px;
  }
  .slider_container {
    width: 100%;
  }
  .slide_card {
    padding: 24px 19px 0 19px;
    font-weight: 600;
  }
  .image_container {
    width: 100%;
    height: 241px;
    border-radius: 12px;
    transition: all 0.5s;
  }


  /// Custom Slider 


.mySwiper{
  height: 420px;
  overflow: hidden;
}
.swiper-slide h3,
.swiper-slide p,
.swiper-slide h3,
.swiper-slide p{
  color: transparent;
  user-select: none;
}

.swiper-slide-active .slide-card{
  background-color: #D6F379;
  width: 322px;
  border-radius: 24px;
  transition: background-color .4s linear;

}
@media (min-width: 600px){
  .swiper-slide-active .slide-card{
    width: 423px;
  }
}
@media (min-width: 1200px){
  .swiper-slide-active .slide-card{
    width: 663px;
  }
}
@media (min-width: 1600px){
  .swiper-slide-active .slide-card{
    width: 800px;
  }
}
.swiper-slide-active h3,
.swiper-slide-active p{
  user-select: all;
  color: #000;  
}

.swiper-slide-active h3{
  font-size: 36px;
  margin-top: 24px;
}
.swiper-slide-active p{
  font-size: 16px;
  margin-top: 24px;
}
.swiper-slide-active{
  z-index: 10;
}
.swiper-slide-prev,
.swiper-slide-next{
  z-index: 5;
}

/*SWIPER TRANSITION*/
.swiper_text{
  max-height: 0px;
  overflow: hidden;
}
.swiper-slide-active .swiper_text{
  transition: all .5s ease-in-out;
  max-height: 120px;
  margin-bottom: 20px;
}
  @media (min-width: 600px) {
    .swiper_section_text_h2 {
      font-size: 60px;
    }
  }
`;
