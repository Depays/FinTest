// import { useEffect, useState } from "react";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

// import { getMonth, getYear } from "date-fns";
// import range from "lodash/range";

import styles from "./DateCalendarHeader.module.css";
import icons from "../../resources/icons";

const DateCalendarHeader = ({
  date,
  monthDate,
  decreaseMonth,
  increaseMonth,
  handleClickDateFrom,
  current_ref,
}) => {
  return (
    <div className={styles.calendarHeader}>
      <div className={styles.upperHeader}>
        <div className={styles.closeBtnDiv}>
          <button
            onClick={() => handleClickDateFrom(current_ref, false)}
            className={styles.closeBtn}
            type="button"
          >
            <img src={icons.closeBtnCalendar} alt="CloseButton" />
          </button>
        </div>
        <div className={styles.headerTitleDiv}>
          <span className={styles.headerTitle}>Select date</span>
        </div>
      </div>
      <div className={styles.ButtonsPlusDate}>
        <button
          style={{ paddingRight: "2px" }}
          className={styles.buttons}
          type="button"
          aria-label="Previous Month"
          onClick={decreaseMonth}
        >
          <img src={icons.arrowLeft} alt="" />
        </button>
        <span className="react-datepicker__current-month">
          {monthDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          style={{ paddingLeft: "2px" }}
          className={styles.buttons}
          type="button"
          aria-label="Next Month"
          onClick={increaseMonth}
        >
          <img src={icons.arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DateCalendarHeader;
