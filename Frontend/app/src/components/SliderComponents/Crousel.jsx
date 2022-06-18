import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay} from "swiper";
export default function Crousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:'550px',zIndex:'1'}}
        >
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_720x.jpg?v=1626676701" alt="crouselimages" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/119733790_3556718214380851_7714988554869760685_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GE7r1wJba1YAX_nGufI&_nc_ht=scontent.fluh1-1.fna&oh=00_AT95F8ZDdkfdM8cQf2XNO9cd9ecGYYoz640_lMy66Iw7hA&oe=62CEDD2C" alt="crouselimages" height="300px"  width="100%" /></SwiperSlide>
        <SwiperSlide><img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.18169-9/14980729_1303443046375057_2021591674151291477_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7Xtk0Yw7M6oAX-BYPpF&_nc_ht=scontent.fluh1-1.fna&oh=00_AT9ywHd2l0fHZKlMJkWdg22etIgx8AA_GO8Eq_8naxy9AA&oe=62D0F50A" alt="crouselimages" height="300px"  width="100%"/></SwiperSlide>
        <SwiperSlide><img src="https://pbs.twimg.com/media/CxO7Ti1VIAMu7Gv?format=jpg&name=medium"  alt="crouselimages" height="300px"  width="100%"/></SwiperSlide>
        
      </Swiper>
    </>
  );
}
