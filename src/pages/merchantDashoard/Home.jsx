import React from 'react';
import { useState } from 'react';
// import Transaction from "../../components/merchantDashboard/Transaction";
// import Widgets from "../../components/merchantDashboard/Widgets";
import QuickAction from "../../components/merchantDashboard/QuickAction";
import DashboardHome from "../../components/merchantDashboard/DashboardHome";

const Home = () => {

  const [activeClass, setActiveClass] = useState("addTenants");

  return (
    <div className="home">
      <QuickAction 
       activeClass={activeClass}
       setActiveClass={setActiveClass} />

      <DashboardHome 
       activeClass={activeClass} 
      />

      {/* <Widgets />
      <Transaction /> */}
    </div>
  );
};

export default Home;
