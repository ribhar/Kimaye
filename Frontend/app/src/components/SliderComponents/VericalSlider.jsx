import one from "../Image/one.png"
import two from "../Image/2.png"
import three from "../Image/3.png"
import four from "../Image/4.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./VerticalSlide.css";


import { Pagination,Autoplay} from "swiper";

export default function VerticalSlider() {
 var menu=["1","2","3","4"]
 const pagination = {
    textAlign: "left",
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>'
    },
  };
  return (
    <>
      <Swiper
      direction={"vertical"}
      pagination={{pagination}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
      
      
      >
        <SwiperSlide><img src={one} alt ="vertical" /></SwiperSlide>
        <SwiperSlide><img src={two} alt ="vertical" /></SwiperSlide>
        <SwiperSlide><img src={three} alt ="vertical" /></SwiperSlide>
        <SwiperSlide><img src={four} alt ="vertical" /></SwiperSlide>
       
       
      </Swiper>
    </>
  );
}
