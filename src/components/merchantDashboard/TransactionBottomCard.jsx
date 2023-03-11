import React from 'react';
import img1 from "../../assets/Recurring Bill.png"
import img2 from "../../assets/restaurant.png"
import img3 from "../../assets/shopping bag.png"


const TransactionBottomCard = ({type}) => {
    let data;
    switch(type){ 
        // case 'cleaner':
        //     data = { 
        //         img : img3,
        //         name:"cleaner",
        //         work:"paid house cleaner",
        //         money:'$120',
        //         time:'10:00 AM',
        //         bg:'#FCEED4',
        //     }
        // break;
        case 'land':
            data = { 
                img : img1,
                name:"Land Use Act",
                work:"Treasure Lodge",
                money:'$3000',
                time:'03:30 PM',
                bg:'#EEE5FF'
            }
        break;
        // case 'withdraw':
        //     data = { 
        //         img : img2,
        //         name:"Withdrawal",
        //         work:"Buy a ramen",
        //         money:'#200,000',
        //         time:'07:30 PM',
        //         bg:'#FDD5D7'
        //     }
        // break;
        default:
            break;

    }
  return (
    <div className="card">
        <div className="bottom-inner2 font-[Inter] px-[12px] py-[10px]  bg-white mt-2 flex justify-between items-center">
              <div className="left ">
                     <div className="left-inner flex items-between justify-between">
                       <div className = 'w-12 h-12 bg- flex items-center justify-center rounded-lg' style={{backgroundColor:data.bg}}>
                          <img src={data.img} alt="bill image" className=""/>
                              </div>
                 <div className="flex flex-col justify-between pl-2">
                      <h3 className="font-normal text-[12px] leading-[19px] text-sm text-[#292B2D]">{data.name}</h3>
                          <p className= "text-[12px] font-normal text-[#91919F]">{data.work}</p>
                     </div>
                      </div>
            
                </div>
                 <div className="right h-12 flex flex-col items-end justify-between">
                    <h3 className="font-normal text-[12px] leading-[19px] text-sm text-[#FD3C4A]">-{data.money}</h3>
                        <p className= "text-[12px] font-normal text-[#91919F]">{data.time}</p>
                 </div>
         </div>
      
    </div>
  );
}

export default TransactionBottomCard;
