import React from "react";

const AddAccount = () => {
  return (
    <div className="bg-white rounded-lg px-8 py-20">
      <h1 className="text-3xl text-center  text-black font-semibold  mb-2">
        Add bank Account
      </h1>
      <p className="text-[#7D7D7D] text-center text-md text-lg">
        Your bank account will be used to remit your rent whenever <br />
        tenants makes payment
      </p>
      <div className=" m-auto md:w-[60%]">
        <form className="mt-12 flex flex-col gap-8">
          <div>
            <p className="text-[#7D7D7D] pb-1 text-md text-lg">
              Account Number
            </p>
            <input
              type="number"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
          <div>
            <p className="text-[#7D7D7D] pb-1 text-md text-lg">Account Name</p>
            <input
              type="text"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
          <div>
            <p className="text-[#7D7D7D] pb-1 text-md text-lg">Bank Name</p>
            <input
              type="text"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
          <input
            type="submit"
            value="Add"
            className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto md:w-1/2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
