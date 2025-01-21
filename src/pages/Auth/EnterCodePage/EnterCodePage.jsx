// import { useState } from "react";

import Button from "../../../components/Button/Button";
import EnterCodeForm from "../../../components/EnterCodeComponents/EnterCodeForm/EnterCodeForm";

import styles from "./EnterCodePage.module.css";

const EnterCodePage = () => {
  return (
    <section className={styles.loginWindow}>
      <div className={styles.marginWindow}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Enter code</h3>
          <span className={styles.text}>
            An email with a code has been sent to your email. Enter it to sign
            up to your account.
          </span>
        </div>
        <EnterCodeForm />
        <Button style={{ boxShadow: "0 4px 12px #D28E0040", width: "100%" }}>
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default EnterCodePage;
