import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';


const AboutSection = React.forwardRef<HTMLElement>((props,ref) => {
  return (
    <section ref={ref}  id='about-section'>
      <Container className='about-container row'>
        {/* image column */}
        <div className='image-col col-5-lg card-center'>
          <img className='img-circle' src="/media/images/Roy-img-z.png" alt="" />
          <h2 className='card-title'> Roy Ramati </h2>
          <div className='card-body'>
            <a href=""><GitHubIcon fontSize='large' /></a>
            <a href=""><LinkedInIcon fontSize='large' /></a>
          </div>
        </div>
        {/* about content div */}
        <div className=' content-col col-7-lg card-center'>
          <h2>{"</About Me>"}</h2>
          <img src="/media/images/blue-glow-divider.png" alt="" />
          <p className='fs-4'>as a lorem impsu  lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu</p>
          <GlowingFillButton Element='button' colorClass='glow-btn-mint b-rad-2 text-black'>
            Get in Touch
          </GlowingFillButton>
        </div>
      </Container>
    </section>
  );
});

export default AboutSection;
