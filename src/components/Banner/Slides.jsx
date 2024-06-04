

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
const Slides = () => {
  const axiosCommon = useAxiosCommon()
  //get slider by status 
const {data: slides=[]} = useQuery({
  queryKey:['slides'],
  queryFn:async()=>{
    const {data} = await axiosCommon('/advertisements')
    return data;
  }
})
const bannerSlides = slides.filter(slide=>slide.status === 'In Slide')
// console.log(bannerSlides);
    return (
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-32"
      >
        {
          bannerSlides.map(slide=><SwiperSlide key={slide._id}>
            <div className='bg-sky-300  h-[600px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex justify-center items-center'>
              <div>
                  <h1>{slide.description}</h1>
              </div>
              <div>
                  <img src={slide.image} className='w-full h-full' alt="" />
              </div>
            </div>
          </SwiperSlide>)
        }
        
      </Swiper>
    </>
    );
};

export default Slides;