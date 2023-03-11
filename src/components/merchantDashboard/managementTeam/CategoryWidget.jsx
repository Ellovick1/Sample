import React, { useState } from "react";

const CategoryWidget = ({
  setActiveClass,
  activeClass,
  showModal,
  setShowModal,
}) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white px-9 py-10 rounded-lg md:flex-row ">
      <div className="">
        <h1 className="text-3xl font-semibold pt-2 md:text-3xl">
          Management Team
        </h1>
      </div>
      <div
        onClick={() => setActiveClass("managementRoles")}
        className={`${
          activeClass === "managementRoles"
            ? "bg-[#7F3DFF] text-white"
            : "bg-[#F9F9F9] text-[#91919F]"
        }  px-8 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
        <h3 className="font-medium ">Management Roles</h3>
      </div>

      <div
        onClick={() => setShowModal("edit")}
        className={`${
          showModal !== ""
            ? "bg-[#7F3DFF] text-white"
            : "bg-[#F9F9F9] text-[#91919F]"
        }  px-8 py-2 flex gap-4 items-center rounded-lg cursor-pointer`}>
        <h3 className="font-medium">Invite New Member</h3>
      </div>
    </div>
  );
};

export default CategoryWidget;
