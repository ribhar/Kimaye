import topFruits from '../Image/topFruits.png'
import fruitsRich from '../Image/fruitsRich.png'
import RemoveFruits from '../Image/fruitsRich.png'
import eatFruits from '../Image/eatFruits.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{height:'350px',width:"90%"}}
      >
       
<SwiperSlide><img src={topFruits} style={{height:'100%',}} alt="fruits"/></SwiperSlide>
<SwiperSlide><img src={fruitsRich}  style={{height:'100%'}} alt="fruits"/></SwiperSlide>
<SwiperSlide><img src={RemoveFruits}  style={{height:'100%'}} alt="fruits"/></SwiperSlide>
<SwiperSlide><img src={eatFruits}  style={{height:'100%'}} alt="fruits"/></SwiperSlide> 
       
      </Swiper>
    </>
  );
}












