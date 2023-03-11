import React, { useState } from "react";
import TaxHistory from "./TaxHistory";
import AddAccount from "./AddAccount";
import CreateServiceCharge from "./CreateServiceCharge";
import PayBills from "./PayBills";

const Main = ({ activeClass }) => {
  return (
    <div className="mt-5">
      {activeClass === "taxHistory" ? <TaxHistory /> : ""}
      {activeClass === "addAccount" ? <AddAccount /> : ""}
      {activeClass === "createServiceCharge" ? <CreateServiceCharge /> : ""}
      {activeClass === "payBills" ? <PayBills /> : ""}
    </div>
  );
};

export default Main;
