import React from "react";
import { IoAddCircleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { BsArrowDownCircle } from "react-icons/bs";

const CategoryWidget = ({ activeClass, setActiveClass }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white px-9 py-10 rounded-lg md:flex-row ">
      <div className="">
        <h3 className="text-[#7F3DFF] font-medium text-[1rem]">Main Balance</h3>
        <h1 className="text-3xl pt-2 md:text-3xl">₦200,000</h1>
      </div>
      <div className=" ml-6 flex flex-wrap gap-4 flex-col justify-center md:flex-row">
        <div
          onClick={() => setActiveClass("addAccount")}
          className={`${
            activeClass === "addAccount"
              ? "bg-[#7F3DFF] text-white"
              : "bg-[#F9F9F9] text-black"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <IoAddCircleOutline
            className={`${
              activeClass === "addAccount" ? "text-white" : "text-[#7F3DFF]"
            } text-3xl`}
          />
          <h3 className="font-medium">Add Account</h3>
        </div>
        <div
          onClick={() => setActiveClass("createServiceCharge")}
          className={`${
            activeClass === "createServiceCharge"
              ? "bg-[#7F3DFF] text-white"
              : "bg-[#F9F9F9] text-black"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <BsArrowDownCircle
            className={`${
              activeClass === "createServiceCharge"
                ? "text-white"
                : "text-[#7F3DFF]"
            } text-2xl`}
          />
          <h3 className="font-medium">Create Service Charge</h3>
        </div>
        <div
          onClick={() => setActiveClass("payBills")}
          className={`${
            activeClass === "payBills"
              ? "bg-[#7F3DFF] text-white"
              : "bg-[#F9F9F9] text-black"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <IoPaperPlaneOutline
            className={`${
              activeClass === "payBills" ? "text-white" : "text-[#7F3DFF]"
            } text-2xl`}
          />
          <h3 className={`font-medium`}>Pay Bills</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryWidget;
