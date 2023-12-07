import { Container } from "react-bootstrap";
import skills from "../db/skillList"

export default function SkillsSection() {

const skillsList = skills();


  return (
    <section id="skills-section">
        <h2>My Skills</h2>
        <Container  className="skills-container card-center ">
            {skillsList.map((skill,index)=> {
                return (
                    <div className={`skill-div col-4-xs  skill-${index}`} key={index}>
                        <img src={skill.iconUrl} alt="" /> <span>{skill.name}</span>
                    </div>
                    
                )
            })}
         </Container>
    </section>
  )
}
