import React, { useState } from "react";
import "./SideBar.css";

import icons from "../../resources/icons";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const menuPoints = [
    {
      icon: icons.iconDashboard,
      point: "Dashboard",
    },
    {
      icon: icons.iconPortfolio,
      point: "Portfolio",
    },
    {
      icon: icons.iconAgentAccount,
      point: "Agent account",
    },
    {
      icon: icons.iconSettings,
      point: "Setting",
    },
  ];

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container">
      <div className="sideBarContainer">
        <div>
          <img src={icons.mainLogo} alt="main-logo" />
          <div className="sideBarData">
            {menuPoints.map((menuPoint, index) => (
              <div
                key={index}
                className={`point ${selectedIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="leftData">
                  <img
                    src={menuPoint.icon}
                    alt={menuPoint.point}
                    className="pointIcon"
                  />
                  <p className="pointText">{menuPoint.point}</p>
                </div>
                <img
                  src={icons.iconChooseEndPoint}
                  alt="point"
                  className="endPoint"
                />
              </div>
            ))}
          </div>
        </div>

        <img src={icons.iconGraph} alt="graph" />
      </div>
    </div>
  );
}