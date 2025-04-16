import { useState } from "react";

function Header(){
const[name, setName]=useState('Antor');
const handleName =()=>{
    setName('Arif');
}
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={handleName}>Click Me</button>
            <h2>{name}</h2>
        </div>
    )
}
export default Header;