import * as styles from "./IconPlusText.module.css";
import React from "react";
const IconPlusText = ({ bgcolor = false, icon, alt, children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <img
        className={bgcolor ? styles.bgimage : styles.image}
        src={icon}
        alt={alt}
      />
      {children}
    </div>
  );
};

export default IconPlusText;
