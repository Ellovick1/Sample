import React, { useState } from "react";
import CategoryWidget from "../../components/merchantDashboard/managementTeam/CategoryWidget";
import TeamInformation from "../../components/merchantDashboard/managementTeam/TeamInformation";

const ManagementTeam = () => {
  const [activeClass, setActiveClass] = useState("teamInformation");
  const [showModal, setShowModal] = useState("");

  return (
    <div className="max-w-7xl mx-8 my-8">
      <CategoryWidget
        activeClass={activeClass}
        setActiveClass={setActiveClass}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {activeClass === "teamInformation" ? <TeamInformation /> : ""}
    </div>
  );
};

export default ManagementTeam;
