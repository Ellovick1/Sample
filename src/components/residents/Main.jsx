import React from "react";
import LogImg from "../../assets/residents/log.png";
import ReportImg from "../../assets/residents/report.png";

const Main = () => {
  return (
    <div className="bg-[#D3BDFF] pt-32 pb-40 px-8 h-fit ">
      <div className=" max-w-7xl  mx-auto flex gap-10 flex-col md:flex-row ">
        <div className="bg-white px-12 py-10 shadow-[ 0px_4px_4px_rgba(0,0,0,0.25)] md:w-1/2">
          <img
            src={LogImg}
            alt="img"
            className="h-full w-full max-w-[120px] max-h-[120px] mb-8 mx-auto rounded-full object-cover"
          />

          <h2 className="text-3xl font-semibold">Let's pay your rent</h2>
          <p className="text-[1.2rem] text-justify mt-4">
            When hard times strike, tenants need options that is flexible other
            than eviction. <span className="h-4 block"></span> As a tenant,
            through Mend RentAssist, you can request for rent asistance,we pay
            your Landlord while tyou pay us installmemntally. Everyone wins when
            residents stay in their homes and tenacy eviction lawsuit wil be
            totally avioded.
          </p>
        </div>

        <div className="bg-white px-12 py-10 shadow-[ 0px_4px_4px_rgba(0,0,0,0.25)] md:w-1/2">
          <img
            src={ReportImg}
            alt="img"
            className="h-full w-full max-w-[120px] max-h-[120px] mb-8 mx-auto rounded-full object-cover"
          />

          <h2 className="text-3xl font-semibold">
            Make Rent savings Easy & Automatic
          </h2>
          <p className="text-[1.2rem] text-justify mt-4">
            Save for rent smalll, and utility bills online, hold your landlord
            responsible by requesting for maintenace all in our platform. Enjoy
            personalised support all the way through.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
