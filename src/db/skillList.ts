const skillNames= ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap", "Sass","Tailwind", "jQuery","Node.js" ,"MongoDB", "Git", "GitHub", "Rest API",  "ICP"]; 


export type skillsArrayType = skillObjectType[];

type skillObjectType = {
    name: string,
    iconUrl: string
}
const skills = ()=>{


let skillList: skillsArrayType = [];

skillNames.forEach((skill)=>{
    skillList.push({
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    }) 
});

return skillList;
}

export const cardGameSkills = ()=>{
    let skillList: skillsArrayType = [];

skillNames.forEach((skill)=>{
    skillList.push({
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    },{
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    } ) 
});

return skillList;
}




export default skills;
