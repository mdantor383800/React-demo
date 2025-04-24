import { useEffect, useState } from "react";


function Clock({color}){
    const [time, setTime]= useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString()
            )
        }, 1000)
    },[])
    return(
        <div>
            <h1 style={{color:color, background:"gray", width:"200PX",margin:"100px", padding:"20px", borderRadius:"20PX", fontSize:"20PX"}}>{time}</h1>
        </div>
    )
}
export default Clock;