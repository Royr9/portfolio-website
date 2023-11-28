import "./about.css"

import GlowingFillButton from "../../library/library_components/glowing_fill_button/GlowingFillButton";
import { Container } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutSection() {
  return (
    
   <section id="about">
    <Container fluid className="about-container">
    <div className="image-col">
    <img src="/media/images/roy-img-z.png" alt="" />
    <h3>Roy Ramati</h3>
    <div className="social-icons">
      <a href="https://github.com/Royr9"><GitHubIcon fontSize="large"/></a>
        <a href=""><LinkedInIcon fontSize="large"/></a>
        
    </div>
    </div>
    <div className="about-description-col">
<h2>&lt;/about me&gt;</h2>
   <p>My Journey as a web developer started 2 years ago as I was near the end of my "Big Trip"
    With an entrepreneurial mindset I had realized that I have a fondness of technology and what better way 
    for me to combine both then the power to create digitally that is enabled with programming.
    After that I realized that I simply love programming and that I am passionate about building and creating great apps that can make a positive impact.
    I am still entrepreneurial at heart, managing an online ecommerce business
</p>
   <GlowingFillButton Element="button">
    Download CV
   </GlowingFillButton>
    <GlowingFillButton Element="button">
    Email Me
   </GlowingFillButton>
    </div>
   

</Container>
   </section>
  )
}
