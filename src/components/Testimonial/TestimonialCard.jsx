import React from "react";

export const TestimonialCard = ({ content, name,  designation, profilePic }) => {
  return (
    <div className='border flex flex-col gap-5 border-gray-200 rounded shadow-lg px-20 py-10'>
      <h1 className="text-primaryText font-medium text-lg">{content}</h1>
      <div className='flex'>
        <div className="mt-5">
          <h3 className="text-lg font-bold">{name} </h3>
      
        </div>
        <img src={profilePic} alt='' />
      </div>
    </div>
  );
};
