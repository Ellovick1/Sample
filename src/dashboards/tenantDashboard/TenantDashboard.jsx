import React from 'react'
import Sidebar from '../../components/sidebars/TenantSidebar'
import TenantNavbar from '../../components/navbars/TenantNavbar'
import {Outlet } from 'react-router-dom'

const TenantDashboard = () => {
  return (
    <div className="tenant flex overflow-hidden">
         <Sidebar />
      <div className="tenantContainer w-full bg-[#F8F8FC]">
        <TenantNavbar />
        <Outlet />
      </div>
      </div>
    
  )
}

export default TenantDashboard



// <div className='font-light'>
    //     <div className='md:grid grid-cols-8'>
    //         <div className='col-span-2'>
    //             <Sidebar />
    //         </div>
    //         <div className='col-span-6 px-4'>
    //           {/* <Header title="Dashboard" /> */}
    //         </div>
    //     </div>
    {/* </div> */}