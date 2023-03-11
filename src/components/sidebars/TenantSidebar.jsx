import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState(true);
  return (
    <div
      className={`${
        open ? "w-72" : "w-20 p-3"
      } shadow h-fit p-2 relative duration-500  overflow-x-hidden`}>
      <div className={`${!open && "mx-auto"}`} onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute right-4 h-6 w-6 text-gray-700 top-5 hover:cursor-pointer ${
            !open && "rotate-180 relative mx-auto"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </div>
      <div className={`${!open && "my-10"}`}>
        <div>
          <img className={`w-8 my-6 ${!open && "mx-auto"}`} src={logo} />
        </div>
        <div>
          <div className={`${!open && "hidden"} my-5`}>
            <h1 className={`font-bold text-lg mb-1`}>Treasure Estate</h1>
            <p className={`${status ? "text-green-600" : "text-red-600"}`}>
              {status ? "Verified" : "Unverified"}
            </p>
          </div>
          <div className="my-10">
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <Link to="/tenant-dashboard">
                  <h3
                    className={`${
                      !open && "hidden"
                    } my-[2px] hover:font-medium`}>
                    Overview
                  </h3>
                </Link>
              </div>
            </div>
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>     */}
                <Link to="/tenant-dashboard">
                  <h3
                    className={`my-[2px] hover:font-medium ${
                      !open && "hidden"
                    }`}>
                    Payments
                  </h3>
                </Link>
              </div>
            </div>
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                  //{" "}
                </svg>
                <Link to="/tenant-dashboard/utilities">
                  <h3
                    className={`my-[2px] hover:font-medium ${
                      !open && "hidden"
                    }`}>
                    Utilites
                  </h3>
                </Link>
              </div>
            </div>
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <Link to="/tenant-dashboard/report">
                  <h3
                    className={`my-[2px] hover:font-medium ${
                      !open && "hidden"
                    }`}>
                    Reports
                  </h3>
                </Link>
              </div>
            </div>
            {/* <div className='text-gray-700 hover:text-[#7F3DFF] my-2'>
                    <div className='inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                        <Link to="/merchant-dashboard/book-keeping">
                        <h3 className={`my-[2px] hover:font-medium ${!open && 'hidden'}`}>Book keeping</h3></Link>
                    </div>
                        
                 </div> */}
            {/* <div className='text-gray-700 hover:text-[#7F3DFF] my-2'>
                    <div className='inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <Link to="/merchant-dashboard/request">
                        <h3 className={`my-[2px]hover:font-medium ${!open && 'hidden'}`}>Requests</h3></Link>
                    </div>
                        
                 </div> */}
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <Link to="/merchant-dashboard/files">
                  <h3
                    className={`my-[2px]hover:font-medium ${
                      !open && "hidden"
                    }`}>
                    Files
                  </h3>
                </Link>
              </div>
            </div>
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <Link to="/merchant-dashboard/settings">
                  <h3
                    className={`my-[2px] hover:font-medium ${
                      !open && "hidden"
                    }`}>
                    Settings
                  </h3>
                </Link>
              </div>
            </div>
            <div className="text-gray-700 hover:text-[#7F3DFF] my-2">
              <div className="inline-flex hover:cursor-pointer hover:bg-[#eee] px-4 py-2 rounded-md duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <h3
                  className={`my-[2px] hover:font-medium ${!open && "hidden"}`}>
                  Log out
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
