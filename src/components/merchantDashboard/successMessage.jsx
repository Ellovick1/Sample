import React,{useContext,useEffect} from 'react';
import {mytenantContext} from '../../pages/merchantDashoard/MyTenant'
import image from "../../assets/dash-details-img/success.svg"

const SuccessMessage = () => {
  const contextData = useContext(mytenantContext)
  console.log(contextData)
  const {step,setStep} = contextData
  
  useEffect(() => { 
    console.log(step)
   setTimeout(() =>{handleNextStep()},3000)
  },[])
  const handleNextStep = () => { 
    setStep(step + 1)
  }

  return (
    <div className="px-8 bg-[#f9f9f9] font-Karla">
       <div className ="bg-[#fff] h-screen flex items-center mt-7">
           <div className="max-w-xl mx-auto">
               <h3 className="font-medium text-[40px] leading-10 text-center text-[#402574] ">Successful</h3>
                  <div className="flex items-center justify-center my-7">
                     <div className="w-[100px] h-[100px]">

                       <img src= {image} alt='image of a vector' className="w-[100%] h-[100%] object-fit"/>
                      </div>
           </div>
           <div>
                  <h5 className="text-[#2f2e41] leading-[30px] text-xl font-bold text-center">You have successfully registered</h5>
                  <h5 className="text-[#2f2e41] leading-[30px] text-xl font-bold text-center">your property</h5>
                  <p className="font-regular text-sm leading-7 text-center mt-3">you can now supervise the activity of your property</p>
        </div>
        </div>
       </div> 
    </div>
  );
}

export default SuccessMessage;
