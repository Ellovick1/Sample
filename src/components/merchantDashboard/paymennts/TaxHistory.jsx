import React from "react";
import UserImage from "../../../assets/merchant-payments/userPay.png";

const TaxHistory = () => {
  return (
    <div className="bg-white rounded-lg px-8 md:px-20 py-12">
      <h1 className="text-xl text-black font-semibold  mb-12">
        Transaction History
      </h1>
      <p className=" block text-right lg:hidden">Swipe to view more </p>
      <div className="overflow-x-auto max-w-[600px] lg:max-w-full ">
        <div className=" flex flex-col gap-8 min-w-[650px]  ">
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <img src={UserImage} alt="img" />
              <p className="text-black text-md text-lg">Ebere Moses</p>
            </div>
            <p className="text-black text-md text-lg">₦200,000</p>
            <p className="text-black text-md text-lg">Flat 1</p>
            <p className="text-black text-md text-lg">01 jun 2022 8:05</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxHistory;
