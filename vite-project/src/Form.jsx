import {useFormStatus} from 'react-dom'

function Form(){
   const handleSubmit = async()=>{
    await new Promise(res=>setTimeout(res,5000));
      console.log('I love you')
   }
   function CoustomForm (){
    const {pending} = useFormStatus()
    console.log(pending);
    
     return(
        <div>
             <input type="text" placeholder=" Enter password" className="border-[1px] bg-gray-300 m-[20px]"/>
             <br/>
             
             <button className="border-[1px] bg-blue-300 ml-[20px] br cursor-pointer" disabled={pending}>{pending? "Submiting..." : "Submit"}</button>
        </div>
    )
    }
    return(
        <div>
            <form action={handleSubmit}>
           <CoustomForm/>
            </form>
        </div>
    )
}
export default Form;