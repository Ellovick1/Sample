import React, { useState } from "react";

const CreateServiceCharge = () => {
  const [shareToggle, setShareToggle] = useState(false);

  return (
    <div className="bg-white rounded-lg px-8 py-12">
      <h1 className="text-3xl text-center  text-black font-semibold  mb-2">
        Create Residential Service Charge
      </h1>
      <p className="text-[#7D7D7D] text-center text-md text-lg">
        Your residential utility payment plan helps your residents <br /> to
        collectively pay for recurring utility seamlessly
      </p>
      <div className=" m-auto md:w-[60%]">
        <form className="mt-12 flex flex-col gap-6">
          <div>
            <label
              htmlFor="paymentTitle"
              className="text-[#7D7D7D] pb-1 text-md text-lg">
              Payment Title
            </label>
            <input
              id="paymentTitle"
              type="text"
              placeholder="Eg. Treasure Home ..."
              className="border border-black text-black rounded-xl px-4 py-3 w-full placeholder:text-[#7D7D7D]"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="text-[#7D7D7D] pb-1 text-md text-lg">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="text-[#7D7D7D] pb-1 text-md text-lg">
              Duration
            </label>
            <select
              name="duration"
              id="duration"
              className="border border-black rounded-xl py-3 w-full px-4 bg-white text-[#7D7D7D]">
              <option defaultValue=""></option>
              <option value="3 days" className="text-black ">
                3 days
              </option>
              <option value="6 days" className="text-black ">
                6 days
              </option>
              <option value="12 Days" className="text-black ">
                12 Days
              </option>
              <option value="15 Days" className="text-black ">
                15 Days
              </option>
            </select>
          </div>
          <select
            name="tenants"
            id="tenants"
            className="border border-black rounded-xl py-3 w-full px-4 bg-white text-[#7D7D7D] mt-3">
            <option disabled defaultValue="Select tenant">
              Select tenant
            </option>
            <option value="Adams" className="text-black ">
              Adams Oshiomole
            </option>
            <option value="Tinubu" className="text-black ">
              Tinubu
            </option>
            <option value="Peter" className="text-black ">
              Peter Obi
            </option>
            <option value="Namadi" className="text-black ">
              Namadi Sambo
            </option>
          </select>
          <div className="flex gap-12 items-center">
            <div>
              <h1 className="text-2xl text-black font-semibold  mb-1">
                Share with Tenants
              </h1>
              <p className="text-[#7D7D7D] text-lg">
                Notify tenants about this <br /> payment
              </p>
            </div>

            <div
              onClick={() => setShareToggle(!shareToggle)}
              className={`${
                shareToggle === true ? "bg-[#417ff2]" : "bg-[#EEE5FF]"
              }  w-[50px] h-[28px] px-[2px] rounded-full relative`}>
              <div
                className={`${
                  shareToggle === true ? "right-[2px]" : "left-[2px]"
                } h-[25px] w-[25px] my-[2px] bg-white rounded-full  absolute  transition-all`}></div>
            </div>
          </div>
          <input
            type="submit"
            value="Create"
            className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto md:w-1/2"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateServiceCharge;
