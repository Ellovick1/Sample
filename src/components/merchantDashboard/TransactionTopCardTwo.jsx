import React from 'react'
import UserImage from "../../assets/merchant-payments/userPay.png";


const TransactionTopCardTwo = ({type}) => {
    let data;
    switch(type){ 
        case 'land' :
         data = { 
         desc:'Ebere Moses',
         when:'2 days ago'
         }
         break;
        case 'treasure' :
         data = { 
         desc:'Ebere Moses',
         when:'2 days ago'
         }
         break;
        case 'roof' :
         data = { 
         desc:'Ebere Moses',
         when:'2 days ago'
         }
         break;
         default:
         break;
    }
  return (
    <div className="card">
         <div className="flex items-center justify-between mt-4">
            <div className="left flex items-start gap-[15px]">
                <img className="w-14 h-12" src={UserImage} alt="" />
               <div className='self-center'>
                   <h5 className="text-[1rem] font-medium">{data.desc}</h5>
              </div>
           </div>
              <div className="right"> 
             { data.when && <h6 className="text-[1rem] font-medium">{data.when}</h6>}
             </div>
        </div> 
    </div>
  )
}

export default TransactionTopCardTwo
