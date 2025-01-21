import { getDate } from "date-fns";
import React from "react";
import * as styles from "./DateCalendarDays.module.css";
import "./DateCalendarDays.module.css";

const DateCalendarDays = (day, date) => {
  const tooltipText = `Tooltip for date: ${date}`;
  return (
    <span className={styles.day} title={tooltipText}>
      {getDate(date)}
    </span>
  );
};

export default DateCalendarDays;
