import React from "react";
import secOneImg from "../../assets/home-images/secOneImg.svg";
import secTwoImg from "../../assets/home-images/secTwoImg.svg";
import secThreeImg from "../../assets/home-images/secThreeImg.svg";
import Wallet from "../../assets/home-images/wallet.svg";
import Ticket from "../../assets/home-images/ticket.svg";

const MainSection = () => {
  return ( 
    <div>
      <div className="bg-white mt-7 mb-44 px-4">
        {/* main section */}
        <div className="max-w-7xl mx-auto">
          <h1 className=" text-[#7F3DFF] text-5xl font-semibold text-center">
            Tenant Move in and MOve out
          </h1>
          <div className="flex flex-col h-fit pt-12 md:flex-row md:gap-12">
            <div
              className=" pt-10 h-fit  pl-10 pr-8 rounded-2xl order-2 md:order-1 md:w-1/2 md:h-[30.5rem]"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <h4 className="text-[#5C13EB] text-center font-medium pb-10">
                Onboard Tenants
              </h4>
              <p className="pb-4 text-lg  text-black">
                Tenant Move-in's and Move-out's
              </p>
              <p className="text-lg text-black">
                A big part of Property Management are all the checklists,
                photos, inspections, utility turn-on's and turn-offs etc.
                etc.... the details DO matter. Everything must be clearly
                spelled out and documented. Being hasty here can come back to
                bite you later.
              </p>
              <div className="flex justify-between max-w-[70%] mx-auto my-8">
                <img src={Ticket} alt="ticket" className="h-[3rem]" />
                <img src={Wallet} alt="wallet" className="h-[3rem]" />
              </div>
            </div>
            <div className=" h-full order-1  md:h-[30.5rem] md:w-1/2 md:order-2">
              <img src={secOneImg} alt="img" className="h-full w-full" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <h1 className=" text-[#7F3DFF] text-5xl font-semibold text-center ">
            Resend Reminders & Invoice
          </h1>
          <div className="flex flex-col items-center pt-12 h-fit md:gap-12 md:flex-row">
            <div className="h-full max-h-[30.5rem] md:w-1/2">
              <img src={secTwoImg} alt="img" className="h-full w-full" />
            </div>

            <div className=" text-center h-fit px-4 py-8 md:w-[35%] md:py-0 md:px-0">
              <h4 className="text-black font-semibold text-center text-xl pb-4">
                Automate Reminders
              </h4>
              <p className="pb-4 text-black text-lg">
                Receive SMS, WHATSAPP Messages and Email Alert
              </p>
              <p className="text-lg text-black">
                Tenants will receive notifications with a secured for payments
                of rental dues and charges
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <h1 className=" text-[#7F3DFF] text-5xl font-semibold text-center">
            Resend Reminders & Invoice
          </h1>
          <div className="flex flex-col items-center pt-12 h-fit md:gap-8 md:flex-row">
            <div
              className=" rounded-2xl pt-10 pl-10 pr-8 text-center order-2 h-[25rem] md:h-[30.5rem] md:w-1/2 md:order-1"
              style={{ boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <h4 className="text-black font-semibold text-center text-xl pb-4">
                Automate Reminders
              </h4>
              <p className="pb-4 text-black text-lg">
                Receive SMS, WHATSAPP Messages and Email Alert
              </p>
              <p className="text-lg text-black">
                Tenants will receive notifications with a secured for payments
                of rental dues and charges
              </p>
            </div>
            <div className=" h-full max-h-[30.5rem] order-1 md:w-1/2 md:order-2">
              <img src={secThreeImg} alt="img" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
