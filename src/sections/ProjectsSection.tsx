import { Container } from "react-bootstrap";
import ProjectContainer from "../components/ProjectContainer";
import Logo from "../components/Logo";
import { projects } from "../db/projects";
import { Description } from "@mui/icons-material";

// #5E7699
// #8FA8C6

export default function ProjectsSection() {
  return (
    <section id="ProjectsSection">
        <h1>Projects</h1>
        <Container className="projects-container ">
         {projects.map((project)=>{
          return(
            <ProjectContainer
            themeBackground= {project.themeBackground}
            image={project.image}
            techUsed={project.techUsed}
            logo={project.logo}
            description={project.description}
            />
          )
         })}
          
        </Container>
   </section>
  )
}
