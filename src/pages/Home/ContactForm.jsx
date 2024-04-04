import React from "react";

export const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
    return (
      <div className='bg-primaryText'>
        <div className='max-w-[1200px] mx-auto flex flex-col'>
          <h1 className=' text-3xl font-bold text-center text-white '>
            Contact Us For Better Result
          </h1>
          <form onSubmit={submitHandler} className='mt-5'>
            <div className='flex gap-5'>
              <div className='w-full flex flex-col gap-3'>
                <p className='text-white'>Email</p>
                <input
                  type='email'
                  className='px-5 py-2 rounded-md w-full border-[#c3c3c3] border-2'
                />
              </div>
              <div className='w-full flex flex-col gap-3'>
                <p className='text-white'>Phone</p>
                <input
                  type='email'
                  className='px-5 py-2 w-full rounded-md border-[#c3c3c3] border-2'
                />
              </div>
            </div>
            <div className='w-full flex flex-col gap-3 mt-6'>
              <p className='text-white'>Message</p>

              <textarea
                className='border-[#c3c3c3] rounded-md border-2 w-full'
                name=''
                id=''
                cols=''
                rows='5'
              ></textarea>
                    </div>
                    <button className="text-primaryText bg-white px-2 py-1 rounded mt-3 font-semibold ">Submit</button>
          </form>
        </div>
      </div>
    );
};
