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

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault(); // Prevent the default scrolling behavior

      const delta = (e as WheelEvent).deltaY;

      if (delta > 0 && section2Ref.current) {
       window.scrollTo({ top: section2Ref.current.offsetTop, behavior: 'auto' });
      } else if (delta < 0 && section1Ref.current && section2Ref.current) {
        window.scrollTo({ top: section1Ref.current.offsetTop, behavior: 'auto' });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [section1Ref, section2Ref]);

  return (
    <div className='App'>
       <AppNavbar/>
      <HeroSection ref={section1Ref} />
      <AboutSection ref={section2Ref} />
    </div>
  );
}
