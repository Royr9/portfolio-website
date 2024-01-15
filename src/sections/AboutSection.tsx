import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';
import BtnWithArrow from '../library/library_components/button-components/BtnWithArrow';

const AboutSection = React.forwardRef<HTMLElement>((props,ref) => {
  return (
    <section ref={ref}  id='about-section'>
       <img className="bg-image d-none d-sm-block opacity-75  " src="/media/images/hero-bg-layer.png" alt="" />
      <Container fluid className='about-container   royal-container row'>
        {/* image column */}
        <div className='image-col  col-md-5 col-lg-6 card-center about-card'>
          <img  src="/media/images/Roy-img-2.png" alt="" />
          <h2 className='card-title'> Roy Ramati </h2>
          <div className='card-body'>
            <a href=""><GitHubIcon sx={{fontSize: 50}}  /></a>
            <a href=""><LinkedInIcon sx={{fontSize: 50}}  /></a>
          </div>
        </div>
        {/* about content div */}
        <div className=' content-col col-md-7 col-lg-6 card-center '>
          <h2 className='fs-1 '>{"About Me"}</h2>
          <img style={{maxWidth:"100%"}} src="/media/images/blue-glow-divider.png" alt="" />
          <p className='fs-6  w-100 '>Hey, I'm Roy, a 24-year-old web developer from Hengelo, Netherlands. Coding enthusiast (MERN stack), finance buff, and former basketball player. Co-founder of Aguamar, importing chic swimsuits from Fabiola Molina. Goals? Secure a junior developer role, grow Aguamar, achieve financial freedom, and launch a game-changing tech startup. Let's code and conquer!</p>
          <div className='card-body mobile-only'>
            <a href=""><GitHubIcon  sx={{fontSize: 50}} fontSize='large' /></a>
            <a href=""><LinkedInIcon sx={{fontSize: 50}} fontSize='large' /></a>
          </div>
          <BtnWithArrow
          arrowColor='black' customSize="18px" className='get-in-touch-btn'   >
            Get In Touch
          </BtnWithArrow>
          {/* <GlowingFillButton Element='button' colorClass='glow-btn-mint b-rad-2 text-white fs-5 '>
            Get In Touch
          </GlowingFillButton> */}
          
        </div>
      </Container>
    </section>
  );
});

export default AboutSection;
