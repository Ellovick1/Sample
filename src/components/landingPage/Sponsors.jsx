import providus from '../../assets/providusbank.png';
import renmoney from '../../assets/renmoney.png';
import flutter from '../../assets/flutterwave.png';

const Sponsor = ({ imgSrc }) => {
  return (
    <div className="h-[90px] w-[90%] mx-auto bg-[#f3edfc] rounded shadow-lg">
      <img src={imgSrc} alt="" className="h-[100%] md:w-[100%] object-fit" />
    </div>
  );
};

export const Sponsors = () => {
  return (
    <div className="sponsors bg-[#670cf2] z-10 lg:py-[30px] -mt-20 md:-mt-28 relative top-20 mb-[7rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 ">
        <div className="text-[#F3EBFF] py-[50px]">
          <p className="text-[#dcc8fa] text-4xl font-bold font-[DM sans] capitalize">
            Integrated with
          </p>
          <div className="flex flex-col sm:flex-row justify-around w-full mt-[2rem] sm:space-x-[5%] space-y-3 sm:space-y-0 max-w-4xl mx-auto">
            <Sponsor imgSrc={providus} />
            <Sponsor imgSrc={flutter} />
          </div>
        </div>
      </div>
    </div>
  );
};
