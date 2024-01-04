


 export const shuffleObjectArray = (array: skillsArrayType  )=>{
        const compareFn = ()=> Math.random() - 0.5;
        array.sort(compareFn);
        return array;
    } 
    export const shuffleStringArray = (array: string[] )=>{
        const compareFn = ()=> Math.random() - 0.5;
        array.sort(compareFn);
        return array;
    } 



export const skillNames= ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap", "Sass","Tailwind", "jQuery","Node.js" ,"MongoDB", "Git", "GitHub", "Rest API",  "ICP"]; 



export type skillsArrayType = skillObjectType[];

type skillObjectType = {
    name: string,
    iconUrl: string
}


const skills = ()=>{
let skillsList: skillsArrayType = [];

skillNames.forEach((skill)=>{
    skillsList.push({
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    }) 
});

return skillsList;
}

 export const cardGameSkills = ()=>{
    let skillList: skillsArrayType = [];
    const gameSkillNames = skillNames;
shuffleStringArray(gameSkillNames);
gameSkillNames.slice(0,10).forEach((skill)=>{
    skillList.push({
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    },{
        name: skill,
        iconUrl: `/media/images/skill-icons/${skill}.png`
    } ) 
});
shuffleObjectArray(skillList);
return skillList;
}




export default skills;
