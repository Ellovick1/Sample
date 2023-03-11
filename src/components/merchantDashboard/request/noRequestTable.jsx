import React from 'react'
import  Avatar from '../../../assets/request-maintenance/Sentiment-analysis.png'

function noRequestTable() {
  return (
     <div className=''>
             <div className='bg-white m-[1.5rem] px-12 rounded-[0.8rem]  py-4'>
            <h3 className='font-[400] font-[DM Sans] text-[#000000]'>Maintenance Request</h3>
            </div>

            <div className='bg-white p-20 m-[1.5rem]  py-[6rem]'>
                    <p className='text-center'>No requests at the moment. Check in later...</p>
                    <div className='m-auto w-80 mt-[4rem]'>
                        <img src={Avatar} alt=""  className='m-auto w-[100%] h-[100%]'/>
                    </div>
            </div>
     </div>
  )
}

export default noRequestTable