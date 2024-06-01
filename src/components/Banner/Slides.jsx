

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Slides = () => {
    return (
        <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/gwV1tR6/slide1.jpg')] h-[500px] w-full bg-cover bg-center bg-no-repeat">

          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Slides;