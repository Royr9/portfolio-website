import React from 'react';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const AboutSection = React.forwardRef<HTMLElement>((props,ref) => {
  return (
    <section ref={ref}  id='about-section'>
      <Container className='about-container'>
        {/* image column */}
        <div className='image-col card-center'>
          <img className='img-circle' src="/media/images/Roy-img-z.png" alt="" />
          <h2 className='card-title'> Roy Ramati </h2>
          <div className='card-body'>
            <GitHubIcon fontSize='large' />
            <LinkedInIcon fontSize='large' />
          </div>
        </div>
        {/* about content div */}
        <div className=' content-col card-center'>
          <h2>{"</About Me>"}</h2>
          <img src="/media/images/blue-glow-divider.png" alt="" />
          <p className='fs-4'>as a lorem impsu  lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu
          lorem impsu lorem impsu
          lorem impsu lorem impsu lorem impsu</p>
        </div>
      </Container>
    </section>
  );
});

export default AboutSection;
