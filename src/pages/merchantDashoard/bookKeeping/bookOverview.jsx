import React from 'react'
import Revenueimage from '../../../assets/propertyRevenue.png'
import Rentimage from '../../../assets/rentRevenue.png'
import TransactionBottomCard from '../../../components/merchantDashboard/TransactionBottomCard'
import TransactionTopCard from '../../../components/merchantDashboard/TransactionTopCardTwo'


const bookOverview = () => {
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
             <div className="leftt flex-1 shadow mt-[30px] md:mt-0  sm:mt-0">
                     <h3 className=" pl-4 pt-4 font-bold leading-7 text-[1rem] sm:pr-12 md:pr-24">Record Summary</h3>
                     <div className="p-[18px]">
                         <div className="bottom mt-2">
                               <div>
                                   <TransactionBottomCard type='cleaner'/>
                                   <TransactionBottomCard  type='land'/>
                                   <TransactionBottomCard  type='withdraw'/>
                               </div>
                             <div className="bottom-inner1"></div>
                             <div className="bottom-inner1"></div>
                         </div>
                  </div>
                 </div>
                 <div className="right flex-1 shadow">
                  <h3 className="flex justify-between pl-4 pt-4 pr-4 font-bold leading-7 text-[1rem] mb-2">Tenants with invoice dues
                  <span className='text-[0.8rem] text-[#7F3DFF]'>Due Date</span>
                  </h3>
                  <div className="p-[18px]">
                        <div className="bottom mt-[20px]">
                            <TransactionTopCard type="land"/>
                            <TransactionTopCard type="treasure"/>
                            <TransactionTopCard type="roof"/>
                            
                        </div>
                  </div>

                 </div>
                
              
             </div>
            
        </div>
    </div>
  )
}

export default bookOverview
