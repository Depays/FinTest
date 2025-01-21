import React, { useCallback, useRef, useState } from "react";

import SettingsNav from "../../../components/SettingsNav/SettingsNav";
import DetailsComp from "../../../components/DetailsComp/DetailsComp";
import IconPlusText from "../../../components/IconPlusText/IconPlusText";
import Button from "../../../components/Button/Button";

import styles from "./InvestAccount.module.css";
import icons from "../../../resources/icons";

const InvestAccount = () => {
  const [startDate, setStartDate] = useState(null); // Начальная дата
  const dateFromRef = useRef();
  const selectRef = useRef();

  const handleClickDateFrom = useCallback(() => {
    console.log("its works");
    dateFromRef.current.focus();
    dateFromRef.current.showPicker();
  }, []);

  const handleClickSelect = useCallback(() => {
    console.log("its works select");
    dateFromRef.current.focus();
    dateFromRef.current.showPicker();
  }, []);

  const User = {
    account_id: "RGL003614",
    date: "31.03.2024",
    replenishedUsd: "0.00",
    inShares: "0.00",
    balance: "0.00",
  };
  return (
    <div className={styles.container}>
      <SettingsNav />
      <section className={styles.section}>
        <div className={styles.infoWindow}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Information</h3>
            <ul className={styles.detailsList}>
              <li className={styles.detailsListItem}>
                <DetailsComp title="Main Account">
                  <div className={styles.detailsMainAccount}>
                    <ul className={styles.detailsMainAccountList}>
                      <li>Minimum amount: 100 $</li>
                      <li>
                        Participation: Pre-IPO, Startup, Fund, Token, Market,
                        Real Estate
                      </li>
                      <li>
                        The investor independently chooses which of the
                        presented instruments he will invest in and for what
                        amount.
                      </li>
                    </ul>
                  </div>
                  <p className={styles.greenInfo}>
                    Conditions and fees for each offer are different. Detailed
                    information is written on the pages of each offers. Be sure
                    to read the documents and terms of the offer before making
                    and investment
                  </p>
                </DetailsComp>
              </li>
              <li className={styles.detailsListItem}>
                <DetailsComp title="Universal Account">
                  <div className={styles.detailsMainAccount}>
                    <ul className={styles.detailsMainAccountList}>
                      <li>Minimum amount: 100 $</li>
                      <li>
                        Participation: Pre-IPO, Startup, Fund, Token, Market,
                        Real Estate
                      </li>
                      <li>
                        The investor independently chooses which of the
                        presented instruments he will invest in and for what
                        amount.
                      </li>
                    </ul>
                  </div>
                  <p className={styles.greenInfo}>
                    Conditions and fees for each offer are different. Detailed
                    information is written on the pages of each offers. Be sure
                    to read the documents and terms of the offer before making
                    and investment
                  </p>
                </DetailsComp>
              </li>
              <li className={styles.detailsListItem}>
                <DetailsComp title={"What is success fee?"}>
                  <div className={styles.detailsMainAccount}>
                    <ul className={styles.detailsMainAccountList}>
                      <li>Minimum amount: 100 $</li>
                      <li>
                        Participation: Pre-IPO, Startup, Fund, Token, Market,
                        Real Estate
                      </li>
                      <li>
                        The investor independently chooses which of the
                        presented instruments he will invest in and for what
                        amount.
                      </li>
                    </ul>
                  </div>
                  <p className={styles.greenInfo}>
                    Conditions and fees for each offer are different. Detailed
                    information is written on the pages of each offers. Be sure
                    to read the documents and terms of the offer before making
                    and investment
                  </p>
                </DetailsComp>
              </li>
              <li className={styles.detailsListItem}>
                <DetailsComp title={"How is success fee paid?"}>
                  <div className={styles.detailsMainAccount}>
                    <ul className={styles.detailsMainAccountList}>
                      <li>Minimum amount: 100 $</li>
                      <li>
                        Participation: Pre-IPO, Startup, Fund, Token, Market,
                        Real Estate
                      </li>
                      <li>
                        The investor independently chooses which of the
                        presented instruments he will invest in and for what
                        amount.
                      </li>
                    </ul>
                  </div>
                  <p className={styles.greenInfo}>
                    Conditions and fees for each offer are different. Detailed
                    information is written on the pages of each offers. Be sure
                    to read the documents and terms of the offer before making
                    and investment
                  </p>
                </DetailsComp>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.accountInfo}>
          <div className={styles.accountInfoWindow}>
            <div className={styles.mainAccountContent}>
              <div className={styles.mainAccountInfo}>
                <div className={styles.mainAccount}>
                  <IconPlusText bgcolor={true} icon={icons.wallet}>
                    <div className={styles.mainAccountTitle}>
                      <span className={styles.mainAccountName}>
                        Main Account
                      </span>
                      <span className={styles.mainAccountId}>
                        {User.account_id}
                      </span>
                    </div>
                  </IconPlusText>
                  <span>Opening date: {User.date}</span>
                </div>
              </div>
              <div className={styles.mainAccountBalanceWindow}>
                <div
                  style={{ gap: "5px" }}
                  className={styles.mainAccountBalanceItem}
                >
                  <span className={styles.replenishedUsd}>
                    {User.replenishedUsd} $
                  </span>
                  <span className={styles.replenishedUsdText}>
                    Replenished USD
                  </span>
                </div>
                <div
                  style={{ gap: "10px" }}
                  className={styles.mainAccountBalanceItem}
                >
                  <span className={styles.balanceText}>
                    In shares:{" "}
                    <span className={styles.balanceNumber}>
                      $ {User.inShares}
                    </span>
                  </span>
                  <span className={styles.balanceText}>
                    Available balance:{" "}
                    <span
                      style={{ color: "#FF4B55" }}
                      className={styles.balanceNumber}
                    >
                      $ {User.balance}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.accountInfoWindow}>
            <div className={styles.accountStatement}>
              <IconPlusText bgcolor={true} icon={icons.wallet}>
                <span>Account statement</span>
              </IconPlusText>
            </div>
            <div className={styles.reportContent}>
              <div>
                <form className={styles.form} action="">
                  <div className={styles.report}>
                    <span className={styles.titles}>Report</span>
                    <div className={styles.selectReportContainer}>
                      <span className={styles.datePickerIcon}>
                        <img src={icons.reportIcon} alt="" />
                      </span>
                      <select className={styles.selectReport} name="report">
                        <option value="Commission Details">
                          Commission Details
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.datesContent}>
                    <span className={styles.titles}>Select interval</span>
                    <div className={styles.dateReport}>
                      <p className={styles.datePickerWithItem}>
                        <label
                          onClick={() => handleClickDateFrom()}
                          className={styles.datePickerIcon}
                          htmlFor="datefrom"
                        >
                          <img src={icons.calendar} alt="" />
                        </label>
                        <input
                          ref={dateFromRef}
                          className={styles.datePicker}
                          name="datefrom"
                          id="datefrom"
                          type="text"
                          onFocus={() => (dateFromRef.current.type = "date")}
                          onBlur={() => (dateFromRef.current.type = "text")}
                          placeholder="Date from"
                        />
                      </p>
                      <p className={styles.datePickerWithItem}>
                        <input
                          style={{ borderRadius: "8px" }}
                          className={styles.datePicker}
                          name="dateto"
                          id="dateto"
                          type="text"
                          onFocus={() => (dateFromRef.current.type = "date")}
                          onBlur={() => (dateFromRef.current.type = "text")}
                          placeholder="Date to"
                        />
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.button}>
                <Button
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    maxHeight: "54px",
                    maxWidth: "none",
                  }}
                >
                  <div className={styles.buttonText}>
                    <img src={icons.generateReport} alt="GenerateReport" />
                    Generate
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestAccount;
