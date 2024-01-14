
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// library 
import "./library/library_css/animations.css";
import "./library/library_sass/index.scss";

// sass
import "./sass/index.scss";

// module imports 

import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// sections components etc...
import AppNavbar from './components/AppNavbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';

export default function App() {


  return (
    <div className='App' >
    

   
      <AppNavbar/>
      <HeroSection  />
      {/* <AboutSection  />
      <SkillsSection/>
      <ProjectsSection/>
    */}

    </div>
  );
}
