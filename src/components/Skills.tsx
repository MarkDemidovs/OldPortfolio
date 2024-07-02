import SkillBoard from "./SkillBoard";

let webSkills: string[] = ["HTML/CSS", "JavaScript", "TypeScript", "React.js", "MongoDB + Mongoose", "Node.js + Express", "JSON"];
let progLangSkills: string[] = ["C++", "C#", "C", "Python", "Ruby", "Lua", "Kotlin", "Java"]
let csSkills: string[] = ["Basic Computer Science Theory", "Object Oriented Programming", "Data Structures", "Algorithms", "Computer architecture", "Computer Building", "Linux"];
let otherSkills: string[] = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe Photoshop", "CapCut", "Photopea", "Microsoft Office Word", "Microsoft Office Excel", "Microsoft Office Powerpoint"
];

export default function Skills() {

    return (
        <div id="skillDiv">
            <h3 className="infoMain" id="skillsMain">
                My Skills
            </h3>
            
            <SkillBoard
                title="Web Development"
                items={webSkills}
            />

            <SkillBoard
                title="Programming Languages"
                items={progLangSkills}
            />

            <SkillBoard
                title="Computer Science"
                items={csSkills}
            />

            <SkillBoard
                title="Web Development"
                items={otherSkills}
            />
        </div>
    )
}