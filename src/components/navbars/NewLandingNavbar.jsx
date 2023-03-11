import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "./newLandingNavbar.css";
import logo from "../../assets/Frame.svg";
import { NavLink , Link } from "react-router-dom";
import imgdrop1 from '../../assets/prodown1.svg' 
import imgdrop2 from '../../assets/prodown2.svg' 
import imgdrop3 from '../../assets/prodown3.svg' 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState("hide");
  const [showModal, setShowModal] = useState("hide");

  const showHandler = () => {
    if (showModal === "show") {
      setShowModal("hide");
    }
    if (show === "show") {
      setShow("hide");
    }
    if (show === "hide") {
      setShow("show");
    }
  };

  const showResident = () => {
    if (show === "show") {
      setShow("hide");
    }
    if (showModal === "show") {
      setShowModal("hide");
    }
    if (showModal === "hide") {
      setShowModal("show");
    }
  };

  return (
    <nav className="nav sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white z-50">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center bg-white">
            {/* <div className="flex-shrink-0"> */}
              <NavLink to="/">
                <img
                  className="logo cursor-pointer"
                  src={logo}
                  alt="Workflow"
                />
              </NavLink>
            {/* </div> */}
            {/* <h1 className="mend text-[#7F3DFF] pl-1 text-xl font-bold leading-9 md:text-lg md:leading-4 lg:text-3xl lg:leading-9">MEND HQ</h1> */}
          </div>
          <div className="flex items-center ml-2">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className=" nav-link text-sm leading-6 text-black px-3 py-2 rounded-md"
                  style={({ isActive }) => ({
                    color: isActive ? "#7F3DFF" : "#000",
                    fontWeight: isActive ? "600" : "400",
                  })}>
                  Home
                </NavLink>
                <NavLink
                  to="/platforms"
                  className=" nav-link text-sm  leading-6 text-black px-3 py-2 rounded-md font-normal"
                  style={({ isActive }) => ({
                    color: isActive ? "#7F3DFF" : "#000",
                    fontWeight: isActive ? "600" : "400",
                  })}>
                  Platforms
                </NavLink>

                <div>
                  <h3
                    onClick={showHandler}
                    data-dropdown-toggle="dropdown"
                    className="text-sm leading-4 text-black font-normal px-3 py-3 rounded-md  hover:cursor-pointer  text-center inline-flex items-center"
                    type="button">
                    Properties
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </h3>
                  <div
                    className={`${
                      show === "hide"
                        ? "hidden"
                        : "z-10 absolute bg-[#fff] text-[#000] rounded-md"
                    } `}
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    data-popper-placement="top">
                    <ul
                      className=" text-[10px] shadow-md px-[20px] py-[20px] rounded-md"
                      aria-labelledby="dropdownDefault"
                      style={{ display: "flex", flexDirection: "column" }}>
                      <div className="flex items-center  gap-[15px]">
                        <li>
                          <NavLink
                            to="/landlordProperty"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2  ">
                            <div className="flex gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop1}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] hover:underline-[#7F3DFF]">
                                <p className="hover:border-b-2 border-[#7F3DFF]">
                                  {" "}
                                  Landlords{" "}
                                </p>
                                <p className="hover:border-b-2 border-[#7F3DFF]">
                                  Automate your Property management
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/properties"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2  ">
                            <div className="flex gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop2}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] ">
                                <h3 className="hover:border-b-2 border-[#7F3DFF]">
                                  Smart Managers
                                </h3>
                                <h3 className="hover:border-b-2 border-[#7F3DFF]">
                                  Easyon-site operations
                                </h3>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                      </div>
                      <div>
                        <li>
                          <NavLink
                            to="/utitlityManagement"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2 ">
                            <div className="flex mt-3 gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop3}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] hover:underline-[#7F3DFF]">
                                <h3 className="hover:border-b-2 border-[#7F3DFF]">
                                  Utility Expense Management
                                </h3>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3
                    onClick={showResident}
                    data-dropdown-toggle="dropdown"
                    className="text-sm leading-4 text-black hover:opacity-100 hover:text-black px-3 py-3 rounded-md hover:cursor-pointer  text-center inline-flex items-center"
                    type="button">
                    Resident
                    <svg
                      class="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </h3>
                  <div
                    className={`${
                      showModal === "hide"
                        ? "hidden"
                        : "z-10 absolute bg-[#fff] text-[#000] rounded-md"
                    } `}
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    data-popper-placement="top">
                    <ul
                      className=" text-[10px] shadow-md px-[20px] py-[20px] rounded-md"
                      aria-labelledby="dropdownDefault"
                      style={{ display: "flex", flexDirection: "column" }}>
                      <div className="flex items-center  gap-[15px]">
                        <li>
                          <NavLink
                            to="/nextHomeResident"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2  ">
                            <div className="flex gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop1}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] hover:underline-[#7F3DFF]">
                                <p className="hover:border-b-2 border-[#7F3DFF] font-medium">
                                  {" "}
                                  Find your next home{" "}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/residents"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2  ">
                            <div className="flex gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop3}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] ">
                                <h3 className="hover:border-b-2 border-[#7F3DFF font-medium]">
                                  Let's pay your next rent
                                </h3>
                                {/* <h3 className="hover:border-b-2 border-[#7F3DFF]">Easyon-site operations</h3> */}
                              </div>
                            </div>
                          </NavLink>
                        </li>
                      </div>
                      <div>
                        <li>
                          <NavLink
                            to="/digitalResident"
                            style={({ isActive }) => ({
                              color: isActive ? "#7F3DFF" : "#000",
                              fontWeight: isActive ? "600" : "400",
                            })}
                            class="block  font-normal leading-2 ">
                            <div className="flex mt-3 gap-[5px] items-center">
                              <div className="w-[20px] h-[20px]">
                                <img
                                  src={imgdrop2}
                                  alt="image inside properties downdown"
                                  className="object-cover w-[100%] h-[100%]"
                                />
                              </div>
                              <div className="text-[Dm-sans] hover:underline-[#7F3DFF]">
                                <h3 className="hover:border-b-2 border-[#7F3DFF] font-medium">
                                  Digital residential experience for you
                                </h3>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>

                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "#7F3DFF" : "#000",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  className="nav-link  leading-6 text-black hover:opacity-100 hover:text-[#7F3DFF] px-3 py-2 rounded-md text-sm ">
                  Contact
                </NavLink>
                <NavLink
                  to="/blog"
                  style={({ isActive }) => ({
                    color: isActive ? "#7F3DFF" : "#000",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  className="nav-link leading-6 text-black hover:opacity-100 hover:text-[#7F3DFF] px-3 py-2 rounded-md text-sm ">
                  Blog
                </NavLink>

                {/* <div className="hidden md:block">
          <Link
            to="/login"
            className="nav-btn1 rounded-md border border-[#7F3DFF] hover:bg-[#7F3DFF]  text-[#7F3DFF] hover:text-white px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer">
            Login
          </Link>
        </div> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/login"
              className="nav-btn1 rounded-md border border-[#7F3DFF] hover:bg-[#7F3DFF]  text-[#7F3DFF] hover:text-white px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <div className="mr-1 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* <div className="hidden md:block">
          <Link
            to="/login"
            className="nav-btn1 border border-[#7F3DFF] hover:bg-[#7F3DFF]  text-[#7F3DFF] hover:text-white px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer">
            Login
          </Link>
        </div> */}
      </div>
      {/* <div className="hidden md:block">
        <Link
          to="/login"
          className="nav-btn1 border border-[#363469] hover:bg-[#363469]  text-white px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer">
          Login
        </Link>
      </div>  */}
      {/* <div className="hidden md:block">
                  <Link
                  to = '/signup'
                  className="nav-btn2 px-[20] py-[10px] md:px-[28px] md:py-[14px] text-white font-medium text-sm leading-5 cursor-pointer">
                  Get Started
                  </Link>
              </div>  */}

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-10">
              <Link
                to="/about-us"
                className="nav-info text-black block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </Link>

              <Link
                to="/our-solution"
                className="nav-info text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Properties
              </Link>

              <Link
                to="/residents"
                className="nav-info text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Resident
              </Link>
              <Link
                to="/patnership"
                className="nav-info text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Partnership
              </Link>
              <Link
                to="/community"
                className="nav-info text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Community
              </Link>

              <Link
                to="/contact"
                className="nav-info text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
              <div>
                <Link
                  to="/login"
                  className="nav-info text-black block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
              </div>
              <div>
                <Link
                  to="/signup"
                  className="nav-info text-white block px-3 py-2 rounded-md text-base font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
