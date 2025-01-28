import React from "react";
import styles from "./Input.module.css";

export default function Input({
  labelTitle = "",
  htmlFor = "",
  type,
  name,
  placeholder,
}) {
  return (
    <p className={styles.formItem}>
      {labelTitle === "" ? null : <label htmlFor={htmlFor}>{labelTitle}</label>}

      <input
        className={styles.formInput}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </p>
  );
}
