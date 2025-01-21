import { useState } from "react";
import React from "react";
import SettingsNav from "../../../components/SettingsNav/SettingsNav";
import IconPlusText from "../../../components/IconPlusText/IconPlusText";
import Button from "../../../components/Button/Button";

import * as styles from "./Security.module.css";
import icons from "../../../resources/icons";

const Security = () => {
  const [checkPasswordState, setPasswordState] = useState({
    length: false,
    lettersCount: false,
    numbersCount: false,
    specialChar: false,
  });
  const [notShown, setShow] = useState({
    cur_password: false,
    new_password: false,
    rep_new_password: false,
  });
  const [userData, setUserData] = useState({
    cur_password: "",
    new_password: "",
    rep_new_password: "",
  });
  const passwords = [
    {
      name: "Current password",
      id_name: "cur_password",
      value: "",
    },
    {
      name: "New password",
      id_name: "new_password",
    },
    {
      name: "Repeat new password",
      id_name: "rep_new_password",
    },
  ];

  const handleShowPassword = (name, value) => {
    setShow((previousState) => {
      return {
        ...previousState,
        [name]: !value,
      };
    });
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
    <div className={styles.container}>
      <SettingsNav />
      <section className={styles.section}>
        <div className={styles.securityItem}>
          <div style={{ borderBottom: "1px solid #e2e1dd" }}>
            <div style={{ padding: "25px" }}>
              <IconPlusText
                style={{
                  color: "#021E2F",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
                bgcolor={true}
                icon={icons.changePassword}
              >
                <span>Change password</span>
              </IconPlusText>
            </div>
          </div>
          <form className={styles.inputs} action="" method="get">
            {passwords.map((item, index) => (
              <p key={index} className={styles.formItem}>
                <label className={styles.password}>
                  <input
                    className={styles.formInput}
                    onChange={handleUserData}
                    type={notShown[item.id_name] ? "password" : "text"}
                    name={item.id_name}
                    placeholder={item.name}
                    id={item.id_name}
                    value={userData[index]}
                  />
                  {notShown[item.id_name] ? (
                    <img
                      className={styles.passwordControl}
                      onClick={() =>
                        handleShowPassword(
                          passwords[index].id_name,
                          notShown[item.id_name]
                        )
                      }
                      src={icons.lockedPassword}
                      alt=""
                    />
                  ) : (
                    <img
                      className={styles.passwordControl}
                      onClick={() =>
                        handleShowPassword(
                          passwords[index].id_name,
                          notShown[item.id_name]
                        )
                      }
                      src={icons.unlockedPassword}
                      alt=""
                    />
                  )}
                </label>
              </p>
            ))}
          </form>
          <div className={styles.correctPasswordContent}>
            <div className={styles.correctPasswordText}>
              <span>Please make sure that your password:</span>
            </div>
            <div className={styles.notComplited}>
              {checkPasswordState.length ? null : (
                <span className={styles.notComplitedItem}>
                  <img src={icons.notComplited} alt="" />
                  is at least 8 characters long
                </span>
              )}
              {checkPasswordState.lettersCount ? null : (
                <span className={styles.notComplitedItem}>
                  <img src={icons.notComplited} alt="" />
                  has at least one letter
                </span>
              )}
              {checkPasswordState.numbersCount ? null : (
                <span className={styles.notComplitedItem}>
                  <img src={icons.notComplited} alt="" />
                  has at least one number
                </span>
              )}
              {checkPasswordState.specialChar ? null : (
                <span className={styles.notComplitedItem}>
                  <img src={icons.notComplited} alt="" />
                  has at least one special character
                </span>
              )}
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              style={{ backgroundColor: "#f6ac12" }}
              className={styles.funcButton}
            >
              Change password
            </button>
            <button
              style={{ backgroundColor: "#fff", border: "1px solid #e2e1dd" }}
              className={styles.funcButton}
            >
              Forgot password
            </button>
          </div>
        </div>
        <div className={styles.securityItem}>
          <div style={{ borderBottom: "1px solid #e2e1dd" }}>
            <div style={{ padding: "25px 25px 20px 25px" }}>
              <IconPlusText
                style={{
                  color: "#021E2F",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
                bgcolor={true}
                icon={icons.twoFactorAuth}
              >
                <span>Two-factor authentication</span>
              </IconPlusText>
            </div>
          </div>
          <div style={{ padding: "20px 25px 25px 25px" }}>
            <p className={styles.twoFactorText}>
              Two-factor authentication additionally your account. Each time you
              log in, you will need to enter a 6-digit code from the
              application. This will allow us to make sure that you are logging
              in personally.
            </p>
            <button
              style={{ backgroundColor: "#f6ac12" }}
              className={styles.funcButton}
            >
              Enable 2FA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
