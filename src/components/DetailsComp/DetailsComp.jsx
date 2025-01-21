import * as styles from "./DetailsComp.module.css";
import "./DetailsComp.module.css";
import React from "react";

const DetailsComp = ({ ref, onClick, title, children, ...props }) => {
  return (
    <div {...props}>
      <details ref={ref} onClick={onClick}>
        <summary className={styles.title}>{title}</summary>
        {children}
      </details>
    </div>
  );
};

export default DetailsComp;
