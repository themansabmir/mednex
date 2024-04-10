import React from 'react'
import Button from '../../components/Button/Button';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { Card } from '../../components/ServiceCard/Card';
import { TestimonialCard } from '../../components/Testimonial/TestimonialCard';


const testimonialData = [
  {
    content:
      "The archival management service provided by your team has been invaluable in preserving our research data. It ensures that our historical data is securely stored and easily accessible when needed.",
    name: "Dr. Anjali Sharma",
    profilePic: "https://example.com/profile-pics/anjali-sharma.jpg",
    designation: "Research Director, XYZ Hospital",
  },
  {
    content:
      "Your equipment calibration service has significantly improved the accuracy of our clinical trials. The precision of our measurements is now within acceptable limits, enhancing the quality of our research outcomes.",
    name: "Dr. Ravi Gupta",
    profilePic: "https://example.com/profile-pics/ravi-gupta.jpg",
    designation: "Senior Research Scientist, ABC Research Institute",
  },
  {
    content:
      "The combination of your archival management and equipment calibration services has revolutionized our data management and research processes. We now have a more efficient and reliable system for our research needs.",
    name: "Dr. Pooja Patel",
    profilePic: "https://example.com/profile-pics/pooja-patel.jpg",
    designation: "Head of Research, DEF Medical Center",
  },
  {
    content:
      "Your team's expertise in archival management and equipment calibration has greatly contributed to the success of our clinical research projects. The reliability of our data and equipment has been unparalleled.",
    name: "Dr. Aman Singh",
    profilePic: "https://example.com/profile-pics/aman-singh.jpg",
    designation: "Principal Investigator, GHI Clinical Research",
  },
  {
    content:
      "The services provided by your company have significantly enhanced our research capabilities. The archival management and equipment calibration services have ensured the integrity and accuracy of our research findings.",
    name: "Dr. Meena Malhotra",
    profilePic: "https://example.com/profile-pics/meena-malhotra.jpg",
    designation: "Director of Research, JKL Biotech",
  },
  {
    content:
      "Your commitment to quality and reliability in archival management and equipment calibration has been instrumental in our research success. We now have a robust system that supports our research goals.",
    name: "Dr. Vijay Kumar",
    profilePic: "https://example.com/profile-pics/vijay-kumar.jpg",
    designation: "Lead Researcher, MNO Pharmaceuticals",
  },
];


export const Testimonials = () => {
  return (
    <div className='my-10'>
      <div className='flex  justify-center'>
        <span className='flex px-1 justify-center border-l-4 border-l-customGreen font-semibold text-primaryText'>
          Testimonials
        </span>
      </div>
      <h2 className='font-semibold text-center text-5xl mt-5 text-primaryText'>
        What our clients have to say!
      </h2>

      <div className='max-w-[1200px] mx-auto mt-10'>
        <Swiper
          className='w-full min-h-screen'
          spaceBetween={30}
          slidesPerView={2}
          modules={[Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
                  {testimonialData.map((item, i) => {
              const  {content, designation, profilePic, name} =  item
            return (
              <SwiperSlide>
             <TestimonialCard content={content} designation={designation} profilePic={profilePic} name={name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
