import { Container } from "react-bootstrap";

import Carousel from "../library/library_components/Carousel";


// icons



export default function ProjectsSection() {

  return (
    <section id="ProjectsSection">
        <Container  fluid style={{height: "100%"}} >
          <h1 style={{height: "20%", margin: "0"}}>Projects</h1>
         <Carousel/>
         

         
          
        </Container>
   </section>
  )
}
