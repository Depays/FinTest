import React from "react";

import styles from "./DetailsComp.module.css";

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
