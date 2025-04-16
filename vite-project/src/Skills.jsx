import { useState } from "react";

function Skills(){
    const [skill,setSkill]=useState( [] );
    const handleSkill = (event)=>{
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkill([...skill,event.target.value])
        }else{
            setSkill([...skill.filter((item)=>item!=event.target.value)])

        }
    }

    return(
        <div>
            <input onChange={handleSkill} type="checkbox" id="php" value="PHP"/>
            <label htmlFor="php">PHP</label>
            <br/>
            <input onChange={handleSkill} type="checkbox" id="js" value="JSX"/>
            <label htmlFor="js">JSX</label>
            <br/>
            <input onChange={handleSkill} type="checkbox" id="c" value="C++"/>
            <label htmlFor="c">C++</label>
            <br/>
            <input onChange={handleSkill} type="checkbox" id="python" value="PTN"/>
            <label htmlFor="python">PTN</label>
            <br/>
            <h2>{skill.toString()}</h2>
        </div>
    )
}
export default Skills;