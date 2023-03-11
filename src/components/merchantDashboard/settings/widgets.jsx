import React from "react";

const Widget = ({ activeClass, setActiveClass }) => {
  return (
    <div className="flex flex-col gap-[5rem]  bg-white m-[1.5rem] py-4 px-12 rounded-[0.8rem] md:flex-row ">

        <div
          onClick={() => setActiveClass("settings")}
          className={`${
            activeClass === "settings"
              ? "text-[#7F3DFF]"
              : "text-[#7D7D7D]"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <h3 className="font-medium">Settings</h3>
        </div>

        <div
          onClick={() => setActiveClass("callSupport")}
          className={`${
            activeClass === "callSupport"
              ? "text-[#7F3DFF]"
              : "text-[#7D7D7D]"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <h3 className="font-medium">Call Support</h3>
        </div>

        <div
          onClick={() => setActiveClass("downloadRecord")}
          className={`${
            activeClass === "downloadRecord"
              ? "text-[#7F3DFF]"
              : "text-[#7D7D7D]"
          }  px-3 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
          <h3 className="font-medium">Download Records</h3>
        </div>

    </div>
  );
};

export default Widget;
