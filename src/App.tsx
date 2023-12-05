import React, { useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./library/library_css/animations.css";
import "./sass/index.scss";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AppNavbar from './components/AppNavbar';

export default function App() {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);



  return (
    <div className='App' >
    

   
      <AppNavbar/>
      <HeroSection  ref={section1Ref} />
      <AboutSection ref={section2Ref} />
   

    </div>
  );
}
