import React from "react";

const Form = () => {
  return (
    <form className="mt-12 flex flex-col justify-between  mx-auto md:flex-row md:w-[90%]">
      <div className="flex  mx-2 flex-col gap-8 md:w-[45%]">
        <div>
          <label
            htmlFor="referenceNumber"
            className="text-[#7D7D7D] pb-1 text-md text-lg">
            Reference Number
          </label>
          <input
            id="referenceNumber"
            type="number"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <label
            htmlFor="referenceId"
            className="text-[#7D7D7D] pb-1 text-md text-lg">
            Reference ID
          </label>
          <input
            id="referenceId"
            type="number"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <label
            htmlFor="payWith"
            className="text-[#7D7D7D] pb-1 text-md text-lg">
            Pay with
          </label>
          <select
            name="payWith"
            id="payWith"
            className="border border-black rounded-xl py-3 w-full px-4 bg-white text-[#7D7D7D]">
            <option defaultValue=""></option>
            <option value="Card" className="text-black ">
              Card
            </option>
            <option value="Online Transfer" className="text-black ">
              Online Transfer
            </option>
            <option value="Crypto" className="text-black ">
              Crypto
            </option>
            <option value="Bank Deposit" className="text-black ">
              Bank Deposit
            </option>
          </select>
        </div>
      </div>

      <div className="flex mt-4 mx-2 flex-col gap-8 md:w-[45%] md:mt-0">
        <div>
          <label
            htmlFor="cardNumber"
            className="text-[#7D7D7D] pb-1 text-md text-lg">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="number"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div>
          <label
            htmlFor="accountType "
            className="text-[#7D7D7D] pb-1 text-md text-lg">
            Account Type
          </label>
          <select
            name="accountType"
            id="accountType"
            className="border border-black rounded-xl py-3 w-full px-4 bg-white text-[#7D7D7D]">
            <option defaultValue=""></option>
            <option value="Savings Account" className="text-black ">
              Savings Account
            </option>
            <option value="Current Account" className="text-black ">
              Current Account
            </option>
            <option value="Joint Account" className="text-black ">
              Joint Account
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="pin" className="text-[#7D7D7D] pb-1 text-md text-lg">
            Pin
          </label>
          <input
            id="pin"
            type="number"
            className="border border-black rounded-xl py-3 w-full px-4"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[40%] mx-2">
            <label
              htmlFor="expiry"
              className="text-[#7D7D7D] pb-1 text-md text-lg ">
              Expiry
            </label>
            <input
              id="expiry"
              type="number"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
          <div className="w-[40%] mx-2">
            <label
              htmlFor="cvv"
              className="text-[#7D7D7D] pb-1 text-md text-lg">
              CVV
            </label>
            <input
              id="cvv"
              type="number"
              className="border border-black rounded-xl py-3 w-full px-4"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Pay"
          className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto"
        />
        <p className="text-[#7D7D7D] font-semibold text-center text-md text-lg">
          Secured by <span className="text-[#7F3DFF]"> Paystack</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
