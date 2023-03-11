import React, { useState } from "react";
import CategoryWidget from "../../components/merchantDashboard/paymennts/minorComponents/CategoryWidget";
import Main from "../../components/merchantDashboard/paymennts/Main";

const Payment = () => {
  const [activeClass, setActiveClass] = useState("taxHistory");

  return (
    <>
      <div className="max-w-7xl mx-8 my-8">
        <CategoryWidget
          activeClass={activeClass}
          setActiveClass={setActiveClass}
        />
        <Main activeClass={activeClass} />
      </div>
    </>
  );
};

export default Payment;
