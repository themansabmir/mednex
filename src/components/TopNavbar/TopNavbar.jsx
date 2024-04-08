import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
const data = [
  {
    title: "Delhi India",
    subTitle: "1324, 13th Floor, Ansal Tower",
    icon: <GiWorld size={"30px"} color='#22b6b0' />,
  },
  {
    title: "mednex@gmail.com",
    subTitle: "Get an estimate",
    icon: <MdOutlineAttachEmail size={"30px"} color='#22b6b0' />,
  },
  {
    title: "+91 9899 377 287",
    subTitle: "Make a call",
    icon: <BiPhoneCall size={"30px"} color='#22b6b0' />,
  },
];
export const TopNavbar = () => {

  return (
    <div className='grid grid-cols-4   justify-center'>
      <div className='bg-red-300 justify-center grid py-6'>Logo</div>
      {data.map((item, index) => {
        const { title, subTitle, icon } = item;
        return (
          <div
            key={index}
            className={`justify-center py-6 gap-4 flex items-center border-r ${
              index <= 1 ? `border-r-gray-400` : ""
            }`}
          >
            <div>{icon}</div>
            <div>
              <h3 className='text-primaryFont text-xl font-bold'>{title}</h3>
              <h4 className="text-secondaryFont text-sm font-extralight">{subTitle}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
