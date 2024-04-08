import React from 'react'

const Button = ({ cls, btnName, btnHandler }) => {
  return (
    <div
      className={
        cls
          ? cls
          : "px-4 py-2 bg-customGreen hover:bg-primaryText text-xl font-semibold w-max transition-all duration-500 hover:text-white text-white cursor-pointer"
      }
      onClick={btnHandler}
    >
      {btnName}
    </div>
  );
};

export default Button