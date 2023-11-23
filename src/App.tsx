import React from 'react';
import './App.css';
import "./library/library_css/animations.css"
import "bootstrap/dist/css/bootstrap.min.css"



import Footer from './library/library_components/footer_comp/Footer';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';
import HeroSection from './sections/hero_section/HeroSection';
import { Grow } from '@mui/material';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/about_section/AboutSection';

export default function App() {
  return (
    <div className='App'>
<AppNavbar/>

<Container className='main'>
 <HeroSection/>
 <AboutSection/>
 <SkillsSection/>

</Container>


    {/* <Footer>
        Made By Roy Ramati
    </Footer> */}


    </div>
  )
}



