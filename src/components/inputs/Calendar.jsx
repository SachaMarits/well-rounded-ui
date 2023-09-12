import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Calendar({ year, month, showWeekends, onDayClick }) {
  const responsiveWeekDays = (d) => {
    if (window.innerWidth < 400) return d.substring(0, 1);
    if (window.innerWidth < 700) return d.substring(0, 3) + ".";
    return d;
  };

  const daysInWeek = showWeekends ? 7 : 5;
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
    .map(responsiveWeekDays)
    .slice(0, daysInWeek);

  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  const getMonthName = () => {
    const date = new Date();
    date.setMonth(currentMonth);

    return date.toLocaleString("en-US", { month: "long" });
  };

  const calendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();
    const endDayOfWeek = lastDayOfMonth.getDay();

    const daysInPreviousMonth = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
    const daysInNextMonth = endDayOfWeek === 0 ? 0 : 7 - endDayOfWeek;

    const totalDays = daysInPreviousMonth + daysInMonth + daysInNextMonth;
    const monthTable = [];
    let currentDay = 1;

    for (let row = 0; row < Math.ceil(totalDays / 7); row++) {
      const week = [];
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        if (
          (row === 0 && dayOfWeek < daysInPreviousMonth) ||
          currentDay > daysInMonth
        ) {
          week.push("");
        } else {
          week.push(currentDay++);
        }
      }
      monthTable.push(week);
    }

    return monthTable;
  };

  const handleMonthChange = (increment) => {
    const newDate = new Date(currentYear, currentMonth + increment, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
  };

  return (
    <div className="calendar-wrapper">
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css"
      />
      <div className="calendar-header">
        <i
          className="mdi mdi-chevron-left pointer"
          onClick={() => handleMonthChange(-1)}
        />
        <h2>
          {getMonthName()} {currentYear}
        </h2>
        <i
          className="mdi mdi-chevron-right pointer"
          onClick={() => handleMonthChange(1)}
        />
      </div>

      <div className="calendar">
        <div className="day-names">
          {weekDays.map((day, i) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="day-numbers">
          {calendar().map((week, i) => (
            <div className="week" key={i}>
              {week.slice(0, daysInWeek).map((day, i) => (
                <div
                  key={day + i}
                  className={`day${day === "" ? " disabled" : ""}`}
                  onClick={() =>
                    onDayClick(new Date(currentYear, currentMonth, day))
                  }
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Calendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  showWeekends: PropTypes.bool,
  onDayClick: PropTypes.func,
};

Calendar.defaultProps = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  showWeekends: true,
  onDayClick: () => {},
};
