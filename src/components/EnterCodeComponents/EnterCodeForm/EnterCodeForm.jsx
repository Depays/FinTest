import { useState } from "react";

import EnterCodeInput from "../EnterCodeInput/EnterCodeInput";

import * as styles from "./EnterCodeForm.module.css";

const initDigits = ["", "", "", "", "", ""];

export default function EnterCodeForm() {
  const [digits, setDigits] = useState(initDigits);

  return (
    <form className={styles.form}>
      <EnterCodeInput digits={digits} changeHandler={setDigits} />
    </form>
  );
}

// export default EnterCodeForm;
