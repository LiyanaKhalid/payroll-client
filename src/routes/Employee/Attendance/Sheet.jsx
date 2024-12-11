/* eslint-disable react/prop-types */

import { useMemo } from "react";
import { getCurrentYearMonthDay, getDates } from "./utils";

const Sheet = ({ date, dataset, onTogglePresence }) => {
  const allDates = useMemo(
    () => getDates(Math.trunc(date / 100), date - Math.trunc(date / 100) * 100),
    [date]
  );

  const getValue = (datasetRow, dateItem) => {
    if (!(dateItem.date in datasetRow.attendances)) return "?";
    if (datasetRow.attendances[dateItem.date].presence) return "+";
    return "-";
  };

  return (
    <table className="bg-white w-full rounded overflow-hidden">
      <thead className="border-b font-semibold bg-gray-100">
        <tr>
          <td className="px-3 py-1.5 w-44">EmpID</td>
          <td className="px-3 py-1.5 min-w-60">Name</td>
          {allDates.map((item) => (
            <td key={item.date} className="px-3 py-1.5 border">
              {String(item.date % 100).padStart(2, "0")}
            </td>
          ))}
        </tr>
      </thead>

      <tbody>
        {dataset.map((row) => (
          <tr key={row.employee.id}>
            <td className="px-3 py-2 border">{row.employee.employee_id}</td>
            <td className="px-3 py-2 border">{row.employee.name}</td>
            {allDates.map((item) => {
              if (item.isWeekend || item.date >= getCurrentYearMonthDay()) {
                return (
                  <td
                    className="px-3 py-2 border bg-gray-300"
                    key={`${row.employee.id}-${item.date}`}
                  ></td>
                );
              }
              if (!(item.date in row.attendances)) {
                return (
                  <td
                    className="px-3 py-2 border"
                    key={`${row.employee.id}-${item.date}`}
                    onClick={() => onTogglePresence(row.employee.id, item.date)}
                  ></td>
                );
              }
              if (row.attendances[item.date].presence > 0) {
                return (
                  <td
                    className="text-center px-3 py-2 border bg-green-300"
                    key={`${row.employee.id}-${item.date}`}
                    onClick={() => onTogglePresence(row.employee.id, item.date)}
                  >
                    {getValue(row, item)}
                  </td>
                );
              }
              return (
                <td
                  className="text-center px-3 py-2 border bg-red-300"
                  key={`${row.employee.id}-${item.date}`}
                  onClick={() => onTogglePresence(row.employee.id, item.date)}
                >
                  {getValue(row, item)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet;
