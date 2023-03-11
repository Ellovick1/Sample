import React from 'react';

const DetailTopPart = () => {
  return (
    <div className="p-4 flex items-center justify-end">
           <div className="flex gap-[20px]">
              <div className="btn1 bg-[#6C63FF] font-bold text-white text-xs leading-6 flex items-center py-[10px] px-[24px] justify-center rounded-lg cursor-pointer">Add tenants</div>
              <div className="btn2 bg-[#6C63FF] font-bold text-white text-xs leading-2 flex items-center py-[10px] px-[24px] justify-center rounded-lg cursor-pointer">List Apartments</div>    
           </div>
       </div>
  );
}

export default DetailTopPart;
