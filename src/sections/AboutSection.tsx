import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';


const AboutSection = React.forwardRef<HTMLElement>((props,ref) => {
  return (
    <section ref={ref}  id='about-section'>
      <Container fluid className='about-container royal-container row'>
        {/* image column */}
        <div className='image-col col-md-5 card-center'>
          <img className='img-circle' src="/media/images/Roy-img-z.png" alt="" />
          <h2 className='card-title'> Roy Ramati </h2>
          <div className='card-body'>
            <a href=""><GitHubIcon sx={{fontSize: 50}}  /></a>
            <a href=""><LinkedInIcon sx={{fontSize: 50}}  /></a>
          </div>
        </div>
        {/* about content div */}
        <div className=' content-col col-md-7 card-center'>
          <h2 className=''>{"<About Me>"}</h2>
          <img style={{maxWidth:"100%"}} src="/media/images/blue-glow-divider.png" alt="" />
          <p className='fs-4'>as a lorem impsu  lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu</p>
          <div className='card-body mobile-only'>
            <a href=""><GitHubIcon sx={{fontSize: 50}} fontSize='large' /></a>
            <a href=""><LinkedInIcon sx={{fontSize: 50}} fontSize='large' /></a>
          </div>
          <GlowingFillButton Element='button' colorClass='glow-btn-mint b-rad-2 text-black'>
            Get In Touch
          </GlowingFillButton>
        </div>
      </Container>
    </section>
  );
});

export default AboutSection;
