import React, {useContext} from 'react'
import NoTenant from "../../assets/noTenants.svg"
import {mytenantContext} from '../../pages/merchantDashoard/MyTenant'


const NoTenants = () => {
    
  const contextData =  useContext(mytenantContext)
  console.log(contextData)
  const {step,setStep} = contextData

  return (
    <div className='px-8 bg-[#f9f9f9]'>
             <div className="rounded py-4 px-4 border mt-7">
            <h3
                className="font-normal text-[1.2rem] leading-[28px] "
               >My Tenant
               </h3>
         </div>
      <div className='my-4 mx-auto items-center flex justify-center'>
        <img src={NoTenant} alt="" width="50%"/>
      </div>
      <div className='mt-7 space-y-4 mx-auto text-center'>
        <h3 className='font-bold text-xl text-black'>No Tenants</h3>
        <p className='text-[grey] text-sm'>When tenants are added, they will be displayed here</p>
        <button 
         onClick = {() => setStep(step +1)}
        className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[3rem] py-2 text-white '>Add Tenant</button>
      </div>
    </div>
  )
}

export default NoTenants
