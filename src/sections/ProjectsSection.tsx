import { Container } from "react-bootstrap";
import ProjectsCarousel from "../library/library_components/ProjectsCarousel";


// icons



export default function ProjectsSection() {

  return (
    <section id="ProjectsSection">
        <Container  fluid style={{height: "100%"}} >
          <h1 style={{height: "20%", margin: "0"}}>Projects</h1>
         <ProjectsCarousel/>
         

         
          
        </Container>
   </section>
  )
}
