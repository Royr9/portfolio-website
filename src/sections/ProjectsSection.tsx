import { Container } from "react-bootstrap";

import Carousel from "../library/library_components/_carousel/Carousel";


// icons



export default function ProjectsSection() {

  return (
    <section id="ProjectsSection">
        <Container className="mt-3" fluid style={{height: "100%"}} >
          <h2 className="text-white section-heading " style={{height: "20%", margin: "0"}}>Projects</h2>
         <Carousel/>
         

         
          
        </Container>
   </section>
  )
}
