import React, { useState } from "react";
import Sidebar from "../../components/sidebars/MerchantSidebar";
// import Navbar from '../../components/navbars/MerchantNavbar'
import Navbar from "../../components/navbars/NewMerchantNavbar";
import { Outlet } from "react-router-dom";
import AddPropertyForm from "../../components/modals/AddPropertyForm";

export const ToggleContext = React.createContext();

const MerchantDashoard = () => {
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(true);

  const toggleForm = () => {
    setShowAddPropertyForm(!showAddPropertyForm);
  };

  return (
    <ToggleContext.Provider value={{ toggleForm }}>
      <div className="merchant flex">
        <Sidebar />
        <div className="merchantContainer w-full bg-[#f9f9f9] ml-12 md:ml-0">
          {showAddPropertyForm || <AddPropertyForm />}

          <Navbar />
          <Outlet />
        </div>

        {/* <div className='flex flex-wrap w-full gap-2'>
        <div>
            <Navbar/>
        </div>
        <div className='border-2 border-red-700'>
            <div>
                <Header title="Property Revenue Overview" />
            </div>
            <h2>hey im divine</h2>
        </div>
    </div> */}
      </div>
    </ToggleContext.Provider>
  );
};

export default MerchantDashoard;
