import { useRef, useState } from "react";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

import * as styles from "./DateCalendarHeader.module.css";
import "./DateCalendarHeader.module.css";

const DateCalendarHeader = ({
  date,
  changeYear,
  changeMonth,
  monthDate,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,

  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);

  const buttonsRef = useRef([]);

  return (
    <div className={styles.calendarHeader}>
      <div className={styles.upperHeader}>
        <button type="button"></button>
        <span>Select date</span>
      </div>
      <div className={styles.ButtonsPlusDate}>
        <button
          type="button"
          //   style={{ position: "none" }}
          aria-label="Previous Month"
          //   className={
          //     "react-datepicker__navigation react-datepicker__navigation--previous"
          //   }
          onClick={decreaseMonth}
        >
          <span
          // className={
          //   "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
          // }
          >
            {"<"}
          </span>
        </button>
        <span className="react-datepicker__current-month">
          {monthDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          type="button"
          //   style={{ position: "none" }}
          aria-label="Next Month"
          //   className={
          //     "react-datepicker__navigation react-datepicker__navigation--next"
          //   }
          onClick={increaseMonth}
        >
          <span
          // className={
          //   "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
          // }
          >
            {">"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DateCalendarHeader;
