import React, { useState, useId } from "react";

function PropertyFlatTab({ setClass, activeId }) {
  return (
    <div className="bg-gray-200 flex justify-between">
      {/* <button
        className={`w-1/2 border-r py-2  ${
          activeId === "property" ? "bg-themePurple text-white" : ""
        }`}
        onClick={() => setClass("property")}>
        My Property
      </button>
      <button
        className={`w-1/2 py-2 ${
          activeId === "flat" ? "bg-themePurple text-white" : " "
        } `}
        onClick={() => setClass("flat")}>
        Flats
      </button> */}
    </div>
  );
}

export default PropertyFlatTab;
