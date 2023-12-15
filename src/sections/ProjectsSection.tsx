import { Container } from "react-bootstrap";

import Carousel from "../library/library_components/_carousel/Carousel";


// icons



export default function ProjectsSection() {

  return (
    <section id="ProjectsSection">
        <Container className="mt-4" fluid style={{height: "100%"}} >
          <h1 className="text-white " style={{height: "20%", margin: "0"}}>Projects</h1>
         <Carousel/>
         

         
          
        </Container>
   </section>
  )
}
