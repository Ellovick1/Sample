import {Link} from 'react-router-dom'
import buildings from '../../assets/home-images/buildings.png'
import  './Hero_section.css'



const Hero_section = () => {
  return (
    <div className=" bg-[#F3EBFF]">
    <div className="grid lg:grid-cols-2  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-8  ">
      <div className="py-8 md:py-4 ">
          <div className="md:pt-[10rem]">
             <div className="space-y-1 max-w-[24rem]">
               <h3 className="font-bold leading-[56px] text-[2.7em] text-[#000]"> Where you can Automate & Find Tenant</h3>
             
             </div>
          </div>
          <div className='max-w-[24rem]'>
              <p className="font-medium text-base leading-[1.75em]" >Automate notifications & avoid unnecessary and costly disputes & litgation while also creating a better living experience for residents</p>
          </div>
          <div className="pt-[20px]">
             <div className="get-btn-wrapper flex gap-[20px]">
             <button 
             className="get-btn px-8 py-4 rounded-lg  text-[#fff] bg-[#7F3DFF] font-bold text-xs sm:text-sm cursor-pointer">
               <Link to="/SignUp">
               Get Started 
               </Link>
              </button>
             <button className= "speak-btn px-8 py-4 rounded-lg border-2 border-[#7F3DFF] bg-[#fff] text-[#7F3DFF]  font-bold  text-xs sm:text-sm cursor-pointer">
             <Link to="/contact">
               contact Team
             </Link>
             </button>
             </div>
      </div>
     
         
    </div>

         <div className = "mt-[5rem] h-[641px]"> 
                      <img src={buildings} alt="buildings" className="w-[100%] object-contain h-[100%]"/>
         </div>    

    </div>

    <div className="hero-section-container grid lg:grid-cols-2 lg:pl-0 lg:p-20 md:pl-20 p-4">
          <div className='grid md:grid-cols-2 gap-4 justify-self-center'>
              <div className='bg-[#EDEDED] max-w-[18rem]  h-fit p-6 pb-28 rounded-[1rem]'>
                <h6 className='text-[#7F3DFF]'>Utility bills</h6>
                <p>
                You can pay for land use, estate fees, landlord associations and more.                </p>

              </div>

              <div className='bg-[#EDEDED] max-w-[18rem] h-fit p-6 pb-20 rounded-[1rem]'>
                <h6>Make payments</h6>
                <p>
                Collect residential bills at ease e.g electricity bill, security bill, cleaning bill and other residence bills.                </p>

              </div>
          </div>

          <div className='bg-[#fff] max-w-[18rem] service-charge lg:relative lg:m-0 m-auto'>
            <h5 className=' font-bold'>Collect Service Charge the Easier Way when Tenants use the <span>MendApp</span></h5>
            <p>Create a payment plan for recurring service that suits your residential need. Say bye bye! to knocking for your neighbors when their residential bill payments is delayed. Tenants can now pay for all charges ranging from service, electricity, cleaning and many others</p>
            <button 
             className="mt-8 get-btn px-8 py-4 rounded-lg  text-[#fff] bg-[#7F3DFF] font-bold text-xs sm:text-sm cursor-pointer">
               <Link to="/SignUp">
               Get MendApp 
               </Link>
              </button>
          </div>


    </div>
    

 </div>
  )
}

export default Hero_section