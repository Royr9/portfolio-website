import { Container } from "react-bootstrap";
import skills from "../db/skillList"
import SkillsGame from "../components/SkillsGame";

export default function SkillsSection() {

const skillsList = skills();


  return (
    <section id="skills-section">
        {/* <h2 className="section-heading">My Skills</h2>
        <Container fluid className="skills-container card-center royal-container ">
         
            {skillsList.map((skill,index)=> {
                return (
                    <div className={` col-4  skill-${index}`} key={index}>
                      <div className="skill-div">
                    <img src={skill.iconUrl} alt="" /> <span className="  ">{skill.name}</span>
                      </div>
                        
                    </div>
                )
            })}
         </Container> */}
          <SkillsGame/>
    </section>
  )
}
