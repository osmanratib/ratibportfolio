import React from 'react';
import ratibImage from "/Images/ratibimage.png"
import EmailBar from '../EmailBar/EmailBar';
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";
import Sidebar from '../Sidebar/Sidebar';

const HeroSection = () => {

 return (
  <div> 
   <section
    style={{
     background: "url('/Images/v996-011.jpg')",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover"
    }}
    className='relative z-20 h-screen'
   >
    <EmailBar /> 
    <Sidebar/>

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center w-full lg:w-[450px] ">
     <img
      className='h-[380px] lg:h-[600px] w-[320px] lg:w-full select-none'
      src={ratibImage}
      alt="ratibImage"
     />
    </div>

    <div id='content' className="content flex justify-center  absolute top-[10%] md:top-[20%] lg:top-[50%] w-full z-10">
     <h1
      // style={{
      //  WebkitTextStroke: "4px white",
      // }}
      className=' text-[100px] md:text-[200px] lg:text-[200px] leading-[1]  text-center font-outfit font-extrabold absolute text-secondary uppercase select-none'
     >
      osman ratib
     </h1>
    </div>
      
    <div className='relative top-[20%] left-[10%] hidden md:block select-none' >
     <h1 className='font-JosefinSans text-[17px] w-[400px] flex gap-3' > <span className='text-[20px]' ><FiArrowRightCircle /> </span>I’m a passionate web developer who thrives on tackling challenging problems and exploring innovative solutions </h1>
   </div>

    <div className='lg:hidden md:hidden relative top-[30%] w-[400px] pl-20' >
     <h1 className='capitalize font-JosefinSans text-[17px] ' >I’m a passionate web developer who thrives on tackling challenging problems and exploring innovative solutions </h1>
     <button className=' bg-secondary px-8 py-1 text-white rounded-md mt-6 font-JosefinSans flex  items-center gap-2 ' >contact <LuCircleArrowOutUpRight /> </button>
    </div>

   </section>
  </div>
 );
};

export default HeroSection;
