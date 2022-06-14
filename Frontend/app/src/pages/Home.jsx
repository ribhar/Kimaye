import React from 'react'
import { Navbar } from '../components/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { Navigation } from "swiper";
import {Pagination} from "swiper";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
    <Swiper navigation={true} pagination={true} modules={[Navigation,Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/119733790_3556718214380851_7714988554869760685_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=l_mb0iO0CS0AX8faWMg&_nc_ht=scontent.fluh1-1.fna&oh=00_AT8wRp1ojCelBNEUuqXfud1BSHA8ff5Z0RypnP9KFglDqA&oe=62CEDD2C" alt="sliderimage"/></SwiperSlide>
        <SwiperSlide><img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/119733790_3556718214380851_7714988554869760685_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=l_mb0iO0CS0AX8faWMg&_nc_ht=scontent.fluh1-1.fna&oh=00_AT8wRp1ojCelBNEUuqXfud1BSHA8ff5Z0RypnP9KFglDqA&oe=62CEDD2C" alt="sliderimage"/></SwiperSlide>
        <SwiperSlide><img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/119733790_3556718214380851_7714988554869760685_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=l_mb0iO0CS0AX8faWMg&_nc_ht=scontent.fluh1-1.fna&oh=00_AT8wRp1ojCelBNEUuqXfud1BSHA8ff5Z0RypnP9KFglDqA&oe=62CEDD2C" alt="sliderimage"/></SwiperSlide>
       </Swiper>
    </div>
    </div>
  )
}

export default Home