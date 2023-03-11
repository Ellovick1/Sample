import React from 'react';
import Widget from '../../components/tenantDashboard/Widget'
import QuickAction from '../../components/tenantDashboard/QuickAction'
import Transaction from '../../components/tenantDashboard/Transaction'

const Overview = () => {
  return (
    <div className="overview">
       <QuickAction />
       <Widget />
       <Transaction />
    </div>
  );
}

export default Overview;
