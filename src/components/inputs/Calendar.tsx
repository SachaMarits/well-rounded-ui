import React, { useState } from "react";

interface CalendarData {
  id: number;
  text: string;
  date: Date;
}

interface CalendarProps {
  year?: number;
  month?: number;
  showWeekends: boolean;
  onDayClick: (d: Date) => void;
  onDataClick: (cd: CalendarData) => void;
  data: CalendarData[];
}

export default function Calendar({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  showWeekends,
  onDayClick,
  onDataClick,
  data
}: CalendarProps) {
  const responsiveWeekDays = (d: string) => {
    if (window.innerWidth < 400) return d.substring(0, 1);
    if (window.innerWidth < 700) return d.substring(0, 3) + ".";
    return d;
  };

  const daysInWeek = showWeekends ? 7 : 5;
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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
        if ((row === 0 && dayOfWeek < daysInPreviousMonth) || currentDay > daysInMonth) {
          week.push("");
        } else {
          week.push(currentDay++);
        }
      }
      monthTable.push(week);
    }

    return monthTable;
  };

  const handleMonthChange = (increment: number) => {
    const newDate = new Date(currentYear, currentMonth + increment, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
  };

  const dateObject = (day: number) => new Date(currentYear, currentMonth, day);
  const sameDate = (d1: Date, d2: Date) => d1.toDateString() === d2.toDateString();

  const dayClassNames = (day: number) => {
    let className = "day";
    if (!day) className += " disabled";
    if (sameDate(new Date(), dateObject(day))) className += " active";
    return className;
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <i className="mdi mdi-chevron-left pointer" onClick={() => handleMonthChange(-1)} />
        <h2>
          {getMonthName()} {currentYear}
        </h2>
        <i className="mdi mdi-chevron-right pointer" onClick={() => handleMonthChange(1)} />
      </div>

      <div className="calendar">
        <div className="day-names">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="day-numbers">
          {calendar().map((week, i) => (
            <div className="week" key={i}>
              {week.slice(0, daysInWeek).map((day, i) => (
                <div key={+day + i} className={dayClassNames(+day)} onClick={() => onDayClick(dateObject(+day))}>
                  <p className="day-number">{day}</p>
                  {data
                    .filter((d) => sameDate(d.date, dateObject(+day)))
                    .map((d) => (
                      <div
                        key={+day + d.id + d.text}
                        className="day-data pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDataClick(d);
                        }}
                      >
                        {d.text}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
