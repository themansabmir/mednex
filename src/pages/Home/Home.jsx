import React from "react";
import { GiMicroscope } from "react-icons/gi";
import { Banner } from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import { TopNavbar } from "../../components/TopNavbar/TopNavbar";
import { ContactForm } from "./ContactForm";
import { Services } from "./Services";

import { GoGear } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";

import WhyUs from '../../assets/whyUs.jpg';
import { Testimonials } from "./Testimonials";
import Stats from "../../DScomponents/Stats";
import HeroHeader from "../../DScomponents/HeroHeader";
import ServicesDS from "../../DScomponents/ServicesDS";
export const Home = () => {
  return (
    <section>
      <div className=''>
        {/* <TopNavbar /> */}
        <HeroHeader />
        <ServicesDS/>
        {/* <Navbar /> */}
      </div>
      <Hero />

      {/* Section about clinical research */}
      <Services />
      <Stats />

      <Banner
        heading={"We Are The Trusted Experts We Keep Things Simple."}
        para={
          "We pride ourselves on being the trusted experts in the field. With our extensive experience and dedication to excellence, we provide unparalleled support and guidance throughout every stage of the research process. Our commitment to simplicity ensures that our clients can navigate complex challenges with ease, allowing them to focus on what matters most – advancing medical knowledge and improving patient outcomes. "
        }
      />

      {/*  WHY US */}

      <div className='max-w-[1200px] mx-auto grid grid-cols-3 my-20 '>
        <div className='left col-span-1'>
          <img src={WhyUs} alt='' />
        </div>
        <div className='right col-span-2 px-4 py-4 flex flex-col gap-6 bg-white'>
          <span className='flex px-1  border-l-4 border-l-customGreen font-semibold text-primaryText'>
            Why Mednex
          </span>
          <h1 className='text-primaryText  text-5xl font-semibold'>
            Because We Think <br /> Beyond Your Boundaries
          </h1>
          <p className='text-gray-600  text-base'>
            We deliver scientific discoveries and technical breakthroughs needed
            to realize great solutions in energy.
          </p>

          <div className='flex flex-col mt-10 gap-4 text-primaryText font-semibold text-xl  py-3'>
            <div className='flex px-4 py-2 gap-4 items-center bg-[#f2f6ff]'>
              <GrUserExpert size={40} color='#22b6b0' />
              <h3>35 Years’ Experience</h3>
            </div>
            <div className='flex gap-4 px-4 py-2 items-center bg-[#f2f6ff]'>
              <GiMicroscope size={40} color='#22b6b0' />
              <h3>Medical Excellence</h3>
            </div>
            <div className='flex gap-4 px-4 py-2 items-center bg-[#f2f6ff]'>
              <GoGear size={40} color='#22b6b0' />
              <h3>In-Person Or Online Service</h3>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />


      <ContactForm />
    </section>
  );
};
