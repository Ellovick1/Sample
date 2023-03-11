import img1 from '../../../assets/dash-accout-image/accountop1.svg'
import img2 from '../../../assets/dash-accout-image/accountop2.svg'



export const AccountTop = () => { 
    return ( 
        <div className="top mt-7 bg-white rounded-md p-8 flex items-center gap-[30px]">
        <div className="A flex-1 p-4">
           <h5 className="font-sans font-semibold text-base leading-6 text-[#7f3dff]">Total Rental Income</h5>
           <h3 className="font-sans font-semibold text-xl leading-7 text-[#151515]"># 2000,000</h3>
       </div>
       <div className="B flex-1 shadow p-4">
           <div className="mb-4 w-[46px] h-[46px] rounded-full bg-[#c7ecde] flex items-center justify-center">
                <img src={img1} />
           </div>
           <h5 className="font-[DM sans] font-bold text-base leading-5">Income</h5>
           <h3 className="font-[DM sans] font-bold text-xl leading-7">0.0000</h3>
        </div>
       <div className="C flex-1 shadow p-4">
           <div className="mb-4 w-[40px] h-[40px] rounded-full bg-[#FBD9D7] flex items-center justify-center">
           <img src={img2} />
           </div>
           <h5 className="font-[DM sans] font-bold text-base leading-5">outstanding payments</h5>
           <h3 className="font-[DM sans] font-bold text-xl leading-7">0.0000</h3>
        </div>
  </div>

    )
}