import React from "react";

export const TestimonialCard = ({ para, username, locationName }) => {
  return (
    <div className='flex flex-col text-lg text-primaryText px-20 py-4 rounded shadow '>
      <p className='font-medium'>{para}</p>
      <h1 className='font-semibold text-base'>{username}</h1>
      <span className='text-base font-normal '>{locationName}</span>
    </div>
  );
};
