import React from 'react'

export default function SkillsSection() {

const skills = {
    frontend: ["JS", "HTML", "CSS", "React.js", "TypeScript","Jquery"],
    backend: ["Node.js", "Express","MongoDB"],
    otherSkills: ["Git","Github","Blockchain development","Motoko", "ICP"]
}

  return (
    <section id='skills'>
    <h1>My Skills</h1>
    <h2>A "MERN" focused full-stack web developer </h2>
    <div className='frontend-skills'>
        <h2>Front-end</h2>
        {skills.frontend.map((skill)=>{
            return (
                <div>
                    <h3>{skill}</h3>
                    <img src="" alt="" />
                </div>
            )
        })}
        </div>
    </section>
  )
}
