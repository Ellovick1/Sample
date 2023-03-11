import React from 'react'
import { IoCallOutline } from "react-icons/io5";



const CallSupport = () => {
  return (
    <div className="bg-white mt-12 m-[1.5rem] py-4 px-12 rounded-[0.8rem]">
   
    <p className="text-[#7F3DFF] text-end text-md text-lg font-medium pr-12">
        Call for support: <span className='text-[black]'>081-044-238-49</span>
    </p>
    <div className=" md:w-[70%]" style={{width: '85%'}}>
      <form className="mt-8 flex flex-col gap-8">
        <div>
          <p className="text-[#7D7D7D] pb-1 text-md text-lg">
            Name
          </p>
          <input
            type="number"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <p className="text-[#7D7D7D] pb-1 text-md text-lg">Email</p>
          <input
            type="text"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <p className="text-[#7D7D7D] pb-1 text-md text-lg">Address</p>
          <input
            type="text"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <p className="text-[#7D7D7D] pb-1 text-md text-lg">Complaint</p>
          <input
            type="text"
            className="border border-black rounded-xl py-20 w-full px-4"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto md:w-[30%]"
        style={{width: '30%'}}/>
      </form>
    </div>
    <p className="text-[black] text-end text-md text-lg font-medium flex justify-end">
       <IoCallOutline className='text-[#7F3DFF] text-end mr-[0.5rem] mt-[0.2rem]' /> 081-044-238-49
    </p>
  </div>
  )
}

export default CallSupport