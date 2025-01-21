import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import MySwitch from "../../../components/Switch/Switch";
import Button from "../../../components/Button/Button";

import styles from "./LoginPage.module.css";
import icons from "../../../resources/icons";

const LoginPage = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [isShown, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignedIn = () => {
    setSignedIn((previousState) => !previousState);
  };

  const handleShowPassword = () => {
    setShow((previousState) => !previousState);
  };

  return (
    <section className={styles.loginWindow}>
      <div className={styles.marginWindow}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Login to account</h3>
          <span className={styles.text}>
            Welcome! Please enter your credentials to access your account.
          </span>
        </div>
        <form action="" method="get">
          <p className={styles.formItem}>
            <label htmlFor="email">E-mail Address</label>
            <input
              className={styles.formInput}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.ru"
            />
          </p>
          <p className={styles.formItem}>
            <span className={styles.forgotPasswordLink}>
              <label style={{ marginRight: "auto" }} htmlFor="password">
                Password
              </label>
              <Link to={"forgot-password"} className={styles.link}>
                Forgot Password?
              </Link>
            </span>

            <label className={styles.password}>
              <input
                className={styles.formInput}
                type={isShown ? "password" : "text"}
                name="password"
                id="password"
                placeholder="************"
              />
              {isShown ? (
                <img
                  className={styles.passwordControl}
                  onClick={() => handleShowPassword()}
                  src={icons.lockedPassword}
                  alt=""
                />
              ) : (
                <img
                  className={styles.passwordControl}
                  onClick={() => handleShowPassword()}
                  src={icons.unlockedPassword}
                  alt=""
                />
              )}
            </label>
          </p>
        </form>
        <div className={styles.switchContent}>
          <div className={styles.switchItem}>
            <MySwitch onChange={() => handleSignedIn()} checked={signedIn} />
            <span>Keep me signed in</span>
          </div>
        </div>
        <Button
          onClick={() => navigate("enter-code")}
          style={{ boxShadow: "0 4px 12px #D28E0040", width: "100%" }}
        >
          Log in
        </Button>
        <span style={{ marginTop: "20px" }}>
          Don't have an account? 
          <Link to={"reg"} className={styles.link}>
            Sign up now
          </Link>
        </span>
      </div>
    </section>
  );
};

export default LoginPage;
