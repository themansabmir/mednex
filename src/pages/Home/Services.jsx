import React from "react";

import VentilatorImg from "../../assets/ventilator.png";
import SitemanagementImg from "../../assets/worksheet.png";
import RecordImg from "../../assets/project-management.png";
import { Card } from "../../components/ServiceCard/Card";

const ourServices = [
  {
    id: 1,
    icon: SitemanagementImg,
    heading: "Site Management Services",
    paragraph: `Mednex Research Solutions site management organization (SMO) was created to fill an unmet need for quality site management Services for clinical trials industry in the North India region where Mednex Research Solutions already has several years of experience undertaking CRO projects.`,
  },
  {
    id: 2,
    icon: RecordImg,
    heading: "Record Management Services",
    paragraph:
      "We are providing end to end physical Documents Storage solutions, which if implemented can help you to map the overall record storage scenario within your organization, thus resulting in quick decision making, elevated organizational efficiency and higher productivity. ",
  },
  {
    id: 3,
    icon: VentilatorImg,
    heading: "Equipment Calibration Services",
    paragraph:
      "Medical Equipment Calibration is carried out to minimize the uncertainty in measurements, reducing errors and bringing measurements to an acceptable level. With repeated use and over a period of time, all equipment begins to degrade and that affects its accuracy and precision.",
  },
];

export const Services = () => {
  return (
    <div className='py-10 my-10'>
      <div className='flex  justify-center'>
        <span className='flex px-1 justify-center border-l-4 border-l-customGreen font-semibold text-primaryText'>
          Clinical Services
        </span>
      </div>
      <h2 className='font-semibold text-center text-5xl mt-5 text-primaryText'>
        Reliable & High Quality Services
      </h2>

      <div className='mt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[1200px] mx-auto'>
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
    </div>
  );
};
