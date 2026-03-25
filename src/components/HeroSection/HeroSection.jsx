import React from 'react';
import ratibImage from "/Images/ratibimage.png"
import EmailBar from '../EmailBar/EmailBar';

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

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center">
     <img
      className='h-[400px] lg:h-[600px]'
      src={ratibImage}
      alt="ratibImage"
     />
    </div>

    <div className="content flex justify-center  absolute top-[20%] md:top-[20%] lg:top-[50%] w-full z-10">
     <h1
      // style={{
      //  WebkitTextStroke: "4px white",
      // }}
      className=' text-[100px] md:text-[200px] lg:text-[200px] leading-[0.8]  text-center font-outfit font-extrabold absolute text-secondary uppercase'
     >
      osman ratib
     </h1>
    </div>

   </section>
  </div>
 );
};

export default HeroSection;
