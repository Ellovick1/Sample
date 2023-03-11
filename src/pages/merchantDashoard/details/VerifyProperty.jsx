import React,{useContext,useState} from 'react';
import {layoutContext} from './Layout'
import {HiUpload} from 'react-icons/hi'


const VerifyProperty = () => {
   const contextData = useContext(layoutContext)
   console.log(contextData)
   const {step,setStep} = contextData

  const handleSubmit = e => { 
      e.preventDefault();
      setStep(step + 1)
  }
  const handleFile = (e) => { 
  console.log(e.target.value)
  }
  return (
    <div className="wrapper px-8">
      <div className="rounded-md py-4 px-4 border mt-7">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >Property Details
               </h3>
         </div>
         <div className="shadow  mt-7 py-5  bg-[#f9f9f9]">
                <div className = "top flex flex-col items-center">
                <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >Verify Property 
               </h3>
                      <div className="mt-3">
                      <p
                           className="font-normal text-[1rem] leading-[20px] text-center text-[#91919F]"
                          >Provide the necessary details to verify your property </p> 
                          <p
                           className="font-normal text-[1rem] leading-[20px] text-center text-[#91919F]"
                          >serve you better</p>
                      </div>
                </div>
                <div className="bottom">
                  <form 
                  onSubmit = {handleSubmit}
                  >
                    <div className="max-w-lg p-[25px] mx-auto space-y-5">
                     <div className="flex flex-col gap-[5px] ">
                           <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Property Owner Details</label>
                           <input 
                           type="text"
                           placeholder="E.g Treasure Home"
                           className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none placeholder:text-[#c6c6c6] placeholder:text-base"
                           />
                     </div>
                     <div className="flex flex-col gap-[5px] ">
                           <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Confirm Address</label>
                           <input 
                           type="text"
                           className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none "
                           />
                     </div>
                     <div className="flex flex-col gap-[5px] ">
                           <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Valid Power Attorney</label>
                           <input 
                           type="text"
                           className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none "
                           />
                     </div>
                     <div className="flex flex-col gap-[5px] ">
                           <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Identification Number</label>
                           <input 
                           type="text"
                           className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none "
                           />
                     </div>
                     <div className="flex flex-col gap-[5px] ">
                           <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Is The Apartment/Flat Occupied?</label>
                           <input 
                           type="text"
                           className="w-full rounded-lg py-[10px] px-[20px] border border-black bg-transparent outline-none "
                           />
                     </div>
                     <div>
                     <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Upload your picture</label>
                     <div 
                     className="relative border border-black border-dashed h-[100px] w-full bg-gray-200 flex items-center justify-center">
                        <input 
                        type="file"
                        onChange={handleFile}
                        className="relative text-right opacity-0 z-20 cursor-pointer height-[46px] max-w-[200px]"
                       />
                       <button className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <HiUpload 
                        style={{width:30,height:30,color:'gray'}}
                        />
                       </button>
                       
                     </div>
                     </div>
                     <div>
                     <label
                           className="font-bold text-base leading-[28px] text-[#7D7D7D]"
                           >Upload your document</label>
                     <div 
                     className="relative border border-black border-dashed h-[100px] w-full bg-gray-200 flex items-center justify-center">
                        <input 
                        type="file"
                        onChange={handleFile}
                        className="relative text-right opacity-0 z-20 cursor-pointer height-[46px] max-w-[200px]"
                       />
                       <button className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <HiUpload 
                        style={{width:30,height:30,color:'gray'}}
                        />
                       </button>
                       
                     </div>
                     </div>
                      
                      {/* <UploadFile file = {file} setFile = {setFile}/> */}

                     <div className="w-1/2 mx-auto pt-[20px]">
                     <button
                       className="py-[10px] bg-[#7F3DFF] text-white font-bold text-[12px] rounded w-full cursor-pointer "
                       type = 'submit'
                       >
                      Submit
                       </button>
                     </div>
                     </div>
                     </form>
                </div>
         </div>
    </div>
  );
}

export default VerifyProperty;
