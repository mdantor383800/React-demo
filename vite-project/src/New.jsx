
import image from './assets/img/deer.jpg'
function New() {
    return (
        <div className="mx-auto  bg-white shadow-md md:max-w-2xl md:mt-8">
            <div className="md:flex">
            <section>
                <img className='rounded-xl' src={image}/>
            </section>
            <h3 className='mt-6 md:mx-6 md:text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora voluptatum earum officiis. Enim 
            soluta, dolore debitis cupiditate in consequatur illum quas quos similique, cumque quod delectus, fuga aut non!</h3>
            </div>
        </div>
        
          
    )
}
export default New;