import React, { useCallback, useRef, useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";

import DateCalendarHeader from "../DateCalendarHeader/DateCalendarHeader";

import "./styles.css";
import styles from "./DateCalendar.module.css";
import icons from "../../resources/icons";

const DateCalendar = ({ ...props }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  registerLocale("en-gb", enGB);
  const onChange = (dates) => {
    console.log(dates);
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);
  const handleMonthChange = () => {
    console.log(dateFromRef.current);
  };

  const handleClickDateFrom = useCallback((ref, state) => {
    ref.current.setOpen(state);
  }, []);

  return (
    <div className={styles.dateReport}>
      <div className={styles.datePickerItem}>
        <label
          onClick={() => handleClickDateFrom(dateFromRef, true)}
          className={styles.datePickerIcon}
          htmlFor="datefrom"
        >
          <img src={icons.calendar} alt="Calendar" />
        </label>
        <DatePicker
          onMonthChange={handleMonthChange}
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
            monthDate,
            decreaseMonth,
            increaseMonth,
          }) => {
            return (
              <DateCalendarHeader
                date={date}
                monthDate={monthDate}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                handleClickDateFrom={handleClickDateFrom}
                current_ref={dateFromRef}
              />
            );
          }}
          onChange={onChange}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          showOutsideDays={false}
          useWeekdaysShort={true}
          locale="en-gb"
          placeholderText="Date from"
          dateFormat="dd.MM.yyyy"
          withPortal
          selectsRange
          swapRange
          disabledKeyboardNavigation
        />
      </div>
      <div className={styles.datePickerItem}>
        <DatePicker
          preSelection={null}
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
          renderCustomHeader={({
            date,
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => {
            return (
              <DateCalendarHeader
                date={date}
                monthDate={monthDate}
                customHeaderCount={customHeaderCount}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                handleClickDateFrom={handleClickDateFrom}
                current_ref={dateToRef}
              />
            );
          }}
          ref={dateToRef}
          dateFormat="dd.MM.yyyy"
          placeholderText="Date to"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selected={endDate}
          locale="en-gb"
          withPortal
          selectsRange
          // selectsEnd
          swapRange
          disabledKeyboardNavigation
        />
      </div>
    </div>
  );
};

export default DateCalendar;
