import React, { useContext } from "react";
import icon from "../../assets/undraw.png";
import { ToggleContext } from "../../dashboards/merchantDashboard/MerchantDashoard";

function EmptyProperty({ name }) {
  const { toggleForm } = useContext(ToggleContext);

  return (
    <>
      <div className="p-4">
        <h1 className="text-[1.5em] text-center font-semibold py-12">
          Hello John
        </h1>

        <div className="min-w-[200px] max-w-lg bg-white p-5 border border-themePurple rounded-md mx-auto text-sm ">
          <p>
            Register your first property is the first step to take as a Mend
            Landlord and we’ve made that super easy for you.
          </p>
          <div className="flex pt-8 flex-wrap sm:flex-nowrap">
            <img src={icon} alt="img" className="h-16" />
            <div className="text-left pl-4">
              <p>Upcoming activities will appear here when there is any</p>
              <button
                className="py-2 px-4 bg-themePurple text-white rounded-md"
                onClick={() => toggleForm()}>
                {`Add ${name}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyProperty;
