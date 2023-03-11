import avatar from '../../../assets/dash-accout-image/accoutavatar.svg'

export const AccountBottomRightCard = () => { 
    return ( 
        <div className="card">
        <div className="bottom-inner2 font-[Inter] px-[12px] py-[10px]  bg-white mt-2 flex justify-between items-center">
               
                    
                        <div>
                            <img src={avatar} alt="bill image" className=""/>
                        </div>
                        <div className="flex items-center pl-2">
                            <h3 className="font-sans font-normal text-xl leading-7 text-[#151515]">Ebere Moses</h3>
                            
                        </div>
                  
                
                 <div className="right h-12 flex items-center">
                    <h3 className="font-normal text-[#151515] leading-[21.79px] text-base ">01-june-2022 8:05</h3>
                    
                </div>
         </div>
      
    </div>
    )
}