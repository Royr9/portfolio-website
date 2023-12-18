//imports

import GlowingFillButton from "../library/library_components/glowing_fill_button/GlowingFillButton";
import { Container } from "react-bootstrap";
import HeadingTypeErase from "../library/library_components/HeadingTypeErase";
import React, { forwardRef } from "react";




 const HeroSection = forwardRef<HTMLElement>(({},ref) => {

  return (
      <section ref={ref}  id='hero-section'>
        <img className="bg-image" src="/media/images/title-bg.png" alt="" />
       
   <Container fluid className="hero-section-container">

        <div className='hero-title'>
          <h1><span className="appear-smooth animate--fillBackwards">I</span> <span className="appear-smooth animate--delay1s animate--fillBackwards">AM</span>
           <span className="appear-smooth animate--delay2s animate--fillBackwards"> ROY</span> </h1>
          <HeadingTypeErase firstText="A Full-Stack Web Developer" secondText="An Entrepreneur"  Element="h2"/>
        <h4 className="text-gray-500">On a mission to create apps impsum lorem impsum lorem   impsum lorem</h4>
          <div className="title-buttons">
          
          <GlowingFillButton href="/media/Roy-CV.pdf" download="Roy-CV.pdf" Element="a">Download CV</GlowingFillButton>
          <GlowingFillButton Element="button">View my work</GlowingFillButton>

          </div>
          
        </div>
         
           </Container>
      </section>
  )
});

export default HeroSection;