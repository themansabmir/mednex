import React from "react";

export const Banner = ({ cls, heading, para, clickHandler }) => {
  return (
    <div className={cls ? cls : `bg-[#f2f6ff] w-full  py-10`}>
      <div className='max-w-[1200px] mx-auto text-justify'>
        <h1 className='font-bold text-3xl text-primaryText mb-5'>{heading}</h1>
        <p className="opacity-70  text-primaryText">{para}</p>
      </div>
    </div>
  );
};
