import { useState } from "react";

function User() {
    const[name, setName]= useState('');
    const[password, setPassword]= useState('');
    const[email, setEmail]= useState('');

    return(
        <div>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Your Name"/>
            <br/><br/>
            <input type="password" value={password}  onChange={(event)=>{setPassword(event.target.value)}} placeholder="Enter Password"/>
            <br/><br/>
            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter Your Email"/>
            <br/><br/>
            <button>Submit</button>
            <button onClick={()=>{setName(''); setPassword(''); setEmail('')}}>Delete</button>
            <br/><br/>
            <h2>{name}</h2>
            <h2>{password}</h2>
            <h2>{email}</h2>

        </div>
    )
}
export default User;