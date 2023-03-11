import React from "react";

function FormPagination() {
  return (
    <>
      <div className=" flex items-center justify-between md:px-6 px-4 py-2 h-12">
        <div className="  h-6 w-6 rounded-full flex justify-center items-center bg-slate-300">
          <i className="bi bi-chevron-left text-white"></i>
        </div>
        <div className=" flex space-x-3">
          <button className="h-2 w-2 rounded-full bg-themePurple"></button>
          <button className="h-2 w-2 bg-slate-300 rounded-full "></button>
          <button className="h-2 w-2 bg-slate-300 rounded-full "></button>
        </div>
        <div className="  h-6 w-6 rounded-full flex justify-center items-center bg-slate-300">
          <i class="bi bi-chevron-right text-white"></i>
        </div>
      </div>
      <hr className="text-blue-600" />
    </>
  );
}

export default FormPagination;
