
const skills = ()=>{
const skillNames= ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap", "Sass","Tailwind", "jQuery","Node.js" ,"MongoDB", "Git", "GitHub", "Rest API",  "ICP"]; 

type skillObjectType = {
    name: string,
    iconUrl: string
}

let skillList: skillObjectType[] = [];

skillNames.forEach((skill)=>{
    skillList.push({
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    }) 
});

return skillList;

}




export default skills;
