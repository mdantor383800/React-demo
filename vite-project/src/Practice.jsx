function Practice() {

    return (
        <div>
            <div className="container mx-auto grid grid-cols-2 mt-[50px]">
            <div className="text-7xl font-bold">agency .</div>
            <div>
                <ul className="flex justify-end mt-[25px]">
                    <li className="mr-[50px] text-[20px] font-bold text-blue-300"><a href="#">Home</a></li>
                    <li className="mr-[50px] text-[20px] font-bold text-black hover:text-red-400"><a href="#">About</a></li>
                    <li className="mr-[50px] text-[20px] font-bold text-black hover:text-red-400"><a href="#">Contact</a></li>
                </ul>
             </div>
             
             </div>
             <div className="container mx-auto bg-black border-1 mt-[50px]"></div>
             <div className="container mx-auto grid-cols-2 mt-[40px]">
                <button className="bg-black text-xl text-white flex justify-start px-10 py-2 rounded-4xl ">Get in Touch</button>
             </div>
            <div className="container mx-auto grid grid-cols-3 mt-[50px]">
                <div className="col-span-2">
                <h1 className="text-8xl mt-[50px]">Got stuck? <span className="italic font-bold">Rejuvenate</span> your business <span className="italic font-bold"> with us</span></h1>
                <p className="text-xl mt-5 text-gray-400">image from <span className="text-blue-300">freepik</span></p>
                <p className="text-2xl font-bold mt-[10px] mx-[230px]">We are a creative agency that has won awards and worked on over 300 projects.</p>
                </div>
                
                <img className="h-[550px]" src="lady.jpg"></img>
                

            </div>
            
        </div>
       
    )
}
export default Practice;