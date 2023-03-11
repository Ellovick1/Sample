import React from 'react'
import Transaction from "../../components/merchantDashboard/Transaction";
import Widgets from "../../components/merchantDashboard/Widgets";
// import QuickAction from "../../components/merchantDashboard/QuickAction";


function AddTenants() {
    return (
        <div>
            {/* <QuickAction /> */}
            <Widgets />
            <Transaction />
        </div>
    )
}

export default AddTenants