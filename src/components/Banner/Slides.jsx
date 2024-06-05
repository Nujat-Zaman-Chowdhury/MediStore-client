

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
        className="mySwiper"
      >
        {
          bannerSlides.map(slide=><SwiperSlide key={slide._id}>
            <div className='h-full lg:h-[600px] bg-[url("https://i.ibb.co/yQ6T3SV/2.webp")] bg-cover bg-no-repeat rounded overflow-hidden'>
              <div className='flex flex-col lg:flex-row justify-center items-center h-full mx-auto py-6 lg:py-0 px-5 md:px-20'>
              <div className='w-full lg:w-4/6  mx-auto flex justify-center items-center'>
                  <p className='text-xl md:text-3xl font-medium text-[#121212] font-outfit first-letter-blue'>{slide.description}</p>
              </div>
              <div className='mx-auto'>
                  <img src={slide.image} className='w-full h-full object-cover' alt="" />
              </div>
              </div>
            </div>
          </SwiperSlide>)
        }
        
      </Swiper>
    </>
    );
};

export default Slides;