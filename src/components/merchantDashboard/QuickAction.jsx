import React from "react";

const QuickAction = ({ activeClass, setActiveClass}) => {
  return (
    <div className="flex flex-col gap-[5rem]  bg-white m-[1.5rem] py-4 px-12 rounded-[0.8rem] md:flex-row ">

    <div
      onClick={() => setActiveClass("addTenants")}
      className={`${
        activeClass === "addTenants"
          ? "text-[#7F3DFF]"
          : "text-[#7D7D7D]"
      }  px-4 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
      <h3 className="font-medium">Add Tenants</h3>
    </div>

    <div
      onClick={() => setActiveClass("listProperty")}
      className={`${
        activeClass === "listProperty"
          ? "text-[#7F3DFF]"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
      <h3 className="font-medium">List Property</h3>
    </div>

    <div
      onClick={() => setActiveClass("setremainders")}
      className={`${
        activeClass === "setremainders"
          ? "text-[#7F3DFF]"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
      <h3 className="font-medium">Set Remainders</h3>
    </div>

    <div
      onClick={() => setActiveClass("generateInvoice")}
      className={`${
        activeClass === "generateInvoice"
          ? "text-[#7F3DFF]"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
      <h3 className="font-medium">Generate Invoice</h3>
    </div>

</div>
  );
};

export default QuickAction;
