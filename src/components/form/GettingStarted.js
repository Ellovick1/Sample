import React from "react";

function GettingStarted() {
  return (
    <div className="mx-4 ">
      <form className="max-w-md w-full mx-auto max-h-[600px] h-full bg-[#fff] rounded-md ">
        {/* TOP PAGINATION AND ARROW */}
        <div className=" flex items-center px-7 py-2 space-x-[35%] h-12">
          <div className="  h-6 w-6 rounded-full flex justify-center items-center bg-themePurple">
            <i class="bi bi-chevron-left text-white "></i>
          </div>
          <div className=" flex md:px-3 space-x-3 items-center content-center">
            <div className="text-center h-2 w-2 rounded-full bg-themePurple"></div>
            <div className="text-center h-2 w-2 rounded-full bg-themePurple"></div>
            <div className="text-center h-2 w-2 rounded-full bg-themePurple"></div>
            {/* <div className="h-2 w-2 bg-slate-300 rounded-full "></div> */}
          </div>
        </div>
        <hr className="p-1 text-blue-600" />

        {/* CONTENT  */}
        <div className="p-7">
          <div className="text-center">
            <h1 className="text-xl tracking-wide py-1 font-semibold md:text-3xl ">
              Getting Started
            </h1>
            <p className="text-xs text-gray-700 py-3 font-medium">
              Let's get you Started
            </p>
          </div>
          <div>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full md:w-1/2 px-3 mb-1">
                <input
                  class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="First Name"
                  maxLength="13"
                  required
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-1">
                <input
                  class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Last Name"
                  maxLength="13"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="City"
                  maxLength="10"
                  required
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="State"
                  maxLength="10"                 
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Country"
                  maxLength="10"
                  required
                />
              </div>
            </div>
          </div>
          <div className="pb-3">
            <button
              className="hover:bg-hoverPurple p-2 w-full rounded-md text-white bg-themePurple"
              type="button">
              Finish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GettingStarted;

