import React from "react";

import CaliberImg from "../../assets/img-4.jpeg";
import Img3 from "../../assets/pexels-photo-3861457.jpg";
import ManagementImg from "../../assets/img-6.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Button from "../Button/Button";

const carouselData = [
  {
    id: 1,
    heading: "Mednex Research Solutions",
    content: "A Complete Site Management Solutions Organization",
    bgImage: Img3,
  },
  {
    id: 1,
    heading: "Record Management Services",
    content: "Physical Storage, Digitization & Destruction",
    bgImage: ManagementImg,
  },
  {
    id: 1,
    heading: "Medical Equipment Calibration",
    content:
      "Calibration of Equipment-Ensures Accuracy, Effectiveness & Long Life of Equipments",
    bgImage: CaliberImg,
  },
];

const Hero = () => {
  return (
    <>
      <Swiper
        className='w-full min-h-screen'
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {carouselData.map((item, i) => {
          return (
            <SwiperSlide>
              <div className='min-h-screen w-full '>
                <div
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    height: "100vh",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                  className='bg-cover w-full bg-center self-stretch relative flex justify-center items-center'
                >
                  <div className='absolute bg-black w-full min-h-screen bg-opacity-50 '></div>

                  <div className='z-20 flex flex-col justify-center items-center text-center gap-4 '>
                    <h1 className='text-5xl sm:text-[70px] font-bold text-white '>
                      {item.heading}{" "}
                    </h1>
                    <p className='text-xl text-white font-medium'>
                      {item.content}
                    </p>
                   <Button  btnName={"Get Quotation"}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
