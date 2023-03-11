import React, { useState } from "react";
import DetailTopPart from "../../components/merchantDashboard/DetailTopPart";
import PropertyFlatTab from "../../components/merchantDashboard/PropertyFlatTab";
import PropertyComponent from "../../components/merchantDashboard/Property";
import Flats from "../../components/merchantDashboard/Flats";

const Property = () => {
  const [activeId, setActiveId] = useState("property");

  return (
    <div>
      <div className="mb-4">
        <DetailTopPart />
      </div>
      <PropertyFlatTab setClass={setActiveId} activeId={activeId} />
      {activeId === "property" && <PropertyComponent />}
      {activeId === "flat" && <Flats />}
      {/* */}
    </div>
  );
};

export default Property;
