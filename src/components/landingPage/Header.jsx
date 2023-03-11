// import curve from '../../assets/halfCurve.svg'
import phone from '../../assets/ihone.svg';
import circles from '../../assets/circle-img.png';
import Ellipse1 from '../../assets/residents/Ellipse1.png';
import { Link } from 'react-router-dom';
import { Sponsors } from './Sponsors';
import './header.css';

export const Header = () => {
  return (
    <div className="header bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 ">
        <div className=" header_wrapper flex flex-wrap md:mb-[90px] xl:mb-[10px] md:pt-[20px]">
          <div className="header_left flex-1 mb-[60px]  md:mb-[40px] lg:mb-0 py-8 md:pb-4 xl:pt-20  flex flex-col space-y-5 relative pb-[40px] lg:pb-0">
            <img
              src={Ellipse1}
              alt=""
              className=" hidden lg:block  absolute z-10 -left-10 -top-20 header_ellipse"
            />
            <div className="z-10">
              <div className="flex flex-col gap-[10px] sm:gap-[20px] md:gap-[10px]">
                <h3 className="elevate font-bold leading-[56px] text-[3rem] md:text-[4em] xl:text-[5em] text-[#fff] mb-2">
                  {' '}
                  Elevate
                </h3>
                <h3 className="resident font-bold leading-[56px]  text-[3rem] md:text-[4em] xl:text-[5em] text-[#7F3DFF] mb-2">
                  {' '}
                  <span className="font-bold leading-[56px] sm:text-[1em] text-[#fff] mr-3">
                    the
                  </span>
                  Resident
                </h3>
                <h3 className="experience font-bold leading-[56px]  text-[3rem] md:text-[4em] xl:text-[5em] text-[#7F3DFF] mb-2">
                  {' '}
                  Experience
                </h3>
              </div>
              <div className="headerHelper">
                <h4 className="font-bold leading-[50px] text-[2.5rem] text-[#000]"> Elevate the</h4>
                <h4 className=" font-bold leading-[50px]  text-[2.5rem]  text-[#7F3DFF]">
                  {' '}
                  Resident
                </h4>
                <h4 className=" font-bold leading-[50px]  text-[2.5rem]  text-[#7F3DFF]">
                  {' '}
                  Experience
                </h4>
              </div>
            </div>
            <div className="header_left_para z-10 text-[#fff]">
              <p className="hidden updatePara sm:block font-medium text-base leading-[1.75em]">
                Connect and verify tennats seamlessly, collect
              </p>
              <p className="hidden updatePara sm:block font-medium text-base leading-[1.75em]">
                payments, automate your workload using Mend
              </p>
              <p className="block updatePara2 sm:hidden font-medium text-base leading-[1.75em]">
                Connect and verify tennats seamlessly, collect payments, automate your workload
                using Mend
              </p>
            </div>
            <div className=" md:pt-[15px] lg:pt-[30px]">
              <div className="z-10 get-btn-wrapper flex gap-[20px]">
                <button className="get-btn px-8 py-4 rounded-lg bg-[#7F3DFF] text-[#fff] font-bold text-xs sm:text-sm cursor-pointer hover:text-[#fff] hover:bg-black hover:border hover:border-[#7F3DFF] ">
                  <Link to="/SignUp">Join our Waitlist</Link>
                </button>
                <button className="speak-btn px-8 py-4 rounded-lg bg-[transparent] border border-[#7F3DFF] text-[#7F3DFF]  font-bold  text-xs sm:text-sm cursor-pointer hover:text-[#fff] hover:bg-[#7F3DFF] ">
                  <Link to="/contact">Contact Team</Link>
                </button>
              </div>
            </div>
            {/* <div className="hidden md:block absolute -top-0 -left-4 z-4">
                 <img src={curve} alt="" className=" object-contain" />
               </div> */}
          </div>
          <div className="flex-1 relative header_right z-1">
            <div>
              <img src={circles} alt="" />
            </div>
            <div className="absolute top-[25%] left-[40%]">
              <img src={phone} alt="" />
            </div>

            {/* <div className = "w-[45.875rem] h-[45.875rem]">
                          <img src={circle} alt="" className="w-[100%] h-[100%] object-cover"/>
                       </div>  
                <div className = "absolute z-10 top-[8.5rem] -right-20 h-[49rem]  w-[43rem]">
                    <img src={phone} alt="" className="w-[100%] h-[100%] object-cover"/>
                 </div>   */}
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  );
};
