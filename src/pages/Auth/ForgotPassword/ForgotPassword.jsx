import { Link } from "react-router-dom";

import Button from "../../../components/Button/Button";

import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <section className={styles.loginWindow}>
      <div className={styles.marginWindow}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Forgot Password?</h3>
          <span className={styles.text}>
            Enter your email address to get the password reset link.
          </span>
        </div>
        <form action="" method="get">
          <p className={styles.formItem}>
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.ru"
            />
          </p>
        </form>
        <Button style={{ boxShadow: "0 4px 12px #D28E0040", width: "100%" }}>
          Password Reset
        </Button>
        <Link
          style={{ marginTop: "20px" }}
          to={"/auth"}
          className={styles.link}
        >
          Back to login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
