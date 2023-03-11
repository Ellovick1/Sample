import React from 'react'
import Revenueimage from '../../../assets/propertyRevenue.png'
import Rentimage from '../../../assets/rentRevenue.png'
import Reports from '../../../assets/reports.svg'

const noRecords = () => {
  return (
    
    <div className='px-8 bg-white p-5'>
            <div class="py-5 grid md:grid-cols-3  xs:grid-cols-1 sm:grid-cols-1  gap-4 px-5">

<div className="bg-white shadow-md h-48 space-y-4 p-5 rounded-lg ">

  <div>
    <p className="text-sm text-[#7F3DFF]">Total Rental Income</p>
  </div>
  <div>
    <h1 className="text-xl text-black font-bold">NGN0.000</h1>
  </div>
</div>

<div className="bg-white shadow-md h-48 space-y-4 p-5 rounded-lg text-black">
  <div className="bg-[#FCEED4] w-10 rounded-full p-3 justify-center">
  <img src={Revenueimage} alt="" />
  </div>
  <div>
    <p className="text-sm">Income</p>
  </div>
  <div>
    <h1 className="text-xl font-bold">NGN0.000</h1>
  </div>
</div>

<div className="bg-white shadow-md h-48 space-y-4 p-5 rounded-lg text-black">
  <div className="bg-[#ffdcd6] w-10 rounded-full p-3 justify-center">
  <img src={Rentimage} alt="" />
  </div>
  <div>
    <p className="text-sm">Outstanding Payments</p>
  </div>
  <div>
    <h1 className="text-xl font-bold">NGN0.000</h1>
  </div>
</div>

</div>

<div className="py-4 px-[24px] font-[roboto]">
             <div className="block md:flex gap-[50px] ">
             <div className="left flex-1 shadow mt-[30px] md:mt-0  sm:mt-0">
                <div className='flex justify-between items-center'>
                    <div>               
                         <h3 className=" pl-4 pt-4 font-bold leading-7 text-[1rem] sm:pr-12 md:pr-24">Record Summary</h3>
                    </div>
                <div className='pt-4 self-center items-center space-x-3 pr-4'>
                <small className='text-[#FCAC12] font-bold bg-[#FCEED4] px-4 py-2 rounded-lg'>Week</small>
                <small className="text-[#91919F] font-[600] ">Month</small>
                <small className="text-[#91919F] font-[600] ">Year</small>
                </div>
                </div>
                    <div className='items-center text-center'>
                        <img className='w-[50%] items-center py-5 mx-auto' src={Reports} alt="" />
                        <p className='text-[#7F3DFF] font-bold'>No Record Found</p>
                        <small>When records are added they will be displayed here</small>
                        <button className='bg-[#7F3DFF] hover:bg-[#8a50ff] rounded-lg px-[3rem] my-3 py-2 text-white '>Record Now</button>
     
                    </div>
                 </div>
                 <div className="right flex-1 shadow">
                  <h3 className="flex justify-between pl-4 pt-4 pr-4 font-bold leading-7 text-[1rem] mb-2">Tenants with invoice dues
                  <span className='text-[0.8rem] text-[#7F3DFF]'>Due Date</span>
                  </h3>
                

                 </div>
                
              
             </div>
            
        </div>
    </div>
  )
}

export default noRecords
