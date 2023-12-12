import image1 from '../images/test.jpg';


const Herosection = () => {
   
    return (
    <div className="w-full ">
        
        <div className="main-conatiner flex w-full h-[31rem] bg-blue-200 ">

        <div className="left w-2/4 h-full bg-white  ">
            <img className='w-full h-full' src={image1} alt="" />
        </div>

        <div className="right w-2/4 h-[]  border-l-[4rem] border-l-white border-b-[31rem] border-b-[#f39c12] py-auto flex  justify-center">

            <div className=" text-3xl font-bold w-[17rem] uppercase translate-y-[180px] p-4">
                <h2 className='text-white text-4xl'>Welcome to missinggrade tracker</h2>
            </div>
        </div> 

      </div>
    </div>
     );
     
}
 
export default Herosection;