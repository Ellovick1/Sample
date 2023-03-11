import React from 'react';

const WidgetSecondPart = ({type}) => {
    let data;
    switch(type){ 
        case "left": 
        data = { 
            detailTop:"Total Rend Paid",
            detailBottom:'Total Rent Due',
        }
        break;
        case "right": 
        data = { 
            detailTop:"Utility bill charge",
            detailBottom:'Utility bill due',
        }
        break;
        default:
            break;

    }
  return (
   <div className="flex flex-col justify-between h-[160px]">
        <div className="flex flex-col justify-between items-center h-[80px]">
        <div className="top ">
            <h3 className=" leaading-[22px] md:leading-[28px] text-[20px] md:text-[18px] lg:text-[25px] font-normal text-center">{data.detailTop}</h3>
            <p className={`leading-[14px] md:leading-[20px] text-[14px] lg:text-[15px] font-normal text-center mt-[5px] md:mt-[5px] ${type === 'left' ? "text-green-500" : "text-red-500"}`}>N0.000.00</p>
        </div>
        <div className="center">
            <h3 className="leaading-[22px] md:leading-[28px] text-[20px] md:text-[18px] lg:text-[25px] mt-[19px] font-normal text-center">{data.detailBottom}</h3>
            <p className={`leading-[14px] md:leading-[20px] text-[14px] lg:text-[15px] font-normal text-center  mt-[5px] md:mt-[5px]  text-red-500`}>N0.000.00</p>
        </div> 
    </div>
       <div className="bottom cursor-pointer flex justify-end font-bold text-sm">
            view All
        </div>
   </div>
  );
}

export default WidgetSecondPart;
