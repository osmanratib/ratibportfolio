import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const EmailBar = () => {
 return (
  <div className=' 
      max-w-[350px]
      md:max-w-[400px] 
      lg:max-w-[600px] 
      mx-auto sticky top-4 z-50
      transform transition-transform duration-300 ease-out
      hover:scale-105'>
   <section className='border flex  lg:justify-between gap-16 lg:gap-0 items-center py-2 px-3 lg:px-4 rounded-2xl border-black/40 bg-secondary'>

    <h1 className='font-JosefinSans text-white text-[12px] lg:text-[16px] font-light'>
     Send me an email for your ideas
    </h1>

    <button
     onClick={() => window.location.href = "mailto:osmanratib14@gmail.com"}
     className='bg-white px-6 py-1 rounded-xl cursor-pointer flex justify-center items-center gap-3 transition-all duration-300 hover:pr-8 hover:pl-8 hover:gap-5 '
    >
     <BiLogoGmail className='text-black text-lg' />
     <FaArrowRightLong className='text-black' />
    </button>

   </section>
  </div>
 );
};

export default EmailBar;
