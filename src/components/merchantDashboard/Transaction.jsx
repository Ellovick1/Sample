import React from 'react';
import TransactionBottomCard from './TransactionBottomCard'
import TransactionTopCard from './TransactionTopCard'


const Transaction = () => {
  return (
     <div className="py-4 px-[24px] font-[roboto]">
             <div className="block md:flex gap-[50px] ">
                 <div className="left flex-1 shadow bg-white">
                  <h3 className=" pl-4 pt-4 font-medium text-[18px] leading-[21px] mb-2">Upcoming Tasks</h3>
                  <div className="px-4">
                       {/* <div className="top flex items-center justify-between font-[Inter]">
                           <h3 className="font-normal text-[18px] leading-[27px] ">Recent</h3>
                           <h3 className="font-normal text-[12px] leading-[16px] cursor-pointer text-[#363469]">See all tasks</h3>
                        </div>
                        <div className="center font-[Inter] pt-[10px] flex  items-center justify-between max-w-[350px]">
                           <div>
                               <h4 className="font-normal text-[16px] leading-[22px]">Incoming Request</h4>
                               <hr className="w-[180px] border-t-2 border-black"/>
                           </div>
                           <div>
                               <h4 className="font-normal text-[16px] leading-[22px] text-gray-400 text-center">Request</h4>
                               <hr className="w-[120px] border-t-1 border-gray-400"/>
                           </div>
                        </div> */}
                        <div className="bottom">
                            <TransactionTopCard type="land"/>
                            <TransactionTopCard type="treasure"/>
                            <TransactionTopCard type="land"/>
                            <TransactionTopCard type="treasure"/>
                            <TransactionTopCard type="land"/>
                            <TransactionTopCard type="land"/>
                            
                            <TransactionTopCard type="treasure"/>
                        </div>
                  </div>

                 </div>
                 <div className="right flex-1 shadow bg-white  md:mt-0  sm:mt-0">
                     {/* <h3 className=" pl-4 pt-4 font-bold leading-7 text-[20px] text-center sm:pr-12 md:pr-24">Recent Transaction</h3> */}
                     <div className="">
                         {/* <div className="top flex justify-between items-center sm:pl-10">
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] bg-[#FCEED4] text-center rounded-full text-[#FCAC12]  cursor-pointer">Today</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Week</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Month</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Year</h6> 
                         </div> */}
                         <div className="bottom ">
                             <div className="top flex items-center justify-between font-[Inter] px-[12px] py-[10px]">
                                 <h3 className="font-medium text-[18px] leading-[21px] ">Recent Transaction</h3>
                             <div className="top flex justify-between items-center sm:pl-10">
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] bg-[#FCEED4] text-center rounded-full text-[#FCAC12]  cursor-pointer">Today</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Week</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Month</h6>
                             <h6 className="text-[11px] font-medium px-[12px] py-[6px] text-center rounded-full text-gray-400 cursor-pointer">Year</h6> 
                         </div>
                                 {/* <h3 className="font-normal text-[12px] leading-[16px] px-[12px] py-[6px] bg-[#EEE5FF] text-center rounded-full text-[#7F3DFF]  cursor-pointer">See All</h3> */}
                             </div>
                               <div>
                                   {/* <TransactionBottomCard type='cleaner'/> */}
                                   <TransactionBottomCard  type='land'/>
                                   <TransactionBottomCard  type='land'/>
                                   <TransactionBottomCard  type='land'/>
                                   <TransactionBottomCard  type='land'/>
                                   <TransactionBottomCard  type='land'/>
                                   {/* <TransactionBottomCard  type='withdraw'/> */}
                               </div>
                             <div className="bottom-inner1"></div>
                             <div className="bottom-inner1"></div>
                         </div>
                  </div>
                 </div>
              
             </div>
            
        </div>
  );
}

export default Transaction;
