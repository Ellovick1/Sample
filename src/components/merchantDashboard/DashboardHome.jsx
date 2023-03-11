import React,  { useState } from 'react'
import AddTenants from './AddTenants'
import ListProperty from './listProperty'

const DashboardHome = ({ activeClass }) => {
    return (
        <div className="mt-5">
            {activeClass === "addTenants" ? <AddTenants /> : ""}
            {activeClass === "listProperty" ? <ListProperty /> : ""}
           {/*  {activeClass === "setremainders" ? <Setremainders /> : ""}
            {activeClass === "generateInvoice" ? <generateInvoice /> : ""} */}
        </div>
    )
}

export default DashboardHome