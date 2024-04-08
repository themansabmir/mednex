import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ResearchImg from "../../assets/img-1.webp";
import { Card } from "../../components/ServiceCard/Card";

import VentilatorImg from "../../assets/ventilator.png";
import SitemanagementImg from "../../assets/worksheet.png";
import RecordImg from "../../assets/project-management.png";
import Insourcing from  '../../assets/file1.png'
import MedicalWriting from  '../../assets/file2.png'
import training from  '../../assets/file4.png'
import { TestiMonials } from "../../components/Testimonial/TestiMonials";
import { ContactForm } from "./ContactForm";
import { TopNavbar } from "../../components/TopNavbar/TopNavbar";

const ourServices = [
  {
    id: 1,
    icon: SitemanagementImg,
    heading: "Site Management Services",
    paragraph: `Medrix Clinical Research site management organization (SMO) was created to fill an unmet need for quality site management Services for clinical trials industry in the North India region where Medrix Clinical Research already has several years of experience undertaking CRO projects.The SMO trains and provides Clinical Research Coordinators (CRC’s) as well as other cadres of site support staff who will support clinical trial investigators especially in small clinical trial sites and doctor’s clinics with site feasibility, Site Selection process, Regulatory/IRB support, patient recruitment, enrollment and follow up, close out and Study Records Archival.`,
  },
  {
    id: 2,
    icon: RecordImg,
    heading: "Record Management Services",
    paragraph:
      "We are providing end to end physical Documents Storage solutions, which if implemented can help you to map the overall record storage scenario within your organization, thus resulting in quick decision making, elevated organizational efficiency and higher productivity. Our Record Management Services are cost-effective and can be customized as per your needs and requirements. ",
  },
  {
    id: 3,
    icon: VentilatorImg,
    heading: "Equipment Calibration Services",
    paragraph:
      "Medical Equipment Calibration is carried out to minimize the uncertainty in measurements, reducing errors and bringing measurements to an acceptable level. With repeated use and over a period of time, all equipment begins to degrade and that affects its accuracy and precision. Regularly calibrating equipment will ensure that industry defined standards are met and that the equipment is functional thus providing accurate output.",
  },
];



const ourAminities = [
  {
    id: 1,
    icon: Insourcing,
    heading: "Insourcing",
    paragraph: `Because Clinical Research is conducted in a dynamic environment, it is important to ensure we have sufficient manpower.`,
  },
  {
    id: 2,
    icon: MedicalWriting,
    heading: "Medical Writing Service",
    paragraph:
      "We understand the complexity and importance of Medical writing and to provide this service we have the experts for preparation of scientific documents.",
  },
  {
    id: 3,
    icon: training,
    heading: "Training ",
    paragraph:
      "Mednex Research Solutions conducts training programs , Ethics in Clinical Research and ( ICH - GCP ) Good Clinical Practices in Clinical Research for all levels of site staff . ",
  },
];
export const Home = () => {
  return (
    <section>
      <div className='max-w-[1200px] mx-auto'>

      <TopNavbar />
      <Navbar />
      </div>
      <Hero />

      {/* Section about clinical research */}

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[1200px] mx-auto mt-10'>
        <div className=''>
          <span>Who are we</span>
          <h1 className='text-primaryText text-5xl  font-bold'>
            About Clinical Research{" "}
          </h1>
          <p className='text-secondaryText mt-4 text-lg font-medium text-justify'>
            A Clinical research is a scientific study of the effects, risks,
            efficacy and benefit of a medicinal product. These are carried out
            prior to the release of the medicine in the market. These trials are
            undertaken at various stages and studies are conducted after the
            launch of a new product to monitor safety and side effects during
            large-scale use. Clinical trials are conducted by Pharmaceutical
            companies or Contract Research Organization (CROs) / Site Management
            Organization (SMOs) on their behalf.{" "}
          </p>
          <button className='bg-btnBg text-white font-semibold  mt-4 px-3 py-1 rounded-md hover:bg-btnHover'>
            Read More
          </button>
        </div>
        <div className='w-full  bg-sky-200'>
          <img src={ResearchImg} alt='' width={"100%"} height={"100%"} />
        </div>
      </div>
      {/*  explaining our services */}

      <div className='max-w-[1200px] mx-auto my-10  '>
        <h1 className='text-center mb-10 text-3xl font-semibold  '>
          {" "}
          Our Services
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
          {ourServices.map((item, i) => {
            return (
              <Card
                icon={item.icon}
                key={i}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto mt-20  '>
        <h1 className='text-center mb-10 text-3xl font-semibold  '>
          {" "}
          Our Amenities
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
          {ourAminities.map((item, i) => {
            return (
              <Card
                icon={item.icon}
                key={i}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </div>

      <TestiMonials />

      <ContactForm />
    </section>
  );
};
