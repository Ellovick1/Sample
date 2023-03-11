import React from 'react';
import { useState } from 'react';
import Main from "../../components/merchantDashboard/settings/main"
import Widgets from "../../components/merchantDashboard/settings/widgets"
// import SettingsCard from "../../components/merchantDashboard/SettingsCard"

const Settings = () => {
  const [activeClass, setActiveClass] = useState("settings");

  return (
   <div>
    <Widgets   activeClass={activeClass}
          setActiveClass={setActiveClass} />
          
    <Main  activeClass={activeClass} 
         />
   </div>
    // <div className="settings">
    //   <div className="top">
    //   <div className="px-4 pt-4 flex items-center justify-end">
    //        <div>
    //           <div className="btn1 bg-[#6C63FF] font-bold text-white text-xs leading-6 flex items-center py-[10px] px-[24px] justify-center rounded-lg cursor-pointer">Add tenants</div>
    //           {/* <div className="btn2 bg-[#6C63FF] font-bold text-white text-xs leading-2 flex items-center py-[10px] px-[24px] justify-center rounded-lg cursor-pointer">List Apartments</div>     */}
    //        </div>
    //    </div>
    //   </div>
    //   <div className="center px-4">
    //        <p className="text-sm">Payments</p>
    //   </div>
    //   <div className="bottom px-4">
    //     <SettingsCard type="user"/>
    //     <SettingsCard type="business"/>
    //     <SettingsCard type="pin"/>
    //     <SettingsCard type="friend"/>
    //     <SettingsCard type="faq"/>
    //     <SettingsCard type="contact"/>
    //   </div>
    // </div>
  );
}

export default Settings;
