import React from "react";

import SettingsNav from "../../../components/SettingsNav/SettingsNav";
import IconPlusText from "../../../components/IconPlusText/IconPlusText";

import styles from "./Agreements.module.css";
import "./Agreements.module.css";
import icons from "../../../resources/icons";

const Agreements = () => {
  const agreements = [
    {
      icon: icons.trustAgreement,
      name: "Trust Agreements",
      url: "",
    },
  ];
  return (
    <div className={styles.container}>
      <SettingsNav />
      {agreements.map((agreement, index) => (
        <div className={styles.itemContent} key={index}>
          <div className={styles.item}>
            <IconPlusText bgcolor={true} icon={agreement.icon}>
              {agreement.name}
            </IconPlusText>
            <button
              style={{ backgroundColor: "#f6ac12" }}
              className={styles.funcButton}
            >
              Read
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agreements;
