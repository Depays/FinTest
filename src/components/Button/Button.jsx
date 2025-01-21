import * as styles from "./Button.module.css";
import React from "react";
const Button = ({ children, ...props }) => {
  return (
    <button className={styles.orangeBtn} {...props}>
      {children}
    </button>
  );
};

export default Button;
