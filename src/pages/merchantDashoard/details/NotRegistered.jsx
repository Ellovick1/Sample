import React,{useContext} from 'react';
import img from '../../../assets/dash-details-img/not-registered.svg' 
import {layoutContext} from './Layout'
import axios from '../../../axiosInstance'


const NotRegistered = () => {

  const contextData =  useContext(layoutContext)
  console.log(contextData)
  const {step,setStep} = contextData

  return (
    <div className="px-8 bg-[#f9f9f9]">
         <div className="rounded py-4 px-4 border mt-7">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >Property Details
               </h3>
         </div>
       <div className="flex flex-col items-center">
           <div className="">
            <img src={img} alt="" className="object-fit"/>
           </div>
           <div className="mt-4">
               <h3
                className="font-normal text-[1.2rem] leading-[28px] text-center"
               >Not registered property yest</h3>
               <p
                className="font-normal text-[1rem] leading-[28px] text-center text-[#91919F]"
               >Register your property for security purposes and they will be</p> 
                <p
                 className="font-normal text-[1rem] leading-[28px] text-center text-[#91919F]"
                >displayed here</p>
           </div>
          <div className= " mt-5 w-1/4">
          <button
          onClick = {() => setStep(step +1)}
           className="py-[10px] bg-[#7F3DFF] text-white font-bold text-[12px] rounded w-full cursor-pointer"
           >
            Register Now
           </button>
          </div>
       </div>
    </div>
  );
}

export default NotRegistered;
