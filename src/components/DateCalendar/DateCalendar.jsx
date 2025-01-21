import { useCallback, useRef, useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import DateCalendarHeader from "../DateCalendarHeader/DateCalendarHeader";
import DateCalendarDays from "../DateCalendarDays/DateCalendarDays";

import "./styles.css";
import * as styles from "./DateCalendar.module.css";
import icons from "../../resources/icons";

const DateCalendar = ({ ...props }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const dateFromRef = useRef(null);
  const handleClickDateFrom = useCallback(() => {
    dateFromRef.current.setOpen(true);
  }, []);

  return (
    <div className={styles.dateReport}>
      <div className={styles.datePickerItem}>
        <label
          onClick={handleClickDateFrom}
          className={styles.datePickerIcon}
          htmlFor="datefrom"
        >
          <img src={icons.calendar} alt="" />
        </label>
        <DatePicker
          value={
            startDate === null
              ? ``
              : `${startDate.toLocaleDateString("en-GB").replaceAll("/", ".")}`
          }
          ref={dateFromRef}
          customInput={
            <input
              className={styles.datePicker}
              name="datefrom"
              id="datefrom"
              type="text"
              placeholder="Date from"
            />
          }
          renderCustomHeader={({
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
            return (
              <DateCalendarHeader
                date={date}
                changeYear={changeYear}
                monthDate={monthDate}
                customHeaderCount={customHeaderCount}
                changeMonth={changeMonth}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
              />
            );
          }}
          calendarClassName="rasta-strips"
          onChange={onChange}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          placeholderText="Date from"
          dateFormat="dd.MM.yyyy"
          className="datePicker"
          selectsStart
          withPortal
          selectsRange
          swapRange
        />
      </div>
      <div className={styles.datePickerItem}>
        <DatePicker
          value={
            endDate === null
              ? ``
              : `${endDate.toLocaleDateString("en-GB").replaceAll("/", ".")}`
          }
          customInput={
            <input
              style={{ borderRadius: "8px" }}
              className={styles.datePicker}
              name="dateto"
              id="dateto"
              type="text"
              placeholder="Date to"
            />
          }
          renderDayContents={DateCalendarDays}
          renderCustomHeader={({
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
            return (
              <DateCalendarHeader
                date={date}
                changeYear={changeYear}
                monthDate={monthDate}
                customHeaderCount={customHeaderCount}
                changeMonth={changeMonth}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
              />
            );
          }}
          dateFormat="dd.MM.yyyy"
          placeholderText="Date to"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selected={endDate}
          withPortal
          selectsEnd
          selectsRange
          swapRange
        />
      </div>
    </div>
  );
};

export default DateCalendar;
