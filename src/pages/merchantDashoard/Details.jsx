import React from 'react';
import DetailTopPart from '../../components/merchantDashboard/DetailTopPart';
import image from "../../assets/mainrect.png";
import DataTable from '../../components/dataTable/DataTable';
import   PropertyFlatTab from '../../components/merchantDashboard/PropertyFlatTab'

const Details = () => {
  return (
    <div className="details">
       <div className="top">
           <DetailTopPart />
            <div className="py-4">
              <PropertyFlatTab/>
            </div>
       </div>

       <div className="bottom p-4">
         <div className='flex gap-[20px] pt-4'>
           <div className="left flex-2 bg-gray-200 pb-4">
             <div className="top w-[310px]">
                 <img src={image} alt="image of an house" className="w-[100%] h-[100%]" />
             </div>
             <div className="middle flex flex-col items-center justify-center mt-[25px]">
                <p className="font-medium text-sm leading-6">Total Flats</p>
                <div className="mt-[9px] w-20 h-20 rounded-full border border-[#7F3DFF] text-black flex items-center justify-center"> 
                  0
                </div>
             </div>
             <div className="bottom px-[30px] mt-[20px]">
               <div className="flex justify-between items-center">
                    <p className="font-medium text-sm leading-6">Total Flats</p>
                    <p className="font-medium text-sm leading-6">0</p>
               </div>
               <div className="mt-2 flex justify-between items-center">
                    <p className="font-medium text-sm leading-6">Occupied</p>
                    <p className="font-medium text-sm leading-6">0</p>
               </div>
               <div className="flex items-center justify-between mt-[35px]">
                   <div className="bg-[#6C63FF] px-[20px] py-[14px] flex flex-col justify-center items-center">
                        <p className="font-medium text-sm leading-6 text-white mb-3">Tenants</p>
                        <p className="font-medium text-sm leading-6 text-white">0</p>
                   </div>
                   <div className="bg-[#6C63FF] px-[20px] py-[14px] flex flex-col justify-center items-center">
                        <p className="font-medium text-sm leading-6 text-white mb-3">Remainder</p>
                        <p className="font-medium text-sm leading-6 text-white">0</p>
                   </div>
               </div>
             </div>
           </div>
           <div className="rigth flex-1 shadow">
             <DataTable />
           </div>
         </div>
          
       </div>
    </div>
  );
}

export default Details;
