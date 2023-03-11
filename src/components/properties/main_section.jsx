import React from 'react'
import {Link} from 'react-router-dom' 
import personOne from "../../assets/properties-img/person-1.png"
import personTwo from "../../assets/properties-img/person-2.png"
import personThree from "../../assets/properties-img/person-3.png"
import personFour from "../../assets/properties-img/person-4.png"
import personFive from "../../assets/properties-img/person-5.png"
import "./main_section.css"
import Iphone from  "../../assets/properties-img/iPhone 13 Pro.png"
import MendLogo from  "../../assets/properties-img/mendLogo.png"

const main_section = () => {
  return (
    <section>
           <div className='bg-[#F7F7F7]'>
          <div  className='max-w-7xl m-auto'>
          <div className='grid grid-cols-2 justify-between '>
           <img src={personOne} alt="person" className="" style={{placeSelf: "start"}}/>
           <img src={personThree} alt="person" className="" style={{placeSelf: "end"}}/>

           </div>
           
           <div className='relative'>
                <div className='text-center relative w-fit m-auto'>
                <img src={personTwo} alt="person" className="absolute -top-8 right-0"/>
                        <h1 className='font-bold text-[2.7em]'><span className='text-[#7F3DFF]'>Grow</span> Together, <br />
                         <span className='text-[#7F3DFF]'>Living</span> Together </h1>
                        <p className='max-w-[24rem] m-auto'>Split bills among residents and pay happily without 
                                direct physical contact and dispute </p>
                </div>

           </div>
           
           <div className='grid grid-cols-2 justify-center pt-[5rem]'>
           <img src={personFour} alt="person" className="justify-self-center"/>
           <img src={personFive} alt="person" className="justify-self-center mt-[-5rem]"/>

           </div>
          </div>
          </div>

           <div className='main-section-container lg:h-[50rem] h-fit'>
              <div className='max-w-7xl m-auto grid md:grid-cols-2 sm:p-[5rem] p-4'>
              <div className='max-w-[24rem] mx-auto md:mx-0'>
                        <h1 className='font-bold text-[2.7em]'><span className='text-[#7F3DFF]'>The Leading African Digital payment</span>  for Renters</h1>
                        <p>Pay & save for rent and utility bills online. Hold your landlord responsible by requesting for maintenance all on the Mend platform.</p>
                </div>

                <div className='max-w-[24rem] m-auto md:m-0 md:mt-0 mt-[4rem]'>
                    <div className='p-4'>
                        <h1 className='font-[600] text-[1.7em]'>Let’s pay your Rent</h1>
                        <p>Through Mend rent assist, you can request for rent assistance and pay your Landlord in installment. It is a win - win for both Tenants and Landlord and a great tenancy -landlord experience </p>
                        <p className='text-[red]'>Coming soon</p>
                    </div>
                  
                    <div className='p-4'>
                        <h1 className='font-[600] text-[1.7em]'>Automated Rent Savings</h1>
                        <p> Save for  your neext rent small while overcoming the huddles of paying for rent.  Download MendApp, Create account and start saving. You can save daily, weekly or Monthly and earn bonus.</p>
                    </div>
                  
                    <div className='p-4'>
                        <h1 className='font-[600] text-[1.7em]'>Pay Bills </h1>
                        <p>Pay  rent and utility bills online and even residential/your Estate dues on a simple click from anywhere. That sounds great right?. Track your old and new residential records in a single dashbaord </p>
                    </div>
                  
                    <div className='p-4'>
                    <button 
             className=" get-btn px-8 py-4 rounded-lg  text-[#fff] bg-[#7F3DFF] font-bold text-xs sm:text-sm cursor-pointer">
               <Link to="/SignUp">
               Get Started 
               </Link>
              </button>
                    </div>
                </div>
              </div>
           </div>

          <div className="bg-[#F4F4F4]">
           <div className='grid md:grid-cols-2 max-w-7xl m-auto md:p-[5rem] p-[2rem] md:pb-0 m-auto'>
            <img src={Iphone} alt="iphone" className='w-[80%] m-auto md:m-0'/>

            <div className='mt-[5rem] max-w-[24rem] md:ml-0 m-auto'>
                <h1 className='text-[2.5rem] font-[600]'>Request for <span  className='text-[#7F3DFF]'>Maintenance</span></h1>
                <p>Pay  rent and utility bills online and even residential/your Estate dues on a simple click from anywhere. That sounds great right?. Track your old and new residential records in a single dashbaord </p>
            </div>
           </div>
            </div>

           <div className='relative h-[30rem]'>
            <img src={MendLogo} alt="mend-logo"  className='absolute bottom-[3rem] md:left-[12rem] p-8'/>
           </div>

    </section>
  )
}

export default main_section;