
const Transaction = () => {
  return (
     <div className="py-4 px-[30px] font-[roboto]">
             <div className="block md:block lg:flex gap-[50px] mt-2">
                 <div className="left flex-1 shadow border-box">
                  <h3 className=" pl-4 pt-4 font-bold leading-7 text-[20px] mb-2 text-center">Upcoming Tasks</h3>
                  <div className="p-[18px] flex flex-col items-center">
                       <div className="top text-center font-[Inter]">
                           <h3 className="font-normal text-[18px] leading-[27px] ">You have no active tenancy</h3>
                        </div>
                        <div className="center font-[Inter] pt-[10px] max-w-[350px] text-[10px] leading-[18px] text-center">
                             <p>Your landlord still hasn't shared the lease with you. Please, contact </p> 
                                 <p>your landlord and ask to share the lease with you.</p>
                        </div>
                        
                  </div>

                 </div>
                 <div className="right flex-1 shadow mt-[30px] lg:mt-0 border-box">
                     <div className="flex items-center justify-between px-4 py-4">
                          <h3 className="font-bold leading-7 text-[20px]">Recent Transaction</h3>
                          <div className="flex space-x-4 items-center mt-4 md:m-0">
                             <div className="bg-themePurple text-white h-[30px] w-[30px] rounded-[50%] flex justify-center items-center">
                                  <i className="bi bi-funnel text-base cursor-pointer"></i>
                             </div>
                             <div className="bg-themePurple text-white  h-[30px] w-[30px] rounded-[50%] flex justify-center items-center">
                                   <i class="bi bi-box-arrow-in-down text-base cursor-pointer"></i>
                             </div>
                          </div>
                     </div>

                     <div className="p-[18px]">
                         <div className="top  flex justify-between items-center font-[Inter] bg-white py-2 px-5">
                             <h6 className="text-[11px] font-medium px-[28px] py-[4px] bg-black text-center rounded-full text-white cursor-pointer">All</h6>
                             <h6 className="text-[11px] font-medium px-[28px] py-[4px] text-center rounded-full  cursor-pointer">Due</h6>
                             <h6 className="text-[11px] font-medium px-[28px] py-[4px] text-center rounded-full  cursor-pointer">Pending</h6>
                             <h6 className="text-[11px] font-medium px-[28px] py-[4px] text-center rounded-full  cursor-pointer">Completed</h6> 
                         </div>
                        
                  </div>
                 </div>
              
             </div>
            
        </div>
  );
}

export default Transaction;
