import { Container } from "react-bootstrap";
import skills, { skillsArrayType } from "../db/skillList"
import SkillsGame from "../components/SkillsGame";
import { useState } from "react";

export default function SkillsSection() {



const [skillsList, setSkillList] = useState(skills());
const [isGameOn, setIsGameOn] = useState(false);

const handleGame = ()=>{
setIsGameOn(false);
}

  return (
    <section id="skills-section">
      {isGameOn ? <SkillsGame onQuitGame={handleGame}/> :  <div>
        <h4 className='  display-5 text-bg-danger p-3  mt-0 '>My Development Skills</h4>
        <button onClick={()=> setIsGameOn(true)} className="btn-primary btn">Wanna play a little game?</button>
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
         </Container>
          </div>}
    </section>
  )
}
