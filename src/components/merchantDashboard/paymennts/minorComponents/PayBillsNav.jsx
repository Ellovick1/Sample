import React from "react";

const PayBillsNav = ({ setPaymentSection, paymentSection }) => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-between items-center rounded-xl px-8 h-fit w-full mx-auto xlg:flex-row xlg:h-[5rem]">
      <h3
        onClick={() => setPaymentSection("homeAssociationDues")}
        className={`${
          paymentSection === "homeAssociationDues"
            ? "text-[#7F3DFF] border-b-8 border-[#7F3DFF]"
            : "text-[#7D7D7D]"
        }  font-medium inline cursor-pointer pb-2 mr-4 text-sm transition-all`}>
        Home Association Dues
      </h3>
      <h3
        onClick={() => setPaymentSection("duesAndServiceCharge")}
        className={`${
          paymentSection === "duesAndServiceCharge"
            ? "text-[#7F3DFF] border-b-8 border-[#7F3DFF]"
            : "text-[#7D7D7D]"
        }  font-medium inline cursor-pointer pb-2 mr-4 text-sm transition-all`}>
        Dues and service charge
      </h3>
      <h3
        onClick={() => setPaymentSection("utilities")}
        className={`${
          paymentSection === "utilities"
            ? "text-[#7F3DFF] border-b-8 border-[#7F3DFF]"
            : "text-[#7D7D7D]"
        }  font-medium inline cursor-pointer pb-2 mr-4 text-sm transition-all`}>
        Utilities
      </h3>
      <h3
        onClick={() => setPaymentSection("wasteManagemnt")}
        className={`${
          paymentSection === "wasteManagemnt"
            ? "text-[#7F3DFF] border-b-8 border-[#7F3DFF]"
            : "text-[#7D7D7D]"
        }  font-medium inline cursor-pointer pb-2 mr-4 text-sm transition-all`}>
        Waste Managemnt
      </h3>
    </div>
  );
};

export default PayBillsNav;
