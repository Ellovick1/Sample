import React, { useContext } from "react";
import { ToggleContext } from "../../dashboards/merchantDashboard/MerchantDashoard";

function AddPropertyForm() {
  const { toggleForm } = useContext(ToggleContext);

  return (
    <div className="fixed h-screen bg-black/40 px-4 justify-center z-50 w-[calc(100%-4rem)]">
      <div className="bg-[#F8F8FC] h-fit max-w-lg w-full my-8  mx-auto px-0 py-0 sm:px-8 sm:py-7 sm:my-16">
        <div className="bg-white p-4 w-full">
          <div className="flex justify-between items-center">
            <h4 className="text-[.5rem] font-semibold pl-3 md:pl-0">Mend HQ</h4>
            <i
              className="bi bi-x-square-fill text-red-600"
              onClick={() => toggleForm()}></i>
          </div>
          <h3 className="px-8 text-[1rem] font-semibold">
            Lets quickly set you up
          </h3>
          <h1 className="text-[1.3rem] font-bold text-center">
            Property Information
          </h1>
          <p className="text-center text-[.7rem]">
            Managing your property with us start with providing
            <br className=" hidden sm:block" /> the property information in
            order for us to serve you better
          </p>

          <form className=" mt-4  sm:mt-8">
            <span className="grid gap-4 sm:grid-cols-2 sm:grid-rows-3 sm:gap-6">
              <input
                type="text"
                placeholder="Name of property"
                className="border px-2 py-1 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border px-2 py-1 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Property type"
                className="border px-2 py-1 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="No of apartment"
                className="border px-2 py-1 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="No of apartment"
                className="border px-2 py-1 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="No of tenants"
                className="border px-2 py-1 rounded-md w-full"
              />
            </span>

            <input
              type="submit"
              className="rounded-md bg-themePurple px-12 py-1 text-white  w-full mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPropertyForm;
