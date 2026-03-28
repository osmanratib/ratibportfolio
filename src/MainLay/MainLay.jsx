import React, { useEffect } from 'react';
import Home from '../Pages/Home/Home';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const MainLay = () => {

 useEffect(() => {
  const lenis = new Lenis();

  function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Sync with GSAP
  lenis.on('scroll', () => {
   gsap.ticker.tick();
  });

  return () => lenis.destroy();
 }, []);

 return (
  <div>
   <Home />
  </div>
 );
};

export default MainLay;
