import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import MySwitch from "../../../components/Switch/Switch";
import Button from "../../../components/Button/Button";

import styles from "./RegistrationPage.module.css";
import icons from "../../../resources/icons";

const RegistrationPage = () => {
  const [signedStatus, setSignedStatus] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isShown, setShow] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignedStatus = () => {
    setSignedStatus((previousState) => !previousState);
  };

  const handleAgree = () => {
    setAgree((previousState) => !previousState);
  };

  const handleShowPassword = () => {
    setShow((previousState) => !previousState);
  };

  const handleUserData = (event) => {
    setUserData((previousState) => {
      return {
        ...previousState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <section className={styles.loginWindow}>
      <div className={styles.marginWindow}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Create an account</h3>
          <span className={styles.text}>
            Welcome! Please enter your credentials to access your account.{" "}
          </span>
        </div>
        <form action="" method="get">
          <p className={styles.formItem}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.formInput}
              onChange={handleUserData}
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={userData.name}
            />
          </p>
          <p className={styles.formItem}>
            <label htmlFor="email">E-mail Address</label>
            <input
              className={styles.formInput}
              onChange={handleUserData}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.ru"
              value={userData.email}
            />
          </p>
          <p className={styles.formItem}>
            <span>
              <label style={{ marginRight: "auto" }} htmlFor="password">
                Password
              </label>
            </span>
            <label className={styles.password}>
              <input
                className={styles.formInput}
                onChange={handleUserData}
                type={isShown ? "password" : "text"}
                name="password"
                placeholder="************"
                id="password-reg"
                value={userData.password}
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
            <MySwitch
              onChange={() => handleSignedStatus()}
              checked={signedStatus}
            />
            <span>Keep me signed in</span>
          </div>
          <div className={styles.switchItem}>
            <MySwitch onChange={() => handleAgree()} checked={agree} />
            <span>
              I agree to the 
              <a className={styles.link} href="#">
                Terms of Use
              </a>
              ,<br />
              <a className={styles.link} href="#">
                Privacy Policy
              </a>
                and 
              <a className={styles.link} href="#">
                Risk warning
              </a>
            </span>
          </div>
        </div>
        <Button style={{ boxShadow: "0 4px 12px #D28E0040", width: "100%" }}>
          Log in
        </Button>
        <span style={{ marginTop: "20px" }}>
          Don't have an account? 
          <Link to={"/auth"} className={styles.link}>
            Sign up now
          </Link>
        </span>
      </div>
    </section>
  );
};

export default RegistrationPage;
