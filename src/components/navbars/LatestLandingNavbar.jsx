import logo from '../../assets/nav_logo.png';
import mend from '../../assets/mend_text.png';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import './LatestLandingNavbar.css';
import { NavLink, Link } from 'react-router-dom';
import imgdrop1 from '../../assets/prodown1.svg';
import imgdrop2 from '../../assets/prodown2.svg';
import imgdrop3 from '../../assets/prodown3.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState('hide');
  const [showModal, setShowModal] = useState('hide');

  const showHandler = () => {
    if (showModal === 'show') {
      setShowModal('hide');
    }
    if (show === 'show') {
      setShow('hide');
    }
    if (show === 'hide') {
      setShow('show');
    }
  };

  const showResident = () => {
    if (show === 'show') {
      setShow('hide');
    }
    if (showModal === 'show') {
      setShowModal('hide');
    }
    if (showModal === 'hide') {
      setShowModal('show');
    }
  };

  const closeModal = () => {
    if (show === 'show') {
      setShow('hide');
    }
    if (showModal === 'show') {
      setShowModal('hide');
    }
  };
  return (
    <nav className="nav shadow-md sticky top-0 z-50 bg-white" onClick={closeModal}>
      <div className="w-full px-3 lg:px-[100px] xl:px-[150px] py-6 bg-white z-50">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center bg-white">
            <div className="w-[140px] mr-3 border-r-2 border-r-gray-400">
              <NavLink className="flex p-0 items-center space-x-2 cursor-pointer" to="/">
                <img className="w-[40%]" src={logo} alt="Logo" />
                <img className="w-[40%]" src={mend} alt="Logo" />
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center">
              <NavLink
                to="/platforms"
                className="nav-link leading-6 text-sm px-3 py-2 rounded-md font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? '#7F3DFF' : '#91919F',
                })}
              >
                Platforms
              </NavLink>

              <div>
                <h3
                  onClick={showHandler}
                  data-dropdown-toggle="dropdown"
                  className="leading-4 px-3 text-[#91919F] text-sm py-3 rounded-md font-semibold hover:cursor-pointer text-center inline-flex items-center"
                  type="button"
                >
                  For Properties
                  <svg
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </h3>
                <div
                  className={`${
                    show === 'hide' ? 'hidden' : 'z-10 absolute bg-[#fff] text-[#000] rounded-md'
                  } `}
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                >
                  <ul
                    className=" text-[10px] shadow-md  "
                    aria-labelledby="dropdownDefault"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '2rem',
                      borderRadius: '2rem',
                    }}
                  >
                    <div className="flex items-center  gap-[20px]">
                      <li style={{ padding: '1rem' }}>
                        <NavLink
                          to="/landlordProperty"
                          style={({ isActive }) => ({
                            color: isActive ? '#7F3DFF' : '#91919F',
                          })}
                          class="block  font-normal leading-2  p-4"
                        >
                          <div className="flex gap-[10px] items-center">
                            <div className="w-[40px] h-[40px]">
                              <img
                                src={imgdrop1}
                                alt="properties"
                                className="object-cover w-[100%] h-[100%]"
                              />
                            </div>
                            <div className="text-[Dm-sans] text-base hover:underline-[#7F3DFF]">
                              <h4 className="" style={{ fontWeight: '800' }}>
                                {' '}
                                Landlords{' '}
                              </h4>
                              <p className="">Automate your Property management</p>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                      <li style={{ padding: '1rem' }}>
                        <NavLink
                          to="/properties"
                          style={({ isActive }) => ({
                            color: isActive ? '#7F3DFF' : '#91919F',
                          })}
                          class="block  font-normal leading-2  p-4"
                        >
                          <div className="flex gap-[10px] items-center">
                            <div className="w-[40px] h-[40px]">
                              <img
                                src={imgdrop2}
                                alt="properties"
                                className="object-cover w-[100%] h-[100%]"
                              />
                            </div>
                            <div className="text-[Dm-sans] text-base hover:underline-[#7F3DFF]">
                              <h3 className="" style={{ fontWeight: '800' }}>
                                Smart Managers
                              </h3>
                              <h3 className="">Easyon-site operations</h3>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                    </div>
                    <div>
                      <li style={{ padding: '1rem' }}>
                        <NavLink
                          to="/comingSoon"
                          style={({ isActive }) => ({
                            color: isActive ? '#7F3DFF' : '#91919F',
                          })}
                          class="block  font-normal leading-2 p-4"
                        >
                          <div className="flex mt-3 gap-[5px] items-center">
                            <div className="w-[40px] h-[40px]">
                              <img
                                src={imgdrop3}
                                alt="properties"
                                className="object-cover w-[100%] h-[100%]"
                              />
                            </div>
                            <div className="text-[Dm-sans] text-base hover:underline-[#7F3DFF]]">
                              <h3 className="">Utility Expense Management</h3>
                            </div>
                          </div>
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-5">
              <div className="hidden lg:block">
                <div className="flex items-baseline space-x-4">
                  <div>
                    <h3
                      onClick={showResident}
                      data-dropdown-toggle="dropdown"
                      className="text-sm leading-4 font-semibold text-[#91919F] hover:opacity-100 hover: px-3 py-3 rounded-md hover:cursor-pointer  text-center inline-flex items-center"
                      type="button"
                    >
                      For Resident
                      <svg
                        class="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </h3>
                    <div
                      className={`${
                        showModal === 'hide'
                          ? 'hidden'
                          : 'z-10 absolute bg-[#fff] text-[#000] rounded-md'
                      } `}
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="top"
                    >
                      <ul
                        className=" text-[10px] shadow-md px-[20px] py-[20px]"
                        aria-labelledby="dropdownDefault"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '2rem',
                          borderRadius: '2rem',
                        }}
                      >
                        <div className="flex items-center  gap-[20px]">
                          <li style={{ padding: '1rem' }}>
                            <NavLink
                              to="/comingSoon"
                              style={({ isActive }) => ({
                                color: isActive ? '#7F3DFF' : '#91919F',
                              })}
                              class="block  font-normal leading-2  "
                            >
                              <div className="flex gap-[5px] items-center">
                                <div className="w-[40px] h-[40px]">
                                  <img
                                    src={imgdrop1}
                                    alt="residents"
                                    className="object-cover w-[100%] h-[100%]"
                                  />
                                </div>
                                <div className="text-[Dm-sans] text-base hover:underline-[#7F3DFF]">
                                  <p className=""> Find your next home </p>
                                </div>
                              </div>
                            </NavLink>
                          </li>
                          <li style={{ padding: '1rem' }}>
                            <NavLink
                              to="/residents"
                              style={({ isActive }) => ({
                                color: isActive ? '#7F3DFF' : '#91919F',
                              })}
                              class="block  font-normal leading-2  "
                            >
                              <div className="flex gap-[5px] items-center">
                                <div className="w-[40px] h-[40px]">
                                  <img
                                    src={imgdrop3}
                                    alt="residents"
                                    className="object-cover w-[100%] h-[100%]"
                                  />
                                </div>
                                <div className="text-[Dm-sans]  text-base">
                                  <h3 className="">Let's pay your next rent</h3>
                                  {/* <h3 className="hover:border-b-2 border-[#7F3DFF]">Easyon-site operations</h3> */}
                                </div>
                              </div>
                            </NavLink>
                          </li>
                        </div>
                        <div>
                          <li style={{ padding: '1rem' }}>
                            <NavLink
                              to="/digitalResident"
                              style={({ isActive }) => ({
                                color: isActive ? '#7F3DFF' : '#91919F',
                              })}
                              class="block  font-normal leading-2 "
                            >
                              <div className="flex mt-3 gap-[5px] items-center">
                                <div className="w-[40px] h-[40px]">
                                  <img
                                    src={imgdrop2}
                                    alt="residents"
                                    className="object-cover w-[100%] h-[100%]"
                                  />
                                </div>
                                <div className="text-[Dm-sans] text-base hover:underline-[#7F3DFF]">
                                  <h3 className="">Digital residential experience for you</h3>
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
                      color: isActive ? '#7F3DFF' : '#91919F',
                    })}
                    className="nav-link font-semibold leading-6  hover:opacity-100 px-3 py-2 rounded-md text-sm"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/comingSoon"
                    style={({ isActive }) => ({
                      color: isActive ? '#7F3DFF' : '#91919F',
                    })}
                    className="nav-link leading-6 font-semibold hover:opacity-100 px-3 py-2 rounded-md text-sm"
                  >
                    Blog
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <div className="mr-1 flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-1 rounded-md text-[#00349A] hover:text-[#00349A]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#00349A] focus:ring-[#00349A]"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
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
                        aria-hidden="true"
                      >
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
            </div>
            <div className="hidden lg:flex space-x-3">
              <Link
                to="/login"
                className="nav-btn2 rounded-md bg-[#F5F5F5] text-[#7F3DFF] px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="nav-btn2 rounded-md bg-[#7F3DFF] text-[#fff] px-[20] py-[10px] md:px-[26px] md:py-[13px] font-medium text-sm leading-5 cursor-pointer"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden z-10" id="mobile-menu">
            <div
              ref={ref}
              className="flex flex-col items-center  px-[20px]  pt-2 pb-3 space-y-5 sm:px-3 z-10"
            >
              <Link
                to="/comingSoon"
                className="nav-info text-lg font-bold leading-5 text-[#111827]"
              >
                Next Home Resident
              </Link>
              <Link
                to="/landlordProperty"
                className="nav-info text-lg font-bold leading-5 text-[#111827]"
              >
                Landlord Property
              </Link>
              <Link
                to="/digitalResident"
                className="nav-info text-lg font-bold leading-5 text-[#111827]"
              >
                Digital Residents
              </Link>

              <Link to="/residents" className="nav-info text-lg font-bold leading-5 text-[#111827]">
                Residents
              </Link>
              <Link
                to="/properties"
                className="nav-info text-lg font-bold leading-5 text-[#111827]"
              >
                Properties
              </Link>
              <Link to="/platforms" className="nav-info text-lg font-bold leading-5 text-[#111827]">
                Platform
              </Link>

              <Link to="/contact" className="nav-info text-lg font-bold leading-5 text-[#111827]">
                Contact
              </Link>
              <Link
                to="/comingSoon"
                className="nav-info text-lg font-bold leading-5 text-[#111827]"
              >
                Blog
              </Link>
              {/* <Link
                  to="/contact"
                  className="nav-info text-lg font-bold leading-5 text-[#111827]"
                >
                 Contact
                </Link> */}

              <Link to="/login" className="nav-info text-lg font-bold leading-5 text-[#111827]">
                Sign in
              </Link>

              <Link to="/SignUp" className="nav-info text-lg font-bold leading-5 text-[#111827]">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
