

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
            <div className='bg-sky-400 h-[600px] w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
              <div className='flex justify-center items-center h-full mx-auto  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-10'>
              <div className='w-3/6 mx-auto'>
                  <p className='text-3xl font-medium text-[#121212] font-poppins'>{slide.description}</p>
              </div>
              <div className='mx-auto'>
                  <img src={slide.image} className='w-full h-full' alt="" />
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