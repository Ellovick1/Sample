import React from "react";
import Utilityimage from '../../assets/utility.png'
import Revenueimage from '../../assets/propertyRevenue.png'
import Rentimage from '../../assets/rentRevenue.png'
import Tenantdot from '../../assets/tenantDot.png'
import Vacantdot from '../../assets/vacantDot.png'
import Apartmentdot from '../../assets/apartmentDot.png'
import Occupieddot from '../../assets/occupiedDot.png'
import "./widgets.css"



const Widgets = () => {
  return (
    <div class="container py-5">
      <div class="grid md:grid-cols-4  xs:grid-cols-1 sm:grid-cols-1  gap-3 px-5">

        <div className="bg-[#7F3DFF] h-48 space-y-4 p-5 rounded-lg text-white">
          <div className="bg-white w-10 rounded-full p-3 justify-center">
          <img src={Utilityimage} alt="" />
          </div>
          <div>
            <p className="text-sm">Utility Wallet</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">NGN0.000</h1>
          </div>
        </div>

        <div className="bg-white h-48 space-y-4 p-5 rounded-lg text-black">
          <div className="bg-[#FCEED4] w-10 rounded-full p-3 justify-center">
          <img src={Revenueimage} alt="" />
          </div>
          <div>
            <p className="text-sm">Total Property Revenue</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">NGN0.000</h1>
          </div>
        </div>

        <div className="bg-white h-48 space-y-4 p-5 rounded-lg text-black">
          <div className="bg-[#ffdcd6] w-10 rounded-full p-3 justify-center">
          <img src={Rentimage} alt="" />
          </div>
          <div>
            <p className="text-sm">Total Rent Revenue</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">NGN0.000</h1>
          </div>
        </div>


        <div class="bg-white h-48 p-5">
            <div className="flex items-center space-x-3">
              <img src={Tenantdot} alt="" />
              <p>Tenant:36</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src={Apartmentdot} alt="" />
              <p>Apartment:47</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src={Occupieddot} alt="" />
              <p>Occupied:40</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src={Vacantdot} alt="" />
              <p>Vacant:18</p>
            </div>

            <div className="mt-4">
              <p className="text-[#7F3DFF]">Total Flats : <span className="font-bold text-black">100</span> </p>
            </div>
        </div>
      </div>
    </div>

  );
};

export default Widgets;
