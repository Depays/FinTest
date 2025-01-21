import { useState } from "react";

import EnterCodeInput from "../EnterCodeInput/EnterCodeInput";

import styles from "./EnterCodeForm.module.css";

const initDigits = ["", "", "", "", "", ""];

const EnterCodeForm = () => {
  const [digits, setDigits] = useState(initDigits);

  return (
    <form className={styles.form}>
      <EnterCodeInput digits={digits} changeHandler={setDigits} />
    </form>
  );
};

export default EnterCodeForm;
