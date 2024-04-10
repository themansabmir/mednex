import React from "react";

export const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="px-4 py-3 flex flex-col text-center font-semibold text-xl gap-5 text-primaryText hover:bg-customGreen hover:bg-opacity-20 transition-all duration-500 cursor-pointer border rounded hover:shadow-2xl  border-customGreen">
      <img src={icon} alt="" className="w-24 mx-auto bg-gray-100 px-4 py-4" />
      <h3>{heading}</h3>
      <p className="font-light text-base text-justify ">{paragraph}</p>

    </div>
  );
};
