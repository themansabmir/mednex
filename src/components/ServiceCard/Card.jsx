import React from "react";

export const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className='w-full hover:scale-95 cursor-pointer pb-10 hover:bg-[#edeaea] transition-all duration-700 border border-[#c3c3c3]  rounded shadow px-5  flex flex-col items-center gap-4'>
      <div className="h-20 w-20 mt-10">
        <img src={icon} alt='' height={"100%"} width={"100%"}/>
      </div>
      <h1 className='text-primaryText text-2xl  font-semibold'>{heading}</h1>
      <p className='text-secondaryText mt-4 text-lg font-medium text-justify'>
        {paragraph}
      </p>
    </div>
  );
};
