import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import icons from "../../resources/icons";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openSettings, setOpenSettings] = useState(false); // Управление открытием Settings

  const location = useLocation();

  const menuPoints = [
    {
      icon: icons.iconDashboard,
      point: "Dashboard",
      path: "/",
    },
    {
      icon: icons.iconPortfolio,
      point: "Portfolio",
      path: "/auth",
    },
    {
      icon: icons.iconAgentAccount,
      point: "Agent account",
      path: "/agent-account",
    },
    {
      icon: icons.iconSettings,
      point: "Setting",
      path: "/settings",
      subMenu: [
        { path: "/settings/invest-account" },
        { path: "/settings/agreements" },
        { path: "/settings/payment-methods" },
        { path: "/settings/security" },
      ],
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = menuPoints.findIndex(
      (menuPoint) =>
        menuPoint.path === currentPath ||
        (menuPoint.subMenu &&
          menuPoint.subMenu.some((sub) => sub.path === currentPath))
    );
    setSelectedIndex(activeIndex !== -1 ? activeIndex : 0);
  }, [location.pathname]);

  const handleClick = (index) => {
    if (index === 3) {
      setOpenSettings(!openSettings);
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <div className="container">
      <div className="sideBarContainer">
        <div>
          <img src={icons.mainLogo} alt="main-logo" />
          <div className="sideBarData">
            {menuPoints.map((menuPoint, index) => (
              <Link
                to={menuPoint.path || "#"}
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
              </Link>
            ))}
          </div>
        </div>

        <img src={icons.iconGraph} alt="graph" />
      </div>
    </div>
  );
}
