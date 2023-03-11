import React from 'react';
import Article from './Article1'


const Section = () => {
  return (
    <div className ="bg-white mb-[23px]">
         <div className=" max-w-7xl mx-auto px-4 -mt-4 sm:px-8 ">
           <div className="articles block lg:flex justify-between items-center flex-wrap ">
             <Article type="rent"/>
             <Article type="bills"/>
             <Article type="payment"/>
           </div>
         </div>
         <div className ="bg-white">
       <div className="inner pb-2 lg:pb-[20px] px-4 pt-[35px] flex flex-col items-center justify-center">
           <h3 className="font-medium text-center text-[#3a3a3a] text-lg leading-10 sm:text-xl sm:leading-[50px] md:text-3xl md:leading-[55px]  lg:text-[50px] ">Tenant</h3>
           <div className=" pt-[0.7rem]">
           <p className="hidden sm:block font-normal text-center text-[#3a3a3a] text-[1rem] md:text-[1.1rem] leading-6">Get apartments, pay bills, contact landlords, pay rents, store </p> 
           <p className="hidden sm:block font-normal text-center text-[#3a3a3a] text-[1rem] md:text-[1.1rem] leading-6"> your financial data, view reports, all on one dashboard.</p>
           <p className="block sm:hidden px-[20px]  font-normal text-center text-[1rem] md:text-[1.1rem] text-[#3a3a3a] leading-5">Get apartments, pay bills, contact landlords, pay rents, store  your financial data, view reports, all on one dashboard.</p>
           </div>
           </div>
           <div className="max-w-7xl mx-auto px-4 -mt-4 sm:px-8">
           <div className="articles block lg:flex justify-between items-center flex-wrap ">
             <Article type="make"/>
             <Article type="report"/>
             <Article type="vacancy"/>
           </div>
         </div>
         </div>
         <div className ="bg-white">
       <div className="inner pb-2 lg:pb-[20px] px-4 pt-[35px] lg:pt-[45px] flex flex-col items-center justify-center">
           <h3 className="font-medium text-center text-[#3a3a3a] text-lg leading-10 sm:text-xl sm:leading-[50px] md:text-3xl  lg:text-[50px] ">Property managers</h3>
           <div className="pt-[3px]  md:pt-[1rem]">
           <p className="hidden sm:block font-normal text-center text-[#3a3a3a] text-[1rem] md:text-[1.1rem] leading-6">Manage various houses, tenants, collect payments, all in one place! </p> 
           <p className="hidden sm:block font-normal text-center text-[#3a3a3a] text-[1rem] md:text-[1.1rem] leading-6">  Coming soon....</p>
           <p className="block sm:hidden px-[20px]  font-normal text-center text-[1rem] md:text-[1.1rem] text-[#3a3a3a] leading-5">Manage various houses, tenants, collect payments, all in one place! Coming soon....</p>
           </div>
           </div>
           <div className="pb-[35px] max-w-7xl mx-auto px-4 -mt-4 sm:px-8">
           <div className="articles block lg:flex justify-between items-center flex-wrap ">
             <Article type="rent"/>
             <Article type="bills"/>
             <Article type="payment"/>
           </div>
         </div>
         </div>
         </div>
  );
}

export default Section;
