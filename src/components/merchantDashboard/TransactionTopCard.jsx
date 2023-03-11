import React from 'react';

const TransactionTopCard = ({type}) => {
    let data;
    switch(type){ 
        case 'land' :
         data = { 
         desc:'Pay for land use charge',
         tenant:'John Doe',
         when:'2 days ago'
         }
         break;
        case 'treasure' :
         data = { 
         desc:'2nd flat,Treasure lodge',
         tenant:'No Tenant',
         when:"vacant"
         }
         break;
         default:
         break;
    }
  return (
    <div className="card">
         <div className="flex items-start justify-between mt-4">
            <div className="left flex items-start gap-[6px]">
              <div className="pt-[3px]">
                <div className="w-3 h-3 bg-[#7F3DFF] rounded-full"></div>
              </div>
               <div>
                  <h5 className="text-sm font-medium">{data.desc} </h5>
                   <p className= "text-sm font-normal text-[#91919F]">{data.tenant}</p>
              </div>
           </div>
              <div className="right"> 
              <h6 className={`text-sm font-normal  ${data.when === 'vacant' ? 'text-[#91919F]' : 'text-red-500' }`}>{data.when}</h6>
              {/* <h6 className= "text-[8px] font-medium px-[12px] py-[6px] bg-[#F2D17A] text-center rounded-full text-white cursor-pointer">no</h6> */}
             </div>
        </div> 
    </div>
  );
}

export default TransactionTopCard;
