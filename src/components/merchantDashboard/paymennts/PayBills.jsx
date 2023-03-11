import React, { useState } from "react";
import PayBillsNav from "./minorComponents/PayBillsNav";
import DuesAndServiceCharge from "./pay bills/DuesAndServiceCharge";
import HomeAsscociationDues from "./pay bills/HomeAsscociationDues";
import Utilities from "./pay bills/Utilities";
import WasteManagement from "./pay bills/WasteManagement";

const PayBills = () => {
  const [paymentSection, setPaymentSection] = useState("homeAssociationDues");

  return (
    <div className="bg-white rounded-lg px-8 py-12">
      <PayBillsNav
        paymentSection={paymentSection}
        setPaymentSection={setPaymentSection}
      />
      {paymentSection === "duesAndServiceCharge" ? (
        <DuesAndServiceCharge />
      ) : (
        ""
      )}
      {paymentSection === "homeAssociationDues" ? <HomeAsscociationDues /> : ""}
      {paymentSection === "utilities" ? <Utilities /> : ""}
      {paymentSection === "wasteManagemnt" ? <WasteManagement /> : ""}
    </div>
  );
};

export default PayBills;
