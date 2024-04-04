import React from "react";
// import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const testimonials = [
  {
    username: "Mansab",
    para: "The way Mednex do their job is highly appreciated",
    location: "Delhi",
  },
  {
    username: "Sushant",
    para: "They are one of the best service providers in industry and im satisfied.",
    location: "Mumbai",
  },
  {
    username: "Kunal",
    para: "This document management service exceeded my expectations. Their user-friendly interface and efficient organization tools have streamlined our workflow, making document retrieval a breeze.",
    location: "jaipur",
  },
];

export const TestiMonials = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-10'>
        Our Testimonials
      </h1>
      <Swiper
        className=''
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((item, i) => {
          return (
            <SwiperSlide>
              <div className='   border-2 border-gray-300  px-2 py-10 rounded  text-center flex flex-col items-center '>
                <h1 className='text-2xl text-secondaryText '>{item.para}</h1>
                <div className='flex gap-2'>
                  <h3 className='text-base font-sans text-primary'>
                    {item.username},
                  </h3>
                  <span>{item.location}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
