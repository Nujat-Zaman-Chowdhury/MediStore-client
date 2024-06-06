import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const DiscountProducts = () => {
  const axiosCommon = useAxiosCommon();

  const { data: medicines = [] } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const { data } = await axiosCommon("/medicines");
      return data;
    },
  });

  const discountProducts = medicines.filter(
    (medicine) => medicine.discountPercentage > 0
  );
  console.log(discountProducts, discountProducts.length);

  return (
    <div className='px-5 py-12 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <div className="text-3xl text-center font-bold font-outfit mb-6 text-white">
        Our Discount Products
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper py-10"
      >
        {discountProducts.map((product) => (
          <SwiperSlide className="" key={product.key}>
            <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl my-10 mx-auto">
              <div className="flex flex-col mx-auto p-3 relative">
                <img
                  src={product?.image}
                  alt="Product"
                  className="h-72 w-72 object-cover rounded  mx-auto "
                />
                <div className="w-12 h-12 rounded-full text-white font-poppins font-semibold bg-blue-400 flex justify-center items-center absolute left-5 top-5">
                <p>{product?.discountPercentage}%</p>
                </div>
                <div className="px-4 py-3 w-72">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product?.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product?.pricePerUnit}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountProducts;
