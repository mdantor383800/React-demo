import { useState } from "react";

function Color(){
    const [color, setColor]=useState('red');
    return(
        <div>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"green"}>Green</option>
                <option value={"orange"}>Orange</option>
            </select>
        </div>
    )
}
export default Color;