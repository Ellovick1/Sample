import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarLogo from "../../assets/logo_sidebar.png";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { MdDashboard, MdPersonOutline, MdOutlineGroups } from "react-icons/md";
import { HiArrowNarrowLeft, HiChat, HiChartSquareBar } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { IoPaperPlaneOutline, IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeClass, setActiveClass] = useState("");
  const { logout } = useLogout();
  const { user } = useAuthContext();

  function handleClick() {
    logout();
  }

  return (
    <div
      className={`${
        open ? "w-60 pl-2 md:pl-0 md:w-72" : "w-12 pl-1 py-3 md:w-20"
      } py-2  duration-300 bg-[#7F3DFF] absolute left-0 top-0 z-50 md:relative`}>
      <div className={`${open === true ? "" : ""} flex justify-end `}>
        <HiArrowNarrowLeft
          onClick={() => setOpen(!open)}
          className="text-white cursor-pointer mr-2 mb-6"
        />
      </div>

      <div className={` md:pl-3`}>
        <div className={`${open ? "block" : "hidden"} transition `}>
          <img className={`w-[8rem] ml-4`} alt="logo" src={SidebarLogo} />
        </div>

        <Link
          onClick={() => setActiveClass("dashboard")}
          to="/merchant-dashboard"
          className={`${
            activeClass === "dashboard"
              ? "text-[#7F3DFF] bg-white"
              : "text-white"
          } mt-6 mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <MdDashboard className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Dashboard</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("details")}
          to="/merchant-dashboard/details"
          className={`${
            activeClass === "details" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <FiHome className="text-xl" />
          <h3 className={`${!open && "hidden"} `}> Details</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("tenants")}
          to="/merchant-dashboard/tenant"
          className={`${
            activeClass === "tenants" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <MdPersonOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}> My Tenants</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("payment")}
          to="/merchant-dashboard/payment"
          className={`${
            activeClass === "payment" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <IoPaperPlaneOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Payment</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("request")}
          to="/merchant-dashboard/request"
          className={`${
            activeClass === "request" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <HiChat className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Request</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("files")}
          to="/merchant-dashboard/files"
          className={`${
            activeClass === "files" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <BsFileEarmarkText className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Files</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("team")}
          to="/merchant-dashboard/management-team"
          className={`${
            activeClass === "team" ? "text-[#7F3DFF] bg-white" : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <MdOutlineGroups className="text-2xl" />
          <h3 className={`${!open && "hidden"} `}>Management Team</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("recording")}
          to="/merchant-dashboard/records"
          className={`${
            activeClass === "recording"
              ? "text-[#7F3DFF] bg-white"
              : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <HiChartSquareBar className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Recording</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("settings")}
          to="/merchant-dashboard/settings"
          className={`${
            activeClass === "settings"
              ? "text-[#7F3DFF] bg-white"
              : "text-white"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 rounded-l-3xl hover:text-[#7F3DFF] hover:bg-white`}>
          <IoSettingsOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Settings</h3>
        </Link>

        <div
          onClick={handleClick}
          className="mb-3 pl-3 py-2 text-white flex items-center gap-2 cursor-pointer transition-all hover:text-[#7F3DFF] hover:pl-3 hover:rounded-l-3xl hover:bg-white">
          <TiArrowSync className="text-2xl" />
          <h3 className={`${!open && "hidden"} `}>Switch To Another Account</h3>
        </div>

        {open && (
          <div className="text-white font-medium text-sm">
            <p className="pb-2">Treasure Lodge</p>
            <p>
              13 Bolaji Close, Ikeja <br /> Lagos
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
