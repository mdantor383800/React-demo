import { useState } from "react";

function Card(){
    const [card, setCard]=useState();

    const themeChange=(bgColor, textColor)=>{
        setCard({...card, backgroundColor: bgColor})
    };

    return(
        <div>
         <div className=" w-[300px] rounded-2xl container mx-auto mt-[100px]">
            <div>
                <img className="w-[200px]mx-[10px] rounded-t-2xl" src="lady.jpg"></img>
            </div>
            <div className=" text-xl text-shadow-amber-100 py-[20px] font-semibold bg-gray-300 rounded-b-2xl ">
                <h3>{'Name: Jassica'}</h3>
                <h3>{'Age:22'}</h3>
                <h3>{'Skill: Web Development'}</h3>
            </div>
            <div className="mt-[10px] mx-5">
               <button onClick={()=>themeChange('green', 'blue')} className="text-xl bg-blue-300 px-[10px] rounded-3xl mx-[10px] cursor-pointer">Change</button>
               <button className="text-xl bg-blue-300 px-[10px] rounded-3xl mx-[10px] cursor-pointer" onClick={()=>themeChange('green', 'blue')}>Default</button>
            </div>
         </div>
          
       </div>
    )
}
export default Card;