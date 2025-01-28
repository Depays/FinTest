import React from "react";

import styles from "./IconPlusText.module.css";

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
