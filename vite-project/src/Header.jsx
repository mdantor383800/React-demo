import { useState } from "react";

function Header(){
const[name, setName]=useState('');
const handleName =()=>{
    setName('Antor');
}
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={handleName}>Click Me</button>
            <button onClick={()=>setName('')}>Clear</button>
            <h2>{name}</h2>
        </div>
    )
}
export default Header;