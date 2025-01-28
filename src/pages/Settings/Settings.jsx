import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import styles from "./Settings.module.css";

export default function Settings() {
  return (
    <div className={styles.container}>
      <div className={styles.containerDashboardMain}>
        <div className={styles.generalBlocks}>
          <SideBar />
          <div className={styles.firstContentBlock}>
            <Header name={"SETTINGS"} isUser={true} />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
