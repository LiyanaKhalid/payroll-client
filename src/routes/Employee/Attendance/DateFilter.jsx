/* eslint-disable react/prop-types */

import { useMemo } from "react";
import { getYearOptions, getMonthOptions } from "./utils";

const DateFilter = ({ date, setDate }) => {
  const selectedYear = useMemo(() => Math.trunc(date / 100), [date]);
  const selectedMonth = useMemo(
    () => date - Math.trunc(date / 100) * 100,
    [date]
  );
  const yearOptions = getYearOptions();
  const monthOptions = useMemo(
    () => getMonthOptions(Math.trunc(date.start / 100)),
    [date]
  );

  const onYearChange = (e) => {
    const newYear = Number(e.target.value);
    const newMonth =
      newYear === new Date().getFullYear()
        ? Math.max(selectedMonth, new Date().getMonth() + 1)
        : selectedMonth;
    setDate(newYear * 100 + newMonth);
  };

  const onMonthChange = (e) => {
    const newMonth = Number(e.target.value);
    setDate(selectedYear * 100 + newMonth);
  };

  return (
    <div className="flex gap-2">
      <select value={selectedYear} onChange={onYearChange}>
        {yearOptions.map((opt) => (
          <option key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </select>
      <select value={selectedMonth} onChange={onMonthChange}>
        {monthOptions.map((opt) => (
          <option key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </select>
    </div>
  );
};

export default DateFilter;
